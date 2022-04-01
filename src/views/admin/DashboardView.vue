<template>
  <div>
    <DashboardNavbar></DashboardNavbar>
    <router-view v-if="checkSuccess"></router-view>
  </div>
</template>

<script>
import DashboardNavbar from '@/components/DashboardNavbar.vue'
export default {
  data () {
    return {
      checkSuccess: false
    }
  },
  components: {
    DashboardNavbar
  },
  methods: {
    checkAdmin () {
      const saveToken = document.cookie.replace(
        // eslint-disable-next-line
        /(?:(?:^|.*;\s*)karenzToken\s*\=\s*([^;]*).*$)|^.*$/,
        '$1'
      )
      if (saveToken) {
        this.$http.defaults.headers.common.Authorization = saveToken
        this.$http
          .post(`${process.env.VUE_APP_API}/v2/api/user/check`)
          .then((res) => {
            console.log(res.data)
            this.checkSuccess = true
          })
          .catch((err) => {
            console.log(err)
            alert(err.data.message)
            this.$router.push('/login')
          })
      } else {
        alert('您尚未登入！')
        this.$router.push('/login')
      }
    }
  },
  mounted () {
    this.checkAdmin()
  }
}
</script>
