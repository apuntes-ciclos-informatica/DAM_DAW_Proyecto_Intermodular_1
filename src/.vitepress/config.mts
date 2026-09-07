import { defineConfig } from 'vitepress'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/DAM_DAW_Proyecto_Intermodular_1/',
  outDir: '../docs',
  markdown: {
    config(md) {
      md.use(tabsMarkdownPlugin)
    }
  },
  head: [
    ['link', { rel: 'icon', href: '/DAM_DAW_Proyecto_Intermodular_1/img/logo.png' }]
  ],
  vite: {
    ssr: {
      noExternal: ['vitepress-plugin-tabs']
    }
  },
  // Metadatos por idioma (guía i18n)
  locales: {
    root: {
      label: 'Español',
      lang: 'es-ES',
      link: '/',
      title: 'Proyecto intermodular I',
      description: 'Sitio web con las sesiones del módulo de Proyecto intermodular I',
      themeConfig: {
        siteTitle: 'Proyecto </br>intermodular I',
        outline: { label: 'En esta página' },
        docFooter: { prev: 'Anterior', next: 'Siguiente' },
        nav: [
          { text: '🏠 Guía Didáctica', link: '/' },
          {
            text: 'Sesiones',
            items: [
              { text: 'Sesión 1', link: '/contenidos/s1-project-management/' },
              { text: 'Sesión 2', link: '/contenidos/s2-metodologias-agiles/' },
            ]
          }
        ],
      }
    },
  },
  // Tema por idioma
  themeConfig: {
    logo: '/img/logo.png',
    sidebar: {
      '/contenidos/s1-project-management': [
        {
          text: 'Gestión de proyectos',
          collapsed: false,
          items: [
            { text: 'Inicio', link: '/contenidos/s1-project-management/' },
            { text: '1. Fundamentos de la gestión de proyectos', link: '/contenidos/s1-project-management/capitulo-1-fundamentos' },
            { text: '2. Metodologías. El MVP', link: '/contenidos/s1-project-management/capitulo-2-metodologias-el-mvp' },
            { text: '3. Iniciación MVP', link: '/contenidos/s1-project-management/capitulo-3-iniciacion-mvp' },
            { text: '4. Planificación Ágil', link: '/contenidos/s1-project-management/capitulo-4-planificacion-agil' },
            { text: '5. Construcción, Medición y Aprendizaje', link: '/contenidos/s1-project-management/capitulo-5-construccion-medicion-aprendizaje' },
            { text: '6. Lanzamiento', link: '/contenidos/s1-project-management/capitulo-6-lanzamiento' },
            { text: '7. Triple restricción', link: '/contenidos/s1-project-management/capitulo-7-triple-restriccion' },
            { text: '8. Roles', link: '/contenidos/s1-project-management/capitulo-8-roles' },
          ]
        },
        {
          // Sección para mostrar los logos en la barra lateral
          text: '',
          items: [
            { text: '<img src="/DAM_DAW_Proyecto_Intermodular_1/img/logo-gva.png" class="logo-anim" style="vertical-align:middle; height:60px; margin:0 auto;">', link: '' },
            { text: '<img src="/DAM_DAW_Proyecto_Intermodular_1/img/logo-centro.png" class="logo-anim" style="vertical-align:middle; height:90px; margin:0 auto;">', link: '' }
          ]
        }
      ],
      '/contenidos/s2-metodologias-agiles': [
        {
          text: 'Metodologías Ágiles. Scrum',
          collapsed: false,
          items: [
            { text: 'Inicio', link: '/contenidos/s2-metodologias-agiles/' },
            { text: '1. Metodologías', link: '/contenidos/s2-metodologias-agiles/capitulo-1-metodologias' },
            { text: '2. Metodologías Tradicionales', link: '/contenidos/s2-metodologias-agiles/capitulo-2-tradicional' },
            { text: '3. Metodologías Ágiles', link: '/contenidos/s2-metodologias-agiles/capitulo-3-agil' },
            { text: '4. Scrum (I)', link: '/contenidos/s2-metodologias-agiles/capitulo-4-scrum-1' },
            { text: '5. Scrum (II)', link: '/contenidos/s2-metodologias-agiles/capitulo-5-scrum-2' },
            { text: '6. Scrum (III)', link: '/contenidos/s2-metodologias-agiles/capitulo-6-scrum-3' },
            { text: '7. Ejemplo práctico', link: '/contenidos/s2-metodologias-agiles/capitulo-7-ejemplo-scrum' },
          ]
        },
        {
          // Sección para mostrar los logos en la barra lateral
          text: '',
          items: [
            { text: '<img src="/DAM_DAW_Proyecto_Intermodular_1/img/logo-gva.png" class="logo-anim" style="vertical-align:middle; height:60px; margin:0 auto;">', link: '' },
            { text: '<img src="/DAM_DAW_Proyecto_Intermodular_1/img/logo-centro.png" class="logo-anim" style="vertical-align:middle; height:90px; margin:0 auto;">', link: '' }
          ]
        }
      ],   
    },
    footer: {
      message: '<div style="display: flex; align-items: center; justify-content: center;"><img src="/DAM_DAW_Proyecto_Intermodular_1/img/logo-gva.png" class="logo-anim"> <img src="/DAM_DAW_Proyecto_Intermodular_1/img/logo-centro.png" class="logo-anim"></div>',
      copyright: 'Copyright © 2025'
    }
  }
})
