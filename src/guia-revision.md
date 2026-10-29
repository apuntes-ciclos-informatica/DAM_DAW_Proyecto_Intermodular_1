---
title: Guía didáctica PI1 · versión en revisión
head:
  - - meta
    - name: robots
      content: noindex, nofollow
---

# Guía Didáctica PI1

::: warning Versión en revisión
Esta es la versión revisada de la guía, pendiente de aprobación. La guía vigente es la de la [página principal](./index.md).
:::

## Proyecto Intermodular I

::: tip Información del Curso

**Profesor:** Guillermo Garrido - Alfredo Oltra

**Ciclo Formativo:** Desarrollo de Aplicaciones Web (DAW) y Desarrollo de Aplicaciones Multiplataforma (DAM)

**Familia Profesional:** Informática

**Curso:** Primero

**Horas semanales:** 1 hora (modalidad online)

**Horas totales:** 34 horas (de las 2000 del ciclo formativo)

**Año Académico:** 2026-2027

**Centro:** Centro Específico de Educación a Distancia de la Comunitat Valenciana (CEEDCV)

<table>
<tr>
<td><img src="/img/logo-centro.png" alt="Logo Centro" width="150"/></td>
<td><img src="/img/logo-gva.png" alt="Logo GVA" width="150"/></td>
</tr>
</table>

:::

::: info Descripción del Curso

En este módulo aprenderás a **definir un proyecto informático antes de construirlo**: cómo se decide qué va a hacer, cómo se organiza el trabajo con metodologías ágiles, cómo se dibuja con diagramas y cómo se documenta y se explica.

El proyecto que harás es **documental**: **aquí no se programa**. Escribir el código llega en el Proyecto Intermodular II, en segundo curso, y este módulo es el paso previo.

  > Aunque las líneas generales se mantendrán durante todo el curso, esta guía es un documento vivo que puede ir actualizándose (básicamente aclaraciones) a lo largo del curso. Todas las modificaciones serán notificadas a través del foro de _Novedades_ del aula del módulo.
:::

::: details Vocabulario del módulo

Este módulo llama a las cosas por el nombre que reciben **fuera del aula**, en una
empresa. Puede que no te suenen todavía, así que aquí están todas juntas:

| Palabra | Qué es aquí |
|:---|:---|
| **MVP** | La versión más pequeña de tu idea que ya sirve para algo. Lo que entra, y lo que dejas fuera a propósito. |
| **Data room** | Tu repositorio con toda la documentación del proyecto. Es el expediente que alguien leería antes de invertir en tu idea. |
| **One-pager** | El resumen del proyecto en una sola página. |
| **Píldora** | Un vídeo corto, de 90 segundos, en el que cuentas cómo va tu proyecto. |
| **Pitch** | El vídeo final, de 2 a 4 minutos y sin audio, con el que vendes tu proyecto: en el Demo Day lo cuentas tú en directo. |
| **Demo Day** | La prueba presencial en la que expones tu pitch y defiendes el proyecto en una mesa redonda, ante el profesor del módulo y tus compañeros de turno. |
| **Due diligence** | Las preguntas que te hace el profesor sobre tu propio proyecto, en la mesa redonda del Demo Day, para comprobar que de verdad lo entiendes. |
| **Stack** | El conjunto de tecnologías con las que construirías el proyecto. |
| **Repositorio** | La carpeta de tu proyecto alojada en GitHub, que guarda todos los cambios que vas haciendo. |

No hace falta que te las aprendas ahora: cada una se explica en su sesión.

:::

::: tip Lo esencial

