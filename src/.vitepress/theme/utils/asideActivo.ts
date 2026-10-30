/**
 * Índice lateral («En esta página»): si no cabe en la pantalla, se desplaza dentro de
 * su columna. Este controlador lo mueve para que la entrada activa quede siempre a la
 * vista; así, al llegar al final de una página larga, se ve la última (el anexo).
 */
export function initializeAsideActivo(): void {
  const w = window as any
  if (w.__asideActivo) return
  w.__asideActivo = true

  let espera: number | undefined

  const ajustar = () => {
    const caja = document.querySelector<HTMLElement>('.VPDoc .aside-container')
    const activo = caja?.querySelector<HTMLElement>('.outline-link.active')
    if (!caja || !activo || caja.scrollHeight <= caja.clientHeight) return

    const c = caja.getBoundingClientRect()
    const a = activo.getBoundingClientRect()
    const nav = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--vp-nav-height')) || 64
    const arriba = Math.max(c.top, 0) + nav + 16
    const abajo = Math.min(c.bottom, window.innerHeight) - 48

    if (a.bottom > abajo) caja.scrollTop += a.bottom - abajo
    else if (a.top < arriba) caja.scrollTop -= arriba - a.top
  }

  // VitePress marca la entrada activa en su propio manejador de scroll; se ajusta
  // cuando el desplazamiento se detiene, con la marca ya actualizada.
  window.addEventListener('scroll', () => {
    window.clearTimeout(espera)
    espera = window.setTimeout(ajustar, 150)
  }, { passive: true })
}
