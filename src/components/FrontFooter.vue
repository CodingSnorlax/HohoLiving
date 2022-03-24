<template>
  <div class="bg-primary">
    <div class="container">
      <div class="row pt-6 pt-md-8 pb-4">
        <div class="col-6 col-md-4 order-md-1 mb-8 mb-md-0">
          <h2 class="text-white">好好生活</h2>
          <ul class="navbar-nav me-8 mt-8 mb-4">
            <li class="nav-item active mb-2">
              <router-link class="text-white text-decoration-none" to="/products"
                >好好精選</router-link
              >
            </li>
            <li class="nav-item mb-2">
              <router-link class="text-white text-decoration-none" to="/customerService"
                >常見問題</router-link
              >
            </li>
            <li class="nav-item mb-2">
              <router-link class="text-white text-decoration-none" to="/about"
                >關於我們</router-link
              >
            </li>
          </ul>
          <small class="d-md-none text-center text-white"
            >© CodingSnorlax Copyright 2022 <br />本站為個人作品，不得作為商業用</small
          >
        </div>

        <div class="col-6 col-md-4 order-md-3">
          <ul class="list-unstyled d-flex mb-0 justify-content-end">
            <li class="me-2">
              <a href="#"
                ><i class="me-2 bi bi-facebook fs-2 text-white"></i
              ></a>
            </li>
            <li class="me-2">
              <a href="#"
                ><i class="me-2 bi bi-instagram fs-2 text-white"></i
              ></a>
            </li>
            <li>
              <a href="#"><i class="bi bi-twitter fs-2 text-white"></i></a>
            </li>
          </ul>
        </div>

        <div
          class="col-md-4 order-md-2 d-flex flex-column justify-content-end text-center"
        >
          <small class="d-none d-md-block text-white"
            >© CodingSnorlax Copyright 2022 <br />本站為個人作品，不得作為商業用</small
          >
        </div>
      </div>
    </div>
  </div>
</template>
