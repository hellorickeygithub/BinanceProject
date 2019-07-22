<template>
    <div>

        <div class="certificate">

            <div class="certificate_title">
                慈善证书查询
            </div>
            <div class="certificate_content">
                <el-input v-model="address" placeholder="请输入钱包地址"  class="address_input"></el-input>
                <el-button type="primary" @click="show=!show">查询</el-button>
            </div>

            <img src="@/assets/zhengshubg.png" width="80%" v-if="show" class="zhengshu">

        </div>

    </div>
</template>

<script>
export default {

  name: 'HelloWorld',
  data () {
    return {
      address:"tbnb1u4wwf2xpgz0g8xqe9c6vcg9ayqkcjc5emvvfpr",
      show:false
    }
  },methods:{

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.certificate_title{
    font-weight: bold;
    font-size: 14px;
    height: 50px;
    line-height: 50px;
    margin-top: 40px;
}
.address_input{
    width: 70%;
}
.zhengshu{
    display: block;
    margin: 0px auto;
    margin-top: 40px;
}
</style>
