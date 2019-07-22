<template>
 
  <el-container class="el-container" >
    <el-header style="padding:0px;" >
      <vheader></vheader>
    </el-header>
    <el-container class="el-container" >
      <el-main class="el-main" style="width:30%;">
        <router-view></router-view>
      </el-main>
    </el-container>
      <!-- <el-footer>
          <vfooter></vfooter>
      </el-footer> -->
  </el-container>


</template>

<script>
import vheader from "@/components/common/Header";
import vfooter from "@/components/common/Footer";

import axios from 'axios';
export default {

  name: 'HelloWorld',
  components:{
    vheader:vheader,
    vfooter:vfooter
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },methods:{

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
  margin: 0px;
  padding: 0px;
}
.el-header{
}


.el-aside {

  background-color: #d3dce6;
  color: #333;

   height:100%;
}

.el-main {
  background-color: #fff;
  width: 100%;
}

.el-container {
  width: 100%;
  height:100%;

}

</style>
