<template>
    <div class="activitylist">

        <div class="activity_item" @click="toCertificate">

            <div class="activity_item_left">
                <img src="@/assets/activity_book.png" width="100%" class="activity_item_img">
            </div>
            <div class="activity_item_txt">
                慈善证书
            </div>
            <div style="clear:both;"></div>

        </div>

        <div class="activity_item" @click="toLottery">

            <div class="activity_item_left">
                <img src="@/assets/activity_lottery.png" width="100%" class="activity_item_img">
            </div>
            <div class="activity_item_txt">
                慈善彩票
            </div>
            <div style="clear:both;"></div>

        </div>


    </div>
</template>

<script>
export default {

  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },methods:{
    toCertificate(){
      this.$router.push({path:'/Certificate'});
    }, toLottery(){
      this.$router.push({path:'/Lottery'});
    }
  }
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
.activity_item{
    display: block;
    width: 90%;
    margin: 0px auto;
    border-bottom: 1px solid #f7f7f7;
}
.activity_item_left{
  width: 100px;
  height: 100px;
  float: left;
}
.activity_item_img{
  display: block;
  float: left; 
}
.activity_item_txt{
  height: 100px;
  line-height: 100px;
  font-size: 14px;
  font-weight: bold;
}

</style>
