<template>
  <div class="container d-flex">
    <!-- 產品類別選單 -->
    <div class="row">
      <div class="col-12">
        <ul
          class="w-100 pt-10 pe-10 me-20 list-unstyled sticky-top product-category-list text-secondary"
        >
          <h3 class="fs-3 ps-2 pe-4 mb-4">產品類別</h3>
          <li
            class="d-block fs-5 pe-4 ps-2 mb-3 py-1 text-decoration-none product-category-list-item"
            :class="{ isSelected: tempCategory === '' }"
            @click="getProductData(page, '')"
          >
            全部商品
          </li>
          <template v-for="item in category" :key="item">
            <li
              class="d-block fs-5 pe-4 ps-2 mb-3 py-1 text-decoration-none product-category-list-item"
              :class="{ isSelected: tempCategory === item }"
              @click="getProductData(page, item)"
            >
              {{ item }}
            </li>
          </template>
        </ul>
      </div>
    </div>
    <!-- 主要商品列表區 (卡片) -->
    <div class="row g-10">
      <h2 class="text-center text-secondary py-8">好好精選</h2>
      <!-- 卡片 -->
      <div
        class="col-md-6 col-lg-4"
        v-for="product in products"
        :key="product.id"
      >
        <div class="card border-0 rounded-3 mb-24">
          <div class="img-cover rounded-3">
            <img
              :src="product.imageUrl"
              class="card-img-top rounded-0 h-100 text-overlay-img rounded-3"
              :alt="product.title"
            />
            <span class="badge bg-secondary ms-3 mt-3 text-top fs-5">{{
              product.category
            }}</span>
          </div>
          <div class="card-body p-0 d-flex justify-content-between pt-4">
            <div class="text">
              <h3
                class="mb-2 mt-1 fs-5 fw-bold d-flex justify-content-between align-item-center px-3"
              >
                <router-link
                  :to="`/product/${product.id}`"
                  class="text-secondary text-decoration-none"
                  >{{ product.title }}</router-link
                >
              </h3>
              <div v-if="product.origin_price === product.price">
                <p class="card-text mb-0 px-3 fs-6">
                  $ {{ product.origin_price }}
                </p>
              </div>
              <div v-else>
                <p class="card-text mb-0 text-danger fs-6 d-flex px-3">
                  <span class="text-secondary me-4"
                    ><del>$ {{ product.origin_price }}</del></span
                  >
                  $ {{ product.price }}
                </p>
              </div>
            </div>
            <!-- 加入購物車 btn -->
            <a
              class="text-secondary border-start px-6 add-to-cart-btn"
            >
              <i class="bi bi-cart-plus fs-2"></i>
            </a>
          </div>
        </div>
      </div>
      <product-pagination
        class="pt-24"
        :pages="pagination"
        @get-product-data="getProductData"
      ></product-pagination>
    </div>
  </div>
</template>

<script>
import ProductPagination from '../components/ProductPagination.vue'

export default {
  data () {
    return {
      products: [],
      category: [],
      page: 0,
      // 自己寫的 BS component
      pagination: {},
      // 當下篩選類別，控制狀態樣式
      tempCategory: ''
    }
  },
  components: {
    ProductPagination
  },
  // 嘗試 router-link 寫法
  watch: {
    tempCategory () {
      this.getProductData((this.page = 1), this.tempCategory)
    }
  },
  methods: {
    getProductData (page = 1, query) {
      let url = `${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_PATH}/products?page=${page}`
      if (query) {
        url = `${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_PATH}/products?category=${query}`
      }
      this.$http.get(url).then((res) => {
        this.products = res.data.products
        this.pagination = res.data.pagination
      })
      this.tempCategory = query
    },
    getCategoryData () {
      this.$http
        .get(
          `${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_PATH}/products/all`
        )
        .then((res) => {
          const tempCategory = []
          res.data.products.forEach((product) => {
            tempCategory.push(product.category)
          })
          this.category = [...new Set(tempCategory)]
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  mounted () {
    this.getProductData()
    this.getCategoryData()
    // this.category = this.$route.query.category
  }
}
</script>

<style>
/* 卡片圖片樣式設定 */
.img-cover {
  height: 280px;
  position: relative;
  width: 100%;
}
.img-cover img {
  object-fit: cover;
}
.text-top {
  position: absolute;
  top: 0;
  left: 0;
}
.add-to-cart-btn{
  cursor: pointer;
}
.add-to-cart-btn i:hover {
  color: #b5adad;
}
/* 產品列表選單 */
.product-category-list {
  top: 84px;
}
.product-category-list-item {
  cursor: pointer;
  padding-left: 10px;
  border-left: 3px solid transparent;
}
.isSelected {
  padding-left: 10px;
  border-left: 3px solid gray;
}
</style>