* **Qué entregas y cuándo:** [Entregas y Seguimiento del Proyecto](#entregas-y-seguimiento-del-proyecto) y [Calendario](#calendario).
* **Cómo se supera y qué condiciones hay:** [Evaluación](#evaluacion) y [Principios y Condiciones de la Evaluación](#principios-y-condiciones-de-la-evaluacion).
* **Cómo se calcula tu nota:** [Cómo se calcula tu nota](#como-se-calcula-tu-nota).
* **Si no lo superas:** [Segunda convocatoria](#segunda-convocatoria).

:::

## Objetivos de Aprendizaje {.animate-title}

En este módulo trabajarás competencias profesionales y personales que te preparan para tu futura vida laboral.

::: details Objetivos Generales del Curso

Los objetivos generales de este módulo formativo son los siguientes:

 **OG1: Planificar y Gestionar el Proyecto Técnico**: 

Análisis de necesidades, definición del alcance, planificación de fases y organización
del trabajo aplicando **metodologías ágiles** y herramientas de gestión profesional.

---

**OG2: Modelar y Documentar la Solución mediante Diagramas**:

Representar el proyecto con los diagramas adecuados —casos de uso, actividades y
entidad/relación— e interpretarlos correctamente, de modo que la solución quede
descrita antes de escribir una sola línea de código.

---

**OG3: Elaborar y Publicar la Documentación del Proyecto**:

Redactar la memoria del proyecto empleando **lenguajes de marcas**, convertirla a
formato web y publicarla, cuidando la estructura, la corrección y la presentación.

---

**OG4: Utilizar Herramientas Profesionales de Desarrollo Colaborativo**:

Emplear un **sistema de control de versiones** y un repositorio remoto para organizar
el trabajo, gestionar las tareas del proyecto y mantener trazabilidad de los cambios.

:::

### Competencias a Desarrollar

El módulo desarrolla dos tipos de competencias: las **transversales**, que sirven en cualquier trabajo, y las **técnicas**, propias de la informática.

---

### Competencias Transversales

Son las que se te van a pedir en cualquier empresa, trabajes de lo que trabajes.

::: details Competencias Transversales

* **Análisis y Resolución de Problemas:** Detectar qué problema hay que resolver y **proponer una solución técnica realista, explicando por qué es esa y no otra**.
* **Trabajo en Equipo y Comunicación Profesional:** **Explicar decisiones técnicas con claridad**, por escrito y en voz alta, y saber cambiar el mensaje según hables con alguien técnico o con alguien que no lo es. Tiene su propia sesión y se practica en cada píldora.
* **Adaptación y Aprendizaje Continuo:** **Aprender herramientas nuevas por tu cuenta** —control de versiones, tableros de proyecto, metodologías ágiles— y mantenerte al día.
* **Autonomía, Iniciativa y Gestión de Proyectos:** **Planificar tus tareas**, organizar tu tiempo y resolver los imprevistos sin esperar a que alguien te lo diga.
:::

### Competencias Técnicas del Módulo

Estás en **primer curso**, y todavía no dominas las tecnologías de desarrollo. Por eso el
proyecto no te pide programar: te pide *entender, dibujar, organizar, documentar y
explicar* un proyecto informático. Son las mismas competencias para **DAW y DAM**.

::: details Competencias Técnicas

* **Análisis y especificación de requisitos:** Identificar una necesidad real,
  delimitar el alcance de una solución viable y expresarla como **historias de
  usuario** con criterios de aceptación.
* **Modelado mediante diagramas:** Representar el sistema con **diagramas de casos
  de uso, de actividades y entidad/relación**, e interpretar correctamente los
  diagramas de otros.
* **Organización del trabajo con herramientas profesionales:** Utilizar **Git y un
  repositorio remoto** para versionar el proyecto, y convertir las historias de
  usuario en tareas gestionadas en un **tablero de proyecto**.
* **Elaboración de documentación técnica:** Redactar la memoria del proyecto con
  **lenguajes de marcas**, convertirla a formato web, personalizar su presentación
  y publicarla.
* **Comunicación técnica:** Explicar y defender oralmente las decisiones tomadas,
  adaptando el discurso a interlocutores técnicos y no técnicos.

:::

### Resultados de aprendizaje

Los resultados de aprendizaje y los criterios de evaluación de este módulo son los que fijan los reales decretos de cada título: el **RD 686/2010** para DAW (módulo 0616) y el **RD 450/2010**, en la redacción del **RD 405/2023**, para DAM (módulo 0492).

El PI1 evalúa **diez** de estos criterios, marcados con ✅ en la columna PI1: del RA1, el c y el f; del RA2, el b, el c, el d, el h y el i, y del RA3, el a, el e y el f. El PI2 evalúa los mismos y, además, el b y el c del RA4.

::::: details RA1

:::: tabs
== DAW (0616)

**RA1.** Identifica necesidades del sector productivo, relacionándolas con proyectos tipo que las puedan satisfacer.

| CE | Texto literal | PI1 |
| :---: | :--- | :---: |
| a | Se han clasificado las empresas del sector por sus características organizativas y el tipo de producto o servicio que ofrecen. | |
| b | Se han caracterizado las empresas tipo indicando la estructura organizativa y las funciones de cada departamento. | |
| c | Se han identificado las necesidades más demandadas a las empresas. | ✅ |
| d | Se han valorado las oportunidades de negocio previsibles en el sector. | |
| e | Se ha identificado el tipo de proyecto requerido para dar respuesta a las demandas previstas. | |
| f | Se han determinado las características específicas requeridas al proyecto. | ✅ |
| g | Se han determinado las obligaciones fiscales, laborales y de prevención de riesgos y sus condiciones de aplicación. | |
| h | Se han identificado posibles ayudas o subvenciones para la incorporación de nuevas tecnologías de producción o de servicio que se proponen. | |
| i | Se ha elaborado el guión de trabajo que se va a seguir para la elaboración del proyecto. | |

== DAM (0492)

**RA1.** Identifica necesidades del sector productivo, relacionándolas con proyectos tipo que puedan satisfacerlas.

| CE | Texto literal | PI1 |
| :---: | :--- | :---: |
| a | Se han clasificado las empresas del sector por sus características organizativas y el tipo de producto o servicio que ofrecen. | |
| b | Se han caracterizado las empresas tipo indicando la estructura organizativa y las funciones de cada departamento. | |
| c | Se han identificado las necesidades más demandadas a las empresas. | ✅ |
| d | Se han valorado las oportunidades de negocio previsibles en el sector. | |
| e | Se ha identificado el tipo de proyecto requerido para dar respuesta a las demandas previstas. | |
| f | Se han determinado las características específicas del proyecto según los requerimientos. | ✅ |
| g | Se han determinado las obligaciones fiscales, laborales y de prevención de riesgos y sus condiciones de aplicación. | |
| h | Se han identificado posibles ayudas o subvenciones para la incorporación de las nuevas tecnologías de producción o de servicio propuestas. | |
| i | Se ha elaborado el guión de trabajo que se va a seguir para la elaboración del proyecto. | |

::::

:::::

::::: details RA2

:::: tabs
== DAW (0616)

**RA2.** Diseña proyectos relacionados con las competencias expresadas en el título, incluyendo y desarrollando las fases que lo componen.

| CE | Texto literal | PI1 |
| :---: | :--- | :---: |
| a | Se ha recopilado información relativa a los aspectos que van a ser tratados en el proyecto. | |
| b | Se ha realizado el estudio de viabilidad técnica del mismo. | ✅ |
| c | Se han identificado las fases o partes que componen el proyecto y su contenido. | ✅ |
| d | Se han establecido los objetivos que se pretenden conseguir identificando su alcance. | ✅ |
| e | Se han previsto los recursos materiales y personales necesarios para realizarlo. | |
| f | Se ha realizado el presupuesto económico correspondiente. | |
| g | Se han identificado las necesidades de financiación para la puesta en marcha del mismo. | |
| h | Se ha definido y elaborado la documentación necesaria para su diseño. | ✅ |
| i | Se han identificado los aspectos que se deben controlar para garantizar la calidad del proyecto. | ✅ |

== DAM (0492)

**RA2.** Diseña proyectos relacionados con las competencias expresadas en el título, desarrollando explícitamente las fases que lo componen.

| CE | Texto literal | PI1 |
| :---: | :--- | :---: |
| a | Se ha recopilado información relativa a los aspectos que van a ser tratados en el proyecto. | |
| b | Se ha realizado el estudio de viabilidad técnica del proyecto. | ✅ |
| c | Se han identificado las fases del proyecto especificando su contenido y plazos de ejecución. | ✅ |
| d | Se han establecido los objetivos que se pretenden conseguir identificando su alcance. | ✅ |
| e | Se han determinado las actividades necesarias para el desarrollo del proyecto. | |
| f | Se han previsto los recursos materiales y personales necesarios para realizar el proyecto. | |
| g | Se han identificado las necesidades de financiación para la puesta en marcha del proyecto. | |
| h | Se ha definido y elaborado la documentación necesaria para su diseño. | ✅ |
| i | Se han identificado los aspectos que se deben controlar para garantizar la calidad del proyecto. | ✅ |

::::

:::::

::::: details RA3

:::: tabs
== DAW (0616)

**RA3.** Planifica la ejecución del proyecto, determinando el plan de intervención y la documentación asociada.

| CE | Texto literal | PI1 |
| :---: | :--- | :---: |
| a | Se han secuenciado las actividades ordenándolas en función de las necesidades de ejecución. | ✅ |
| b | Se han determinado los recursos y la logística necesarios para cada actividad. | |
| c | Se han identificado las necesidades de permisos y autorizaciones para llevar a cabo las actividades. | |
| d | Se han determinado los procedimientos de actuación o ejecución de las actividades. | |
| e | Se han identificado los riesgos inherentes a la ejecución definiendo el plan de prevención de riesgos y los medios y equipos necesarios. | ✅ |
| f | Se han planificado la asignación de recursos materiales y humanos y los tiempos de ejecución. | ✅ |
| g | Se ha hecho la valoración económica que da respuesta a las condiciones de la implementación. | |
| h | Se ha definido y elaborado la documentación necesaria para la implementación o ejecución. | |

== DAM (0492)

**RA3.** Planifica la ejecución del proyecto, determinando el plan de intervención y la documentación asociada.

| CE | Texto literal | PI1 |
| :---: | :--- | :---: |
| a | Se han secuenciado las tareas en función de las necesidades de implementación. | ✅ |
| b | Se han determinado los recursos y la logística necesaria para cada tarea. | |
| c | Se han identificado las necesidades de permisos y autorizaciones para llevar a cabo las tareas. | |
| d | Se han determinado los procedimientos para ejecución de las tareas. | |
| e | Se han identificado los riesgos inherentes a la ejecución del proyecto, definiendo el plan de prevención de riesgos y los medios necesarios. | ✅ |
| f | Se ha planificado la asignación de recursos materiales y humanos según los tiempos de ejecución. | ✅ |
| g | Se ha hecho la valoración económica que da respuesta a las condiciones de la ejecución del proyecto. | |
| h | Se ha definido y elaborado la documentación necesaria para la ejecución del proyecto. | |

::::

:::::

> [!WARNING] RA4 se evalúa en PI2.
>
> El PI1 no evalúa el RA4. El PI2 evalúa dos de sus criterios, el **b** y el **c**, marcados en la tabla.

::::: details RA4

:::: tabs
== DAW (0616)

**RA4.** Define los procedimientos para el seguimiento y control en la ejecución del proyecto, justificando la selección de variables e instrumentos empleados.

| CE | Texto literal | PI2 |
| :---: | :--- | :---: |
| a | Se ha definido el procedimiento de evaluación de las actividades o intervenciones. | |
| b | Se han definido los indicadores de calidad para realizar la evaluación. | ✅ |
| c | Se ha definido el procedimiento para la evaluación de las incidencias que puedan presentarse durante la realización de las actividades, su posible solución y registro. | ✅ |
| d | Se ha definido el procedimiento para gestionar los posibles cambios en los recursos y en las actividades, incluyendo el sistema de registro de los mismos. | |
| e | Se ha definido y elaborado la documentación necesaria para la evaluación de las actividades y del proyecto. | |
| f | Se ha establecido el procedimiento para la participación en la evaluación de los usuarios o clientes y se han elaborado los documentos específicos. | |
| g | Se ha establecido un sistema para garantizar el cumplimiento del pliego de condiciones del proyecto cuando este existe. | |

== DAM (0492)

**RA4.** Define los procedimientos para el seguimiento y control en la ejecución del proyecto, justificando la selección de variables e instrumentos empleados.

| CE | Texto literal | PI2 |
| :---: | :--- | :---: |
| a | Se ha definido el procedimiento de evaluación de las actividades o intervenciones realizadas durante la ejecución del proyecto. | |
| b | Se han definido los indicadores de calidad para realizar la evaluación del proyecto. | ✅ |
| c | Se ha definido el procedimiento para el registro y evaluación de las incidencias que puedan presentarse durante la ejecución del proyecto. | ✅ |
| d | Se ha definido el procedimiento para la solución de las incidencias registradas. | |
| e | Se ha definido el procedimiento para la gestión y registro de los cambios en los recursos y en las tareas. | |
| f | Se ha establecido el procedimiento para la participación en la evaluación de los usuarios y se han elaborado documentos específicos. | |
| g | Se ha establecido un sistema para garantizar el cumplimiento del pliego de condiciones del proyecto cuando este existe. | |

::::

:::::

Por su **carácter integrador**, este proyecto es el lugar donde pones en juego resultados de aprendizaje de otros módulos del ciclo. La tabla siguiente detalla cuáles son.

:::: details Resultados de Aprendizaje específicos

### **Tabla de Módulos, RAs, CEs y Objetivos Asociados**

Estos resultados de aprendizaje **se trabajan en el proyecto y se califican en su propio módulo**, no en el PI1. Solo figuran los criterios que el proyecto permite verificar sin programar. La tabla vale para DAW y DAM.

| Módulo | Resultado de Aprendizaje (RA) | Criterios de Evaluación (CE) | OG |
| :--- | :--- | :--- | :--- |
| **0373 - Lenguajes de marcas y sistemas de gestión de información** | **RA1:** Reconoce las características de lenguajes de marcas analizando e interpretando fragmentos de código. | a, b, c, d, f, g, h | OG3 |
| | **RA2:** Utiliza lenguajes de marcas para la transmisión y presentación de información a través de la web analizando la estructura de los documentos e identificando sus elementos. | a, b, c, e, f, g, h | OG3 |
| | **RA5:** Realiza conversiones sobre documentos para el intercambio de información utilizando técnicas, lenguajes y herramientas de procesamiento. | a, b, c, f, g | OG3 |
| **0484 - Bases de datos** | **RA6:** Diseña modelos relacionales normalizados interpretando diagramas entidad/relación. | a, b, c, d, e | OG2, OG3 |
| **0487 - Entornos de desarrollo** | **RA1:** Reconoce los elementos y herramientas que intervienen en el desarrollo de un programa informático, analizando sus características y las fases en las que actúan hasta llegar a su puesta en funcionamiento. | b, f, g | OG1, OG4 |
| | **RA6:** Genera diagramas de comportamiento valorando su importancia en el desarrollo de aplicaciones y empleando herramientas específicas. | a, b, e, f | OG2 |

::::



## Estructura del Temario {.animate-title}

### Contenidos

El curso tiene dos fases: primero los contenidos, después la implementación de las primeras fases del proyecto.

:::: details Fase 1 · Las siete sesiones de contenido

### Las siete sesiones

Las siete sesiones son **iguales para DAW y DAM**. En ninguna se programa: se analiza, se
organiza, se dibuja, se documenta y se explica un proyecto propio.

| Sesión | Título | Resultados de aprendizaje que trabaja |
|:---:|:---|:---|
| **1** | Fundamentos de la gestión de proyectos | PI RA2 (c, d) · 0487 RA1 (b, f) |
| **2** | Comunicación verbal y no verbal | Competencia transversal de comunicación |
| **3** | Metodologías Ágiles. Scrum | PI RA3 (a) · 0487 RA1 (g) |
| **4** | Análisis de requisitos e historias de usuario | PI RA1 (c, f) y RA2 (h, i) |
| **5** | Organización del proyecto con Git y GitHub Projects | PI RA3 (a, f) |
| **6** | Diagramas del proyecto | PI RA2 (h) · 0487 RA6 (a, b, e, f) · 0484 RA6 (a, b, c, d, e) |
| **7** | Documentación del proyecto con Markdown y VitePress | PI RA2 (h) y RA3 (e) · 0373 RA1, RA2 y RA5 |

### Contenidos por Sesión

::: details Qué se ve en cada sesión

#### Sesión 1: Fundamentos de la gestión de proyectos

* ¿Qué es un proyecto? Ciclo de vida y triple restricción.
* Roles clave en un equipo técnico moderno.
* Qué es un MVP y por qué se acota el alcance.
* Del MVP al lanzamiento: iniciación, planificación ágil, el ciclo de construir, medir y
  aprender, y el cierre del proyecto.

Esta sesión **no lleva píldora**: primero necesitas la sesión 2 para saber cómo grabarla.

#### Sesión 2: Comunicación verbal y no verbal

* Cómo se estructura una explicación breve: qué va primero y qué sobra.
* Voz, ritmo y pausas. Qué hacer con las manos y con la mirada.
* Errores típicos al grabarse: leer, ir deprisa, empezar por el detalle.
* Cómo se prepara una respuesta cuando no sabes qué te van a preguntar.
* Diseño de diapositivas e impacto visual.
* Enfoque comercial frente a técnico: adaptar el mensaje a quien escucha.
* Ensayo, tiempos y cierre.

🎥 **Píldora 1 (90 s)**: ¿qué problema resuelves, para quién, y **cómo lo resuelve hoy
esa gente sin ti**? Cuéntalo sin tecnicismos, como si hablaras con alguien que no es
informático.

> Es la primera píldora y la que estrena todo lo anterior: **aplicas lo que acabas de ver
> en esta sesión sobre la teoría de la sesión 1**. Estructura, voz y ritmo puestos al
> servicio de explicar tu proyecto por primera vez.

#### Sesión 3: Metodologías Ágiles. Scrum

* Manifiesto Ágil y diferencias con las metodologías tradicionales.
* Framework Scrum: roles, eventos y artefactos.

🎥 **Píldora 2 (90 s)**: eres el responsable técnico del proyecto y un inversor te
pregunta cómo lo construirías. Explica cómo organizarías el trabajo: qué metodología
seguirías y **por qué encaja con tu proyecto**, qué perfiles necesitarías en el equipo
y cómo repartirías el trabajo en el tiempo.

#### Sesión 4: Análisis de requisitos e historias de usuario

* Requisitos funcionales y no funcionales.
* Historias de usuario y criterios de aceptación.
* Priorización del alcance: qué es imprescindible y qué puede esperar (método MoSCoW).

🎥 **Píldora 3 (90 s)**: ¿qué hará tu producto y, sobre todo, **qué no hará**? Elige
tu historia de usuario más importante y explica **cuándo la darías por terminada**, es
decir, sus criterios de aceptación.

#### Sesión 5: Organización del proyecto con Git y GitHub Projects

* Control de versiones: qué es un repositorio, un commit y un historial.
* Repositorios remotos y trabajo colaborativo en GitHub.
* Conversión de historias de usuario en tareas y gestión del tablero en GitHub Projects.
* Publicación automática del sitio del proyecto.

🎥 **Píldora 4 (90 s)**: comparte pantalla con tu repositorio y tu tablero. Enseña
**cómo has convertido una historia de usuario en tareas concretas**, en qué estado está
el proyecto y qué harás a continuación.

#### Sesión 6: Diagramas del proyecto

* Diagramas de casos de uso: quién usa el sistema y para qué.
* Diagramas de actividades: cómo fluye un proceso.
* Diagramas entidad/relación: qué información guarda la aplicación, y su paso a tablas,
  campos y claves.
* Herramientas de diagramación.

🎥 **Píldora 5 (90 s)**: elige uno de tus diagramas, recórrelo en voz alta y explica
**una decisión que tomaste al dibujarlo y qué alternativa descartaste**. Un diagrama que
no sabes narrar no está terminado.

#### Sesión 7: Documentación del proyecto con Markdown y VitePress

* Lenguajes de marcas: qué son y para qué sirven. Markdown frente a HTML.
* Estructura de un documento HTML: etiquetas y atributos principales. HTML dentro de
  Markdown, cuando el formato no llega.
* De Markdown a HTML: el proceso de conversión y publicación.
* Personalización del aspecto con hojas de estilo.
* Validación del HTML y del CSS resultantes.
* Estructura de una memoria técnica.

🎥 **Pitch final (2-4 min, sin audio)**: con el sitio ya publicado, prepara el vídeo comercial
del proyecto, que en el Demo Day contarás tú en directo: por qué debería existir, **qué lo hace distinto de lo que ya existe** y **qué
pedirías** para poder llevarlo a cabo.

:::

::::

::: details Fase 2 · Implementación de las primeras fases del proyecto

Las primeras fases de tu proyecto son el análisis y el diseño, y en esta fase las completas, **sin programar**:

* **Diseño del sistema**: sus componentes y cómo se comunican, los formatos de intercambio de datos (JSON, XML…) y dónde y cómo se guardan los datos.
* **Marco de pruebas**: qué tipos de pruebas verificarán el producto (unitarias, de integración, de aceptación, A/B…), qué verifica cada tipo y qué historias cubre, con qué herramientas se harán y cómo se registrarán las incidencias. Las pruebas no se escriben: el marco se rellena en PI2.
* **Calidad del código**: qué patrones de refactorización y qué control de versiones se aplicarán cuando llegue el código.

Lo trabajas con las tutorías individuales que pidas, hasta la entrega final y el Demo Day. En esta fase se trabaja el PI RA2 (b).
:::

### Calendario

| Semana | Qué toca |
|:---|:---|
| 14-09-26 | Presentación del módulo y de las dos formas de cursarlo |
| 21-09-26 | Sesión 1 · Fundamentos de la gestión de proyectos |
| 19-10-26 | Sesión 2 · Comunicación verbal y no verbal |
| 02-11-26 | Sesión 3 · Metodologías ágiles. Scrum |
| 23-11-26 | Sesión 4 · Análisis de requisitos e historias de usuario |
| 14-12-26 | Sesión 5 · Organización del proyecto con Git y GitHub Projects |
| Enero de 2027 | Revisión voluntaria de tu material, sin nota |
| 18-01-27 | Sesión 6 · Diagramas del proyecto |
| 08-02-27 | Sesión 7 · Documentación del proyecto con Markdown y VitePress |
| 01-03-27 | Fase 2 · Implementación de las primeras fases del proyecto |
| Mayo de 2027 | Convocatoria ordinaria: entrega final y Demo Day |
| Mayo y junio de 2027 | Programa formativo específico |
| Junio de 2027 | Segunda convocatoria: entrega final y Demo Day |

Las píldoras y el pitch se pueden entregar hasta la fecha de la entrega final. Las fechas exactas de entrega y los turnos del Demo Day se publican en el aula virtual.

## Metodología {.animate-title}

La metodología utilizada en el módulo es _Aprendizaje Basado en Retos_. El módulo te da los contenidos teóricos de los primeros pasos para crear un proyecto, y sobre ellos construyes uno propio: primero lo defines, después lo documentas y al final lo defiendes.

::: tip PI1 + PI2

El Proyecto Intermodular es **un solo módulo que se cursa a lo largo de todo el ciclo**, en
paralelo al resto de módulos. PI1 es su **primer tramo**: sienta las bases que, junto con
los contenidos del resto de módulos, permitirán desarrollar el proyecto completo en PI2.

Por eso **este tramo se puede cursar de dos formas**, y lo decides al principio:

* **Solo PI1**, con un proyecto documental propio de este tramo.
* **PI1 junto con PI2**, con un **único proyecto** que sirve para los dos tramos y se
  entrega y se defiende una sola vez.

Eliges la forma en la **tarea inicial del aula virtual**; si cursas también el PI2, comunícaselo a su profesorado. Puedes cambiarla **hasta la revisión de enero**. Si cursas los dos tramos y anulas la matrícula del PI2 o lo abandonas, pasas a cursar solo PI1 y entregas lo que pide, en la fecha límite de la convocatoria.

La segunda opción es la recomendable si te corresponde cursar ambos: evita duplicar el trabajo. Los detalles están en [Entregas y Seguimiento del Proyecto](#entregas-y-seguimiento-del-proyecto).

> 💡 Si cursas **solo PI1**, elige el proyecto que quieras: no tiene que encajar en ninguno de los itinerarios del PI2. En segundo, el proyecto se hace en uno de los itinerarios que ofrezca el PI2 ese curso. Si el tuyo encaja, puedes seguir con él; si no, tendrás que empezar otro. Seguir con el mismo proyecto solo está garantizado si cursas los dos tramos a la vez.

:::

::: details Tutorías

Este módulo solo tiene **tutorías individuales**, por correo, por teléfono o por videoconferencia en Teams, y no hay tutorías colectivas. Son **voluntarias**: las pides tú, con cita previa, cuando tengas dudas sobre el módulo o sobre tu proyecto. En la segunda fase del curso conviene pedir una cada quince días para revisar tus avances y tu plan de trabajo, aunque la frecuencia depende de tu ritmo y de lo cerca que esté la entrega.

:::

## Entregas y Seguimiento del Proyecto


La primera pregunta del curso es **¿cursas PI2 este año?**, porque la respuesta cambia
qué entregas. Los contenidos, los resultados de aprendizaje y la rúbrica son idénticos en
ambos casos; lo que cambia es de dónde sale el trabajo que se califica.

| | **Solo PI1** | **PI1 + PI2** |
|:---|:---|:---|
| **Tu proyecto** | Un proyecto documental propio de este tramo | **Un único proyecto** para los dos tramos |
| **Data room** | Lo construyes para PI1 | Es la memoria de PI2 |
| **Píldoras** | Cinco vídeos de 90 s | No se piden |
| **Pitch** | Vídeo comercial de 2-4 min, sin audio, que cuentas en directo | El vídeo que pide PI2, que se califica allí |
| **Defensa** | El Demo Day de PI1 | La defensa ante tribunal de PI2 |

> [!IMPORTANT] Cómo se supera el PI1
> El Proyecto Intermodular es **un solo módulo** que se reparte entre primero y segundo. PI1 es su primer tramo y **se supera con un 5 o más**.
>
> Si cursas solo PI1, para llegar a ese 5 tienes que **superar los cuatro instrumentos**, cada uno con **al menos un 5**: data room, píldoras, pitch y Demo Day. Si uno no llega al 5, el PI1 no se supera, aunque la media de los cuatro sí llegue. Si cursas PI1 y PI2 a la vez, tu nota de PI1 sale de la programación del PI2.
>
> Superar el PI1 es **requisito para cursar el PI2 por separado**.
>
> Tu calificación de primero es **orientativa**: consta en el acta de cada evaluación y forma parte de la calificación final del módulo, que se emite al terminar segundo. Por eso **arrastra**: si tu trabajo de primero es flojo, tendrás que compensarlo en segundo.

### Las dos entregas

::: details 📌 Entrega Anticipada · Descripción del proyecto

Una **descripción breve de tu proyecto**: qué problema resuelve, para quién, y qué
entraría en el MVP. Las especificaciones concretas y la fecha están en el aula virtual.

Sirve para una sola cosa: comprobar que tu proyecto es **viable y adecuado** al módulo
antes de que dediques meses a documentarlo.

**Cómo se aprueba.** La aprueba el profesor con tres criterios: que parta de un **problema real y acotado**, que su **MVP sea viable** con lo que sabes en primero y que su **alcance se pueda documentar** en el curso. Te responde por escrito en el aula virtual en **10 días hábiles**. Si la rechaza, te dice qué cambiar y puedes reenviarla. Si no estás de acuerdo con el rechazo, puedes reclamar por el procedimiento de la programación de ciclo.

> [!TIP] La fecha anticipada no es obligatoria, la propuesta aprobada sí
> La propuesta **se puede entregar hasta la fecha límite de la convocatoria**. Además hay
> una **fecha de entrega anticipada**, que no es obligatoria y **no tiene nota propia**:
> la descripción que escribes aquí acaba siendo parte del data room, y se califica allí.
>
> Lo obligatorio es que **la propuesta esté aprobada**: es un **requisito del data room**.
> Siempre puedes entregar y presentarte, pero sin propuesta aprobada el data room no se
> supera, y el PI1 tampoco. De ahí salen dos momentos:
>
> * **Fecha anticipada** — Si entregas aquí y la propuesta no se aprueba, tienes por
>   delante el resto del curso para corregirla y reenviarla.
> * **Fecha límite de la convocatoria** — Si para entonces tu propuesta aún no está
>   validada, el profesor la valida con la entrega final, con los mismos tres criterios.
>   Si no los cumple, el data room no se supera.
>
> Entregar en la fecha anticipada es la única forma de saber **antes** de ponerte a
> trabajar que tu proyecto sirve. Quien no lo haga se arriesga a descubrir al final que su propuesta no se aprueba, cuando ya no hay tiempo de cambiarla.

:::

::::: details 📦 Entrega final de curso · Todo el proyecto

En una única fecha se entrega **todo lo que se califica**:

:::: tabs
== Solo PI1

* En la tarea de @ules, la **URL del repositorio de GitHub**, con la memoria publicada y el
  tablero del proyecto, y un **ZIP de tu repositorio** que incluya la carpeta oculta `.git`,
  para que vaya también el historial. Ese ZIP es la copia que se evalúa: es el _data room_.
* Las **cinco píldoras** y el **pitch**, en la plataforma institucional que se indique en
  el aula.

== PI1 + PI2

* La **memoria de PI2** y **URL del repositorio de GitHub**, en la fecha y la forma que fije PI2. No hay ninguna entrega adicional para PI1.

::::

> [!CAUTION] Fecha límite
> Esta fecha es **límite y de obligado cumplimiento**. Si tienes circunstancias personales, laborales o familiares que puedan dificultarte la entrega ese día, planifícate para realizarla antes.

:::::

## Evaluación {.animate-title}

La evaluación es **continua**: no hay un examen final de contenidos, sino un proyecto que vas construyendo durante el curso y que defiendes en persona al terminar.

Lo que se califica son los **resultados de aprendizaje**: lo que debes ser capaz de hacer cuando acabes el módulo.

Al principio del curso hay una **evaluación inicial**, sin nota. En **enero no hay evaluación**: si quieres, puedes aportar el material que lleves hecho (la propuesta y las píldoras) para que el profesor lo revise y te dé su opinión, sin nota y sin prueba presencial, en las fechas que publique el aula. La calificación de cada convocatoria sale de la entrega final y del Demo Day.

> [!CAUTION] ¡ATENCIÓN IMPORTANTE!
>
> ### Principios y Condiciones de la Evaluación
>
>* **Aprobado de Módulos Previos:** Para superar PI1 necesitas tener aprobados los módulos cuyos resultados de aprendizaje se trabajan en el proyecto: **Lenguajes de marcas**, **Bases de datos** y **Entornos de desarrollo**. Si al llegar la prueba final no los tienes aprobados, se te anulará la matrícula del PI1.
>* **Alumnado de PI1 y PI2 simultáneo:** Realizas **un único proyecto** para los dos módulos, con una sola memoria y una sola defensa. Tu nota de PI1 sale de la programación del PI2. Ponte en contacto con el profesorado de PI2 al inicio del curso para ajustar el calendario, que es el de PI2.
>* **Entregas y Plazos:** Si cursas solo PI1, tu nota sale de los **cuatro instrumentos** de la tabla siguiente, y hay que superar los cuatro. La fecha de la entrega final es **inamovible** y no se admiten entregas fuera de plazo en ningún caso.
 >
 >   **No haber seguido el curso de forma continua, o no haber entregado en la fecha anticipada, no impide presentarse a ninguna de las dos convocatorias.** Todo lo que se califica se entrega en la entrega final y se defiende en la prueba presencial. Eso sí, no puedes pasar **30 días seguidos sin actividad** sin causa justificada: la dirección puede anularte la matrícula. Antes, el profesorado se pondrá en contacto contigo.
>* **Comunicación de resultados:** Si no superas el PI1, se te comunicará la calificación y el **motivo** por el que no lo has superado. Puedes pedir aclaraciones y la revisión de cualquier instrumento, incluida la grabación del Demo Day. 
>* **Fraude:** Si copias, presentas como tuyo un trabajo que no lo es o usas la inteligencia artificial donde no está permitido, en una entrega o en el Demo Day, **pierdes la evaluación de esa convocatoria**: el PI1 se califica con un **1** y la convocatoria cuenta como utilizada. Antes de decidirlo tienes diez días hábiles para alegar, y la decisión se te comunica por escrito y motivada; puedes reclamarla. No conservas nada de esa convocatoria ni de una anterior. Si cursas PI1 + PI2, rige lo que diga sobre el fraude la programación del PI2. Puedes usar la IA para aprender, para revisar lo que escribes y para crear contenido multimedia, no para generar la documentación ni para que haga el trabajo por ti. Si la usas, indica en la memoria para qué y con qué herramienta.
>* **Adaptaciones:** Si tienes necesidades educativas específicas, díselo al profesorado al empezar el curso. Se pueden adaptar los tiempos, el formato de los vídeos y las condiciones del Demo Day, sin cambiar los resultados de aprendizaje ni los criterios, y nunca para bajar tu nota.

### El proyecto se presenta a inversores

La evaluación de este módulo adopta el marco con el que se presenta un proyecto real
ante una empresa o un inversor. No se entrega "un trabajo": se prepara el expediente
que alguien pediría antes de poner dinero en la idea, y se defiende ante un comité.

Por eso los instrumentos no llevan nombre de examen, sino el que reciben fuera del aula.

### Instrumentos de Evaluación y Calificación

:::: tabs
== Solo PI1

| Instrumento | Qué entregas | Peso | Nota mínima |
|:---|:---|:---:|:---:|
| **Data room** | Tu repositorio, entregado en @ules (su URL y un ZIP con su historial), con la memoria publicada, el tablero del proyecto y el _one-pager_. | 40 % | ≥ 5 |
| **Píldoras** <br>_(founder updates)_ | Cinco vídeos breves, de 90 segundos, uno por cada sesión de la 2 a la 6. | 20 % | ≥ 5 |
| **Pitch** | El vídeo final de carácter comercial, de 2 a 4 minutos y sin audio, que expones en directo en el Demo Day. | 15 % | ≥ 5 |
| **Demo Day** | La defensa presencial: exposición del pitch y mesa redonda, con la _due diligence_ del profesor sobre tu proyecto y preguntas de tus compañeros. | 25 % | ≥ 5 |

== PI1 + PI2

Entregas una sola memoria y haces una sola defensa, las del PI2. Tu nota de PI1 sale de la programación del PI2, con sus instrumentos y sus pesos.

::::

### Desglose de los Instrumentos de Evaluación

> El desglose es para quien cursa **solo PI1**. Si cursas **PI1 + PI2**, tus instrumentos y tu defensa son los del PI2, con el formato que fija su programación.

::: details 1. Data room — 40 %

Tu repositorio es el expediente del proyecto. La memoria se publica como sitio web y se
organiza **como la pediría un inversor**, no como un índice académico:

* **One-pager**: resumen ejecutivo en una página. Lo primero que se lee y lo último que
  se escribe. Debe poder **exportarse a PDF** desde el propio sitio.
* **Problema y oportunidad**: a quién le duele esto y análisis de la competencia.
* **Solución y alcance**: el MVP, y de forma explícita **qué queda fuera y por qué**.
* **Qué hará el producto y cómo se comprobará**: historias de usuario con criterios de aceptación,
  y el **plan de pruebas**, el marco de la fase 2.
* **Cómo funciona**: diagramas de casos de uso, de actividades y entidad/relación, con las
  tablas, los campos y las claves del diseño lógico.
* **Arquitectura, stack propuesto** y su **viabilidad técnica**: los componentes del sistema,
  los formatos de intercambio y el almacenamiento de los datos, por qué esas tecnologías y
  por qué el proyecto se puede construir con ellas.
* **Plan de ejecución**: las **fases** del proyecto, su contenido y sus plazos; el tablero de GitHub
  Projects, con las historias convertidas en tareas y su estado al día; los **riesgos** y
  cómo prevenirlos, y los **medios y equipos** necesarios.
* **Datos y cumplimiento**: qué información personal manejaría la aplicación y qué
  implica el **RGPD**, el reglamento europeo de protección de datos. No puntúa, pero es
  **requisito**: si no llega al nivel 2 de la rúbrica, el data room no se supera.

El **README del repositorio** es su portada: es lo primero que ve quien llega, y debe
permitir entender el proyecto y encontrar la memoria publicada.

Además de sus elementos, el data room tiene **tres requisitos** que no puntúan, pero sin los que no se supera: tu **propuesta aprobada** (ver la entrega anticipada), «datos y cumplimiento» y el historial del repositorio.

**El sitio publicado se evalúa también como documento web**, no solo por su contenido:

* Debe tener **presentación propia**: al menos una hoja de estilos personalizada sobre
  la plantilla base, no la apariencia por defecto.
* Su **HTML y su CSS deben pasar un validador** sin errores.

> ⚠️ El **historial del repositorio forma parte de la evidencia**: debe permitir atribuirte
> el trabajo y seguir cómo fuiste tomando las decisiones. No se exige una cadencia concreta de commits ni trabajar todas las semanas.
>
> No puntúa, pero es **requisito**: si no se cumplen estos dos hechos, el data room no se supera. **(1)** El repositorio está en tu cuenta y los commits son tuyos; **(2)** el historial contiene al menos un commit por cada sección de la memoria, de modo que pueda seguirse cómo se construyó.

> [!TIP] Usa una cuenta de GitHub que no te identifique
> GitHub es una plataforma pública y ajena al centro, y tu memoria se publica en internet. Conviene que te registres con un **usuario y un nombre que no te identifiquen**. Si usas tus datos reales, tu nombre quedará asociado públicamente a tu proyecto, y lo haces bajo tu responsabilidad. Trabajes con la cuenta que trabajes, la copia que se evalúa la entregas en @ules. Sea cual sea tu cuenta, la asocias a ti en una tarea inicial del aula virtual, que solo ve el profesorado.

:::

::: details 2. Píldoras — 20 %

**Cinco vídeos de 90 segundos**, uno por cada sesión de la 2 a la 6. Son los
ejercicios de preparación de la defensa que cierran cada sesión, grabados en lugar de
solo ensayados. La sesión 1 no lleva píldora —hace falta antes la sesión 2, que enseña a
grabarlas— y el cierre de la sesión 7 es el propio pitch.

| Tras la sesión | Píldora |
|:---:|:---|
| **2** | ¿Qué problema resuelves, para quién, y cómo se resuelve hoy sin ti? |
| **3** | Como responsable técnico: ¿cómo organizarías el trabajo y con qué perfiles? |
| **4** | ¿Qué hará tu producto, qué no hará, y cuándo está terminada una historia? |
| **5** | Enseña repositorio y tablero: de la historia de usuario a las tareas |
| **6** | Recorre un diagrama: una decisión que tomaste y la alternativa que descartaste |

Cada píldora es un elemento de la rúbrica: si falta una, el instrumento no se supera.

No se busca producción audiovisual: se busca que sepas explicar tu proyecto como se indica en la sesión 2 y en el tiempo establecido.

**Puedes grabarlas al ritmo del curso o las cinco al final**. Se califican igual en ambos casos, y
la fecha límite para las cinco es la de la entrega final. Repartirlas a lo largo del
curso es menos esfuerzo que grabarlas de golpe, te da la retroalimentación del profesor en cada una y te lleva
al Demo Day con cinco ensayos hechos.

:::

::: details 3. Pitch — 15 %

Un vídeo de **2 a 4 minutos, sin audio**, de carácter comercial: por qué este proyecto debería
existir, a quién le sirve y por qué merece la pena apostar por él. **En el Demo Day se
proyecta y lo cuentas tú en directo**: el vídeo pone las imágenes y tú, la voz. Por eso el
pitch se califica allí, con el vídeo y tu exposición juntos.

Aquí no se califica si el proyecto está bien documentado — de eso se ocupa el data room.
Se califica **cómo lo vendes**. Es donde demuestras la forma de comunicar y practicaste en cada píldora.

Se puntúa con la rúbrica común sobre **cinco elementos**:

| Elemento | Qué se comprueba |
|:---|:---|
| **Estructura** | Tu exposición abre con el problema, presenta la solución y cierra con una petición concreta, y el vídeo la acompaña. |
| **Adecuación al público** | Se explica sin tecnicismos innecesarios y se justifica por qué el proyecto merece la pena. |
| **Diferenciación** | Dejas claro qué hace distinto a tu proyecto de lo que ya existe, como si quisieras convencer a un grupo de inversores. |
| **Creatividad** | El vídeo usa recursos visuales que hacen la exposición más atractiva y memorable. |
| **Ejecución** | El vídeo dura de 2 a 4 minutos y no lleva audio; tu exposición se ajusta a él, se entiende y no la lees. |

Tiene **nota mínima**, como el resto de instrumentos: saber vender un proyecto no es un
adorno del módulo, es una de las competencias que evalúa.

Se entrega en la entrega final, antes del Demo Day, porque **se proyecta allí**.

:::

::: details 4. Demo Day — 25 %

La prueba presencial, en el centro. El profesor organiza los turnos según las necesidades del grupo y los publica con antelación en el aula virtual; el orden se **sortea** el mismo día. Tu exposición dura **hasta 4 minutos**, y en la mesa redonda todos tenéis el mismo tiempo. El tribunal es **el profesor del módulo**. La sesión **no es pública**: solo asisten los alumnos del turno y el profesor. Se **graba**, para evaluarla y por si pides su revisión; se avisa a todos los asistentes y la grabación no se publica. Se conserva hasta tres meses después del inicio del curso siguiente, o hasta que acabe una reclamación, como fija la programación de ciclo.

#### 1. Exposición del pitch

Se proyecta tu pitch, el vídeo sin audio que entregaste, y **lo cuentas tú en directo**. Como si quisieras convencer a un grupo de inversores, destaca **qué hace distinto tu proyecto**. Aquí se califica el pitch (apartado 3).

#### 2. Mesa redonda

Cuando han expuesto todos los del turno, empieza una mesa redonda con el profesor y los compañeros. Es un debate abierto:

* **_Due diligence_.** El profesor te hace **tres preguntas**, una por cada resultado de aprendizaje, sobre elementos concretos de tu data room, y tienes que explicarlos y justificarlos. Son las que puntúan; en el debate pueden surgir más. Por ejemplo:
  * _"Señala en tu modelo E/R dónde se guardaría esta información."_
  * _"¿Qué historia de usuario justifica esta entidad?"_
  * _"¿Por qué dejaste fuera del MVP esta funcionalidad?"_

  No es ensayable, porque no sabes qué se te va a señalar. Se evalúa que sepas justificar **tus propias decisiones**, no que las recuerdes.
* **Tú también eres inversor.** Tus compañeros te preguntan, y tú a ellos, lo que os parezca: desde dudas para entender el proyecto hasta sus puntos débiles. Estas preguntas **no puntúan**, ni para quien pregunta ni para quien responde, pero son el mejor ensayo de lo que te preguntará un inversor.

#### 3. Coevaluación

Al terminar, valoras a cada compañero de tu turno con la misma rúbrica, en los elementos del pitch y del Demo Day, en un formulario de @ules que solo ve el profesor: tus compañeros no saben qué les has puesto. **No se suma a ninguna nota**: solo sirve para que el profesor revise la grabación cuando vuestra valoración no coincide con la suya, y cualquier cambio de nivel lo justifica en la ficha de corrección con lo que se ve en ella. La calificación es siempre del profesor.

Si tienes reconocidas adaptaciones, puedes defender en un turno individual.

> [!WARNING] Si no te presentas
> El Demo Day y el pitch, que se califica en él, se califican con un **0**, y la convocatoria cuenta como utilizada, salvo que hayas renunciado a ella en plazo. Si no puedes ir por una causa justificada y acreditada, se te asigna otro turno dentro de la semana de pruebas cuando sea posible. Si no lo es, la convocatoria ordinaria cuenta como utilizada, porque solo se puede renunciar hasta diez días hábiles antes, salvo lo que resuelva la dirección, y te presentas en la segunda.

:::

### Rúbrica común

Todo se califica con la misma escala de niveles, aplicada a lo que se pide en cada pieza. Antes de cada entrega, el profesor publica en el aula qué espera de cada elemento y la ficha con la que corrige, ajustadas al tipo de proyecto y a los contenidos del curso.
Esta tabla es la **rúbrica**: dice qué hace falta para llegar a cada nivel.

| Nivel | Descripción |
|:---:|:---|
| **0** | No entregado o sin relación con lo solicitado. |
| **1** | Incompleto o incorrecto. Faltan elementos esenciales. |
| **2** | Correcto y completo, pero sin justificar las decisiones. |
| **3** | Correcto, completo y justificado. |
| **4** | Además, coherente con el resto del proyecto y bien comunicado. |

### De los niveles a la nota

Cada elemento evaluable se puntúa en la escala 0-4. La conversión a puntuación es directa
y proporcional:

| Nivel | 0 | 1 | 2 | 3 | 4 |
|:---|:---:|:---:|:---:|:---:|:---:|
| **Puntuación sobre 10** | 0 | 2,5 | **5** | 7,5 | 10 |

El **nivel 2 es el mínimo**: todos tus elementos tienen que llegar a él. Si uno se queda por debajo, ese instrumento no se supera, aunque su nota dé 5 o más.

### Cómo se calcula tu nota

Si cursas **solo PI1**, tu nota sale de los tres resultados de aprendizaje del PI1, y cada uno pesa lo mismo dentro de cada instrumento. Desde la puntuación de cada elemento:

1. **Criterio.** Su nota es la media de los elementos que lo evidencian en ese instrumento (tabla siguiente).
2. **Resultado de aprendizaje.** Su nota es la media de sus criterios.
3. **Instrumento.** Su nota es la media de sus resultados de aprendizaje. Lo superas con al menos un 5 y todos sus elementos en el nivel 2 o más; el data room, además, con sus tres requisitos.
4. **Media ponderada.** 0,40 × data room + 0,20 × píldoras + 0,15 × pitch + 0,25 × Demo Day.
5. **Tu calificación.** La media, redondeada al entero más próximo (los medios puntos, al alza), entre 1 y 10. Si algún instrumento no está superado, tu nota es como máximo un **4**.

| Instrumento | RA1 | RA2 | RA3 |
|:---|:---:|:---:|:---:|
| **Data room** (40 %) | 1/3 | 1/3 | 1/3 |
| **Píldoras** (20 %) | 1/3 | 1/3 | 1/3 |
| **Pitch** (15 %) | 1/2 | 1/2 | — |
| **Demo Day** (25 %) | 1/3 | 1/3 | 1/3 |
| **Peso en tu calificación** | **35,8 %** | **35,8 %** | **28,3 %** |

::: details Qué criterio evidencia cada elemento

| RA | Criterio | Data room | Píldora (tras la sesión) | Pitch |
|:---:|:---:|:---|:---:|:---|
| RA1 | c) | Problema y oportunidad | 2 | Estructura · creatividad |
| RA1 | f) | Solución y alcance · historias de usuario | 4 | Adecuación al público |
| RA2 | b) | Arquitectura y stack | — | — |
| RA2 | c) | Plan de ejecución | 3 | — |
| RA2 | d) | Solución y alcance | 4 | Diferenciación · ejecución |
| RA2 | h) | Historias de usuario · diagramas · one-pager | 6 | — |
| RA2 | i) | Historias de usuario (criterios de aceptación y plan de pruebas) · sitio web | — | — |
| RA3 | a) | Plan de ejecución (tablero) | 5 | — |
| RA3 | e) | Plan de ejecución (riesgos, medios y equipos) | — | — |
| RA3 | f) | Plan de ejecución (tablero) | — | — |

