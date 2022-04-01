<template>
  <!-- Modal -->
  <div
    id="productModal"
    ref="productModal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="productModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-xl">
      <div class="modal-content border-0">
        <div class="modal-header bg-primary text-white">
          <h5 id="productModalLabel" class="modal-title">
            <span>{{ isNew ? '新增產品' : '編輯產品' }}</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-sm-4">
              <div class="mb-2">
                <div class="mb-3">
                  <h4 class="mb-1">主圖設置</h4>
                  <label for="imageUrl" class="form-label">輸入圖片網址</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="請輸入圖片連結"
                    v-model="tempProductObj.imageUrl"
                  />
                </div>
                <img class="img-fluid" :src="tempProductObj.imageUrl" alt="" />
              </div>
              <!-- 多圖設置 -->
              <div class="mb-3">
                <div v-if="Array.isArray(tempProductObj.imagesUrl)">
                  <h4 class="mt-4 mb-1">多圖設置</h4>
                  <div
                    v-for="(image, key) in tempProductObj.imagesUrl"
                    :key="key"
                  >
                    <input
                      type="text"
                      class="form-control"
                      id="imageUrl"
                      v-model="tempProductObj.imagesUrl[key]"
                      placeholder="請輸入圖片連結"
                    />
                    <img
                      class="img-fluid mb-4"
                      :src="tempProductObj.imagesUrl[key]"
                      alt=""
                    />
                  </div>
                  <div class="d-flex mt-4">
                    <!-- 當陣列是空的就可以新增 或 陣列內最後一筆資料有內文也可以新增 -->
                    <button
                      v-if="
                        !tempProductObj.imagesUrl.length ||
                        tempProductObj.imagesUrl[
                          tempProductObj.imagesUrl.length - 1
                        ]
                      "
                      class="btn btn-outline-primary btn-sm d-block w-50 me-2"
                      type="button"
                      @click="tempProductObj.imagesUrl.push('')"
                    >
                      新增圖片
                    </button>
                    <button
                      class="btn btn-outline-danger btn-sm d-block w-50"
                      type="button"
                      @click="tempProductObj.imagesUrl.pop()"
                    >
                      刪除圖片
                    </button>
                  </div>
                </div>
              </div>
              <!-- 多圖設置 -->
            </div>
            <div class="col-sm-8">
              <div class="mb-3">
                <label for="title" class="form-label">標題</label>
                <input
                  id="title"
                  type="text"
                  class="form-control"
                  placeholder="請輸入標題"
                  v-model="tempProductObj.title"
                />
              </div>

              <div class="row">
                <div class="mb-3 col-md-6">
                  <label for="category" class="form-label">分類</label>
                  <input
                    id="category"
                    type="text"
                    class="form-control"
                    placeholder="請輸入分類"
                    v-model="tempProductObj.category"
                  />
                </div>
                <div class="mb-3 col-md-6">
                  <label for="price" class="form-label">單位</label>
                  <input
                    id="unit"
                    type="text"
                    class="form-control"
                    placeholder="請輸入單位"
                    v-model="tempProductObj.unit"
                  />
                </div>
              </div>

              <div class="row">
                <div class="mb-3 col-md-6">
                  <label for="origin_price" class="form-label">原價</label>
                  <input
                    id="origin_price"
                    type="number"
                    min="0"
                    class="form-control"
                    placeholder="請輸入原價"
                    v-model="tempProductObj.origin_price"
                  />
                </div>
                <div class="mb-3 col-md-6">
                  <label for="price" class="form-label">售價</label>
                  <input
                    id="price"
                    type="number"
                    min="0"
                    class="form-control"
                    placeholder="請輸入售價"
                    v-model="tempProductObj.price"
                  />
                </div>
              </div>
              <hr />

              <div class="mb-3">
                <label for="description" class="form-label">產品描述</label>
                <textarea
                  id="description"
                  type="text"
                  class="form-control"
                  placeholder="請輸入產品描述"
                  v-model="tempProductObj.description"
                >
                </textarea>
              </div>
              <div class="mb-3">
                <label for="content" class="form-label">品牌故事</label>
                <textarea
                  id="description"
                  type="text"
                  class="form-control"
                  placeholder="請輸入品牌故事"
                  v-model="tempProductObj.brandStory"
                >
                </textarea>
              </div>
              <div class="mb-3">
                <label for="content" class="form-label">說明內容</label>
                <textarea
                  id="description"
                  type="text"
                  class="form-control"
                  placeholder="請輸入說明內容"
                  v-model="tempProductObj.content"
                >
                </textarea>
              </div>
              <div class="mb-3">
                <div class="form-check">
                  <input
                    id="is_enabled"
                    class="form-check-input"
                    type="checkbox"
                    :true-value="1"
                    :false-value="0"
                    v-model="tempProductObj.is_enabled"
                  />
                  <label class="form-check-label" for="is_enabled"
                    >是否啟用</label
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-outline-secondary"
            data-bs-dismiss="modal"
          >
            取消
          </button>
          <template v-if="isNew">
            <button
              type="button"
              class="btn btn-primary text-light"
              @click="updateProductData"
            >
              新增
            </button>
          </template>
          <template v-else>
            <button
              type="button"
              class="btn btn-primary text-light"
              @click="updateProductData"
            >
              更新
            </button>
          </template>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal -->
</template>

<script>
export default {
  props: ['tempProductData', 'isNew', 'productModal'],
  data () {
    return {
      tempProductObj: {}
    }
  },
  watch: {
    tempProductData () {
      this.tempProductObj = this.tempProductData
    }
  },
  methods: {
    updateProductData () {
      let url = `${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_PATH}/admin/product`
      let method = 'post'
      if (this.isNew === false) {
        url = `${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_PATH}/admin/product/${this.tempProductData.id}`
        method = 'put'
      }
      this.$http[method](url, { data: this.tempProductObj })
        .then((res) => {
          this.$emit('get-product')
          this.productModal.hide()
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>
