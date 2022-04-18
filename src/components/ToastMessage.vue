<template>
  <div class="toast-container toast-wrapper position-fixed end-0" style="z-index: 9900">
    <div
      v-for="(msg, key) in messages"
      :key="key"
      class="toast show"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div class="toast-header">
        <span
          :class="`bg-${msg.style}`"
          class="p-2 rounded me-2 d-inline-block"
        ></span>
        <strong class="me-auto">{{ msg.title }}</strong>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="toast"
          aria-label="Close"
        ></button>
      </div>
      <div class="toast-body" v-if="msg.content">{{ msg.content }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      messages: []
    }
  },
  inject: ['emitter'],
  methods: {
    unloadToast () {
      setTimeout(() => {
        this.messages.shift()
      }, 2000)
    }
    // clearToast (index) {
    //   this.messages.splice(index, 1)
    // }
  },
  mounted () {
    this.emitter.on('push-message', (message) => {
      const { style = 'success', title, content } = message
      this.messages.push({ style, title, content })
      this.unloadToast()
    })
  }
}
</script>

<style>
    .toast-wrapper{
        top: 10%;
    }
</style>
