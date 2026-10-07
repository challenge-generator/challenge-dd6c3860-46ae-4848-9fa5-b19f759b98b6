# Prompt para Mejorar el Codigo Base

Copia y pega el contenido del bloque de abajo en un asistente de IA (Claude, ChatGPT)
para obtener un ZIP con el proyecto completo y arrancable.

Si preferis trabajar en tu editor con un agente local (Claude Code, Cursor, Copilot), usa `AGENTS.md` en vez de este archivo: dice lo mismo pero para que escriba los archivos en disco.

## Las dos reglas que no se negocian

1. **Completa el boilerplate.** Todo lo que el proyecto necesita para compilar y arrancar: manifiesto de dependencias, punto de entrada, configuracion, capa de interfaz, y las capas del patron arquitectonico declarado. Eso es andamiaje y es tu trabajo.
2. **NO resuelvas el reto.** Los entregables de las fases son el trabajo de la persona. El hueco pedagogico se deja como esta: el proyecto arranca, pero lo que el reto pide implementar NO esta implementado.

Dicho de otra forma: si algo impide compilar, arreglalo. Si algo es logica de negocio incompleta, validaciones ausentes, un secreto hardcodeado o un patron mejorable, dejalo exactamente como esta — es lo que la persona tiene que encontrar.

## Lo que le falta a este proyecto

Esto NO lo tenes que adivinar: salio de comparar el proyecto contra la arquitectura declarada del reto y de un analisis estatico del codigo. Completalo TODO.

### Referencias colgando en el codigo que si esta

Cada una rompe la compilacion:

- `src/app/core/services/mock-api.service.ts` — `Transaction.forEach`: Se invoca `forEach` sobre `Transaction`, pero esa clase no declara ese metodo. Agregalo con su implementacion real, o usa uno de los que si declara.

## Como saber que terminaste

```bash
npm install && npm run build
```

Ese comando corriendo sin errores es la definicion de "listo".

---

