<template>
  
  <div>
    <div class="title1">你的善良看得见</div>
    <div class="title2">基于Binance Chain 的慈善自治组织</div>
    <div class="indexbanner">
      <img src="@/assets/indexbanner.png" width="100%"/>
    </div>
    <div class="btngroup">
        <el-button type="primary" @click="toApply">慈善机构申请</el-button>
        <el-button type="primary" class="joinvote" @click="toVote">参与投票</el-button>
    </div>
    <div class="selecttype">
      显示类别:
      <template>
        <el-select v-model="defaultvalue" placeholder="全部">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </template>
    </div>

    <div class="list">


      <div class="item"  @click="todetail(1)">
        <div class="item_left" :style="{height:item_rightheight,width:item_rightheight}">
          <img src="@/assets/wfflogo.png" width="100%" :style="{height:item_rightheight}">
        </div>
        <div class="item_right" ref="item_right" :style="{height:item_rightheight}">
          <div class="item_name">WWF世界自然基金会</div>
          <!-- <div class="item_short"></div> -->
          <div class="item_type">动物</div>
            <div class="totaltoken">累计募集数量：4000 BNB</div>
    
        </div>
        <div style="clear:both;"></div>
      </div>

        <div class="item">
        <div class="item_left" :style="{height:item_rightheight,width:item_rightheight}">
          <img src="@/assets/childrenlogo.jpg" width="100%" :style="{height:item_rightheight}">
        </div>
        <div class="item_right" ref="item_right" :style="{height:item_rightheight}">
          <div class="item_name">联合国儿童基金会</div>
          <!-- <div class="item_short">世界自然基金会（WWF）是在全球享有盛誉的、最大的独立性非政府环境保护组织之一。WWF1961年成立，总部位于瑞士格朗。WWF在全世界超过100个国家有办公室、拥有5000名全职员工，并有超过500万名志愿者。WWF在中国的工作始于1980年的大熊猫及其栖息地的保护，是第一个受中国政府邀请来华开展保护工作的国际非政府组织。</div> -->
          <div class="item_type">儿童</div>
            <div class="totaltoken">累计募集：100 BNB</div>
        </div>
        <div style="clear:both;"></div>
      </div>


            <div class="item">
        <div class="item_left" :style="{height:item_rightheight,width:item_rightheight}">
          <img src="@/assets/vuelogo.jpg" width="100%" :style="{height:item_rightheight}">
        </div>
        <div class="item_right" ref="item_right" :style="{height:item_rightheight}">
          <div class="item_name">VUE</div>
          <!-- <div class="item_short">世界自然基金会（WWF）是在全球享有盛誉的、最大的独立性非政府环境保护组织之一。WWF1961年成立，总部位于瑞士格朗。WWF在全世界超过100个国家有办公室、拥有5000名全职员工，并有超过500万名志愿者。WWF在中国的工作始于1980年的大熊猫及其栖息地的保护，是第一个受中国政府邀请来华开展保护工作的国际非政府组织。</div> -->
          <div class="item_type">技术</div>
            <div class="totaltoken">累计募集：4000 BNB</div>
        </div>
        <div style="clear:both;"></div>
      </div>

      
    </div>




    <div class="bottom">Peace & Love</div>
  </div>

</template>

<script>
import axios from 'axios';
export default {

  name: 'HelloWorld',
 
  data () {
    return {
      qrimg:"require('@/assets/logo.png')",
      options: [{
          value: '0',
          label: '全部'
        }, {
          value: '1',
          label: '动物'
        }, {
          value: '2',
          label: '自然'
        }, {
          value: '3',
          label: '赈灾'
        }, {
          value: '4',
          label: '教育'
        }, {
          value: '5',
          label: '技术'
        }, {
          value: '6',
          label: '人权'
        }, {
          value: '7',
          label: '贫穷'
        }, {
          value: '8',
          label: '残障'
        }, {
          value: '9',
          label: '老人'
        }, {
          value: '10',
          label: '儿童'
        }],
      defaultvalue:"0",
      item_rightheight:""

    }
  },methods:{
    testpay(){
        var that=this;
        axios.get('http://localhost:3000/wechatpaytest')
        .then(function (response) {
          that.qrimg=response.data;
          console.log(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    },toApply(){
      this.$router.push({path:'/Apply'});
    },todetail(e){
      this.$router.push({ name: 'Detail', params: { id: 1 }})
  
    },toVote(){
      this.$router.push({path:'/Vote'});
    }
    
  },mounted(){
      var that=this;
      window.onresize = () => {
           var winWidth = window.innerWidth;
            if(winWidth<=1000){
              var imgheight=winWidth*1*0.3;
          
            }else{
              var imgheight=winWidth*0.47*0.3;
            }
            this.item_rightheight=imgheight+"px";
      } 
  },created(){
    var winWidth = window.innerWidth;
    if(winWidth<=1000){
      var imgheight=winWidth*1*0.3;
   
    }else{
      var imgheight=winWidth*0.47*0.3;
    }
    this.item_rightheight=imgheight+"px";

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title1{
  width: 100%;
  text-align: center;
  height: 40px;
  line-height: 40px;
  font-size: 30px;
  font-weight: bold;
  color: #000;
  padding-top: 30px;
}
.title2{
  width: 100%;
  text-align: center;
  height: 30px;
  line-height: 30px;
  font-size: 18px;
  color: #7f7f7f;
}
.indexbanner{
  padding-top: 30px;
  width: 60%;
  margin: 0px auto;
}
.joinvote{
  border:none;
  color: #fff;
  background: #354158;
  border: 1px solid #354158;
}
.btngroup{
  padding-top: 20px;
}
.selecttype{
  text-align: left;
  width: 90%;
  font-size: 14px;
  font-weight: bold;
  padding:40px 0px;
  margin: 0px auto;
}
.list{
  width: 94%;
  margin: 0px auto;
}
.item{
  float: left;
  width: 47%;
  border: 1px solid #f3f3f3;
  border-radius: 4px;
  margin-left: 2%;
  padding: 10px 0px;
  margin-bottom: 14px;
}
@media screen and (max-width: 1000px) {
  .item{
    float: left;
    width: 100%;
    border: 1px solid #f3f3f3;
    border-radius: 4px;
    margin: 0px auto;
    margin-bottom: 14px;
    padding: 8px 0px;
  }
}
.item_left{
  float: left;
  height: auto;
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  align-items:center;
  flex-wrap:wrap;
  margin-left: 2%;
}
.item_left img{
  display: block;
}
.item_right{
  margin-left: 2%;
  float: left;
  width: 62%;
  display: flex;
  align-items:center;
  flex-wrap:wrap;
  height: 100px;
}
.item_name{
  font-size: 16px;
  font-weight: bold;
  text-align: left;
  width: 100%;
  margin: 0px auto;
}
.item_short{
  height: 20px;
  line-height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 12px;
  text-align: left;
  width: 100%;
  margin: 0px auto;
}
.item_type{
  font-size: 12px;
  background: #644fff;
  width: 42px;
  text-align: center;
  color: #fff;
  border-radius: 2px;
}


.totaltoken{
  text-align: left;
  width: 100%;
  font-size: 14px;
}
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
