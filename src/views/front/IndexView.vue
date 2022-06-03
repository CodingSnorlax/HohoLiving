<template>
  <VueLoading :active="isLoading">
    <img src="@/assets/images/loading-spinner.gif" alt="VueLoadingSpinner" />
  </VueLoading>
  <!-- banner -->
  <div class="banner">
    <div class="container">
      <div class="title text-secondary text-md-primary pt-28 mb-4">
        <h4 class="fw-light mb-4">極簡美學</h4>
        <h1 class="">好好生活</h1>
        <h2 class="">存在家中每個角落</h2>
      </div>
      <button @click="goShopping" class="btn btn-secondary text-white">
        點我逛逛
      </button>
    </div>
  </div>

  <!-- 好好精選 -->
  <div class="product">
    <div class="container">
      <h2 class="text-center my-12">限定促銷</h2>
      <div class="product-card-section d-flex">
        <div class="row g-4">
          <div class="col-md-3 mb-5" v-for="item in products" :key="item.id">
            <div class="card h-100">
              <div class="imageWrapper">
                <img
                  :src="item.imageUrl"
                  class="card-img-top h-100"
                  :alt="item.title"
                />
              </div>

              <div class="card-body">
                <h4 class="card-title text-secondary fs-5 fs-md-4 mt-2 text-center">
                  {{ item.title }}
                </h4>
                <router-link
                  class="stretched-link"
                  :to="`/product/${item.id}`"
                ></router-link>
              </div>
            </div>
            <!-- 卡片尾 -->
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- 好好用心 -->
  <div class="product-intro bg-primary">
    <div class="container">
      <h2 class="text-center text-white my-12 pt-12">好好用心</h2>

      <div class="product-intro-card-section pb-12 d-md-flex">
        <div class="card text-white border-0 mb-8 mb-md-0 me-md-4">
          <img
            src="@/assets/images/handcraft.jpg"
            class="card-img"
            alt="手工打造品味生活"
          />
          <div
            class="card-img-overlay d-flex flex-column justify-content-center"
          >
            <h2 class="card-title text-center text-light fs-3 fs-md-2">
              手工打造品味生活
            </h2>
          </div>
          <router-link class="stretched-link" to="/about"></router-link>
        </div>

        <div class="card text-white border-0 mb-8 mb-md-0 me-md-4">
          <img
            src="@/assets/images/detail.jpg"
            class="card-img"
            alt="注重產品每項細節"
          />
          <div
            class="card-img-overlay d-flex flex-column justify-content-center"
          >
            <h2 class="card-title text-center text-light fs-3 fs-md-2">
              注重每項產品細節
            </h2>
          </div>
          <router-link class="stretched-link" to="/about"></router-link>
        </div>

        <div class="card text-white border-0 mb-8 mb-md-0 me-md-4">
          <img
            src="@/assets/images/wood-material.jpg"
            class="card-img"
            alt="堅持選用環保木料"
          />
          <div
            class="card-img-overlay d-flex flex-column justify-content-center"
          >
            <h2 class="card-title text-center text-light fs-3 fs-md-2">
              堅持選用環保木料
            </h2>
          </div>
          <router-link class="stretched-link" to="/about"></router-link>
        </div>
      </div>
    </div>
  </div>
  <!-- 好好哲學 -->
  <div class="brand-intro">
    <div class="container">
      <h2 class="text-center my-12">好好哲學</h2>
      <div class="content">
        <div class="row flex-column flex-md-row">
          <div
            class="col-md-4 offset-md-2 d-flex flex-column justify-content-center"
          >
            <div
              class="brand-intro-text text-secondary mx-12 mx-md-0 mb-8 mb-md-4 fs-4 border-bottom"
            >
              <p>Less is more.</p>
              <p>好好生活致力於</p>
              <p>提供現代平凡男子女子的極簡生活提案。</p>
            </div>
          </div>
          <div class="col-md-6">
            <div
              class="brand-intro-img rounded-3 d-flex justify-content-center"
            >
              <img
                class="w-50 rounded-3"
                src="@/assets/images/plant.jpg"
                alt="好好生活品牌宗旨"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- 評價好好 -->
  <div class="customer-credit bg-primary pb-12">
    <div class="container">
      <h2 class="text-center text-white my-12 pt-12">評價好好</h2>
      <div class="row">
        <!-- 第一張卡片 -->
        <div class="col-md-4 mb-6">
          <div class="card border-0 bg-transparent h-100">
            <div
              class="card-body bg-secondary mb-6 mb-md-10 dialog-border-bottom d-flex flex-column justify-content-between"
            >
              <div class="main-txt mb-4">
                <h4 class="mb-4 text-light">購入 ARKELSTORP 實木桌</h4>
                <h5 class="card-title customer-credit-star">
                  商品滿意度 <i class="bi bi-star-fill"></i
                  ><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i
                  ><i class="bi bi-star-fill"></i>
                </h5>
                <p class="card-text text-light">
                  質感不錯的一個桌子，外觀看起來很好看~小缺點是抽屜沒有導軌，拖拉沒有那麼順
                </p>
              </div>

              <p class="card-text d-flex flex-column customer-credit-time">
                <small class="">時間 10 天前</small>
                <small class="">評論者 曾先生</small>
                <small class="">來自 台北</small>
              </p>
            </div>

            <div class="d-flex justify-content-center">
              <img
                class="customer-photo rounded-circle border-1 d-block mb-6"
                src="https://images.unsplash.com/photo-1532318065232-2ba7c6676cd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=923&q=80"
                alt="customer-photo"
              />
            </div>
          </div>
        </div>
        <!-- second -->
        <div class="col-md-4 mb-6">
          <div class="card border-0 bg-transparent h-100">
            <div
              class="card-body bg-secondary mb-6 mb-md-10 dialog-border-bottom d-flex flex-column justify-content-between"
            >
              <div class="main-txt mb-4">
                <h4 class="mb-4 text-light">購入 DINERA 馬克杯</h4>
                <h5 class="card-title customer-credit-star">
                  商品滿意度 <i class="bi bi-star-fill"></i
                  ><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i
                  ><i class="bi bi-star-fill"></i
                  ><i class="bi bi-star-fill"></i>
                </h5>
                <p class="card-text text-light">
                  天呀！不敢相信!
                  <br />這真的就是我從英國回來之後一直在找的馬克杯！謝謝好好生活大老遠從歐洲進口這個杯子，我真的超超超超喜歡的啦～～～！謝謝你們！
                </p>
              </div>

              <p class="card-text d-flex flex-column customer-credit-time">
                <small class="">時間 6 天前</small>
                <small class="">評論者 Yvonne</small>
                <small class="">來自 台中</small>
              </p>
            </div>

            <div class="d-flex justify-content-center">
              <img
                class="customer-photo rounded-circle border-1 d-block mb-6"
                src="https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                alt="customer-photo"
              />
            </div>
          </div>
        </div>
        <!-- third -->
        <div class="col-md-4 mb-6">
          <div class="card border-0 bg-transparent h-100">
            <div
              class="card-body bg-secondary mb-6 mb-md-10 dialog-border-bottom d-flex flex-column justify-content-between"
            >
              <div class="main-txt mb-4">
                <h4 class="mb-4 text-light">購入 OPLEV 門墊</h4>
                <h5 class="card-title customer-credit-star">
                  商品滿意度 <i class="bi bi-star-fill"></i
                  ><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i
                  ><i class="bi bi-star-fill"></i>
                </h5>
                <p class="card-text text-light">
                  這門墊止滑效果蠻好，我跟我老婆都不擔心洗完澡地板濕滑的問題了勒，這邊也推薦給大家喔
                </p>
              </div>

              <p class="card-text d-flex flex-column customer-credit-time">
                <small class="">時間 2 天前</small>
                <small class="">評論者 吳先生</small>
                <small class="">來自 新北</small>
              </p>
            </div>

            <div class="d-flex justify-content-center">
              <img
                class="customer-photo rounded-circle border-1 d-block mb-6"
                src="https://images.unsplash.com/photo-1584712464768-d91a86e4816f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=935&q=80"
                alt="customer-photo"
              />
            </div>
          </div>
          <!-- 第三張卡片結束 -->
        </div>
      </div>
    </div>
  </div>
  <!-- 訂閱電子報 -->
  <div class="newsletter">
    <div class="container">
      <div class="content d-flex flex-column justify-content-center ps-4">
        <h3 class="text-light fs-3 fs-md-2 pt-4 mb-3">
          訂閱電子報，<br />掌握最新消息與會員專屬優惠！
        </h3>
        <div class="row">
          <div class="col-10 col-md-6 col-lg-4">
            <div class="input-group mb-3">
              <input
                type="email"
                class="form-control"
                placeholder="user@hoholiving.com"
                aria-label="user@hoholiving.com"
                aria-describedby="button-addon2"
              />
              <button
                class="btn btn-outline-secondary"
                type="button"
                id="button-addon2"
              >
                訂閱
              </button>
            </div>
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
      products: [],
      isLoading: false
    }
  },
  methods: {
    getProductData (query) {
      this.isLoading = true
      const url = `${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_PATH}/products?category=${query}`

      this.$http.get(url).then((res) => {
        this.products = res.data.products
        // 設定 0.7s 後，loading 動畫停止
        setTimeout(() => {
          this.isLoading = false
        }, 400)
      })
    },
    goShopping () {
      this.$router.push('/products')
    }
  },
  mounted () {
    this.getProductData('限定促銷')
  }
}
</script>

