---
name: diseno-curriculo-pi1-tabla-ra
description: Decisiones de diseño — tabla de RA, reparto CE, mapeo a BOE RD 686/2010
type: project
updated: 2026-09-10
---

## Reconstrucción tabla RA sobre texto literal BOE

**Decisión**: Extraer los 33 criterios de evaluación directamente del RD 686/2010 (art. 8), no de resúmenes o interpretaciones previas.

**Por qué**: Evita ambigüedad y cumple requisito auditoría de "fundamentación explícita". Cada CE tiene cita textual.

**Cómo**: Descarga RD 686/2010 (AULA Virtual Conselleria), art. 8, copiar íntegro a tabla con columnas:
- Código RA (0616 fila 1, 0616 fila 2, etc.)
- Enunciado RA (texto literal)
- Número CE dentro del RA (CE a, CE b, etc.)
- Texto CE (literal del RD)
- Tramo asignado (PI1 o PI2)

## Reparto 22 CE en PI1, 11 en PI2

**Criterio de asignación**:

| RA | Ubicación en PI1 | Justificación |
|----|------------------|---------------|
| **RA1** | 5 CE (a-e) en PI1, 2 CE (g-h) en PI2 | RA1 define "planificación inicial". PI1 trabaja planificación, no ejecución → (a-e) es diseño inicial. (g-h) requiere datos de ejecución → PI2. |
| **RA2** | 5 CE (a-e) en PI1, 1 CE (f) en PI2 | (a-e) configuración/capacidad. (f) es "mejorar según datos" → requiere ejecución en PI2. |
| **RA3** | 4 CE (a-d) en PI1, 1 CE (g) en PI2 | (a-d) es gestión conocimiento estático. (g) es "controlar cambios" → requiere iteración/ejecución en PI2. |
| **RA4** | **0 en PI1, 6 CE (a-f) en PI2** | RA4 es "control de calidad en ejecución". Primero no ejecuta → todo a PI2. |

**Importancia**: Ningún CE queda huérfano (asignado a dos módulos) ni duplicado. Evita que alumno "tenga que hacerlo en ambos".

## RA4 completo a PI2

**Excepcionalidad**: RA4 es el único que se asigna **completamente** a otro tramo.

**Justificación**: "Supervisar la ejecución del proyecto" solo tiene sentido en ejecución. PI1 es diseño; no hay "ejecución que supervisar". 

**Riesgo**: Si PI2 no lo adopta en su guía, el reparto es promesa incumplida. **Coordinación urgente**.

## Notas de implementación

- **Tabla pública en `src/index.md`, líneas ~200-250** — versión final con 4 RA + 33 CE.
- **Leyenda de tramos** en encabezado de tabla — explica por qué cada CE va a su lugar.
- **Si auditoría pregunta "dónde está X"**: Grepp por código RA (0616_1a, 0616_1b, etc.) en tabla.
- **Si se descubre CE que el alumno no ve**: Buscar en "Actividades evaluables" (línea ~500) si hay trazabilidad.
