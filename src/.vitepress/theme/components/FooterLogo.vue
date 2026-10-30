<script setup lang="ts">
/**
 * FooterLogo.vue
 *
 * Inyectado en el slot 'layout-bottom' del Layout de VitePress.
 * Muestra el logo del autor/docente en el footer con adaptación reactiva
 * al modo light/dark, visible en todas las páginas (incluido móvil).
 * Debajo del logo muestra el copyright y la licencia del sitio.
 *
 * Los datos se leen de themeConfig (configurado en config.mts):
 *   - logoBranding: logos institucionales
 *   - copyright: texto de copyright (clave propia; no usamos el footer nativo
 *     de VitePress para no duplicarlo)
 *   - license: { text, url, icon } de la licencia
 */
import { computed } from 'vue'
import { useData, withBase } from 'vitepress'
import ThemedImage from './ThemedImage.vue'

const { theme } = useData()
const b = theme.value.logoBranding as {
  mode: 'same' | 'invert' | 'separate'
  darkSuffix: string
  show?: { footer?: boolean }
  logos: {
    footer: { src: string; height: string }
  }
}

const copyright = computed(() => (theme.value.copyright as string) ?? '')
const license = computed(() => theme.value.license as { text?: string; url?: string; icon?: string } | undefined)
const licenseIcon = computed(() => (license.value?.icon ? withBase(license.value.icon) : ''))
</script>

<template>
  <div class="footer-logo-wrap">
    <ThemedImage
      v-if="b.show?.footer !== false"
      :src="b.logos.footer.src"
      :mode="b.mode"
      :darkSuffix="b.darkSuffix"
      :height="b.logos.footer.height"
      alt="Autor"
      imgStyle="display:block;margin:0 auto;"
    />
    
    <div v-if="copyright || license?.text" class="footer-legal">
      <span v-if="copyright" class="footer-copyright">{{ copyright }}</span>

      <span v-if="copyright && license?.text" class="footer-sep" aria-hidden="true">·</span>

      <span v-if="license?.text" class="footer-license">
        <a
          v-if="license.url"
          :href="license.url"
          target="_blank"
          rel="license noopener"
        >
          <img v-if="licenseIcon" :src="licenseIcon" class="footer-license-icon" alt="" />
          {{ license.text }}
        </a>
        <template v-else>
          <img v-if="licenseIcon" :src="licenseIcon" class="footer-license-icon" alt="" />
          {{ license.text }}
        </template>
      </span>
    </div>
  </div>
</template>

<style scoped>
/* Como el VPFooter nativo: fondo propio y por encima del índice lateral (aside),
   que es fixed y, si no, se pinta sobre el pie al llegar al final de la página. */
.footer-logo-wrap {
  position: relative;
  z-index: var(--vp-z-index-footer);
  background-color: var(--vp-c-bg);
  text-align: center;
  padding: 24px 24px 8px;
  border-top: 1px solid var(--vp-c-divider);
}

/* Con barra lateral (fixed, por encima), el pie se centra en el espacio que queda. */
@media (min-width: 960px) {
  .VPContent.has-sidebar ~ .footer-logo-wrap {
    padding-left: calc(var(--vp-sidebar-width) + 24px);
  }
}

.footer-legal {
  margin-top: 12px;
  font-size: 0.8rem;
  color: var(--vp-c-text-2);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 6px;
}

.footer-sep {
  color: var(--vp-c-text-3);
}

.footer-license a {
  color: var(--vp-c-text-2);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transition: color var(--custom-duration-base, 0.25s) var(--custom-ease-out, ease);
}

.footer-license a:hover {
  color: var(--vp-c-brand);
}

.footer-license-icon {
  height: 1.1em;
  vertical-align: middle;
}
</style>
