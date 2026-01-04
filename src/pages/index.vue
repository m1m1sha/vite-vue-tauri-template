<script setup lang="ts">
</script>

<template>
  <div align-center h-full flex flex-col justify-center text-center>
    <p>vite-vue-tauri-template</p>
    // #if TARGET_PLATFORM == 'app'
    <div>app</div>
    // #elif TARGET_PLATFORM == 'web'
    <div>app</div>
    // #endif
    <p>{{ $t('hello') }}</p>
  </div>
</template>

<style scoped lang="postcss">
</style>
