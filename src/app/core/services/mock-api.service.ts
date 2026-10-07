import { Injectable } from '@angular/core';
import { Observable, of, delay, throwError } from 'rxjs';
import { Transaction, TransactionStatus, TransactionType, TransactionResponse } from '../models/transaction.model';

@Injectable({
  providedIn: 'root'
})
export class MockApiService {
  private readonly SIMULATED_DELAY_MS = 800;
  private transactions: Map<string, Transaction> = new Map();
  private readonly accounts: Map<string, string[]> = new Map();

  constructor() {
    this.initializeMockData();
  }

  private initializeMockData(): void {
    const mockTransactions: Transaction[] = [
      {
        id: 'TXN-001',
        accountId: 'ACC-1234',
        type: 'deposit',
        amount: 5000,
        currency: 'USD',
        status: 'completed',
        description: 'Depósito de nómina',
        createdAt: new Date('2024-01-15T09:30:00'),
        updatedAt: new Date('2024-01-15T09:30:05')
      },
      {
        id: 'TXN-002',
        accountId: 'ACC-1234',
        type: 'withdrawal',
        amount: 1200,
        currency: 'USD',
        status: 'completed',
        description: 'Retiro en cajero automático',
        createdAt: new Date('2024-01-14T14:22:00'),
        updatedAt: new Date('2024-01-14T14:22:03')
      },
      {
        id: 'TXN-003',
        accountId: 'ACC-5678',
        type: 'transfer',
        amount: 2500,
        currency: 'USD',
        status: 'pending',
        description: 'Transferencia a cuenta terceros',
        createdAt: new Date('2024-01-16T11:00:00'),
        updatedAt: new Date('2024-01-16T11:00:00')
      },
      {
        id: 'TXN-004',
        accountId: 'ACC-1234',
        type: 'payment',
        amount: 350,
        currency: 'USD',
        status: 'completed',
        description: 'Pago de servicios',
        createdAt: new Date('2024-01-13T16:45:00'),
        updatedAt: new Date('2024-01-13T16:45:02')
      }
    ];

    mockTransactions.forEach(txn => this.transactions.set(txn.id, txn));
    this.accounts.set('ACC-1234', ['TXN-001', 'TXN-002', 'TXN-004']);
    this.accounts.set('ACC-5678', ['TXN-003']);
  }

  processTransactionCallback(
    accountId: string,
    type: TransactionType,
    amount: number,
    description: string,
    callback: (error: Error | null, response: TransactionResponse | null) => void
  ): void {
    setTimeout(() => {
      try {
        const transaction = this.createTransaction(accountId, type, amount, description);
        const response: TransactionResponse = {
          success: true,
          transactionId: transaction.id,
          status: transaction.status,
          message: 'Transacción procesada exitosamente'
        };
        callback(null, response);
      } catch (error) {
        callback(error as Error, null);
      }
    }, this.SIMULATED_DELAY_MS);
  }

  processTransactionPromise(
    accountId: string,
    type: TransactionType,
    amount: number,
    description: string
  ): Promise<TransactionResponse> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          const transaction = this.createTransaction(accountId, type, amount, description);
          const response: TransactionResponse = {
            success: true,
            transactionId: transaction.id,
            status: transaction.status,
            message: 'Transacción procesada exitosamente'
          };
          resolve(response);
        } catch (error) {
          reject(error);
        }
      }, this.SIMULATED_DELAY_MS);
    });
  }

  async processTransactionAsyncAwait(
    accountId: string,
    type: TransactionType,
    amount: number,
    description: string
  ): Promise<TransactionResponse> {
    await this.delay(this.SIMULATED_DELAY_MS);
    
    const transaction = this.createTransaction(accountId, type, amount, description);
    const response: TransactionResponse = {
      success: true,
      transactionId: transaction.id,
      status: transaction.status,
      message: 'Transacción procesada exitosamente'
    };
    return response;
  }

  getTransactionStatus(transactionId: string): Observable<TransactionStatus> {
    const transaction = this.transactions.get(transactionId);
    if (transaction) {
      return of(transaction.status).pipe(delay(300));
    }
    return throwError(() => new Error(`Transaction ${transactionId} not found`));
  }

  getTransactionsByAccount(accountId: string): Observable<Transaction[]> {
    const transactionIds = this.accounts.get(accountId) || [];
    const transactions = transactionIds
      .map(id => this.transactions.get(id))
      .filter((t): t is Transaction => t !== undefined);
    return of(transactions).pipe(delay(500));
  }

  private createTransaction(
    accountId: string,
    type: TransactionType,
    amount: number,
    description: string
  ): Transaction {
    const id = this.generateTransactionId();
    const now = new Date();
    const transaction: Transaction = {
      id,
      accountId,
      type,
      amount,
      currency: 'USD',
      status: amount > 10000 ? 'pending' : 'completed',
      description,
      createdAt: now,
      updatedAt: now
    };
    this.transactions.set(id, transaction);
    
    const existingIds = this.accounts.get(accountId) || [];
    this.accounts.set(accountId, [...existingIds, id]);
    
    return transaction;
  }

  private generateTransactionId(): string {
    return `TXN-${Date.now()}-${Math.random().toString(36).substring(2, 9).toUpperCase()}`;
  }

  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}