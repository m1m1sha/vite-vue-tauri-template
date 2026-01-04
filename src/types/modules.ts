import type { App } from 'vue'

export interface UseModule {
  install: (app: App<Element>) => void
  order?: number
}
