// Shared driver for the live panels (FleetRuntimeDemo, FleetRadarTrace).
// Runs `tick` every `ms` only while the slide is shown, never under reduced motion, and stops on unmount.
import { useIsSlideActive } from '@slidev/client'
import { onScopeDispose, watch } from 'vue'

export function useLiveTicker(tick, ms, onStart) {
  const active = useIsSlideActive()
  const still =
    typeof window === 'undefined' || window.matchMedia('(prefers-reduced-motion: reduce)').matches
  let timer = null
  const stop = () => {
    clearInterval(timer)
    timer = null
  }
  watch(
    active,
    (on) => {
      if (still || !on) return stop()
      if (timer) return
      onStart?.()
      timer = setInterval(tick, ms)
    },
    { immediate: true }
  )
  onScopeDispose(stop)
  return { still }
}
