import { Component, Input, ChangeDetectionStrategy, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionStatus } from '@app/core/models/transaction.model';

interface StatusConfig {
  label: string;
  icon: string;
  description: string;
  isFinal: boolean;
  canRetry: boolean;
}

@Component({
  selector: 'app-transaction-status',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './transaction-status.component.html',
  styleUrls: ['./transaction-status.component.scss']
})
export class TransactionStatusComponent {
  @Input({ required: true }) status!: TransactionStatus;
  @Input() transactionId?: string;
  @Input() showDetails = true;
  @Input() compact = false;

  private readonly statusConfigs: Record<TransactionStatus, StatusConfig> = {
    pending: {
      label: 'Pendiente',
      icon: 'schedule',
      description: 'La transacción está siendo procesada',
      isFinal: false,
      canRetry: false
    },
    completed: {
      label: 'Completada',
      icon: 'check_circle',
      description: 'La transacción se completó exitosamente',
      isFinal: true,
      canRetry: false
    },
    failed: {
      label: 'Fallida',
      icon: 'error',
      description: 'La transacción no pudo completarse',
      isFinal: true,
      canRetry: true
    },
    reversed: {
      label: 'Revertida',
      icon: 'undo',
      description: 'La transacción fue revertida',
      isFinal: true,
      canRetry: false
    }
  };

  readonly statusConfig = computed<StatusConfig>(() => {
    return this.statusConfigs[this.status] || this.statusConfigs.pending;
  });

  readonly statusClass = computed(() => {
    return `status-${this.status}`;
  });

  readonly displayLabel = computed(() => {
    return this.statusConfig().label;
  });

  readonly displayIcon = computed(() => {
    return this.statusConfig().icon;
  });

  readonly displayDescription = computed(() => {
    const config = this.statusConfig();
    let text = config.description;
    if (this.transactionId) {
      text += ` ID: ${this.transactionId}`;
    }
    return text;
  });

  readonly isFinalState = computed(() => {
    return this.statusConfig().isFinal;
  });

  readonly canRetryAction = computed(() => {
    return this.statusConfig().canRetry;
  });

  readonly shouldShowDetails = computed(() => {
    return this.showDetails && !this.compact;
  });

  readonly formattedId = computed(() => {
    if (!this.transactionId) return '';
    if (this.transactionId.length <= 12) return this.transactionId;
    return `${this.transactionId.substring(0, 8)}...${this.transactionId.substring(this.transactionId.length - 4)}`;
  });

  onRetry(): void {
    console.log(`Retry requested for transaction: ${this.transactionId}`);
  }

  onContactSupport(): void {
    console.log(`Support requested for transaction: ${this.transactionId}`);
  }
}