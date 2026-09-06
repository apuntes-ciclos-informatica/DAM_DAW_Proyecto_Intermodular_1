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
        
    },
    footer: {
      message: '<div style="display: flex; align-items: center; justify-content: center;"><img src="/DAM_DAW_Proyecto_Intermodular_1/img/logo-gva.png" class="logo-anim"> <img src="/DAM_DAW_Proyecto_Intermodular_1/img/logo-centro.png" class="logo-anim"></div>',
      copyright: 'Copyright © 2025'
    }
  }
})
