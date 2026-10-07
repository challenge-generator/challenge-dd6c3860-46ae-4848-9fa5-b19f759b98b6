import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { Injector, importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/**
 * Punto de entrada principal de la aplicación Angular.
 * Realiza el bootstrap de la aplicación con la configuración
 * de providers y el componente raíz.
 * 
 * El proceso de bootstrap incluye:
 * 1. Validación de la configuración de la aplicación
 * 2. Inicialización de los providers globales
 * 3. Montaje del componente raíz en el DOM
 * 4. Manejo de errores de inicialización
 */

const initializeApplication = async (): Promise<void> => {
  try {
    console.log('[Bootstrap] Iniciando aplicación Angular - Módulo de Transacciones Bancarias');
    console.log('[Bootstrap] Fecha de inicio:', new Date().toISOString());
    console.log('[Bootstrap] Entorno:', process.env['NODE_ENV'] || 'development');

    // Validar que la configuración de la aplicación esté definida
    if (!appConfig) {
      throw new Error('[Bootstrap] Error: La configuración de la aplicación no está definida');
    }

    // Validar que los providers sean un array válido
    if (!Array.isArray(appConfig.providers)) {
      throw new Error('[Bootstrap] Error: Los providers de la aplicación deben ser un array');
    }

    // Agregar providers de animaciones si no están presentes
    const hasAnimationsProvider = appConfig.providers.some(
      (provider: any) => provider && typeof provider === 'object' && provider.provide === BrowserAnimationsModule
    );

    const providers = hasAnimationsProvider 
      ? appConfig.providers 
      : [...appConfig.providers, importProvidersFrom(BrowserAnimationsModule)];

    // Realizar el bootstrap de la aplicación
    const appRef = await bootstrapApplication(AppComponent, {
      providers: providers
    });

    console.log('[Bootstrap] Aplicación iniciada correctamente');
    console.log('[Bootstrap] Componente raíz:', AppComponent.name || 'AppComponent');
    
    // Registrar el injector para acceso global si es necesario
    const injector: Injector = appRef.injector;
    console.log('[Bootstrap] Injector disponible:', injector ? 'Sí' : 'No');

    // Manejo de errores no捕获ados después del bootstrap
    window.addEventListener('unhandledrejection', (event) => {
      console.error('[Bootstrap] Promesa rechazada no manejada:', event.reason);
    });

    window.addEventListener('error', (event) => {
      console.error('[Bootstrap] Error global capturado:', event.error);
    });

  } catch (error) {
    // Manejo de errores durante el proceso de bootstrap
    const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
    const errorStack = error instanceof Error ? error.stack : '';
    
    console.error('[Bootstrap] Error fatal durante el inicio de la aplicación:');
    console.error('[Bootstrap] Mensaje:', errorMessage);
    console.error('[Bootstrap] Stack:', errorStack);
    
    // Mostrar mensaje de error en el DOM si el bootstrap falla
    const rootElement = document.querySelector('app-root');
    if (rootElement) {
      rootElement.innerHTML = `
        <div style="padding: 40px; text-align: center; font-family: Arial, sans-serif;">
          <h1 style="color: #d32f2f;">Error de Inicialización</h1>
          <p style="color: #666;">La aplicación no pudo iniciar correctamente.</p>
          <pre style="background: #f5f5f5; padding: 20px; border-radius: 4px; text-align: left; overflow: auto;">${errorMessage}</pre>
        </div>
      `;
    }
    
    throw error;
  }
};

// Ejecutar la inicialización
initializeApplication().catch((error) => {
  console.error('[Bootstrap] Error crítico:', error);
  process.exit(1);
});

// Exportar para pruebas
export { initializeApplication };