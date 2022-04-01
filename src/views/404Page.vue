<template>
  <div class="wrapper">
    <div class="container">
      <div class="d-flex flex-column">
        <div class="card my-10 my-md-24 py-8 py-md-18 pe-md-20 bg-light">
          <div class="row">
            <div class="col-md-6 text-secondary">
              <h1 class="mt-2 mt-md-8 text-center mb-6">404</h1>
              <h1 class="text-center mb-6 fs-2">Page Not Found</h1>
              <div class="d-block d-md-none mb-8 col-md-6">
                <img
                  class="w-100"
                  src="https://images.unsplash.com/photo-1481277542470-605612bd2d61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1106&q=80"
                  alt=""
                />
              </div>
              <h3 class="text-center mb-6 fs-4">看來目前這邊空蕩蕩的耶...</h3>
              <h1 class="text-center mb-6 mb-md-12">
                <i class="bi bi-heartbreak-fill fs-1"></i>
              </h1>
              <button
                @click="backToFront"
                class="btn btn-secondary mx-auto back-to-front"
              >
                回首頁
              </button>
            </div>
            <div class="d-md-block d-none col-md-6">
              <img
                class="w-100"
                src="https://images.unsplash.com/photo-1481277542470-605612bd2d61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1106&q=80"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    backToFront () {
      this.$router.push('/')
    }
  }
}
</script>

<style>
.wrapper {
  background-color: #b5adad;
  height: 100vh;
}
.back-to-front {
  width: 150px;
  display: block;
}
</style>
