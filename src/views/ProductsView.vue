<template>
  <div class="container d-flex">
    <!-- 產品類別選單 -->
    <div class="row">
      <div class="col-12">
        <nav
          class="w-100 pt-10 pe-10 me-20 list-unstyled sticky-top product-category-list text-secondary"
        >
          <h3 class="fs-3 pe-4 mb-4 product-category-list-item">產品類別</h3>
          <ul class="list-unstyled">
            <li
              class="d-block fs-5 pe-4 ps-2 mb-3 py-1 text-decoration-none product-category-list-item"
              @click="getProductData()"
            >
              <router-link class="" to="/products">全部產品</router-link>
            </li>
            <template v-for="item in category" :key="item">
              <li
                class="d-block fs-5 pe-4 ps-2 mb-3 py-1 text-decoration-none product-category-list-item"
                @click="getProductData(page, item)"
              >
                <router-link
                  class="text-decoration-none"
                  :to="{ query: { category: item } }"
                  >{{ item }}</router-link
                >
              </li>
            </template>
          </ul>
        </nav>
      </div>
    </div>
    <!-- 主要商品列表區 -->
    <div class="row">
      <h2 class="text-center text-secondary pt-12 pb-16">好好精選</h2>
      <!-- 卡片 -->
      <div class="col-md-6" v-for="product in products" :key="product.id">
        <div class="card border-0 mb-8">
          <div class="img-cover">
            <img
              :src="product.imageUrl"
              class="card-img-top rounded-0 h-100"
              :alt="product.title"
            />
          </div>
          <div class="card-body p-0">
            <div class="text">
              <h3
                class="mb-1 mt-4 fs-5 d-flex justify-content-between align-item-center px-3"
              >
                <router-link
                  :to="`/product/${product.id}`"
                  class="text-secondary text-decoration-none stretched-link"
                  >{{ product.title }}</router-link
                >
                <a href="#" class="text-secondary">
                  <i class="bi bi-bookmark-plus-fill fs-4"></i>
                </a>
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
      // 自己寫的 BS component
      pagination: {},
      // 狀態樣式
      isActive: ''
    }
  },
  components: {
    ProductPagination
  },
  // 嘗試 router-link 寫法
  // watch: {
  //   $route (to) {
  //     console.log(to.query.category)
  //   }
  // },
  methods: {
    getProductData (page = 1, query) {
      let url = `${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_PATH}/products?page=${page}`
      if (query) {
        url = `${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_PATH}/products?category=${query}`
      }
      this.$http.get(url).then((res) => {
        console.log(res.data)
        this.products = res.data.products
        this.pagination = res.data.pagination
      })
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
          // console.log(tempCategory)
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

<style lang="scss" scoped>
.img-cover {
  height: 280px;
  img {
    object-fit: cover;
  }
}
.product-category-list {
  top: 84px;
  .product-category-list-item {
    a {
      cursor: pointer;
      text-decoration: none;
    }
    a.router-link-active{
      border-left: 3px solid gray;
    }
    border-left: 3px solid transparent;
    &:hover {
      border-left: 3px solid gray;
    }
  }
}
</style>
