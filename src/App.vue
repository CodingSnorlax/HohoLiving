<template>
  <div id="app">
    <ToastMessage></ToastMessage>
    <router-view />
  </div>
</template>

<script>
import ToastMessage from '@/components/ToastMessage.vue'
import emitter from '@/libs/emitter'

export default {
  provide () {
    return {
      emitter
    }
  },
  components: {
    ToastMessage
  }
}
</script>

<style lang="scss">
@import './assets/style/all.scss';
</style>
