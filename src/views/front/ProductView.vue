<template>
  <div class="container">
    <div class="main pt-8">
      <!-- bread crumb -->
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb bg-white px-0 mb-4 py-3">
          <li class="breadcrumb-item">
            <router-link to="/" class="text-muted text-decoration-none"
              >首頁</router-link
            >
          </li>
          <li class="breadcrumb-item">
            <router-link
              to="/products"
              class="text-muted text-decoration-none"
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
          <img
            :src="product.imageUrl"
            class="d-block w-100"
            alt="product.title"
          />
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
              <div class="product-info mt-12 mb-8 rounded-3"></div>
            </div>
          </div>
        </div>
        <div class="row mb-12">
          <div class="col-md-6">
            <div class="card px-8 mt-4">
              <h3 class="text-secondary mt-8 mb-4">
                <i class="bi bi-book-half me-2"></i> 品牌故事
              </h3>
              <p class="fs-5">{{ product.content }}</p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card px-8 mt-4">
              <h3 class="text-secondary mt-8 mb-4">
                <i class="bi bi-rulers me-2"></i> 產品規格
              </h3>
              <p class="fs-5">{{ product.content }}</p>
            </div>
          </div>
          <div class="col-12">
            <!-- 產品資訊 -->
            <div class="memo-section rounded-3 mt-12 px-8 py-10">
              <h3 class="text-light fs-4 mb-8">
                <i class="bi bi-list-check me-2 fs-3"></i> 下 單 前 的 溫 馨 小
                提 醒
              </h3>
              <ul class="text-light">
                <li class="mb-4">
                  購買沙發、椅子、桌子...等大型商品時，礙於材積的限制，我們無法提供您使用超商取貨，但可採取貨到付款方式收貨。
                </li>
                <li class="mb-4">
                  由於每位顧客的硬體設備會不太一樣，使得實際的商品與商品圖會產生色差，敬請見諒。
                </li>
                <li class="mb-4">
                  好好生活的熱銷商品經常是限量的，若遇到官網無法即時更新，下單後有缺貨之情事，還需以實際庫存為主，不過我們同時也會以
                  email 告知商品缺貨。
                </li>
                <li class="mb-4">
                  請您在加入會員時，務必要留下正確手機號碼或
                  email，方便我們在必要時與您聯繫。
                </li>
                <li class="mb-4">
                  當您的訂單成立後，我們將會以最快速度寄出您的貨物，但視當時物流配送狀況，一般仍需要
                  3 ~ 5 個工作天，您才會收到物品。
                </li>
                <li class="mb-4">
                  若您有急件的訂單，煩請來電 (02-1357-9246) 與我們聯繫。
                </li>
                <li class="mb-4">
                  若您在購買前，還是對商品還有任何疑問，歡迎直接來信或於上班時間來電詢問。
                </li>
              </ul>
            </div>
            <!-- warning sec -->
          </div>
        </div>
        <!-- 資料 row 尾巴 -->
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
.memo-section {
  background-color: #bababc;
}
</style>
