<template>
    <div>
        <div class="lotteryvalue">
            当前奖池
            <div class="numfont">10BNB</div>
        </div>
        <div class="introduce">
            活动说明：每周一开奖，系统会随机选出一个中奖机构，将奖池中的50%赠与该机构，另外百分之50%由押中者平分。例如奖池金额为10BNB，中奖机构为WWF，包括你在内有5位用户押中，那么WWF将会获得5BNB，你们5人每人将会获得1BNB。
        </div>
        <div class="lotteryitem" v-for="(item,index) in listdata">

            <div class="lotteryleft">
                <img :src="item.lotteryimg" width="100%">
            </div>
            <div class="lotterycenter">{{item.lottteryname}}</div>
            <div class="lotteryright">
                 <el-checkbox v-model="item.lotterycheck" @change="selectorgan(index)">押注</el-checkbox>
            </div>
            <div style="clear:both;"></div>
        </div>

        <div class="result">
            您已选择押注：{{selectname}} 
            <br/>
            <span style="font-weight:bold;">需支付：0.1BNB</span>
        </div>
        <div style="padding-bottom:40px;">
            <el-button type="primary" style="width:40%;" @click="toCeler">立即参与</el-button>
        </div>

    </div>
</template>

<script>
export default {

  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      selectname:"",
      check: true,
      listdata:[{lottteryname:"乐助慈善会",lotteryimg:require("@/assets/lotterylogo2.jpg"),lotterycheck:false},{lottteryname:"中华慈善总会",lotteryimg:require("@/assets/lotterylogo4.jpg"),lotterycheck:false},{lottteryname:"中华慈善总会",lotteryimg:require("@/assets/lotterylogo3.jpg"),lotterycheck:false},{lottteryname:"世界绿色组织",lotteryimg:require("@/assets/lotterylogo1.jpg"),lotterycheck:false},{lottteryname:"WWF",lotteryimg:require("@/assets/wfflogo.png"),lotterycheck:false},{lottteryname:"VUE",lotteryimg:require("@/assets/vuelogo.jpg"),lotterycheck:false}]
    }
  },methods:{
    selectorgan(index){
        var listdata=this.listdata;
       
        for(var item in listdata){
            if(item==index){
                console.log("yes")
            listdata[item].lotterycheck = true;
                this.selectname=listdata[item].lottteryname;
            }else{
                 console.log("no")
            listdata[item].lotterycheck = false;
               
            }
         
            
        }
        this.listdata=listdata;
        console.log(index)
    },toCeler(){
      var celerurl=this.GLOBAL.celerurl;
      console.log(celerurl);
      window.location.href=celerurl;
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
.lotteryitem{
  width: 94%;
  height: auto;
  margin: 0px auto; 
  background: #fff;
  border-radius: 4px;
  overflow: hidden;
  border:1px solid #f9f9f9;
  margin-top: 20px;
}
.lotteryleft{
  width: 100px;
  height: 100px;
  float: left;
}
.lotterycenter{
  text-align: left;
  float: left;
  height: 100px;
  line-height: 100px;
  margin-left: 20px;
  font-weight: bold;
}
.lotteryright{
  text-align: center;
  float: right;
  width: 100px;    
  height: 100px;
  line-height: 100px;
}
.result{
    padding: 40px 0px;
    font-size: 14px;
}
.introduce{
    color: #696969;
    width: 50%;
    margin: 0px auto;
    font-size: 12px;
    text-align: justify;
    margin-top: 10px;
    padding-bottom: 20px;
}
.lotteryvalue{
    padding: 30px 0px;
    color: #000;
    font-size: 20px;
}
.numfont{
    font-size: 30px;
    font-weight: bold;
    color:#644fff;
}
</style>
