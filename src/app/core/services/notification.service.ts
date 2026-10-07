import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

/**
 * Servicio que maneja la notificación de eventos asíncronos en la aplicación.
 * Proporciona un mecanismo para suscribirse y recibir notificaciones de eventos.
 */
@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private notificationSubject = new Subject<string>();

  /**
   * Observable de notificaciones que los componentes pueden suscribirse para recibir mensajes.
   */
  notifications$ = this.notificationSubject.asObservable();

  /**
   * Envía una notificación a todos los suscriptores.
   * @param message Mensaje de la notificación.
   */
  notify(message: string): void {
    this.notificationSubject.next(message);
    console.log(`[Notification] ${message}`);
  }

  /**
   * Simula el envío de una notificación con retraso.
   * @param message Mensaje de la notificación.
   * @param delayMs Retraso en milisegundos.
   */
  notifyWithDelay(message: string, delayMs: number): void {
    setTimeout(() => {
      this.notify(message);
    }, delayMs);
  }
}