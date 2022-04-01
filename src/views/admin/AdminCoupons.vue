<template>
  <div class="container">
    <Loading :active="isLoading" :z-index="1060"></Loading>
    <div class="text-end mt-4">
      <button
        class="btn btn-secondary text-light my-4"
        type="button"
        @click="openCouponModal('isNew')"
      >
        建立優惠券
      </button>
    </div>
    {{ coupons }}
    <table class="table mt-4">
      <thead>
        <tr>
          <th>名稱</th>
          <th>折扣百分比</th>
          <th>到期日</th>
          <th>是否啟用</th>
          <th>編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, key) in coupons" :key="key">
          <td>{{ item.title }}</td>
          <td>{{ item.percent }}%</td>
          <td>{{ $filters.date(item.due_date) }}</td>
          <td>
            <span v-if="item.is_enabled === 1" class="text-success">啟用</span>
            <span v-else class="text-muted">未啟用</span>
          </td>
          <td>
            <div class="btn-group">
              <button
                class="btn btn-outline-primary btn-sm"
                @click="openCouponModal('edit', item)"
              >
                編輯
              </button>
              <button
                class="btn btn-outline-danger btn-sm"
                @click="openDeleteCouponModal(item)"
              >
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <coupon-modal
      :coupon="tempCouponData"
      :is-new="isNew"
      ref="couponModal"
      @update-coupon="updateCoupon"
    />
    <delete-coupon-modal
      :coupon="tempCouponData"
      ref="deleteModal"
      @delete-coupon="deleteCoupon"
    />
  </div>
</template>

<script>
// 引入自己的元件
import couponModal from '../../components/CouponModal.vue'
import deleteCouponModal from '../../components/DeleteCouponModal.vue'

export default {
  data () {
    return {
      // 原始的完整資料
      coupons: [],
      // 複製給 modal 用的資料
      tempCouponData: {
        title: '',
        is_enabled: 0,
        percent: 100,
        code: ''
      },
      // 引入自己寫的 BS 元件
      couponModal: {},
      deleteCouponModal: {},
      // 判斷為新增或修改優惠券
      isNew: true,
      // toggle 狀態
      isIssued: true
    }
  },
  components: {
    couponModal,
    deleteCouponModal
  },
  methods: {
    getCouponsData () {
      this.$http
        .get(
          `${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_PATH}/admin/coupons`
        )
        .then((res) => {
          this.coupons = res.data.coupons
        })
        .catch((err) => {
          console.log(err)
        })
    },
    // 先判斷是新增還是修改資料，並將 isNew 參數調整，作為後面打 API 使用
    openCouponModal (status, tempCouponObj) {
      if (status === 'isNew') {
        this.isNew = true
        this.tempCouponData = {}
        this.$refs.couponModal.openModal()
      } else if (status === 'edit') {
        this.isNew = false
        this.tempCouponData = { ...tempCouponObj }
        this.$refs.couponModal.openModal()
      }
    },
    // 依照 isNew 的狀態來判斷，modal 內的按鈕要發哪個 API
    updateCoupon (isNew, item) {
      let url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupon`
      let httpMethods = 'post'
      if (isNew === false) {
        url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupon/${item.id}`
        httpMethods = 'put'
      }
      this.$http[httpMethods](url, { data: item })
        .then((res) => {
          console.log(res.data)
          this.coupons = res.data.coupons
          this.$refs.couponModal.hideModal()
        })
        .catch((err) => {
          console.log(err)
        })
    },
    openDeleteCouponModal (tempCouponObj) {
      this.tempCouponData = { ...tempCouponObj }
      this.$refs.deleteModal.openModal()
    },
    deleteCoupon (item) {
      console.log(item)
      this.$http
        .delete(
          `${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_PATH}/admin/coupon/${item.id}`
        )
        .then((res) => {
          console.log(res.data)
          this.coupons = res.data.coupons
          this.$refs.deleteModal.hideModal()
          this.getCouponsData()
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  mounted () {
    this.getCouponsData()
  }
}
</script>
