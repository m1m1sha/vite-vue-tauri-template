import type { UseModule } from '~/types/modules'
import { vaporInteropPlugin } from 'vue'

export const module: UseModule = {
  install: (app) => {
    app.use(vaporInteropPlugin)
    app.mount('#app')
  },
  order: -1,
}
