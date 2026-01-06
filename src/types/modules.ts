import type { App } from 'vue'

export interface UseModule {
  install: (app: App<Element>) => Promise<void> | void
  order?: number
}
