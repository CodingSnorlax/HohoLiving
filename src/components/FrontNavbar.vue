<template>
  <!-- 平板以上 nav -->
  <div class="bg-light sticky-top d-none d-md-block">
    <div class="container bg-light">
      <nav class="navbar navbar-expand-lg navbar-light justify-content-between">
        <!-- logo -->
        <router-link class="nav-link fs-3 text-dark p-0" to="/"
          >好好生活</router-link
        >
        <!-- 包括 link & icon -->
        <div class="tablet-nav d-flex align-item-center">
          <!-- nav links -->
          <ul class="d-flex list-unstyled me-8">
            <li class="pt-3 active">
              <router-link class="nav-link pe-2 text-secondary" to="/products"
                >好好精選</router-link
              >
            </li>
            <li class="pt-3">
              <router-link class="nav-link pe-2 text-secondary" to="/customerService"
                >常見問題</router-link
              >
            </li>
            <li class="pt-3">
              <router-link class="nav-link pe-2 text-secondary" to="/about"
                >關於我們</router-link
              >
            </li>
          </ul>

          <!-- icon 區域 -->
          <div class="d-flex align-items-center justify-content-center me-4">
            <!-- <a href="#">
              <i class="bi bi-search me-8"></i>
            </a>
            <a href="#"><i class="bi bi-heart-fill fs-4 text-dark me-8"></i></a> -->
            <router-link to="/cart" class="position-relative"
              ><i class="bi bi-cart-fill fs-3 text-dark"></i>
              <span
                class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                :class="{ 'visually-hidden': cartData.carts?.length === 0 }"
              >
                {{ cartData.carts?.length }}
              </span></router-link
            >
          </div>
        </div>
      </nav>
    </div>
  </div>

  <!-- 手機版 nav -->
  <div class="bg-light sticky-top d-md-none">
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light bg-light px-8">
        <!-- 漢堡選單按鈕 -->
        <button
          class="navbar-toggler my-2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- logo -->
        <router-link class="nav-link fs-3 text-dark" to="/"
          >好好生活</router-link
        >
        <!-- icon 區域 -->
        <div class="d-flex align-items-center justify-content-center me-4 pb-2">
          <!-- <a href="#">
            <i class="bi bi-search me-8"></i>
          </a>
          <a href="#"><i class="bi bi-heart-fill fs-4 text-dark me-8"></i></a> -->
          <router-link to="/cart" class="position-relative"
            ><i class="bi bi-cart-fill fs-3 text-dark"></i>
            <!-- 待解決：loading 畫面進來的時候，數字沒有但有紅點 -->
            <span
              class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              :class="{ 'visually-hidden': cartData.carts?.length === 0 }"
            >
              {{ cartData.carts?.length }}
            </span></router-link
          >
        </div>
      </nav>
      <div class="phone-display-section text-center">
        <!-- 漢堡選單內容 -->
        <div
          class="collapse navbar-collapse bg-light custom-header-md-open justify-content-end"
          id="navbarNav"
        >
          <ul class="navbar-nav me-8 pb-4">
            <li class="nav-item active">
              <router-link class="nav-link pe-2 text-secondary" to="/products"
                >好好精選</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link pe-2 text-secondary" to="/customerService"
                >常見問題</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link pe-2 text-secondary" to="/about"
                >關於我們</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      cartData: []
    }
  },
  inject: ['emitter'],
  methods: {
    getCartData () {
      this.$http
        .get(
          `${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_PATH}/cart`
        )
        .then((res) => {
          // cartData 是個陣列
          this.cartData = res.data.data
        })
        .catch((err) => {
          console.dir(err)
        })
    }
  },
  mounted () {
    this.getCartData()

    // 綁定購物車與 navbar 上的品項新增數量
    this.emitter.on('get-cart-data', () => {
      this.getCartData()
    })
  }
}
</script>
