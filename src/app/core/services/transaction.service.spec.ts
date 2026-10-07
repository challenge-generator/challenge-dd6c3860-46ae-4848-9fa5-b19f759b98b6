import { TestBed } from '@angular/core/testing';
import { TransactionService } from './transaction.service';
import { MockApiService } from './mock-api.service';
import { TransactionStatus, TransactionType } from '../models/transaction.model';

describe('TransactionService', () => {
  let service: TransactionService;
  let mockApiService: MockApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TransactionService, MockApiService]
    });
    service = TestBed.inject(TransactionService);
    mockApiService = TestBed.inject(MockApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('processTransactionWithCallback', () => {
    it('should process transaction successfully via callback', (done) => {
      const accountId = 'ACC-TEST';
      const type: TransactionType = 'deposit';
      const amount = 1000;
      const description = 'Test deposit';

      service.processTransactionWithCallback(
        accountId,
        type,
        amount,
        description,
        (error, response) => {
          expect(error).toBeNull();
          expect(response).toBeTruthy();
          expect(response?.success).toBe(true);
          expect(response?.transactionId).toBeDefined();
          expect(response?.status).toBeDefined();
          done();
        }
      );
    });

    it('should handle callback error when API fails', (done) => {
      service.processTransactionWithCallback(
        '',
        'deposit',
        100,
        '',
        (error, response) => {
          if (error) {
            expect(error).toBeInstanceOf(Error);
            expect(response).toBeNull();
          } else {
            expect(response?.success).toBe(false);
          }
          done();
        }
      );
    });
  });

  describe('processTransactionWithPromise', () => {
    it('should process transaction successfully via promise', (done) => {
      service.processTransactionWithPromise('ACC-TEST', 'withdrawal', 500, 'Test withdrawal')
        .then(response => {
          expect(response).toBeTruthy();
          expect(response.success).toBe(true);
          expect(response.transactionId).toBeDefined();
          done();
        })
        .catch(done.fail);
    });

    it('should reject promise when account is invalid', (done) => {
      service.processTransactionWithPromise('', 'payment', 100, '')
        .then(() => done.fail('Should have rejected'))
        .catch(error => {
          expect(error).toBeDefined();
          done();
        });
    });
  });

  describe('processTransactionWithAsyncAwait', () => {
    it('should process transaction successfully via async/await', async () => {
      const response = await service.processTransactionWithAsyncAwait(
        'ACC-TEST',
        'transfer',
        2500,
        'Test transfer'
      );
      expect(response).toBeTruthy();
      expect(response.success).toBe(true);
      expect(response.transactionId).toMatch(/^TXN-/);
    });

    it('should throw error for invalid transaction amount', async () => {
      try {
        await service.processTransactionWithAsyncAwait('ACC-TEST', 'deposit', -100, 'Invalid');
        fail('Should have thrown error');
      } catch (error) {
        expect(error).toBeDefined();
      }
    });
  });

  describe('getTransactionStatus', () => {
    it('should return transaction status as observable', (done) => {
      service.getTransactionStatus('TXN-001').subscribe({
        next: (status: TransactionStatus) => {
          expect(status).toBeDefined();
          expect(['pending', 'completed', 'failed', 'reversed']).toContain(status);
          done();
        },
        error: done
      });
    });

    it('should handle non-existent transaction', (done) => {
      service.getTransactionStatus('TXN-INVALID').subscribe({
        next: () => done.fail('Should have errored'),
        error: (error) => {
          expect(error).toBeInstanceOf(Error);
          done();
        }
      });
    });
  });

  describe('getRecentTransactions', () => {
    it('should return recent transactions for account', (done) => {
      service.getRecentTransactions('ACC-1234').subscribe({
        next: (transactions) => {
          expect(transactions).toBeDefined();
          expect(Array.isArray(transactions)).toBe(true);
          done();
        },
        error: done
      });
    });

    it('should return empty array for account with no transactions', (done) => {
      service.getRecentTransactions('ACC-EMPTY').subscribe({
        next: (transactions) => {
          expect(transactions).toEqual([]);
          done();
        },
        error: done
      });
    });
  });
});