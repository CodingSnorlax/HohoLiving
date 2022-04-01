<template>
  <div class="bg-image">
    <div class="container">
      <div class="title">
        <h2 class="text-light mb-12 mb-md-0 pt-24">好好生活 Hoholiving</h2>
      </div>

      <div class="log-form">
        <h2 class="bg-primary fw-bold">登入後台</h2>
        <Form ref="form" class="col-md-6" @submit="login" v-slot="{ errors }">
          <div class="mb-4">
            <Field
              type="text"
              title="帳號"
              placeholder="帳號"
              name="帳號"
              :class="{ 'is-invalid': errors['帳號'] }"
              rules="required"
              v-model="user.username"
            />
            <ErrorMessage name="帳號" class="invalid-feedback"></ErrorMessage>
          </div>
          <div class="mb-4">
            <Field
              type="password"
              title="密碼"
              placeholder="密碼"
              name="密碼"
              :class="{ 'is-invalid': errors['密碼'] }"
              rules="required"
              v-model="user.password"
            />
            <ErrorMessage name="密碼" class="invalid-feedback"></ErrorMessage>
          </div>
          <button type="submit" class="btn btn-primary text-light">
            <!-- 如果button上面是@click="login" 而不到form上面寫@submit為何不行?-->
            登入
          </button>
          <button
            type="button"
            @click="backToFront"
            class="btn btn-primary text-light"
          >
            回首頁
          </button>
        </Form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  // Email 登入
  // 存 cookie
  // 轉址到後台
  methods: {
    login () {
      this.$http
        .post(`${process.env.VUE_APP_API}/v2/admin/signin`, this.user)
        .then((res) => {
          console.log(res.data)
          const { token, expired } = res.data // 回傳的 token, expired 取值
          document.cookie = `karenzToken=${token}; expires=${new Date(
            expired
          )};` // token, expired 存入 cookie
          alert(res.data.message)
          // 轉址到後台
          this.$router.push('/admin/adminProducts')
        })
        .catch((err) => {
          console.log(err)
          alert('登入資料有誤，請重新輸入！')
          this.user.username = ''
          this.user.password = ''
        })
    },
    backToFront () {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
}
.bg-image {
  width: 100%;
  height: 100vh;
  background-image: url('https://images.unsplash.com/photo-1528458909336-e7a0adfed0a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1048&q=80');
  background-repeat: no-repeat;
  background-size: cover;
}
.log-form {
  width: 40%;
  min-width: 320px;
  max-width: 475px;
  background: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
  @media (max-width: 40rem) {
    width: 95%;
    position: relative;
    margin: 2.5% auto 0 auto;
    left: 0%;
    -webkit-transform: translate(0%, 0%);
    -moz-transform: translate(0%, 0%);
    -o-transform: translate(0%, 0%);
    -ms-transform: translate(0%, 0%);
    transform: translate(0%, 0%);
  }
  form {
    display: block;
    width: 100%;
    padding: 2rem;
  }
  h2 {
    width: 100%;
    color: lighten(white, 20%);
    font-size: 1.25em;
    display: block;
    width: 100%;
    padding: 0.75em 1.5em;
    box-shadow: inset 0px 1px 1px fadeout(white, 95%);
    margin: 0;
    font-weight: 200;
  }
  input {
    display: block;
    margin: auto auto;
    width: 100%;
    margin-bottom: 2em;
    padding: 0.5em 0;
    border: none;
    border-bottom: 1px solid #eaeaea;
    padding-bottom: 1.25em;
    color: #757575;
    &:focus {
      outline: none;
    }
  }
  .btn {
    display: inline-block;
    padding: 0.5em 2em;
    margin-right: 2em;
    box-shadow: inset 0px 1px 0px fadeout(white, 80%);
  }
}
</style>
