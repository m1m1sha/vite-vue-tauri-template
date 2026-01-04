import type { RouteRecordRaw } from 'vue-router'
import type { UseModule } from '~/types/modules'
import { setupLayouts } from 'virtual:generated-layouts'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from 'vue-router/auto-routes'

export const module: UseModule = {
  install: (app) => {
    const router = createRouter({
      history: createWebHistory(),
      routes: setupLayouts(routes as unknown as RouteRecordRaw[]),
    })
    app.use(router)
  },
}
