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