<style lang="scss">
.banner {
  background-size: cover;
  background-repeat: no-repeat;
}
@media (max-width: 767px) {
  .banner {
    height: calc(100vh - 220px);
    background-image: url(https://images.unsplash.com/photo-1596079890744-c1a0462d0975?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768);
    background-position: left center;
  }
}
@media (min-width: 768px) {
  .banner {
    height: calc(100vh - 208px);
    background-image: url(https://images.unsplash.com/photo-1616628198591-eaa25811775b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1600);
    background-position: bottom;
  }
}
.imageWrapper {
  height: 220px;
}
.card-img-top {
  object-fit: cover;
}
.dialog-border-bottom {
  border: 5px solid #888888;
  margin-bottom: 10px;
  position: relative;
}
.dialog-border-bottom:before {
  border-color: #888888 transparent transparent;
  border-style: solid solid solid;
  border-width: 20px 20px 20px 20px;
  bottom: -40px;
  /* 必須指定，才能顯示內容 */
  content: '';

  height: 0px;

  /* 必須指定，否則會變梯形 */
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 0px;
}
.dialog-border-bottom:after {
  border-color: #fff transparent transparent;
  border-style: solid solid solid solid;
  border-width: 20px;

  /* 必須指定，才能顯示內容 */
  content: '';

  height: 0px;

  /* 必須指定，否則會變梯形 */
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: -33px;

  width: 0px;
}
.customer-photo {
  width: 120px;
  height: 120px;
}
.customer-credit-star {
  color: #ffffc2;
}
.customer-credit-time {
  color: #fafafa;
}
.newsletter {
  height: 300px;
  background-image: url(https://images.unsplash.com/photo-1470790376778-a9fbc86d70e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=704&q=80);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: right;
  .content {
    height: 300px;
  }
}
</style>
