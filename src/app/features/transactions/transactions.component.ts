import { Component, signal, computed, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { TransactionService } from '../../core/services/transaction.service';
import { NotificationService } from '../../core/services/notification.service';
import { Transaction, TransactionType, TransactionStatus } from '../../core/models/transaction.model';
import { TransactionStatusComponent } from '../../shared/components/transaction-status/transaction-status.component';

interface TransactionForm {
  amount: number;
  type: TransactionType;
  destinationAccount?: string;
  description: string;
}

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatListModule,
    MatIconModule,
    TransactionStatusComponent,
  ],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.scss',
})
export class TransactionsComponent implements OnInit {
  private readonly transactionService = inject(TransactionService);
  private readonly notificationService = inject(NotificationService);

  readonly formData = signal<TransactionForm>({
    amount: 0,
    type: 'deposit',
    destinationAccount: '',
    description: '',
  });

  readonly isLoading = signal(false);
  readonly errorMessage = signal<string | null>(null);
  readonly transactions = signal<Transaction[]>([]);
  readonly currentTransactionId = signal<string | null>(null);
  readonly patternUsed = signal<string | null>(null);

  readonly transactionTypes: TransactionType[] = ['deposit', 'withdrawal', 'transfer', 'payment'];
  readonly typeLabels: Record<TransactionType, string> = {
    deposit: 'Depósito',
    withdrawal: 'Retiro',
    transfer: 'Transferencia',
    payment: 'Pago',
  };

  readonly canProcess = computed(() => {
    const data = this.formData();
    return data.amount > 0 && (data.type !== 'transfer' || (data.destinationAccount && data.destinationAccount.length > 0));
  });

  ngOnInit(): void {
    this.loadRecentTransactions();
  }

  updateForm(field: keyof TransactionForm, value: string | number): void {
    this.formData.update((current) => ({ ...current, [field]: value }));
  }

  loadRecentTransactions(): void {
    this.transactionService.getRecentTransactions('ACC-001').subscribe({
      next: (txns) => this.transactions.set(txns),
      error: (err) => {
        this.errorMessage.set('Error al cargar transacciones recientes');
        this.notificationService.notifyWithDelay('Error al cargar transacciones', 3000);
      },
    });
  }

  processWithCallback(): void {
    if (!this.canProcess()) {
      this.errorMessage.set('Por favor complete todos los campos requeridos');
      return;
    }

    this.isLoading.set(true);
    this.errorMessage.set(null);
    this.patternUsed.set('callback');

    const data = this.formData();
    const accountId = 'ACC-001';

    this.transactionService.processTransactionWithCallback(
      accountId,
      data.amount,
      data.type,
      data.destinationAccount || undefined,
      data.description,
      (result) => {
        this.isLoading.set(false);
        if (result.success) {
          this.currentTransactionId.set(result.transactionId);
          this.notificationService.notify(`Transacción procesada con callback: ${result.transactionId}`);
          this.loadRecentTransactions();
        } else {
          this.errorMessage.set(result.error || 'Error desconocido');
        }
      }
    );
  }

  processWithPromise(): void {
    if (!this.canProcess()) {
      this.errorMessage.set('Por favor complete todos los campos requeridos');
      return;
    }

    this.isLoading.set(true);
    this.errorMessage.set(null);
    this.patternUsed.set('promise');

    const data = this.formData();
    const accountId = 'ACC-001';

    this.transactionService
      .processTransactionWithPromise(accountId, data.amount, data.type, data.destinationAccount || undefined, data.description)
      .then((result) => {
        this.isLoading.set(false);
        if (result.success) {
          this.currentTransactionId.set(result.transactionId);
          this.notificationService.notify(`Transacción procesada con Promise: ${result.transactionId}`);
          this.loadRecentTransactions();
        } else {
          this.errorMessage.set(result.error || 'Error desconocido');
        }
      })
      .catch((err) => {
        this.isLoading.set(false);
        this.errorMessage.set(err.message || 'Error al procesar la transacción');
      });
  }

  async processWithAsyncAwait(): Promise<void> {
    if (!this.canProcess()) {
      this.errorMessage.set('Por favor complete todos los campos requeridos');
      return;
    }

    this.isLoading.set(true);
    this.errorMessage.set(null);
    this.patternUsed.set('async/await');

    const data = this.formData();
    const accountId = 'ACC-001';

    try {
      const result = await this.transactionService.processTransactionWithAsyncAwait(
        accountId,
        data.amount,
        data.type,
        data.destinationAccount || undefined,
        data.description
      );

      this.isLoading.set(false);

      if (result.success) {
        this.currentTransactionId.set(result.transactionId);
        this.notificationService.notify(`Transacción procesada con async/await: ${result.transactionId}`);
        this.loadRecentTransactions();
      } else {
        this.errorMessage.set(result.error || 'Error desconocido');
      }
    } catch (err) {
      this.isLoading.set(false);
      this.errorMessage.set(err instanceof Error ? err.message : 'Error al procesar la transacción');
    }
  }

  async checkTransactionStatus(transactionId: string): Promise<void> {
    try {
      const status = await this.transactionService.getTransactionStatus(transactionId);
      this.notificationService.notifyWithDelay(`Estado de transacción ${transactionId}: ${status}`, 2000);
    } catch (err) {
      this.errorMessage.set('Error al consultar el estado de la transacción');
    }
  }

  clearForm(): void {
    this.formData.set({
      amount: 0,
      type: 'deposit',
      destinationAccount: '',
      description: '',
    });
    this.errorMessage.set(null);
    this.currentTransactionId.set(null);
    this.patternUsed.set(null);
  }

  getTransactionIcon(type: TransactionType): string {
    const icons: Record<TransactionType, string> = {
      deposit: 'arrow_downward',
      withdrawal: 'arrow_upward',
      transfer: 'swap_horiz',
      payment: 'payment',
    };
    return icons[type];
  }

  formatAmount(amount: number, type: TransactionType): string {
    const prefix = type === 'deposit' ? '+' : '-';
    return `${prefix}$${amount.toFixed(2)}`;
  }

  isPositiveTransaction(type: TransactionType): boolean {
    return type === 'deposit';
  }
}