En el **Demo Day**, cada una de las tres preguntas de la _due diligence_ puntúa en el criterio sobre el que recae. Las preguntas de tus compañeros y la coevaluación no puntúan.

La **propuesta aprobada**, el **historial del repositorio** y **datos y cumplimiento** no puntúan: son los tres requisitos del data room.

**Ejemplo con el data room.** Supón estos niveles en sus ocho elementos: problema y oportunidad 7,5; solución y alcance 10; historias de usuario 5; diagramas 7,5; _one-pager_ 7,5; arquitectura y stack 5; plan de ejecución 7,5, y sitio web 5. Los criterios salen de la tabla: RA1 c = 7,5 (problema); RA1 f = (10 + 5) / 2 = 7,5 (solución e historias); RA2 b = 5 (arquitectura); RA2 c = 7,5 (plan); RA2 d = 10 (solución); RA2 h = (5 + 7,5 + 7,5) / 3 = 6,67 (historias, diagramas y _one-pager_); RA2 i = (5 + 5) / 2 = 5 (historias y sitio web), y RA3 a, e y f = 7,5 (los tres, del plan). Resultados: RA1 = 7,5; RA2 = (5 + 7,5 + 10 + 6,67 + 5) / 5 = 6,83, y RA3 = 7,5. Nota del data room: (7,5 + 6,83 + 7,5) / 3 = **7,28**.

