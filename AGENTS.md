# AGENTS.md

Instrucciones para el agente de IA que abra este repositorio (Claude Code, Cursor, Codex, Copilot, Gemini). Se cargan solas: no hay que pegar nada en ningun chat.

## Que es este repositorio

Es el codigo base de un reto de aprendizaje de Pragma: **Implementación de patrones asíncronos en frontend**.

| | |
|---|---|
| Tema | patrones asíncronos |
| Nivel | advanced-l2 |
| Chapter | Frontend |
| Especialidad | Angular |
| Stack | TypeScript / Angular 20 |
| Patron arquitectonico | capas estándar con servicios inyectables y componentes reactivos |
| Tiempo estimado | 8 horas |

## Receta del stack

Esqueleto obligatorio:

- `package.json, angular.json y tsconfig.json en la raiz`
- `src/main.ts con bootstrapApplication`
- `src/app/app.config.ts con los providers`
- `src/app/core con servicios y modelos`
- `src/app/features con componentes contenedores`
- `src/app/shared con componentes presentacionales`

Trampas conocidas:

- No inventes versiones de npm: una version inexistente hace fallar `npm install` con ETARGET y el proyecto no instala. Usa rango con caret sobre una version que exista.
- El `package.json` tiene que ser JSON valido y UNICO: nada despues de la llave de cierre.
- Angular necesita `angular.json` y `tsconfig.json` ademas del `package.json`, o `ng build` no corre.

Dependencias:

- @angular/core 20.0.0
- @angular/common 20.0.0
- @angular/platform-browser 20.0.0
- @angular/platform-browser-dynamic 20.0.0
- @angular/router 20.0.0
- @angular/material 20.0.0
- rxjs 7.8.0
- typescript 5.4.2
- jest 29.7.0
- @types/jest 29.5.12
- ts-jest 29.1.2
- @angular-devkit/build-angular n/a
- @angular/cli n/a

## Tu tarea

Dejar este proyecto en estado **verificable**: que el comando de verificacion corra sin errores. Escribi los archivos en disco, en este repositorio. No generes ZIPs ni archivos adjuntos.

En orden:

1. Corre `npm install && npm run build` y mira que falla.
2. Completa lo que falte de la lista de abajo: manifiesto de dependencias, punto de entrada, capa de interfaz y las capas del patron declarado.
3. Arregla SOLO los errores que impiden compilar o arrancar.
4. Volve a correr `npm install && npm run build` hasta que pase.
5. Pará ahí.

## Regla dura: las fases son trabajo del humano

**PROHIBIDO implementar los entregables de las fases.** El valor del reto esta en que la persona los resuelva. Tu trabajo es que tenga un proyecto que arranca; el hueco pedagogico se queda como esta.

No resuelvas nada de esto:

- **Fase 1 — Implementación de callbacks**: Función asincrónica con callbacks que maneja la respuesta de una solicitud de transacción.
- **Fase 2 — Implementación de promesas**: Función asincrónica con promesas que maneja la respuesta de una solicitud de transacción.
- **Fase 3 — Implementación de async/await**: Función asincrónica con async/await que maneja la respuesta de una solicitud de transacción.
- **Fase 4 — Comparación y selección de patrón**: Documento que compara los patrones asíncronos implementados y selecciona el más adecuado para el dominio de la banca.

Distincion operativa:

- **Arreglar** (si): import faltante, tipo que no existe, dependencia sin declarar, error de sintaxis, archivo referenciado que no existe.
- **No tocar** (no): logica de negocio incompleta, validaciones ausentes, secretos hardcodeados, APIs deprecadas que funcionan, concurrencia insegura, patrones mejorables. Eso es lo que la persona tiene que encontrar.

## Lo que falta y tenes que completar

### 1. Referencias colgando (1)

Salieron de un analisis estatico del codigo que SI esta en el repo. Cada una rompe la compilacion:

- [ ] `src/app/core/services/mock-api.service.ts` — `Transaction.forEach`
      Se invoca `forEach` sobre `Transaction`, pero esa clase no declara ese metodo. Agregalo con su implementacion real, o usa uno de los que si declara.

### Presentes (18)

- `package.json`
- `angular.json`
- `tsconfig.json`
- `src/app/core/models/transaction.model.ts`
- `src/app/core/services/transaction.service.ts`
- `src/app/core/services/notification.service.ts`
- `src/main.ts`
- `src/index.html`
- `src/test.ts`
- `src/app/core/services/mock-api.service.ts`
- `src/app/core/services/transaction.service.spec.ts`
- `src/app/app.config.ts`
- `src/app/features/transactions/transactions.component.ts`
- `src/app/features/transactions/transactions.component.html`
- `src/app/features/transactions/transactions.component.scss`
- `src/app/shared/components/transaction-status/transaction-status.component.ts`
- `src/app/shared/components/transaction-status/transaction-status.component.html`
- `src/app/shared/components/transaction-status/transaction-status.component.scss`

### Capas del patron declarado

Cada una tiene que existir como directorio real con al menos un archivo. Codigo plano en la raiz no satisface el patron.

- `src`
- `src/app`
- `src/app/core`
- `src/app/core/services`
- `src/app/core/models`
- `src/app/features`
- `src/app/features/transactions`
- `src/app/features/transactions/components`
- `src/app/shared`

## Verificacion

```bash
npm install && npm run build
```

Ese comando pasando es la definicion de "terminado" para vos.

## Convenciones que tenes que respetar

- Un solo ecosistema: no declares librerias de otro lenguaje ni mezcles gestores de paquetes.
- Toda libreria que uses tiene que estar declarada en el manifiesto de dependencias.
- Todo import declarado tiene que usarse; todo tipo usado tiene que existir o venir de una dependencia declarada.
- El patron es **capas estándar con servicios inyectables y componentes reactivos**: los contratos (interfaces, puertos) los define la capa interna y los implementa la externa, nunca al revés.
- Los archivos que crees llevan implementacion real, no stubs: sin `TODO`, sin cuerpos vacios, sin `// getters y setters`.

## Contexto del candidato

Sirve para calibrar el nivel del codigo, no para resolver las fases.

- Perfil: Chapter Frontend, Especialidad Desarrollador, Tecnología Angular, Advanced
- Brecha que el reto ataca: Comprende y aplica conscientemente conceptos de patrones asíncronos sobre su lenguaje de programación primario (callbacks, promesas, generadores, async/await)
- Mision: Candidato con experiencia avanzada en Frontend

---

*Generado por Challenge Generator — Pragma. `README.md` tiene el enunciado completo del reto para la persona. `PROMPT_MEJORA.md` es la variante para pegar en un chat, si se prefiere ese flujo.*
