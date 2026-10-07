import { InjectionToken } from '@angular/core';

/**
 * Representa el estado de una transacción bancaria.
 */
export type TransactionStatus = 'pending' | 'completed' | 'failed' | 'reversed';

/**
 * Representa el tipo de transacción bancaria.
 */
export type TransactionType = 'deposit' | 'withdrawal' | 'transfer' | 'payment';

/**
 * Interfaz que define la estructura de una transacción bancaria.
 */
export interface Transaction {
  id: string;
  accountId: string;
  amount: number;
  currency: string;
  type: TransactionType;
  status: TransactionStatus;
  date: Date;
  description?: string;
  reference?: string;
}

/**
 * Interfaz para las respuestas del servicio de transacciones.
 */
export interface TransactionResponse {
  success: boolean;
  message: string;
  transaction?: Transaction;
  error?: string;
}

/**
 * Token de inyección para la URL base del servicio de transacciones.
 * Permite configurar la URL del backend en tiempo de arranque.
 */
export const TRANSACTION_API_URL = new InjectionToken<string>('Transaction API Base URL', {
  providedIn: 'root',
  factory: () => 'https://api.bank.example.com/transactions'
});

/**
 * Interfaz para los servicios que manejan operaciones de transacciones.
 * Define los contratos que deben cumplir los servicios de transacciones.
 */
export interface TransactionServiceInterface {
  processTransactionWithCallback(
    transaction: Omit<Transaction, 'id' | 'status' | 'date'>,
    callback: (response: TransactionResponse) => void
  ): void;

  processTransactionWithPromise(
    transaction: Omit<Transaction, 'id' | 'status' | 'date'>
  ): Promise<TransactionResponse>;

  processTransactionWithAsyncAwait(
    transaction: Omit<Transaction, 'id' | 'status' | 'date'>
  ): Promise<TransactionResponse>;

  getTransactionStatus(transactionId: string): Promise<TransactionStatus>;
}