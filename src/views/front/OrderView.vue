<template>
  <div class="container">
    <div class="row flex-column-reverse flex-md-row">
      <!-- 客戶資料填寫表單 -->
      <div class="col-md-6">
        <h3 class="text-secondary text-center pt-8 mb-6 mb-md-10">收件資訊</h3>
        <!-- 驗證表單的區塊 -->
        <Form
          class="pe-md-6 pb-10"
          ref="form"
          v-slot="{ errors }"
          @submit="sendOrder"
        >
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <Field
              id="email"
              name="信箱"
              type="email"
              class="form-control bg-light"
              :class="{ 'is-invalid': errors['信箱'] }"
              placeholder="請輸入 Email"
              rules="email|required"
              v-model="form.user.email"
            ></Field>
            <ErrorMessage name="信箱" class="invalid-feedback" />
          </div>

          <div class="mb-3">
            <label for="name" class="form-label">收件人姓名</label>
            <Field
              id="name"
              name="姓名"
              type="text"
              class="form-control bg-light"
              :class="{ 'is-invalid': errors['姓名'] }"
              placeholder="請輸入姓名"
              rules="required"
              v-model="form.user.name"
            ></Field>
            <ErrorMessage name="姓名" class="invalid-feedback" />
          </div>

          <div class="mb-3">
            <label for="tel" class="form-label">收件人電話</label>
            <Field
              id="tel"
              name="電話"
              type="text"
              class="form-control bg-light"
              :class="{ 'is-invalid': errors['電話'] }"
              placeholder="請輸入電話"
              :rules="isPhone"
              v-model="form.user.tel"
            ></Field>
            <ErrorMessage name="電話" class="invalid-feedback" />
          </div>

          <div class="mb-3">
            <label for="address" class="form-label">收件人地址</label>
            <Field
              id="address"
              name="地址"
              type="text"
              class="form-control bg-light"
              :class="{ 'is-invalid': errors['地址'] }"
              placeholder="請輸入地址"
              rules="required"
              v-model="form.user.address"
            ></Field>
            <ErrorMessage name="地址" class="invalid-feedback" />
          </div>

          <div class="mb-3">
            <label for="message" class="form-label">留言</label>
            <textarea
              id="message"
              class="form-control bg-light"
              v-model="form.message"
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <div class="text-end">
            <button
              type="submit"
              class="btn btn-info text-light"
              :disabled="
                cartData.carts?.length === 0 || Object.keys(errors).length > 0"
            >
              送出訂單
            </button>
          </div>
        </Form>
        <!-- 表單驗證區 -->
      </div>
      <!-- 購物清單 -->
      <div class="col-md-6 bg-primary">
        <div class="card rounded-3 mx-2 px-2 mt-8 pb-6 mb-12">
          <div class="card-body">
            <h3 class="text-secondary pt-4 mb-9">購物清單</h3>
            <div
              class="card rounded-2 mb-6"
              v-for="item in cartData.carts"
              :key="item.id"
            >
              <div class="row g-0">
                <div class="col-md-5">
                  <img
                    :src="item.product.imageUrl"
                    class="img-fluid rounded-start h-100 object-fit-cover"
                    :alt="item.product.title"
                  />
                </div>
                <div class="col-md-7">
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
                </div>
              </div>
            </div>
            <!-- 產品卡片結束 -->
            <ul class="list-unstyled mb-12">
              <li class="d-flex justify-content-between mb-5">
                總額<span>$ {{ parseInt(cartData.total) }}</span>
              </li>
              <li class="d-flex justify-content-between mb-5">
                折扣優惠<span>- $ {{ parseInt(cartData.total) - parseInt(cartData.final_total) }}</span>
              </li>
              <!-- 待處理：文字垂直對齊 align-middle -->
              <li
                class="d-flex justify-content-between fw-bold border-top border-bottom py-6"
              >
                <span class="fs-6">總金額</span>
                <span class="fs-4 text-danger">$ {{ parseInt(cartData.final_total) }}</span>
              </li>
            </ul>
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
      cartData: [],
      isLoadingItem: '',
      qty: 1,
      // 表單欄位輸入資料 (帶入 API)
      form: {
        user: {
          email: '',
          name: '',
          tel: '',
          address: ''
        },
        message: ''
      }
    }
  },
  inject: ['emitter'],
  methods: {
    getCartData () {
      const url = `${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_PATH}/cart`
      this.$http
        .get(url)
        .then((res) => {
          // 是個陣列
          this.cartData = res.data.data
        })
        .catch((err) => {
          console.log(err)
        })
    },

    sendOrder () {
      const url = `${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_PATH}/order`
      this.$http
        .post(url, { data: this.form })
        .then((res) => {
          this.emitter.emit('get-cart-data') // 發出 request 時，購物車會清空，所以同時觸發 emitter 更新
          const { orderId } = res.data
          this.$router.push(`/checkorder/${orderId}`)
        })
        .catch((err) => {
          console.log(err)
        })
    },

    // 套件：電話號碼規則
    isPhone (value) {
      const phoneNumber = /^(09)[0-9]{8}$/
      return phoneNumber.test(value) ? true : '請輸入有效的手機號碼'
    }
  },
  mounted () {
    this.getCartData()
  }
}
</script>