```
## Briefing del reto (autoridad)
Este bloque manda sobre los archivos adjuntos. El stack y el rol salen de AQUÍ, no de un topic genérico ni de markdown placeholder.

### Perfil
Chapter Frontend, Especialidad Desarrollador, Tecnología Angular, Advanced

### Brecha de conocimiento
Comprende y aplica conscientemente conceptos de patrones asíncronos sobre su lenguaje de programación primario (callbacks, promesas, generadores, async/await)

### Misión / candidato
Candidato con experiencia avanzada en Frontend

### Reto
- Tema: patrones asíncronos
- Seniority: advanced-l2
- Tipo: practical
- Título: Implementación de patrones asíncronos en frontend
- Tiempo estimado: 8 horas

### Fases (trabajo del HUMANO — PROHIBIDO completarlas)
No implementes estos entregables. Dejalos como hueco pedagógico. El asistente solo materializa el proyecto arrancable para que el participante pueda trabajar.
- Fase 1: Implementación de callbacks — objetivo: Implementar una función asincrónica utilizando callbacks para manejar la respuesta de una solicitud de transacción. — entregable (NO resolver): Función asincrónica con callbacks que maneja la respuesta de una solicitud de transacción.
- Fase 2: Implementación de promesas — objetivo: Implementar una función asincrónica utilizando promesas para manejar la respuesta de una solicitud de transacción. — entregable (NO resolver): Función asincrónica con promesas que maneja la respuesta de una solicitud de transacción.
- Fase 3: Implementación de async/await — objetivo: Implementar una función asincrónica utilizando async/await para manejar la respuesta de una solicitud de transacción. — entregable (NO resolver): Función asincrónica con async/await que maneja la respuesta de una solicitud de transacción.
- Fase 4: Comparación y selección de patrón — objetivo: Comparar los patrones asíncronos implementados y seleccionar el más adecuado para el dominio de la banca. — entregable (NO resolver): Documento que compara los patrones asíncronos implementados y selecciona el más adecuado para el dominio de la banca.

Eres un asistente experto en análisis, corrección y generación de archivos de cualquier tipo:
código fuente, documentación, hojas de cálculo, documentos Word, configuraciones, entre otros.
Voy a enviarte una cadena de texto que contiene uno o más archivos. Cada archivo está delimitado por un marcador con el siguiente formato:
// === ARCHIVO: ruta/del/archivo.extension ===
o también puede aparecer como:
## === ARCHIVO: ruta/del/archivo.extension ===
Lo que sigue al marcador puede ser:

El contenido real del archivo (código, texto, YAML, etc.)
Una descripción en lenguaje natural de lo que debe contener el archivo


TU TAREA
PASO 0 — ¿Esto es un proyecto o una carcasa?
Antes de extraer archivos, leé el Briefing (si está) y diagnosticá el adjunto.

Es CARCASA si ocurre CUALQUIERA de estas:
- No hay manifiesto de dependencias del stack del briefing (manifest.json de VTEX IO / package.json / pom.xml / build.gradle / requirements.txt / go.mod / *.tf / *.csproj, según corresponda)
- Hay un "binario" que en realidad es un comentario ("no puede ser mostrado como texto plano", placeholder .fig/.docx vacío)
- Los markdowns ya completan entregables de fases posteriores ("se implementó fade-in", lista de áreas ya resuelta)

Si es CARCASA:
- MATERIALIZÁ un proyecto que arranca en el stack del briefing (VTEX IO Store Framework, Angular, Terraform, pytest, Nest, etc.). Incluí manifiesto, punto de entrada y capa de interfaz reales.
- NO copies los markdowns de "solución" como si fueran el producto. Son ruido de generación.
- NO resuelvas las fases del briefing (están marcadas PROHIBIDO). Dejá el hueco pedagógico: el flujo existe, las microinteracciones/calidad/infra que el reto pide NO están hechas.
- Después seguí al PASO 5 (ZIP).

Si es un proyecto REAL (manifiesto + código que compila o arranca):
- Seguí PASO 1 en adelante. 🔴 compilación sí. 🟡 pedagógico no.

PASO 1 — Detección y extracción
Identifica todos los archivos presentes en la cadena. Para cada archivo extrae:

Su ruta completa (ej: src/main/java/com/pragma/Service.java)
Su contenido o descripción

PASO 2 — Clasificación por tipo
Clasifica cada archivo en una de estas categorías:
A) Código fuente (Java, Python, TypeScript, JavaScript, Kotlin, etc.)
B) Configuración / documentación (YAML, properties, Markdown, JSON, txt, etc.)
C) Excel (.xlsx, .xls, .csv)
D) Word (.docx, .doc)
E) Otro tipo de archivo binario o especial
PASO 3 — Clasificación de errores en código fuente

Objetivo prioritario: que el proyecto compile. No corrijas flujo de negocio ni lógica funcional.

Antes de modificar cualquier archivo de código fuente, clasifica cada problema encontrado en una de estas dos categorías:
🔴 ERROR DE COMPILACIÓN — corregir siempre
Son errores que impiden que el proyecto arranque, sin valor pedagógico:

Import faltante o incorrecto
Clase, método o variable referenciada que no existe en ningún archivo del proyecto
Error de sintaxis
Anotación con atributos inválidos
Dependencia ausente en pom.xml, package.json, etc.
Archivo referenciado que no existe y debe ser creado con implementación mínima

→ CORREGIR estos errores.
🟡 PROBLEMA FUNCIONAL O DE CALIDAD — preservar siempre
Son problemas que no impiden compilar. Pueden ser intencionales para el aprendizaje:

Clave secreta hardcodeada ("secret", "password123")
API deprecada que funciona pero tiene reemplazo moderno
Lógica de negocio incorrecta o incompleta
Código redundante o de baja legibilidad
Falta de validaciones en flujo de negocio
Patrones de diseño incorrectos pero funcionales
Concurrencia no segura
Configuración funcional pero no óptima

→ PRESERVAR tal cual. No corregir, no mejorar, no comentar.
PASO 4 — Procesamiento según tipo de archivo
Tipo A — Código fuente
Aplica únicamente las correcciones clasificadas como 🔴 ERROR DE COMPILACIÓN.
No alteres ningún elemento clasificado como 🟡 PROBLEMA FUNCIONAL O DE CALIDAD.
Si falta un archivo referenciado, créalo con la implementación mínima necesaria para compilar.
Tipo B — Configuración / documentación
Extrae el contenido tal cual, sin modificaciones salvo errores evidentes de sintaxis
(ej: YAML mal indentado).
Tipo C — Excel (.xlsx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un archivo Excel funcional con:

Fila de encabezados en negrita con color de fondo distintivo
Columnas con ancho ajustado al contenido
Tipos de dato correctos por columna
Validaciones si la descripción lo indica
Hojas nombradas descriptivamente si hay más de una
Filas de ejemplo si no hay datos reales

Tipo D — Word (.docx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un documento Word funcional con:

Estilos de título (Título 1, Título 2) para jerarquía de secciones
Fuente legible (Calibri o equivalente), tamaño 11-12pt para cuerpo
Márgenes estándar
Tabla de contenido si tiene múltiples secciones
Tablas con encabezados en negrita si aplica

Tipo E — Otro
Genera el archivo con el contenido o estructura más apropiada según la descripción.
PASO 5 — Exportación en ZIP
Empaqueta todos los archivos en un único archivo ZIP descargable respetando exactamente
la estructura de rutas indicada por los marcadores.
El ZIP debe incluir:

Archivos de código con únicamente los errores de compilación corregidos
Archivos de configuración y documentación sin cambios
Archivos nuevos creados para resolver dependencias de compilación faltantes
Archivos Excel y Word generados desde descripción

IMPORTANTE: El ZIP debe estar listo para descargar al finalizar. No preguntes si el usuario
quiere generarlo. Simplemente genera el archivo y proporciona el enlace de descarga; No debes desplegar en el chat el resumen de lo que arreglaste al Zip, solo entregalo.

REGLAS IMPORTANTES

No omitas ningún archivo aunque no tenga errores ni modificaciones
Respeta los nombres y rutas exactas indicadas por los marcadores
Si un archivo no tiene marcador claro, infiere el nombre desde su contenido
Si la cadena contiene solo documentación, placeholders o binarios fake, NO la reproduzcas:
aplicá PASO 0 (materializar el proyecto del briefing). Reproducir la carcasa es un fallo.
No agregues texto después del enlace de descarga del ZIP
No preguntes si el usuario quiere el ZIP: simplemente generalo siempre
Si detectas que falta un archivo de configuración necesario para compilar
(pom.xml, package.json, requirements.txt, build.gradle, etc.), créalo e inclúyelo
inferiendo su contenido desde los imports y frameworks detectados en el código
Nunca corrijas problemas 🟡 aunque parezcan obvios o fáciles de mejorar.
El participante que recibirá este proyecto los debe encontrar y resolver él mismo.


INPUT
Aquí está la cadena con los archivos:

// === ARCHIVO: package.json ===
{
  "name": "angular-banking-transactions",
  "version": "0.0.0",
  "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "watch": "ng build --watch --configuration development",
    "test": "jest",
    "test:watch": "jest --watch",
    "lint": "ng lint"
  },
  "private": true,
  "dependencies": {
    "@angular/animations": "~20.0.0",
    "@angular/common": "~20.0.0",
    "@angular/compiler": "~20.0.0",
    "@angular/core": "~20.0.0",
    "@angular/forms": "~20.0.0",
    "@angular/platform-browser": "~20.0.0",
    "@angular/platform-browser-dynamic": "~20.0.0",
    "@angular/router": "~20.0.0",
    "@angular/material": "~20.0.0",
    "@angular/cdk": "~20.0.0",
    "rxjs": "~7.8.0",
    "tslib": "^2.3.0",
    "zone.js": "~0.14.0"
  },
  "devDependencies": {
    "@angular-devkit/build-angular": "~20.0.0",
    "@angular/cli": "~20.0.0",
    "@angular/compiler-cli": "~20.0.0",
    "@types/jest": "~29.5.12",
    "jest": "~29.7.0",
    "jest-preset-angular": "~14.0.3",
    "ts-jest": "~29.1.2",
    "typescript": "~5.4.2",
    "@angular-eslint/builder": "~17.3.0",
    "@angular-eslint/eslint-plugin": "~17.3.0",
    "@angular-eslint/eslint-plugin-template": "~17.3.0",
    "@angular-eslint/template-parser": "~17.3.0",
    "eslint": "^8.56.0",
    "eslint-plugin-import": "^2.29.1",
    "eslint-plugin-jsdoc": "^48.2.1",
    "eslint-plugin-prefer-arrow": "^1.2.3"
  }
}

// === ARCHIVO: angular.json ===
{
  "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
  "version": 1,
  "newProjectRoot": "projects",
  "projects": {
    "angular-banking-transactions": {
      "projectType": "application",
      "schematics": {
        "@schematics/angular:component": {
          "style": "scss",
          "skipTests": false
        },
        "@schematics/angular:application": {
          "strict": true
        }
      },
      "root": "",
      "sourceRoot": "src",
      "prefix": "app",
      "architect": {
        "build": {
          "builder": "@angular-devkit/build-angular:application",
          "options": {
            "outputPath": "dist/angular-banking-transactions",
            "index": "src/index.html",
            "main": "src/main.ts",
            "polyfills": [
              "zone.js"
            ],
            "tsConfig": "tsconfig.app.json",
            "assets": [
              "src/favicon.ico",
              "src/assets"
            ],
            "styles": [
              "src/styles.scss"
            ],
            "scripts": []
          },
          "configurations": {
            "development": {
              "optimization": false,
              "outputHashing": "all",
              "sourceMap": true,
              "namedChunks": false,
              "extractLicenses": false,
              "vendorChunk": true
            },
            "production": {
              "optimization": true,
              "outputHashing": "all",
              "sourceMap": false,
              "namedChunks": false,
              "extractLicenses": true,
              "vendorChunk": false,
              "buildOptimizer": true
            }
          },
          "defaultConfiguration": "development"
        },
        "serve": {
          "builder": "@angular-devkit/build-angular:dev-server",
          "options": {
            "browserTarget": "angular-banking-transactions:build"
          },
          "configurations": {
            "development": {
              "browserTarget": "angular-banking-transactions:build:development"
            },
            "production": {
              "browserTarget": "angular-banking-transactions:build:production"
            }
          }
        },
        "extract-i18n": {
          "builder": "@angular-devkit/build-angular:extract-i18n",
          "options": {
            "browserTarget": "angular-banking-transactions:build"
          }
        },
        "test": {
          "builder": "@angular-devkit/build-angular:jest",
          "options": {
            "jestConfig": "jest.config.js",
            "polyfills": [
              "zone.js",
              "zone.js/testing"
            ],
            "tsConfig": "tsconfig.spec.json"
          }
        },
        "lint": {
          "builder": "@angular-eslint/builder:lint",
          "options": {
            "lintFilePatterns": [
              "src/**/*.ts",
              "src/**/*.html"
            ]
          }
        }
      }
    }
  },
  "cli": {
    "analytics": false,
    "schematicCollections": [
      "@schematics/angular"
    ]
  },
  "schematics": {
    "@schematics/angular:component": {
      "style": "scss",
      "skipTests": false
    }
  }
}

// === ARCHIVO: tsconfig.json ===
{
  "compileOnSave": false,
  "compilerOptions": {
    "baseUrl": ".",
    "outDir": "./dist/out-tsc",
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "noImplicitOverride": true,
    "noPropertyAccessFromIndexSignature": true,
    "noImplicitAny": true,
    "noFallthroughCasesInSwitch": true,
    "sourceMap": true,
    "declaration": false,
    "downlevelIteration": true,
    "experimentalDecorators": true,
    "moduleResolution": "node",
    "importHelpers": true,
    "target": "ES2022",
    "module": "ES2022",
    "useDefineForClassFields": false,
    "lib": [
      "ES2022",
      "dom",
      "dom.iterable"
    ],
    "paths": {
      "@app/*": ["src/app/*"],
      "@core/*": ["src/app/core/*"],
      "@features/*": ["src/app/features/*"],
      "@shared/*": ["src/app/shared/*"]
    }
  },
  "angularCompilerOptions": {
    "enableI18nLegacyMessageIdFormat": false,
    "strictInjectionParameters": true,
    "strictInputAccessModifiers": true,
    "strictTemplates": true
  }
}

// === ARCHIVO: src/app/core/models/transaction.model.ts ===
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

// === ARCHIVO: src/app/core/services/transaction.service.ts ===
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

// === ARCHIVO: src/app/core/services/notification.service.ts ===
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

// === ARCHIVO: src/main.ts ===
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

// === ARCHIVO: src/index.html ===
<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <title>Angular Banking Transactions</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="Aplicación de transacciones bancarias con Angular - Gestión de operaciones asíncronas">
  <meta name="theme-color" content="#1976d2">
  
  <!-- Favicon -->
  <link rel="icon" type="image/x-icon" href="favicon.ico">
  <link rel="apple-touch-icon" sizes="180x180" href="assets/icons/apple-touch-icon.png">
  
  <!-- Preconnect para optimización de carga -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  
  <!-- Fuentes - Material Icons -->
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  
  <!-- Estilos globales -->
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <!-- Componente raíz donde Angular monta la aplicación -->
  <app-root>
    <!-- Loading inicial mientras Angular bootstrapea -->
    <div class="app-loading">
      <div class="spinner-container">
        <div class="spinner">
          <div class="spinner-circle"></div>
          <div class="spinner-circle"></div>
          <div class="spinner-circle"></div>
        </div>
        <p class="loading-text">Cargando Aplicación de Transacciones...</p>
        <p class="loading-subtitle">Sistema Bancario - Módulo de Gestión</p>
      </div>
    </div>
    
    <!-- Fallback para browsers sin JavaScript -->
    <noscript>
      <div style="padding: 40px; text-align: center; font-family: Arial, sans-serif;">
        <h1>JavaScript Requerido</h1>
        <p>Esta aplicación requiere JavaScript para funcionar.</p>
        <p>Por favor, habilite JavaScript en su navegador.</p>
      </div>
    </noscript>
  </app-root>
  
  <!-- Scripts críticos inline para evitar FOUC -->
  <script>
    // Detectar si el navegador soporta ES6+
    (function() {
      try {
        new Function('async () => {}')();
        console.log('[Browser] Soporte para ES6+ detectado');
      } catch (e) {
        document.body.innerHTML = '<div style="padding:40px;text-align:center;"><h1>Navegador no compatible</h1><p>Por favor, actualice su navegador a una versión moderna.</p></div>';
      }
    })();
    
    // Tracking de rendimiento inicial
    window.addEventListener('load', function() {
      if (window.performance && window.performance.timing) {
        var timing = window.performance.timing;
        var loadTime = timing.loadEventEnd - timing.navigationStart;
        console.log('[Performance] Tiempo de carga:', loadTime, 'ms');
      }
    });
  </script>
</body>
</html>

// === ARCHIVO: src/test.ts ===
/**
 * Configuración de entorno para pruebas con Jest.
 * 
 * Este archivo configura el entorno de testing para Angular utilizando Jest
 * en lugar de Karma/Jasmine. Configura los polyfills necesarios y las
 * variables de entorno requeridas para las pruebas.
 * 
 * La configuración incluye:
 * - Polyfills de Zone.js para la detección de cambios
 * - Variables de entorno para modo testing
 * - Configuración global de Jest
 * - Mock de APIs del navegador
 */

import 'zone.js';
import 'zone.js/testing';

// Configurar variables de entorno para testing
Object.defineProperty(window, 'APP_ENV', {
  value: 'test',
  writable: true,
  configurable: true
});

Object.defineProperty(window, 'API_URL', {
  value: 'http://localhost:3000/api',
  writable: true,
  configurable: true
});

// Configurar console para testing (silenciar logs en producción de tests)
global.console = {
  ...console,
  log: jest.fn(),
  debug: jest.fn(),
  info: jest.fn(),
  warn: jest.fn(),
  error: jest.fn(),
};

// Mock de la API de Navigator para testing
Object.defineProperty(window, 'navigator', {
  value: {
    userAgent: 'node.js/jest',
    language: 'es-ES',
    languages: ['es-ES', 'es', 'en'],
    onLine: true,
  },
  writable: true,
});

// Mock de la API de Location
Object.defineProperty(window, 'location', {
  value: {
    href: 'http://localhost/',
    origin: 'http://localhost',
    pathname: '/',
    protocol: 'http:',
    host: 'localhost',
    search: '',
    hash: '',
    assign: jest.fn(),
    replace: jest.fn(),
    reload: jest.fn(),
  },
  writable: true,
});

// Mock de localStorage
const localStorageMock = (() => {
  let store: { [key: string]: string } = {};
  return {
    getItem: (key: string): string | null => store[key] || null,
    setItem: (key: string, value: string): void => {
      store[key] = value;
    },
    removeItem: (key: string): void => {
      delete store[key];
    },
    clear: (): void => {
      store = {};
    },
    get length(): number {
      return Object.keys(store).length;
    },
    key: (index: number): string | null => {
      const keys = Object.keys(store);
      return keys[index] || null;
    },
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
  writable: true,
});

// Mock de sessionStorage
const sessionStorageMock = (() => {
  let store: { [key: string]: string } = {};
  return {
    getItem: (key: string): string | null => store[key] || null,
    setItem: (key: string, value: string): void => {
      store[key] = value;
    },
    removeItem: (key: string): void => {
      delete store[key];
    },
    clear: (): void => {
      store = {};
    },
    get length(): number {
      return Object.keys(store).length;
    },
    key: (index: number): string | null => {
      const keys = Object.keys(store);
      return keys[index] || null;
    },
  };
})();

Object.defineProperty(window, 'sessionStorage', {
  value: sessionStorageMock,
  writable: true,
});

// Configuración de Jest para Angular
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';

// Inicializar el testbed de Angular
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting(),
  {
    teardown: { destroyAfterEach: true }
  }
);

// Configurar mocks globales para RxJS
import { Observable, Subject, BehaviorSubject } from 'rxjs';

// Hacer RxJS disponible globalmente para testing
global.Observable = Observable;
global.Subject = Subject;
global.BehaviorSubject = BehaviorSubject;

// === ARCHIVO: src/app/core/services/mock-api.service.ts ===
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

// === ARCHIVO: src/app/core/services/transaction.service.spec.ts ===
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

// === ARCHIVO: src/app/app.config.ts ===
import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withFetch, withInterceptorsFromDi, HTTP_INTERCEPTORS } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideRouterStore } from '@ngrx/router-store';

import { routes } from './app.routes';
import { transactionReducer } from './core/store/transaction.reducer';
import { TransactionEffects } from './core/store/transaction.effects';
import { authInterceptor } from './core/interceptors/auth.interceptor';
import { errorInterceptor } from './core/interceptors/error.interceptor';
import { NotificationService } from './core/services/notification.service';
import { MockApiService } from './core/services/mock-api.service';
import { TransactionService } from './core/services/transaction.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      withComponentInputBinding()
    ),
    provideAnimationsAsync(),
    provideHttpClient(
      withFetch(),
      withInterceptorsFromDi()
    ),
    {
      provide: HTTP_INTERCEPTORS,
      useValue: authInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useValue: errorInterceptor,
      multi: true
    },
    {
      provide: NotificationService,
      useClass: NotificationService
    },
    {
      provide: MockApiService,
      useClass: MockApiService
    },
    {
      provide: TransactionService,
      useClass: TransactionService
    },
    provideStore({
      transactions: transactionReducer
    }),
    provideEffects([TransactionEffects]),
    provideRouterStore(),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,
      trace: false,
      traceLimit: 75
    })
  ]
};

// === ARCHIVO: src/app/features/transactions/transactions.component.ts ===
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

// === ARCHIVO: src/app/features/transactions/transactions.component.html ===
<div class="transactions-container">
  <header class="transactions-header">
    <h1 class="transactions-header__title">Gestión de Transacciones</h1>
    <p class="transactions-header__subtitle">
      Administra tus transacciones bancarias utilizando diferentes patrones asíncronos
    </p>
  </header>

  <div class="transactions-layout">
    <section class="transactions-form-section">
      <mat-card class="form-card">
        <mat-card-header>
          <mat-card-title>Nueva Transacción</mat-card-title>
          <mat-card-subtitle>Selecciona el patrón asíncrono a utilizar</mat-card-subtitle>
        </mat-card-header>

        <mat-card-content>
          <form class="transaction-form" (ngSubmit)="$event.preventDefault()">
            <mat-form-field appearance="outline" class="form-field">
              <mat-label>Monto</mat-label>
              <input
                matInput
                type="number"
                min="0.01"
                step="0.01"
                [value]="formData().amount"
                (input)="updateForm('amount', $any($event.target).valueAsNumber)"
                placeholder="0.00"
              />
              <span matTextPrefix>$&nbsp;</span>
              <mat-error>El monto debe ser mayor a 0</mat-error>
            </mat-form-field>

            <mat-form-field appearance="outline" class="form-field">
              <mat-label>Tipo de Transacción</mat-label>
              <mat-select
                [value]="formData().type"
                (selectionChange)="updateForm('type', $event.value)"
              >
                @for (const type of transactionTypes; track type) {
                  <mat-option [value]="type">
                    {{ typeLabels[type] }}
                  </mat-option>
                }
              </mat-select>
            </mat-form-field>

            @if (formData().type === 'transfer') {
              <mat-form-field appearance="outline" class="form-field form-field--full">
                <mat-label>Cuenta Destino</mat-label>
                <input
                  matInput
                  type="text"
                  [value]="formData().destinationAccount"
                  (input)="updateForm('destinationAccount', $any($event.target).value)"
                  placeholder="ACC-XXX"
                />
                <mat-hint>Ingrese el número de cuenta destino</mat-hint>
              </mat-form-field>
            }

            <mat-form-field appearance="outline" class="form-field form-field--full">
              <mat-label>Descripción</mat-label>
              <textarea
                matInput
                [value]="formData().description"
                (input)="updateForm('description', $any($event.target).value)"
                placeholder="Descripción de la transacción"
                rows="3"
              ></textarea>
            </mat-form-field>

            <div class="form-actions">
              <button
                mat-raised-button
                color="primary"
                class="action-button action-button--callback"
                [disabled]="isLoading() || !canProcess()"
                (click)="processWithCallback()"
              >
                <mat-icon>call</mat-icon>
                Callback
              </button>

              <button
                mat-raised-button
                color="accent"
                class="action-button action-button--promise"
                [disabled]="isLoading() || !canProcess()"
                (click)="processWithPromise()"
              >
                <mat-icon>pending</mat-icon>
                Promise
              </button>

              <button
                mat-raised-button
                color="warn"
                class="action-button action-button--async"
                [disabled]="isLoading() || !canProcess()"
                (click)="processWithAsyncAwait()"
              >
                <mat-icon>bolt</mat-icon>
                Async/Await
              </button>
            </div>

            <button
              mat-stroked-button
              type="button"
              class="clear-button"
              (click)="clearForm()"
            >
              Limpiar Formulario
            </button>
          </form>
        </mat-card-content>
      </mat-card>

      @if (isLoading()) {
        <div class="loading-overlay">
          <mat-spinner diameter="48"></mat-spinner>
          <p class="loading-text">Procesando transacción con {{ patternUsed() }}...</p>
        </div>
      }

      @if (errorMessage()) {
        <div class="error-banner">
          <mat-icon>error_outline</mat-icon>
          <span>{{ errorMessage() }}</span>
          <button mat-icon-button (click)="errorMessage.set(null)">
            <mat-icon>close</mat-icon>
          </button>
        </div>
      }

      @if (currentTransactionId()) {
        <div class="success-banner">
          <mat-icon>check_circle</mat-icon>
          <div class="success-content">
            <span>Transacción procesada exitosamente</span>
            <span class="transaction-id">ID: {{ currentTransactionId() }}</span>
          </div>
          <button
            mat-stroked-button
            class="check-status-button"
            (click)="checkTransactionStatus(currentTransactionId()!)"
          >
            Verificar Estado
          </button>
        </div>
      }
    </section>

    <section class="transactions-list-section">
      <mat-card class="list-card">
        <mat-card-header>
          <mat-card-title>Transacciones Recientes</mat-card-title>
          <mat-card-subtitle>Historial de transacciones de la cuenta</mat-card-subtitle>
        </mat-card-header>

        <mat-card-content>
          @if (transactions().length === 0) {
            <div class="empty-state">
              <mat-icon>receipt_long</mat-icon>
              <p>No hay transacciones recientes</p>
            </div>
          } @else {
            <mat-list class="transactions-list">
              @for (const txn of transactions(); track txn.id) {
                <mat-list-item class="transaction-item">
                  <div class="transaction-item__icon" [class]="'transaction-item__icon--' + txn.type">
                    <mat-icon>{{ getTransactionIcon(txn.type) }}</mat-icon>
                  </div>
                  <div class="transaction-item__details">
                    <span class="transaction-item__type">{{ typeLabels[txn.type] }}</span>
                    <span class="transaction-item__description">{{ txn.description || 'Sin descripción' }}</span>
                    <span class="transaction-item__date">{{ txn.timestamp | date:'medium' }}</span>
                  </div>
                  <div class="transaction-item__amount" [class]="'transaction-item__amount--' + (isPositiveTransaction(txn.type) ? 'positive' : 'negative')">
                    {{ formatAmount(txn.amount, txn.type) }}
                  </div>
                  <app-transaction-status [status]="txn.status"></app-transaction-status>
                </mat-list-item>
              }
            </mat-list>
          }

          <button
            mat-stroked-button
            class="refresh-button"
            (click)="loadRecentTransactions()"
          >
            <mat-icon>refresh</mat-icon>
            Actualizar
          </button>
        </mat-card-content>
      </mat-card>
    </section>
  </div>
</div>

// === ARCHIVO: src/app/features/transactions/transactions.component.scss ===
@use 'sass:map';

.transactions-container {
  padding: 24px;
  max-width: 1400px;
  margin: 0 auto;
  min-height: 100vh;
  background-color: #f5f7fa;
}

.transactions-header {
  margin-bottom: 32px;

  &__title {
    font-size: 32px;
    font-weight: 600;
    color: #1a1a2e;
    margin: 0 0 8px 0;
    letter-spacing: -0.5px;
  }

  &__subtitle {
    font-size: 16px;
    color: #6b7280;
    margin: 0;
    font-weight: 400;
  }
}

.transactions-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
}

.transactions-form-section {
  position: relative;
}

.form-card,
.list-card {
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  background: #ffffff;
  overflow: hidden;

  mat-card-header {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 20px 24px;
    margin: -16px -16px 16px -16px;

    mat-card-title {
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 4px;
    }

    mat-card-subtitle {
      color: rgba(255, 255, 255, 0.85);
      font-size: 14px;
    }
  }
}

.list-card {
  mat-card-header {
    background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
  }
}

.transaction-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.form-field {
  width: 100%;

  &--full {
    grid-column: 1 / -1;
  }

  ::ng-deep {
    .mat-mdc-text-field-wrapper {
      background-color: #f9fafb;
    }

    .mat-mdc-form-field-focus-overlay {
      background-color: rgba(102, 126, 234, 0.08);
    }
  }
}

.form-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 8px;
}

.action-button {
  flex: 1;
  min-width: 120px;
  height: 48px;
  font-weight: 600;
  font-size: 14px;
  border-radius: 8px;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  mat-icon {
    font-size: 20px;
    width: 20px;
    height: 20px;
  }

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &--callback {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
  }

  &--promise {
    background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
    color: white;
  }

  &--async {
    background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
    color: white;
  }
}

.clear-button {
  width: 100%;
  margin-top: 8px;
  color: #6b7280;
  border-color: #d1d5db;

  &:hover {
    background-color: #f9fafb;
  }
}

.loading-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.95);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  border-radius: 16px;
  z-index: 10;

  .loading-text {
    font-size: 16px;
    font-weight: 500;
    color: #4b5563;
  }
}

.error-banner,
.success-banner {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 20px;
  border-radius: 12px;
  margin-top: 20px;
  animation: slideIn 0.3s ease;

  mat-icon {
    font-size: 24px;
    width: 24px;
    height: 24px;
  }
}

.error-banner {
  background: linear-gradient(135deg, #fee2e2 0%, #fecaca 100%);
  border: 1px solid #fca5a5;
  color: #991b1b;

  mat-icon {
    color: #dc2626;
  }

  span {
    flex: 1;
    font-weight: 500;
  }

  button {
    color: #991b1b;
  }
}

.success-banner {
  background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);
  border: 1px solid #6ee7b7;
  color: #065f46;

  mat-icon {
    color: #059669;
  }

  .success-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 4px;

    .transaction-id {
      font-family: 'Roboto Mono', monospace;
      font-size: 13px;
      color: #047857;
    }
  }

  .check-status-button {
    color: #059669;
    border-color: #059669;

    &:hover {
      background-color: rgba(5, 150, 105, 0.08);
    }
  }
}

.transactions-list-section {
  position: relative;
}

.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 24px;
  color: #9ca3af;

  mat-icon {
    font-size: 64px;
    width: 64px;
    height: 64px;
    margin-bottom: 16px;
    opacity: 0.5;
  }

  p {
    font-size: 16px;
    margin: 0;
  }
}

.transactions-list {
  max-height: 500px;
  overflow-y: auto;
  padding: 0;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: #c1c1c1;
    border-radius: 3px;

    &:hover {
      background: #a8a8a8;
    }
  }
}

.transaction-item {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  border-bottom: 1px solid #e5e7eb;
  transition: background-color 0.2s ease;
  height: auto !important;
  min-height: 72px;

  &:hover {
    background-color: #f9fafb;
  }

  &:last-child {
    border-bottom: none;
  }

  &__icon {
    width: 48px;
    height: 48px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

    mat-icon {
      color: white;
    }

    &--deposit {
      background: linear-gradient(135deg, #10b981 0%, #059669 100%);
    }

    &--withdrawal {
      background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
    }

    &--transfer {
      background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
    }

    &--payment {
      background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
    }
  }

  &__details {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
  }

  &__type {
    font-weight: 600;
    font-size: 15px;
    color: #1f2937;
  }

  &__description {
    font-size: 13px;
    color: #6b7280;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &__date {
    font-size: 12px;
    color: #9ca3af;
  }

  &__amount {
    font-weight: 700;
    font-size: 16px;
    font-family: 'Roboto Mono', monospace;
    padding: 6px 12px;
    border-radius: 8px;
    flex-shrink: 0;

    &--positive {
      background-color: #d1fae5;
      color: #059669;
    }

    &--negative {
      background-color: #fee2e2;
      color: #dc2626;
    }
  }
}

.refresh-button {
  width: 100%;
  margin-top: 16px;
  color: #667eea;
  border-color: #667eea;

  mat-icon {
    margin-right: 8px;
  }

  &:hover {
    background: linear-gradient(135deg, rgba(102, 126, 234, 0.08) 0%, rgba(118, 75, 162, 0.08) 100%);
  }
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .transactions-container {
    padding: 16px;
  }

  .transactions-header__title {
    font-size: 24px;
  }

  .form-actions {
    flex-direction: column;
  }

  .action-button {
    width: 100%;
  }

  .transaction-item {
    flex-wrap: wrap;

    &__details {
      order: 2;
      width: calc(100% - 64px);
    }

    &__amount {
      order: 3;
      width: 100%;
      text-align: right;
      margin-top: 8px;
    }
  }
}

// === ARCHIVO: src/app/shared/components/transaction-status/transaction-status.component.ts ===
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

// === ARCHIVO: src/app/shared/components/transaction-status/transaction-status.component.html ===
<div 
  class="transaction-status"
  [ngClass]="statusClass()"
  [attr.aria-status]="status"
  role="status"
  aria-live="polite">
  
  <div class="transaction-status__icon-container" [ngClass]="statusClass() + '__icon-container'">
    <span class="material-icons transaction-status__icon" aria-hidden="true">
      {{ displayIcon() }}
    </span>
    <div class="transaction-status__icon-glow" *ngIf="status === 'pending'"></div>
  </div>

  <div class="transaction-status__content">
    <div class="transaction-status__header">
      <h3 class="transaction-status__title">{{ displayLabel() }}</h3>
      <span 
        class="transaction-status__badge" 
        *ngIf="isFinalState()"
        [ngClass]="'transaction-status__badge--' + status">
        {{ status.toUpperCase() }}
      </span>
    </div>

    <p class="transaction-status__description" *ngIf="shouldShowDetails()">
      {{ displayDescription() }}
    </p>

    <div class="transaction-status__meta" *ngIf="shouldShowDetails() && transactionId">
      <span class="transaction-status__meta-label">ID de transacción:</span>
      <code class="transaction-status__meta-value">{{ formattedId() }}</code>
      <button 
        class="transaction-status__copy-btn"
        (click)="onCopyId()"
        aria-label="Copiar ID de transacción"
        title="Copiar ID">
        <span class="material-icons">content_copy</span>
      </button>
    </div>
  </div>

  <div class="transaction-status__actions" *ngIf="!compact && canRetryAction()">
    <button 
      class="transaction-status__action-btn transaction-status__action-btn--primary"
      (click)="onRetry()"
      aria-label="Reintentar transacción">
      <span class="material-icons" aria-hidden="true">refresh</span>
      Reintentar
    </button>
    <button 
      class="transaction-status__action-btn transaction-status__action-btn--secondary"
      (click)="onContactSupport()"
      aria-label="Contactar soporte">
      <span class="material-icons" aria-hidden="true">support_agent</span>
      Contactar
    </button>
  </div>

  <div class="transaction-status__progress" *ngIf="status === 'pending'">
    <div class="transaction-status__progress-bar"></div>
  </div>

  <div class="transaction-status__timestamp" *ngIf="shouldShowDetails()">
    <span class="material-icons transaction-status__timestamp-icon">schedule</span>
    <span class="transaction-status__timestamp-text">Actualizado: {{ now | date:'medium' }}</span>
  </div>
</div>

// === ARCHIVO: src/app/shared/components/transaction-status/transaction-status.component.scss ===
@use 'sass:math';

$status-pending-color: #ff9800;
$status-completed-color: #4caf50;
$status-failed-color: #f44336;
$status-reversed-color: #9c27b0;

$transition-fast: 150ms ease-in-out;
$transition-normal: 250ms ease-in-out;
$transition-slow: 400ms ease-in-out;

$spacing-xs: 4px;
$spacing-sm: 8px;
$spacing-md: 16px;
$spacing-lg: 24px;
$spacing-xl: 32px;

$border-radius-sm: 4px;
$border-radius-md: 8px;
$border-radius-lg: 12px;

$font-size-xs: 0.75rem;
$font-size-sm: 0.875rem;
$font-size-md: 1rem;
$font-size-lg: 1.25rem;
$font-size-xl: 1.5rem;

.transaction-status {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: $spacing-lg;
  border-radius: $border-radius-lg;
  background: linear-gradient(135deg, #fafafa 0%, #f5f5f5 100%);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: box-shadow $transition-normal;
  position: relative;
  overflow: hidden;

  &:hover {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
  }

  &__icon-container {
    position: relative;
    width: 64px;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    margin-bottom: $spacing-md;
    transition: transform $transition-normal;

    &:hover {
      transform: scale(1.05);
    }
  }

  &__icon {
    font-size: $font-size-xl * 1.5;
    transition: color $transition-normal, transform $transition-normal;
  }

  &__icon-glow {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: $status-pending-color;
    opacity: 0.2;
    animation: pulse 2s ease-in-out infinite;
  }

  &__content {
    width: 100%;
    text-align: center;
  }

  &__header {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: $spacing-sm;
    margin-bottom: $spacing-sm;
    flex-wrap: wrap;
  }

  &__title {
    margin: 0;
    font-size: $font-size-lg;
    font-weight: 600;
    color: #212121;
  }

  &__badge {
    padding: $spacing-xs $spacing-sm;
    border-radius: $border-radius-sm;
    font-size: $font-size-xs;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;

    &--pending {
      background-color: rgba($status-pending-color, 0.15);
      color: darken($status-pending-color, 10%);
    }

    &--completed {
      background-color: rgba($status-completed-color, 0.15);
      color: darken($status-completed-color, 10%);
    }

    &--failed {
      background-color: rgba($status-failed-color, 0.15);
      color: darken($status-failed-color, 10%);
    }

    &--reversed {
      background-color: rgba($status-reversed-color, 0.15);
      color: darken($status-reversed-color, 10%);
    }
  }

  &__description {
    margin: 0 0 $spacing-md;
    font-size: $font-size-sm;
    color: #757575;
    line-height: 1.5;
  }

  &__meta {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: $spacing-xs;
    padding: $spacing-sm;
    background-color: rgba(0, 0, 0, 0.03);
    border-radius: $border-radius-sm;
    margin-bottom: $spacing-md;
  }

  &__meta-label {
    font-size: $font-size-xs;
    color: #9e9e9e;
  }

  &__meta-value {
    font-family: 'Roboto Mono', monospace;
    font-size: $font-size-xs;
    color: #424242;
    background-color: #eceff1;
    padding: 2px 6px;
    border-radius: $border-radius-sm;
  }

  &__copy-btn {
    background: none;
    border: none;
    cursor: pointer;
    padding: $spacing-xs;
    border-radius: $border-radius-sm;
    color: #757575;
    transition: background-color $transition-fast, color $transition-fast;

    &:hover {
      background-color: rgba(0, 0, 0, 0.08);
      color: #424242;
    }

    .material-icons {
      font-size: 16px;
    }
  }

  &__actions {
    display: flex;
    gap: $spacing-sm;
    margin-top: $spacing-md;
    width: 100%;
    justify-content: center;
  }

  &__action-btn {
    display: flex;
    align-items: center;
    gap: $spacing-xs;
    padding: $spacing-sm $spacing-md;
    border: none;
    border-radius: $border-radius-md;
    font-size: $font-size-sm;
    font-weight: 500;
    cursor: pointer;
    transition: all $transition-normal;

    .material-icons {
      font-size: 18px;
    }

    &--primary {
      background-color: #1976d2;
      color: white;

      &:hover {
        background-color: #1565c0;
        transform: translateY(-1px);
        box-shadow: 0 4px 12px rgba(25, 118, 210, 0.3);
      }

      &:active {
        transform: translateY(0);
      }
    }

    &--secondary {
      background-color: #f5f5f5;
      color: #616161;
      border: 1px solid #e0e0e0;

      &:hover {
        background-color: #eeeeee;
        border-color: #bdbdbd;
      }
    }
  }

  &__progress {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 3px;
    background-color: rgba(0, 0, 0, 0.05);
    overflow: hidden;
  }

  &__progress-bar {
    height: 100%;
    background: linear-gradient(90deg, $status-pending-color, lighten($status-pending-color, 15%));
    animation: progress 1.5s ease-in-out infinite;
    width: 30%;
  }

  &__timestamp {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: $spacing-xs;
    margin-top: $spacing-md;
    padding-top: $spacing-md;
    border-top: 1px solid #e0e0e0;
    width: 100%;
  }

  &__timestamp-icon {
    font-size: 14px;
    color: #9e9e9e;
  }

  &__timestamp-text {
    font-size: $font-size-xs;
    color: #9e9e9e;
  }

  &.status-pending {
    .transaction-status__icon-container {
      background-color: rgba($status-pending-color, 0.1);
    }

    .transaction-status__icon {
      color: $status-pending-color;
    }
  }

  &.status-completed {
    .transaction-status__icon-container {
      background-color: rgba($status-completed-color, 0.1);
    }

    .transaction-status__icon {
      color: $status-completed-color;
    }
  }

  &.status-failed {
    .transaction-status__icon-container {
      background-color: rgba($status-failed-color, 0.1);
    }

    .transaction-status__icon {
      color: $status-failed-color;
    }
  }

  &.status-reversed {
    .transaction-status__icon-container {
      background-color: rgba($status-reversed-color, 0.1);
    }

    .transaction-status__icon {
      color: $status-reversed-color;
    }
  }
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 0.2;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.35;
  }
}

@keyframes progress {
  0% {
    transform: translateX(-100%);
  }
  50% {
    transform: translateX(200%);
  }
  100% {
    transform: translateX(-100%);
  }
}
```
