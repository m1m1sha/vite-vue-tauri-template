import type { App } from 'vue'
import type { UseModule } from '~/types/modules'

export function installModules(app: App<Element>): App<Element> {
  Object.values(import.meta.glob<{ module: UseModule }>(
    [
      '/src/modules/*.ts',
      '!/src/modules/index.ts',
    ],
    { eager: true },
  ))
    .sort((a, b) => (b.module.order ?? 0) - (a.module.order ?? 0))
    .forEach(async i => i.module.install(app))

  return app
}
