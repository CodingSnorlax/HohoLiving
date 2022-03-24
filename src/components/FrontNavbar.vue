<template>
  <div class="bg-white sticky-top">
    <nav class="navbar navbar-expand-lg navbar-light bg-light px-8 d-flex">
      <!-- logo -->
      <router-link class="nav-link fs-3 text-dark" to="/">好好生活</router-link>
      <!-- 漢堡選單內容 -->
      <div
        class="collapse navbar-collapse bg-light custom-header-md-open justify-content-end"
        id="navbarNav"
      >
        <ul class="navbar-nav me-8">
          <li class="nav-item active">
            <router-link class="nav-link pe-2" to="/products"
              >好好精選</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link pe-2" to="/customerService"
              >常見問題</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link pe-2" to="/about"
              >關於我們</router-link
            >
          </li>
        </ul>

        <!-- icon 區域 -->
        <div class="d-flex align-items-center icon-section">
          <a href="#"><i class="bi bi-heart-fill fs-4 text-dark me-8"></i></a>
          <a href="./cart-2.html"
            ><i class="bi bi-cart-fill fs-3 text-dark"></i
          ></a>
        </div>
      </div>

      <!-- 漢堡選單按鈕 -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
    </nav>
  </div>
</template>

<style lang="scss">
.logo {
  text-decoration: none;
}
</style>
