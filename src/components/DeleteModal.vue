<template>
  <!-- 刪除產品 modal 元件 -->
  <div
    id="deleteModal"
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
            <span>刪除產品</span>
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
          <strong class="text-danger">{{ tempProductObj.title }}</strong>
          商品(刪除後將無法恢復)。
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-outline-secondary"
            data-bs-dismiss="modal"
          >
            取消
          </button>
          <button type="button" class="btn btn-danger" @click="deleteProduct">
            確認刪除
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['itemData', 'deleteModal'],
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
    deleteProduct () {
      this.$http
        .delete(
          `${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_PATH}/admin/product/${this.tempProductObj.id}`
        )
        .then((res) => {
          alert('商品已刪除！')
          this.deleteModal.hide()
          this.$emit('get-product')
        })
        .catch((err) => {
          console.dir(err)
        })
    }
  }
}
</script>
