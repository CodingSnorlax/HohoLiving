<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <h2 class="text-center border-bottom text-secondary pt-12 pb-8 mb-8">
          購物車
        </h2>
        <template v-if="cartData.carts?.length === 0">
          <div class="card bg-light p-28 my-10">
            <h5 class="text-secondary text-center mb-4 py-4">
              購物車內尚未添加商品
            </h5>

            <button
              class="btn btn-info fw-light rounded-pill mx-auto w-md-25 px-8 py-1 fs-6"
            >
              <router-link
                to="/products"
                class="text-decoration-none text-light"
                >再去逛逛吧</router-link
              >
            </button>
          </div>
        </template>
        <template v-else>
          <div
            class="card rounded-2 mb-6"
            v-for="item in cartData.carts"
            :key="item.id"
          >
            <div class="row g-0">
              <div class="col-6 col-md-4">
                <img
                  :src="item.product.imageUrl"
                  class="img-fluid rounded-start w-100 object-fit-cover"
                  :alt="item.product.title"
                />
              </div>
              <div class="col-6 col-md-8">
                <div
                  class="card-body d-flex flex-column justify-content-between h-100 pb-2 pb-md-4"
                >
                  <!-- product title & delete btn -->
                  <div class="title d-flex justify-content-between">
                    <h5 class="card-title text-secondary fs-5 fs-md-4">
                      {{ item.product.title }}
                    </h5>
                    <button
                      class="btn"
                      :disabled="this.isLoadingItem === item.id"
                      @click="deleteSingleProductItem(item.id)"
                    >
                      <i class="bi bi-x-circle text-secondary fs-4"></i>
                    </button>
                  </div>
                  <!-- price & product num -->
                  <div
                    class="price d-flex justify-content-md-between flex-column flex-md-row"
                  >
                    <!-- 數量按鈕 -->
                    <div
                      class="input-group product-num-group bg-light mt-1 mb-4 my-md-0"
                    >
                      <!-- 減少 -->
                      <div class="input-group-prepend">
                        <button
                          :disabled="item.qty <= 1 || isLoadingItem === item.id"
                          @click="editCartItem(item, item.qty--)"
                          class="btn border-0"
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
                          class="btn border-0"
                          type="button"
                          id="button-addon2"
                        >
                          <i class="bi bi-plus-lg"></i>
                        </button>
                      </div>
                    </div>
                    <!-- price -->
                    <div>
                      <p class="card-text text-danger fs-4 fs-md-3 d-flex">
                        <span class="text-danger me-4">
                          $ {{ parseInt(item.final_total) }}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <!-- 卡片 end -->
              </div>
            </div>
          </div>
        </template>
        <!-- 分隔線 -->
        <hr class="my-6 mb-28" />
      </div>
      <!-- 購物車區域結束 -->
      <template v-if="cartData.final_total || cartData.total">
        <div class="row justify-content-center">
          <div class="col-md-8">
            <div class="card rounded-3 px-6 pb-6 mb-24">
              <div class="card-body">
                <h3 class="text-secondary pt-4 mb-9">結帳</h3>
                <ul class="list-unstyled mb-12">
                  <li class="d-flex justify-content-between mb-5">
                    總額<span>$ {{ parseInt(cartData.total) }}</span>
                  </li>
                  <li class="d-flex justify-content-between mb-5">
                    折扣<span>- $ {{ parseInt(cartData.total) - parseInt(cartData.final_total) }}</span>
                  </li>
                  <li class="mb-5">
                    <p class="text-info fw-light">使用優惠碼</p>
                    <div class="input-group mb-3">
                      <input
                        type="text"
                        class="form-control"
                        placeholder=""
                        aria-label=""
                        aria-describedby="button-addon2"
                        v-model="code"
                      />
                      <button
                        class="btn btn-primary text-light"
                        type="button"
                        id="button-addon2"
                        @click="useCode"
                      >
                        套用優惠券
                      </button>
                    </div>
                  </li>
                  <!-- 待處理：文字垂直對齊 align-middle -->
                  <li
                    class="d-flex justify-content-between fw-bold border-top border-bottom py-6"
                  >
                    <span class="fs-6">結帳金額</span>
                    <span class="fs-4">$ {{ parseInt(cartData.final_total) }}</span>
                  </li>
                </ul>

                <div class="d-flex justify-content-end">
                  <button
                    @click="checkout"
                    class="btn btn-info rounded-pill text-light fw-light px-9 py-2 fs-6"
                    :disabled="cartData.carts?.length === 0"
                  >
                    <i class="bi bi-arrow-right-circle fw-bold me-1 fs-5"></i>
                    前往結帳
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      cartData: [],
      productData: [],
      isLoadingItem: '',
      qty: 1,
      // 優惠券
      code: 'hoholiving2022'
    }
  },
  methods: {
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
    },

    // 刪除單一購物車產品
    deleteSingleProductItem (id) {
      const url = `${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_PATH}/cart/${id}`
      this.isLoadingItem = id
      this.$http
        .delete(url)
        .then((res) => {
          console.log(res)
          this.isLoadingItem = ''
          this.getCartData()
        })
        .catch((err) => {
          console.log(err)
        })
    },

    useCode () {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/coupon`
      const data = {
        code: this.code
      }
      console.log(data)
      this.$http
        .post(url, { data })
        .then((res) => {
          console.log(res.data.final_total)
          this.getCartData()
        })
        .catch((err) => {
          console.log(err)
        })
    },

    checkout () {
      this.$router.push('/order')
    }
  },
  mounted () {
    this.getCartData()
  }
}
</script>

<style>
img {
  object-fit: cover;
}
.product-num-group {
  width: 150px;
}
</style>
