<template>
  <div class="container">
    <div class="main pt-8">
      <!-- bread crumb -->
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb bg-white px-0 mb-4 py-3">
          <li class="breadcrumb-item">
            <router-link to="/" class="text-muted">首頁</router-link>
          </li>
          <li class="breadcrumb-item">
            <router-link to="/products" class="text-muted">{{
              product.category
            }}</router-link>
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
              <h2 class="fw-bold mb-4">{{ product.title }}</h2>
              <!-- 產品介紹 -->
              <div class="mb-12">
                <p class="fw-light fs-4">{{ product.description }}</p>
              </div>

              <!-- 產品價格 -->
              <div class="price mb-2">
                <div
                  v-if="product.origin_price === product.price"
                  class="fs-4 text-danger"
                >
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
                <!-- 數量按鈕 頭 -->
                <div class="col-6">
                  <!-- 數量按鈕 -->
                  <!-- 把購物車資料與產品資料進行比對 -->
                  <template v-for="item in cartData.carts" :key="item.id">
                    <div v-show="product.id === item.product_id">
                      <div
                        v-show="editProductNum"
                        class="input-group bg-light mb-4"
                      >
                        <!-- 減少 -->
                        <div class="input-group-prepend">
                          <button
                            :disabled="
                              item.qty <= 1 || isLoadingItem === item.id
                            "
                            @click="editCartItem(item, item.qty--)"
                            class="btn btn-outline-dark border-0"
                            type="button"
                            id="button-addon1"
                          >
                            <i class="bi bi-dash-lg"></i>
                          </button>
                        </div>
                        <!-- 數量 input -->
                        <input
                          type="number"
                          class="form-control border-0 text-center my-auto shadow-none bg-light border"
                          aria-describedby="button-addon1"
                          v-model.lazy="item.qty"
                        />
                        <!-- 增加 -->
                        <div class="input-group-append">
                          <button
                            :disabled="isLoadingItem === item.id"
                            @click="editCartItem(item, item.qty++)"
                            class="btn btn-outline-dark border-0"
                            type="button"
                            id="button-addon2"
                          >
                            <i class="bi bi-plus-lg"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </template>
                </div>
                <!-- 數量按鈕 尾 -->

                <div class="col-6">
                  <button
                    @click="addToCart(product.id, (qty = 1))"
                    class="text-nowrap btn btn-secondary w-100"
                  >
                    加入購物車
                  </button>
                </div>
              </div>
              <!-- 按鈕組結束 -->
              <div class="product-info mt-12 mb-8 rounded-3">
                <!-- 產品資訊 -->
                <div class="warning-section rounded-3 px-4 pt-2">
                  <h4 class="text-light fs-5 mb-2">產品規格</h4>
                  <p class="fw-light fs-6 text-light pb-2">
                    {{ product.content }}
                  </p>
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
      product: [],
      isLoadingItem: '',
      editProductNum: false,
      cartData: []
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
    },
    addToCart (productId, qty = 1) {
      const url = `${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_PATH}/cart`
      const data = {
        data: {
          product_id: productId,
          qty: qty
        }
      }
      this.isLoadingItem = productId
      this.$http
        .post(url, data)
        .then((res) => {
          alert(res.data.message)
          if (res.data.success) {
            this.editProductNum = true
            this.getCartData()
          }
          this.isLoadingItem = ''
        })
        .catch((err) => {
          console.log(err)
        })
    },
    // 加入購物車之後，就觸發抓 cart 資料，拿到 cart id 就可以改商品數量
    getCartData () {
      const url = `${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_PATH}/cart`
      this.$http
        .get(url)
        .then((res) => {
          console.log(res.data.data)
          // 是個陣列
          this.cartData = res.data.data
        })
        .catch((err) => {
          console.log(err)
        })
    },
    // 修改購物車數量
    editCartItem (item, qty) {
      const url = `${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_PATH}/cart/${item.id}`
      this.isLoadingItem = item.id
      const userData = {
        data: {
          product_id: item.product_id,
          qty: item.qty
        }
      }

      this.$http
        .put(url, userData)
        .then((res) => {
          this.isLoadingItem = ''
          console.log(res)
          this.getCartData()
        })
        .catch((err) => {
          console.log(err)
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
