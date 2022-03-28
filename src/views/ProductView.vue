<template>
  <div class="container">
    <div class="main pt-8">
      <!-- bread crumb -->
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb bg-white px-0 mb-4 py-3">
          <li class="breadcrumb-item">
            <router-link to="/" class="text-muted"
              >首頁</router-link
            >
          </li>
          <li class="breadcrumb-item">
            <router-link
              to="/products"
              class="text-muted"
              >{{ product.category }}</router-link
            >
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            {{ product.title }}
          </li>
        </ol>
      </nav>
      <!-- bread crumb -->
      <!-- 單一產品主要區域 -->
      <div class="row align-items-center">
        <!-- 圖片輪播 -->
        <div class="col-md-6">
          <div
            id="carouselExampleControls"
            class="carousel slide"
            data-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  :src="product.imageUrl"
                  class="d-block w-100"
                  alt="product.title"
                />
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselExampleControls"
              role="button"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleControls"
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
        <!-- 產品詳細資料 -->
        <div class="col-md-6">
          <div class="product-content mt-4 mt-md-0">
            <div class="text">
              <!-- 產品標題 -->
              <span class="badge bg-primary text-light fs-5 mb-4">{{
                product.category
              }}</span>
              <h2 class="fw-bold mb-4">
                {{ product.title }}
              </h2>
              <!-- 產品介紹 -->
              <div class="mb-12">
                <p class="fw-light fs-4">{{ product.description }}</p>
              </div>

              <!-- 產品價格 -->
              <div class="price mb-2">
                <div v-if="product.origin_price === product.price" class="fs-4 text-danger">
                  $ {{ product.origin_price }} 元
                </div>
                <div v-else class="mb-4">
                  <small class="fs-4 me-4 text-decoration-line-through">
                    $ {{ product.origin_price }}</small
                  >
                  <span class="fs-2 text-danger fw-bold"
                    >$ {{ product.price }}</span
                  >
                </div>
              </div>
            </div>
            <div class="button-group">
              <!-- 按鈕組開始 -->
              <div class="row">
                <div class="col-6">
                  <!-- 數量按鈕 -->
                  <div class="input-group bg-light mb-4">
                    <!-- 減少 -->
                    <div class="input-group-prepend">
                      <button
                        class="btn btn-outline-dark border-0"
                        type="button"
                        id="button-addon1"
                      >
                        <i class="bi bi-dash-lg"></i>
                      </button>
                    </div>
                    <!-- 數量 input -->
                    <input
                      type="text"
                      class="form-control border-0 text-center my-auto shadow-none bg-light border"
                      placeholder=""
                      aria-label=""
                      aria-describedby="button-addon1"
                      value="1"
                    />
                    <!-- 增加 -->
                    <div class="input-group-append">
                      <button
                        class="btn btn-outline-dark border-0"
                        type="button"
                        id="button-addon2"
                      >
                        <i class="bi bi-plus-lg"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <!-- 按鈕 -->
                <div class="col-6">
                  <a
                    class="text-nowrap btn btn-secondary w-100"
                    >加入購物車</a
                  >
                </div>
              </div>
              <!-- 按鈕組結束 -->
              <div class="product-info mt-12 mb-8 rounded-3">
                <!-- 產品資訊 -->
                <div class="warning-section rounded-3 px-4 pt-2">
                  <h4 class="text-light fs-5 mb-2">產品規格</h4>
                  <p class="fw-light fs-6 text-light pb-2">{{ product.content }}</p>
                </div>
              </div>
            </div>
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
      product: []
    }
  },
  methods: {
    getOneProductData () {
      // 取得單一產品 id (route)
      const { id } = this.$route.params
      const url = `${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_PATH}/product/${id}`
      this.$http.get(url).then((res) => {
        console.log(res.data.product)
        this.product = res.data.product
      })
    }
  },
  mounted () {
    this.getOneProductData()
    // this.id = this.$route.params.id
  }
}
</script>

<style lang="scss">
.warning-section {
  background-color: #bababc;
}
</style>