Fíjate en el efecto de que los tres resultados de aprendizaje pesen lo mismo: el **plan de ejecución** decide él solo el RA3 del data room, y la **píldora de la sesión 5** es la única que evidencia el RA3 en las píldoras, así que vale un tercio de ese instrumento. Cuida especialmente esas dos piezas.

:::

Si cursas **PI1 + PI2**, tu nota de PI1 sale de la programación del PI2.


### Segunda convocatoria

Quien no supere la primera convocatoria o renuncie a ella,
dispone de una **segunda convocatoria**. Con el informe del profesor sobre si estás en condiciones de afrontarla, decides si te presentas o renuncias a ella para no gastarla.

Entre las dos convocatorias tienes un **programa formativo específico**, sin clases ni tutorías propias. Al publicar la nota de la ordinaria, el profesor te indica qué elementos rehacer y por qué; trabajas por tu cuenta y planteas tus dudas en las tutorías individuales, en los foros y el correo del aula o por teléfono con cita previa.

Los cuatro instrumentos, sus pesos, sus notas mínimas y la rúbrica son **los mismos** que en la primera convocatoria. 

Puedes partir del trabajo que ya tenías y mejorarlo, pero la calificación se construye entera sobre lo entregado y defendido en la segunda convocatoria.

Si cursas **PI1 + PI2**, la segunda convocatoria es la del PI2 y se rige por su programación.

## Recursos y Herramientas {.animate-title}

Estas son las herramientas que usarás durante el curso. Todas son gratuitas.

::: details Software que se usa en el módulo

* **Control de versiones y gestión del proyecto:** Git, GitHub y GitHub Projects.
* **Redacción y publicación de la documentación:** Markdown, VitePress y GitHub Pages.
* **Diseño y diagramación:** Draw.io, Mermaid o Lucidchart.
* **Editor de textos:** Visual Studio Code (o cualquier editor con soporte de Markdown).
* **Grabación de las píldoras (con audio) y del pitch (sin audio):** la grabación de pantalla
  de Microsoft Teams, o cualquier herramienta de captura de pantalla.
* **Entregas:** la URL y el ZIP del repositorio, en @ules; los vídeos, en @ules o Microsoft Teams. No se publican en internet.
* **Comunicación:** Microsoft Teams.
* **Inteligencia artificial:** puedes usarla para aprender, para revisar lo que escribes y para crear contenido multimedia, no para generar la documentación ni para que haga el trabajo por ti.

:::

::: details Recursos Organizativos y de Comunicación

* 🏫 Uso de la plataforma @ules.
* 💬 Uso de la plataforma Microsoft Teams.
* 📧 Uso del correo electrónico.

:::
