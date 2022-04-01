<template>
  <!-- 這邊的 ref="modal" 對應到 modalMixin 的 modal -->
  <div
    ref="modal"
    class="modal fade"
    id="couponModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            <span v-if="isNew">新增優惠卷</span>
            <span v-else>編輯優惠卷</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <label for="title">標題</label>
            <input
              type="text"
              class="form-control"
              id="title"
              v-model="tempCouponObj.title"
              placeholder="請輸入標題"
            />
          </div>
          <div class="mb-3">
            <label for="coupon_code">優惠碼</label>
            <input
              type="text"
              class="form-control"
              id="coupon_code"
              v-model="tempCouponObj.code"
              placeholder="請輸入優惠碼"
            />
          </div>
          <div class="mb-3">
            <label for="due_date">到期日</label>
            <input
              type="date"
              class="form-control"
              id="due_date"
              v-model="due_date"
            />
          </div>
          <div class="mb-3">
            <label for="price">折扣百分比</label>
            <input
              type="number"
              class="form-control"
              id="price"
              min="0"
              v-model.number="tempCouponObj.percent"
              placeholder="請輸入折扣百分比"
            />
          </div>
          <div class="mb-3">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                :true-value="1"
                :false-value="0"
                v-model="tempCouponObj.is_enabled"
                id="is_enabled"
              />
              <label class="form-check-label" for="is_enabled">
                是否啟用
              </label>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button
            type="button"
            class="btn btn-primary"
            @click="$emit('update-coupon', isNew, tempCouponObj)"
          >
            {{ isNew ? '新增優惠卷' : '更新優惠券' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modalMixin from '../mixins/modalMixin.js'
export default {
  // props
  props: {
    coupon: {
      type: Object,
      default () {
        return {}
      }
    },
    isNew: {
      type: Boolean,
      default: false
    }
  },
  emits: ['update-coupon'],
  mixins: [modalMixin],
  data () {
    return {
      tempCouponObj: {},
      due_date: ''
    }
  },
  // 監聽 coupon 這個 props
  watch: {
    coupon () {
      this.tempCouponObj = this.coupon
      const dateAndTime = new Date(this.tempCouponObj.due_date * 1000)
        .toISOString()
        .split('T')
      ;[this.due_date] = dateAndTime
      console.log(this.coupon, 'coupon')
      console.log(this.tempCouponObj, 'tempObj')
    },
    due_date () {
      this.tempCouponObj.due_date = Math.floor(new Date(this.due_date) / 1000)
    }
  }
}
</script>
