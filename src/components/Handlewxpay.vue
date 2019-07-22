<template>
    <div>

    </div>
</template>

<script>
import axios from 'axios';
export default {

  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },methods:{

  },created(e) {
    const loading = this.$loading({
          lock: true,
          text: '处理中',
          spinner: 'el-icon-loading',
          background: 'rgba(255, 255, 255, 0.9)'
    });
    var that=this;  
    var addressto=this.$route.params.addressto;
    var price=this.$route.params.price;
    var memo=this.$route.params.memo;
    var apiurl=that.GLOBAL.apiurl;
    var weburl=that.GLOBAL.weburl;
    axios.get(apiurl + "/wxpay", { params: { "addressto": addressto, "price":price,"memo":memo}})
    .then(function (response) {
      console.log(response)
      window.location.href=weburl+"/Detail/1";
    // window.history.go(-1);
    })
    .catch(function (error) {
      console.log(error);
    });

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bottom{
  color: #d1d1d1;
  width: 100%;
  clear: both;
  font-weight: bold;
  text-align: center;
  height: 60px;
  line-height: 60px;
}
</style>
