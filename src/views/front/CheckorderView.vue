<template>
  <div class="container">
    <div class="row g-12 flex-column-reverse flex-md-row">
      <div class="col-md-6">
        <div class="card bg-light px-8 pb-16 my-1 my-md-12">
          <h3 class="text-secondary text-center pt-8 mb-6 mb-md-10">
            收件資訊
          </h3>
          <ul class="list-unstyled text-secondary">
            <li class="mb-2">
              <span class="orderTitle">訂單編號</span>
              <span class="ms-4">{{ orderData.id }}</span>
            </li>
            <li class="mb-2">
              <span class="orderTitle">訂單時間</span>
              <span class="ms-4">{{ $filters.date(orderData.create_at) }}</span>
            </li>
            <li class="mb-2">
              <span class="orderTitle">付款狀態</span>
              <span
                v-if="orderData.is_paid === false"
                class="badge bg-dark ms-4"
                >未付款</span
              >
              <span v-else class="badge bg-success ms-4">已付款</span>
            </li>
            <li class="mb-2">
              <span class="orderTitle">收件人</span>
              <span class="ms-4">{{ orderData.user?.name }}</span>
            </li>
            <li class="mb-2">
              <span class="orderTitle">電子信箱</span>
              <span class="ms-4">{{ orderData.user?.email }}</span>
            </li>
            <li class="mb-2">
              <span class="orderTitle">聯絡電話</span>
              <span class="ms-4">{{ orderData.user?.tel }}</span>
            </li>
            <li class="mb-2">
              <span class="orderTitle">地址</span>
              <span class="ms-4">{{ orderData.user?.address }}</span>
            </li>
            <li class="mb-16">
              <span class="orderTitle">訂單備註</span>
              <span class="ms-4">{{ orderData.message }}</span>
            </li>
            <li class="d-flex justify-content-center">
              <button
                class="btn btn-info text-light rounded-pill w-50"
                @click="payOrder"
              >
                確認付款
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-md-6 bg-primary">
        <div class="my-10">
          <h3 class="text-light text-center pt-4 mb-9">購物清單</h3>
          <div
            class="card rounded-2 mb-6"
            v-for="item in orderData.products"
            :key="item.id"
          >
            <div class="row g-0">
              <div class="col-6 col-md-5">
                <img
                  :src="item.product.imageUrl"
                  class="img-fluid rounded-start w-100 object-fit-cover"
                  :alt="item.product.title"
                />
              </div>
              <div class="col-6 col-md-7">
                <!-- 產品卡片起 -->
                <div
                  class="card-body d-flex flex-column justify-content-between h-100 pb-2 pb-md-0"
                >
                  <!-- product title & delete btn -->
                  <div class="title d-flex justify-content-between">
                    <h5 class="card-title text-secondary fs-5 fs-md-4">
                      {{ item.product.title }}
                    </h5>
                  </div>
                  <!-- price & product num -->
                  <div
                    class="price d-flex flex-column justify-content-md-between flex-md-row"
                  >
                    <p class="text-secondary">數量：{{ item.qty }}</p>
                    <!-- price -->
                    <p class="card-text fs-5 fs-md-3 text-danger">
                      $ {{ item.total }}
                    </p>
                  </div>
                </div>
                <!-- 卡片 end -->
                <!-- 產品卡片結束 -->
              </div>
            </div>
          </div>
          <ul class="list-unstyled mb-12 text-light">
            <!-- <li class="d-flex justify-content-between mb-5">
              總額<span>$ {{ parseInt(orderData.products?.total) }}</span>
            </li>
            <li class="d-flex justify-content-between mb-5">
              折扣優惠<span>- $ {{ parseInt(orderData.products?.total) - parseInt(orderData.products?.final_total) }}</span>
            </li> -->
            <!-- 待處理：文字垂直對齊 align-middle -->
            <li
              class="d-flex justify-content-between fw-bold border-top py-6"
            >
              <span class="fs-6">總金額</span>
              <span class="fs-4">$ {{ parseInt(orderData.total) }}</span>
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
      orderData: [],
      orderId: ''
    }
  },
  methods: {
    // 取得訂單資料 (含客戶資料)
    getOrderData () {
      // this.$route.params.orderId 的 orderId 是路由的，不是變數的
      this.orderId = this.$route.params.orderId
      const url = `${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_PATH}/order/${this.orderId}`
      this.$http
        .get(url)
        .then((res) => {
          this.orderData = res.data.order
        })
        .catch((err) => {
          console.log(err)
        })
    },
    // 客戶確認付款完成
    payOrder () {
      this.orderId = this.$route.params.orderId
      const url = `${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_PATH}/pay/${this.orderId}`
      this.$http
        .post(url)
        .then((res) => {
          if (res.data.success === true) {
            this.$router.push(`/checkout/${this.orderId}`)
          } else {
            alert(res.data.success)
          }
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },

  mounted () {
    this.getOrderData()
  }
}
</script>

<style>
.orderTitle {
  display: inline-block;
  width: 80px;
}
</style>
