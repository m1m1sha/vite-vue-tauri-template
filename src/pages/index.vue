<script setup lang="ts" vapor>
const { t } = useI18n()
</script>

<template>
  <div align-center text-center flex flex-col h-full justify-center>
    <p>vite-vue-tauri-template</p>
    // #if TARGET_PLATFORM == 'app'
    <div>app</div>
    // #elif TARGET_PLATFORM == 'web'
    <div>web</div>
    // #endif
    <p>{{ t('hello') }}</p>
  </div>
</template>

<style scoped lang="postcss">
</style>
