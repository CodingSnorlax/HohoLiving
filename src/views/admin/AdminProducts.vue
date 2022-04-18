<template>
  <div class="container">
    <VueLoading :active="isLoading">
      <img src="@/assets/images/loading-spinner.gif" alt="VueLoadingSpinner" />
    </VueLoading>
    <div class="text-end mt-4">
      <button
        class="btn btn-secondary text-light my-4"
        @click="openModal('isNew')"
      >
        建立新的產品
      </button>
    </div>
    <table class="table mt-4 mb-8">
      <thead>
        <tr>
          <th width="120">分類</th>
          <th>產品名稱</th>
          <th width="120">原價</th>
          <th width="120">售價</th>
          <th width="100">是否啟用</th>
          <th width="120">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in productData" :key="product.id">
          <td>{{ product.category }}</td>
          <td>{{ product.title }}</td>
          <td class="text-start">{{ product.origin_price }}</td>
          <td class="text-start">{{ product.price }}</td>
          <td>
            <span class="text-success" v-if="product.is_enabled === 1"
              >啟用</span
            >
            <span v-else>未啟用</span>
          </td>
          <td>
            <div class="btn-group">
              <button
                type="button"
                class="btn btn-outline-secondary btn-sm"
                @click="openModal('edit', product)"
              >
                編輯
              </button>
              <button
                type="button"
                class="btn btn-outline-danger btn-sm"
                @click="openModal('delete', product)"
              >
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="d-flex justify-content-center">
      <!-- 產品分頁元件 -->
      <DashboardPagination
        :pages="pagination"
        @get-product="getProductData"
      ></DashboardPagination>
    </div>

    <!-- 新增、修改商品 modal -->
    <ProductModal
      :tempProductData="tempProductData"
      :isNew="isNew"
      :productModal="productModal"
      @get-product="getProductData"
    ></ProductModal>
    <!-- 刪除商品 modal -->
    <DeleteModal
      :itemData="tempProductData"
      :deleteModal="deleteModal"
      @get-product="getProductData"
    ></DeleteModal>
  </div>
</template>

<script>
// bootstrap 設定檔
import BsProductModal from 'bootstrap/js/dist/modal'
// 自己的元件
import ProductModal from '@/components/ProductModal.vue'
import DeleteModal from '@/components/DeleteModal.vue'
import DashboardPagination from '@/components/DashboardPagination.vue'
export default {
  data () {
    return {
      isLoading: false,
      productData: [],
      tempProductData: {
        imagesUrl: []
      },
      isNew: true,
      // 引入 BS 元件
      productModal: {},
      deleteModal: {},
      pagination: {}
    }
  },
  components: {
    ProductModal,
    DeleteModal,
    DashboardPagination
  },
  methods: {
    getProductData (page = 1) {
      this.isLoading = true
      this.$http
        .get(
          `${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_PATH}/admin/products/?page=${page}`
        )
        .then((res) => {
          this.productData = res.data.products
          this.pagination = res.data.pagination
          this.isLoading = false
        })
        .catch((err) => {
          console.log(err)
        })
    },
    openModal (status, product) {
      if (status === 'isNew') {
        /* eslint-disable */
        ;(this.tempProductData = {
          imagesUrl: []
        }),
          (this.isNew = true),
          this.productModal.show()
      } else if (status === 'edit') {
        this.tempProductData = JSON.parse(JSON.stringify(product))
        this.isNew = false
        this.productModal.show()
      } else if (status === 'delete') {
        this.tempProductData = { ...product }
        this.deleteModal.show()
      }
    }
  },
  mounted() {
    this.getProductData()
    this.productModal = new BsProductModal(
      document.getElementById('productModal')
    )
    this.deleteModal = new BsProductModal(
      document.getElementById('deleteModal')
    )
  }
}
</script>
