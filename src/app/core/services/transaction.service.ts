import { Injectable, Inject } from '@angular/core';
import { TRANSACTION_API_URL, Transaction, TransactionResponse, TransactionServiceInterface } from '../models/transaction.model';
import { NotificationService } from './notification.service';
import { Observable, of, throwError } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

/**
 * Servicio que implementa operaciones asíncronas para transacciones bancarias.
 * Proporciona métodos para procesar transacciones utilizando callbacks, promesas y async/await.
 */
@Injectable({
  providedIn: 'root'
})
export class TransactionService implements TransactionServiceInterface {
  private readonly SIMULATED_DELAY_MS = 1000;

  constructor(
    @Inject(TRANSACTION_API_URL) private apiUrl: string,
    private notificationService: NotificationService
  ) {}

  /**
   * Procesa una transacción utilizando callbacks.
   * @param transaction Datos de la transacción sin ID, estado ni fecha.
   * @param callback Función que se invoca con la respuesta del procesamiento.
   */
  processTransactionWithCallback(
    transaction: Omit<Transaction, 'id' | 'status' | 'date'>,
    callback: (response: TransactionResponse) => void
  ): void {
    // Simulamos un retraso de red
    setTimeout(() => {
      try {
        // Validación básica de los datos de la transacción
        if (transaction.amount <= 0) {
          const errorResponse: TransactionResponse = {
            success: false,
            message: 'El monto debe ser mayor que cero',
            error: 'INVALID_AMOUNT'
          };
          this.notificationService.notify(`Error: ${errorResponse.message}`);
          callback(errorResponse);
          return;
        }

        if (!['deposit', 'withdrawal', 'transfer', 'payment'].includes(transaction.type)) {
          const errorResponse: TransactionResponse = {
            success: false,
            message: 'Tipo de transacción no válido',
            error: 'INVALID_TRANSACTION_TYPE'
          };
          this.notificationService.notify(`Error: ${errorResponse.message}`);
          callback(errorResponse);
          return;
        }

        // Simulación de procesamiento exitoso
        const successResponse: TransactionResponse = {
          success: true,
          message: 'Transacción procesada con éxito',
          transaction: {
            id: this.generateTransactionId(),
            ...transaction,
            status: 'completed',
            date: new Date()
          }
        };

        this.notificationService.notify(`Transacción ${successResponse.transaction.id} completada`);
        callback(successResponse);
      } catch (error) {
        const errorResponse: TransactionResponse = {
          success: false,
          message: 'Error inesperado al procesar la transacción',
          error: 'INTERNAL_ERROR'
        };
        this.notificationService.notify(`Error inesperado: ${errorResponse.message}`);
        callback(errorResponse);
      }
    }, this.SIMULATED_DELAY_MS);
  }

  /**
   * Procesa una transacción utilizando promesas.
   * @param transaction Datos de la transacción sin ID, estado ni fecha.
   * @returns Promise que resuelve con la respuesta del procesamiento.
   */
  processTransactionWithPromise(
    transaction: Omit<Transaction, 'id' | 'status' | 'date'>
  ): Promise<TransactionResponse> {
    return new Promise((resolve, reject) => {
      this.processTransactionWithCallback(transaction, (response) => {
        if (response.success) {
          resolve(response);
        } else {
          reject(new Error(response.error || 'Error desconocido en la transacción'));
        }
      });
    });
  }

  /**
   * Procesa una transacción utilizando async/await.
   * @param transaction Datos de la transacción sin ID, estado ni fecha.
   * @returns Promise que resuelve con la respuesta del procesamiento.
   */
  async processTransactionWithAsyncAwait(
    transaction: Omit<Transaction, 'id' | 'status' | 'date'>
  ): Promise<TransactionResponse> {
    try {
      const response = await this.processTransactionWithPromise(transaction);
      return response;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
      this.notificationService.notify(`Error en transacción: ${errorMessage}`);

      return {
        success: false,
        message: errorMessage,
        error: error instanceof Error ? error.message : 'UNKNOWN_ERROR'
      };
    }
  }

  /**
   * Obtiene el estado de una transacción por su ID.
   * @param transactionId ID de la transacción.
   * @returns Promise que resuelve con el estado de la transacción.
   */
  async getTransactionStatus(transactionId: string): Promise<TransactionStatus> {
    // Simulamos una llamada a la API para obtener el estado
    return new Promise((resolve) => {
      setTimeout(() => {
        // Simulación de estados posibles
        const possibleStatuses: TransactionStatus[] = ['pending', 'completed', 'failed', 'reversed'];
        const randomStatus = possibleStatuses[Math.floor(Math.random() * possibleStatuses.length)];
        resolve(randomStatus);
      }, this.SIMULATED_DELAY_MS / 2);
    });
  }

  /**
   * Simula la obtención de transacciones recientes para un accountId.
   * @param accountId ID de la cuenta.
   * @returns Observable con la lista de transacciones recientes.
   */
  getRecentTransactions(accountId: string): Observable<Transaction[]> {
    // Simulación de datos de transacciones
    const mockTransactions: Transaction[] = [
      {
        id: 'txn-001',
        accountId,
        amount: 150.00,
        currency: 'USD',
        type: 'deposit',
        status: 'completed',
        date: new Date(Date.now() - 86400000),
        description: 'Depósito en efectivo'
      },
      {
        id: 'txn-002',
        accountId,
        amount: 75.50,
        currency: 'USD',
        type: 'withdrawal',
        status: 'completed',
        date: new Date(Date.now() - 172800000),
        description: 'Retiro en cajero'
      },
      {
        id: 'txn-003',
        accountId,
        amount: 200.00,
        currency: 'USD',
        type: 'transfer',
        status: 'pending',
        date: new Date(Date.now() - 3600000),
        description: 'Transferencia a cuenta externa'
      }
    ];

    return of(mockTransactions).pipe(
      delay(this.SIMULATED_DELAY_MS / 2),
      tap(() => this.notificationService.notify('Transacciones recientes cargadas'))
    );
  }

  /**
   * Genera un ID único para una transacción.
   * @returns ID de transacción en formato 'txn-XXXX'.
   */
  private generateTransactionId(): string {
    return `txn-${Math.random().toString(36).substr(2, 8).toUpperCase()}`;
  }
}