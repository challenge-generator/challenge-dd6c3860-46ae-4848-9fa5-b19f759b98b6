# Implementación de patrones asíncronos en frontend

El candidato debe comprender y aplicar conscientemente conceptos de patrones asíncronos sobre su lenguaje de programación primario. El dominio es la banca, donde se necesita asegurar que las operaciones asíncronas se manejen de manera eficiente y robusta para mantener la consistencia y disponibilidad de los servicios. Los actores involucrados son el front-end de la aplicación bancaria, el back-end de procesamiento de transacciones y el servicio de notificación de eventos. Las operaciones asíncronas deben asegurar que las transacciones se completen sin pérdida de datos y que los eventos se notifiquen de manera oportuna.

## Informacion General

| Campo | Valor |
|-------|-------|
| **Tema** | patrones asíncronos |
| **Nivel** | advanced-l2 |
| **Tipo** | practical |
| **Tiempo estimado** | 8 horas |

## Fases del Reto

### Fase 0: Configuración del Proyecto

**Objetivo:** Obtener el proyecto base funcional enviando el Código Base a un asistente de IA, que lo analizará, corregirá errores y generará un ZIP listo para usar.

**Tiempo estimado:** 15-30 minutos

**Instrucciones:**

- Asegúrate de tener instalado para ejecutar el proyecto: Node.js 18+, npm, VS Code o similar.
- Copia todo el contenido del campo **Código Base** de este reto — incluyendo el texto de instrucciones que aparece al inicio.
- Abre un asistente de IA (Claude en claude.ai, ChatGPT o Gemini — se recomienda Claude), pega el contenido copiado en el chat y envíalo.
- El asistente analizará los archivos, corregirá errores y generará un archivo ZIP descargable. Descárgalo y extráelo en la carpeta donde quieras trabajar.
- Ejecuta `npm install && npm run build` (o `npm start`). Si no hay errores, estás listo.

**Entregable:** El proyecto compila/arranca sin errores.

<details>
<summary>Pistas de conocimiento</summary>

- Copia el Código Base completo incluyendo el texto de instrucciones al inicio — esas instrucciones le indican al asistente exactamente qué hacer con los archivos.
- Si el asistente no genera el ZIP automáticamente al terminar el análisis, escríbele: "genera el ZIP ahora".
- Si el proyecto tiene errores al arrancar, comparte el mensaje de error con el mismo asistente para que lo corrija.

</details>

### Fase 1: Implementación de callbacks

**Objetivo:** Implementar una función asincrónica utilizando callbacks para manejar la respuesta de una solicitud de transacción.

**Tiempo estimado:** 2 horas

**Instrucciones:**

- Identificar la operación asincrónica a implementar.
- Definir la firma de la función que utiliza callbacks.
- Implementar la función para manejar la respuesta de la solicitud de transacción.
- Asegurar que la función maneje correctamente los errores y los casos de éxito.

**Entregable:** Función asincrónica con callbacks que maneja la respuesta de una solicitud de transacción.

<details>
<summary>Pistas de conocimiento</summary>

- Recuerda que los callbacks se ejecutan después de que la operación asincrónica ha terminado.
- Considera cómo manejar los errores en los callbacks.

</details>

### Fase 2: Implementación de promesas

**Objetivo:** Implementar una función asincrónica utilizando promesas para manejar la respuesta de una solicitud de transacción.

**Tiempo estimado:** 2 horas

**Instrucciones:**

- Identificar la operación asincrónica a implementar.
- Definir la firma de la función que utiliza promesas.
- Implementar la función para manejar la respuesta de la solicitud de transacción.
- Asegurar que la función maneje correctamente los errores y los casos de éxito.

**Entregable:** Función asincrónica con promesas que maneja la respuesta de una solicitud de transacción.

<details>
<summary>Pistas de conocimiento</summary>

- Recuerda que las promesas permiten encadenar operaciones asíncronas.
- Considera cómo manejar los errores en las promesas.

</details>

### Fase 3: Implementación de async/await

**Objetivo:** Implementar una función asincrónica utilizando async/await para manejar la respuesta de una solicitud de transacción.

**Tiempo estimado:** 2 horas

**Instrucciones:**

- Identificar la operación asincrónica a implementar.
- Definir la firma de la función que utiliza async/await.
- Implementar la función para manejar la respuesta de la solicitud de transacción.
- Asegurar que la función maneje correctamente los errores y los casos de éxito.

**Entregable:** Función asincrónica con async/await que maneja la respuesta de una solicitud de transacción.

<details>
<summary>Pistas de conocimiento</summary>

- Recuerda que async/await permite escribir código asíncrono de manera más legible.
- Considera cómo manejar los errores en async/await.

</details>

### Fase 4: Comparación y selección de patrón

**Objetivo:** Comparar los patrones asíncronos implementados y seleccionar el más adecuado para el dominio de la banca.

**Tiempo estimado:** 2 horas

**Instrucciones:**

- Comparar las implementaciones de callbacks, promesas y async/await.
- Identificar las ventajas y desventajas de cada patrón en el contexto de la banca.
- Seleccionar el patrón más adecuado y justificar la elección.
- Documentar la decisión y las razones detrás de ella.

**Entregable:** Documento que compara los patrones asíncronos implementados y selecciona el más adecuado para el dominio de la banca.

<details>
<summary>Pistas de conocimiento</summary>

- Considera la legibilidad, mantenibilidad y rendimiento de cada patrón.
- Piensa en cómo cada patrón maneja los errores y las operaciones asíncronas.

</details>

## Dimensiones Evaluadas

- **queEs**: ¿Qué son los patrones asíncronos y por qué son importantes en el desarrollo frontend?
- **comoSeUsa**: ¿Cómo se implementan los patrones asíncronos en el lenguaje de programación primario?
- **erroresComunes**: ¿Cuáles son los errores comunes al implementar patrones asíncronos y cómo se pueden evitar?
- **queDecisionesImplica**: ¿Qué decisiones implica la selección de un patrón asíncrono para un dominio específico?

## Criterios de Evaluacion

- Implementación correcta de una función asincrónica utilizando callbacks.
- Implementación correcta de una función asincrónica utilizando promesas.
- Implementación correcta de una función asincrónica utilizando async/await.
- Comparación adecuada de los patrones asíncronos implementados.
- Selección justificada del patrón asíncrono más adecuado para el dominio de la banca.

## Como trabajar con un asistente de IA

Hay dos caminos, elegi uno:

- **AGENTS.md** (recomendado) — instrucciones nativas del repo. Abri esta carpeta con tu agente local (Claude Code, Cursor, Codex, Copilot, Gemini) y las carga solo. Sabe que archivos faltan y con que comando se verifica, y completa el scaffold escribiendo en disco.
- **PROMPT_MEJORA.md** — para copiar y pegar en un chat (claude.ai, ChatGPT). Devuelve un ZIP con el proyecto. Sirve si no tenes un agente en el IDE.

Ninguno de los dos resuelve las fases del reto: eso es tu trabajo.

## Verificacion

El proyecto esta listo para trabajar cuando este comando corre sin errores:

```bash
npm install && npm run build
```

---

*Reto generado automaticamente por Challenge Generator - Pragma*
