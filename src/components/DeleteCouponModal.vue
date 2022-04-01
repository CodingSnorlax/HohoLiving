<template>
  <!-- 刪除優惠券 modal 元件 -->
  <!-- 這邊的 ref="modal" 對應到 modalMixin 的 modal -->
  <div ref="modal" class="modal fade" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content border-0">
        <div class="modal-header bg-danger text-white">
          <h5 id="delProductModalLabel" class="modal-title">
            <span>刪除優惠券</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          是否刪除
          <strong class="text-danger">{{ tempCouponObj.title }}</strong>
          優惠券 (刪除後將無法恢復)。
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-outline-secondary"
            data-bs-dismiss="modal"
          >
            取消
          </button>
          <button
            type="button"
            class="btn btn-danger"
            @click="$emit('delete-coupon', tempCouponObj)"
          >
            確認刪除
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 引入 modal 元件
import modalMixin from '@/mixins/modalMixin'

export default {
  mixins: [modalMixin],
  props: ['coupon'],
  emits: ['delete-coupon'],

  data () {
    return {
      tempCouponObj: {}
    }
  },
  watch: {
    coupon: {
      handler () {
        this.tempCouponObj = JSON.parse(JSON.stringify(this.coupon))
      },
      deep: true
    }
  }
}
</script>
