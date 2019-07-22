<template>
    <div class="nav">
      <img src="@/assets/logo.png" class="nav_logo" @click="toindex"/>
      
      <div class="navmenu">

<el-menu :default-active="$route.path" :router="true"  mode="horizontal" >
  <el-menu-item index="/Index" class="menuitem">首页</el-menu-item>
  <el-menu-item index="/Activity" class="menuitem">发现</el-menu-item>
  <el-menu-item index="/Login" class="menuitem">{{nickname}}</el-menu-item>
</el-menu>

      </div>

      <!-- <img src="@/assets/head.png" @click="toperson" class="head" > -->
      <div style="clear:both;"></div>
    </div>
</template>

<script>
import axios from 'axios';
export default {

  name: 'HelloWorld',
  data () {
    return {
      activeIndex: '1',
      address:"",
      nickname:"我的"
    }
  },methods:{
    toindex(){
      this.$router.push({path:'/Index'});
    }
  },created(){
    console.log(1);
    var address=this.$cookieStore.getCookie("address");
    this.address=address;

    if(address==""){
      this.nickname="我的";
    }else{
      this.nickname=this.$cookieStore.getCookie("nickname");
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav{
  width: 100%;
  height: auto;

  background: #ffffff;
}
.nav_logo{
  display: block;
  float: left;
  width: 150px;
  height: 50px;
  border-radius: 200px;
  padding-top: 5px;
  margin-left: 10px;
}
.navmenu{
  font-weight: bold;
  float: right;
}
.nav_txt{
  float: left;
  height: 60px;
  line-height: 60px;
  margin-left: 60px;
}
.menuitem{
padding: 0px 10px;
}
</style>
