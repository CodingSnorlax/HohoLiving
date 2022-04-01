<template>
  <!-- 刪除訂單 modal 元件 -->
  <div
    id="deleteOrderModal"
    ref="deleteModal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="delProductModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content border-0">
        <div class="modal-header bg-danger text-white">
          <h5 id="delProductModalLabel" class="modal-title">
            <span>刪除訂單</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          是否刪除編號
          <strong class="text-danger">{{ tempProductObj.id }}</strong>
          訂單 (刪除後無法恢復)
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-outline-secondary"
            data-bs-dismiss="modal"
          >
            取消
          </button>
          <button type="button" class="btn btn-danger" @click="deleteOrder">
            確認刪除
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['itemData', 'deleteOrderModal'],
  data () {
    return {
      tempProductObj: {}
    }
  },
  watch: {
    itemData () {
      this.tempProductObj = this.itemData
    }
  },
  methods: {
    deleteOrder () {
      this.$http
        .delete(
          `${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_PATH}/admin/order/${this.tempProductObj.id}`
        )
        .then((res) => {
          alert('訂單已刪除！')
          this.deleteOrderModal.hide()
          this.$emit('get-order-data')
        })
        .catch((err) => {
          console.dir(err)
        })
    }
  }
}
</script>
