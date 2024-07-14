export const useAppStore = defineStore('appStore', () => {
  return {}
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useAppStore as any, import.meta.hot))
