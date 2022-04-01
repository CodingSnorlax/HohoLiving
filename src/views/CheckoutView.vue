<template>
  <div class="container">
    <!-- 付款成功 標題 -->
    <div
      class="d-flex flex-column justify-content-center text-center text-success mt-12"
    >
      <i class="bi bi-check2-circle mb-2 fs-1 pt-4 fw-bold"></i>
      <h3 class="fw-bold fs-2">付款成功</h3>
    </div>
    <!-- 付款成功 標題 -->
    <div class="main d-flex justify-content-center mt-6 mb-12 mb-md-24">
      <div class="card bg-light px-10 px-md-24 py-10 py-md-12">
        <div class="text fs-5mt-6">
          <p>謝謝您！您的訂單已經成立！</p>
          <p>訂單號碼 <span class="badge bg-success ms-2">{{ orderId }}</span></p>
          <p>訂單確認信已發送至您的電子信箱，</p>
          <p>如有任何問題歡迎來信或在服務時間來電，</p>
          <p>好好生活將竭誠為您服務！</p>
          <div class="d-flex justify-content-center">
            <button class="btn btn-primary text-light mt-8 px-16" @click="returnToFrontPage">
              返回首頁
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      orderId: ''
    }
  },
  methods: {
    returnToFrontPage () {
      this.$router.push('/')
    }
  },
  mounted () {
    this.orderId = this.$route.params.orderId
  }
}
</script>
