<template>
  
  <div>


    <el-dialog
        title="上传凭证"
        :visible.sync="proveVisible"
        width="80%"
      >
        <el-input style="margin-bottom:10px;" type="text" v-model="describe" placeholder="描述"></el-input>
        <br/>
        <br/>
        <el-button icon="el-icon-upload2">上传证明</el-button>
        <div class="tips">请上传所支出金额的发票以及收据</div>
        <span slot="footer" class="dialog-footer">
          <el-button @click="proveVisible = false">取 消</el-button>
          <el-button type="primary" >确 定</el-button>
        </span>
    </el-dialog>


    <el-dialog
        title="支出单"
        :visible.sync="applypayVisible"
        width="80%"
      >
  <div style="padding-bottom:20px;">
 <el-radio v-model="radio" label="1">转给被资助人</el-radio>
  <el-radio v-model="radio" label="2">组织日常花费</el-radio>
  </div>
 
    <div  v-if="radio==1">


      <div v-for="(item,index) in peoplelist">
        <div class="peoplelist"><el-checkbox v-model="item.checked">{{item.name}}</el-checkbox></div>
      </div>
    <el-input style="margin-top:10px;" v-model="bnbvalue" placeholder="金额 BNB"></el-input>
 

    </div>
    <div v-if="radio==2">

        <el-input style="margin-bottom:10px;" v-model="usefor" placeholder="用途"></el-input>
        <el-input style="margin-bottom:10px;" v-model="bnbvalue" placeholder="金额 BNB"></el-input>
        <div style="text-align:left;">
        <el-date-picker
          v-model="startdate"
          type="date"
          placeholder="开始日期" style="width:100%;">
        </el-date-picker>
        </div>
        
        <div style="text-align:left;margin-top:10px;">
        <el-date-picker
          v-model="enddate"
          type="date"
          placeholder="结束日期" style="width:100%;">
        </el-date-picker>
        </div>
  
      

    
    </div>   

  <span slot="footer" class="dialog-footer">
          <el-button @click="applypayVisible = false">取 消</el-button>
          <el-button type="primary" >确 定</el-button>
        </span>

    </el-dialog>


<el-dialog
  title="提示"
  :visible.sync="paydialog"
  width="80%"
  >
  <span>是否同意支付该笔费用</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="paydialog = false">取 消</el-button>
    <el-button type="primary" @click="payforapply">确 定</el-button>
  </span>
</el-dialog>





    <!-- <el-button type="primary" @click="login">测试账号登录</el-button> -->

    <div style="width:90%;margin:20px auto; 0px">
    <template>
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">

        <el-tab-pane label="我的组织" name="first">

          <div class="organinfo">
            <div class="organ_item">组织名称：世界自然基金会</div>
            <div class="organ_item">合约地址：<span class="organaddress">tbnb12nrefqvmm2ay6rflgxrk8chyt2p3s0qp0wa2kk</span></div>
            <div class="organ_item">担任职务：负责人</div>
            <div class="organ_item">组织成员：cz 何一Miss  <span class="fontcolor">管理</span></div>
            <div class="organ_item">账户余额：20 BNB</div>
          </div>

          

          

        </el-tab-pane>
        
        <el-tab-pane label="待我审批" name="second">

          <div class="applybtn">
            <el-button type="primary" @click="applypayVisible=true">申请支出</el-button>
          </div>
          

          <div class="applyitem">
              <div class="applypeople"><span class="titcolor">申请人：</span>Rickey</div>
              <div class="applynum"><span class="titcolor">金&nbsp;&nbsp;&nbsp;&nbsp;额：</span><span class="fontcolor">20 </span>BNB</div>
              <div class="applystate"><span class="titcolor">状&nbsp;&nbsp;&nbsp;&nbsp;态：</span>审核中</div>
              <div class="applyuse"><span class="titcolor">用&nbsp;&nbsp;&nbsp;&nbsp;途：</span>修建围墙</div>
              <div class="applytime"><span class="titcolor">时&nbsp;&nbsp;&nbsp;&nbsp;间：</span>2019-07-19 至 2019-07-20</div>
              <div class="btngroup">
                <el-button type="primary" @click="showpaydiadlog(1)">通过</el-button>
                <el-button type="danger">拒绝</el-button>          
              </div>
            <div style="clear:both;"></div>
          </div>

          <div class="applyitem">
              <div class="applypeople"><span class="titcolor">申请人：</span>Rickey</div>
              <div class="applynum"><span class="titcolor">金&nbsp;&nbsp;&nbsp;&nbsp;额：</span><span class="fontcolor">0.01 </span>BNB</div>
              <div class="applystate"><span class="titcolor">状&nbsp;&nbsp;&nbsp;&nbsp;态：</span>审核中</div>
              <div class="applyuse"><span class="titcolor">用&nbsp;&nbsp;&nbsp;&nbsp;途：</span>转给被资助人JACK</div>
              <div class="applytime"><span class="titcolor">时&nbsp;&nbsp;&nbsp;&nbsp;间：</span>2019-07-19 至 2019-07-20</div>
              <div class="btngroup">
                <el-button type="primary" @click="showpaydiadlog(2)">通过</el-button>
                <el-button type="danger">拒绝</el-button>          
              </div>
            <div style="clear:both;"></div>
          </div>          

          <div class="applyitem">
              <div class="applypeople"><span class="titcolor">申请人：</span>Leec</div>
              <div class="applynum"><span class="titcolor">金&nbsp;&nbsp;&nbsp;&nbsp;额：</span><span class="fontcolor">1</span>BNB</div>
              <div class="applystate"><span class="titcolor">状&nbsp;&nbsp;&nbsp;&nbsp;态：</span>完成</div>
              <div class="applyuse"><span class="titcolor">用&nbsp;&nbsp;&nbsp;&nbsp;途：</span>购买竹子</div>
              <div class="applytime"><span class="titcolor">时&nbsp;&nbsp;&nbsp;&nbsp;间：</span>2019-07-19 至 2019-07-20</div>
              <div class="btngroup">
                <el-button type="primary" @click="proveVisible=true">上传凭证</el-button>        
              </div>
            <div style="clear:both;"></div>
          </div>


        </el-tab-pane>
        <el-tab-pane label="数据反馈" name="thrid">
          <div class="datatit">
            提交第四季度数据
          </div>
          <el-input v-model="input1" placeholder="身长" class="inputbg"></el-input>
          <el-input v-model="input2" placeholder="体重" class="inputbg"></el-input>
          <el-input v-model="input3" placeholder="新生数" class="inputbg"></el-input>
          <el-input v-model="input4" placeholder="死亡数" class="inputbg"></el-input>
          <div><el-button type="primary" >提交</el-button></div>
          
        </el-tab-pane> 
      </el-tabs>
    </template>
    </div>



  </div>

</template>

<script>
import axios from 'axios';
export default {

  name: 'HelloWorld',
 
  data () {
    return {
      qrimg:"require('@/assets/logo.png')",
      msg: 'Welcome to Your Vue.js App',
      activeName: 'first',
      proveVisible:false,
      applypayVisible:false,
      value1:"",
      startdate:"",
      enddate:"",
      usefor:"",
      bnbvalue:"",
      describe:"",
      paydialog:false,
      input1:"",
      input2:"",
      input3:"",
      input4:"",
      radio:"1",
      message:"",
      peoplelist:[{name:"Lisa",address:"tbnb1u4wwf2xpgz0g8xqe9c6vcg9ayqkcjc5emvvfpr",checked:false},{name:"Jack",address:"tbnb1u4wwf2xpgz0g8xqe9c6vcg9ayqkcjc5emvvfpr",checked:false},{name:"Tom",address:"tbnb1u4wwf2xpgz0g8xqe9c6vcg9ayqkcjc5emvvfpr",checked:false}]
    }
  },methods:{
    login(){
      var address="tbnb1u4wwf2xpgz0g8xqe9c6vcg9ayqkcjc5emvvfpr";
      var nickname="rickey";
      var privatekey="6ae3bffad61798584d12617da74833feef956e4a2d585df3c25d235f67d748a0";
      this.$cookieStore.setCookie("address",address);
      this.$cookieStore.setCookie("nickname",nickname);
      this.$cookieStore.setCookie("privatekey",privatekey);
      location.reload();

    },handleClick(tab, event) {
        console.log(tab, event);
    },showpaydiadlog(val){
      if(val==1){
        this.message="修建围墙";
      }else{
        this.message="转给被资助人JACK";
      }
      this.paydialog=true;
    },payforapply(){

        var that=this;
        var apiurl=that.GLOBAL.apiurl;
        var amount="0.01";
        var addressfrom="tbnb12nrefqvmm2ay6rflgxrk8chyt2p3s0qp0wa2kk";
        var addressto="tbnb1u4wwf2xpgz0g8xqe9c6vcg9ayqkcjc5emvvfpr";
        var message=this.message;
        var password="Test123456,.";
        var privatekey="bc5c8bf1333ed459048fbebf6fca372119ea6f667a1d5344a37898a85635db5a";

  
        const loading = this.$loading({
          lock: true,
          text: '打款处理中',
          spinner: 'el-icon-loading',
          background: 'rgba(255, 255, 255, 0.9)'
        });
        axios.get(apiurl+"/pay",{params:{amount:amount,"addressfrom":addressfrom,addressto:addressto,message:message,password:password,privatekey:privatekey}})
        .then(function (response) {
          loading.close();
          console.log(response.data);
         
          if(response.data.status==200){
            that.paydialog=false;
            that.$notify({
            title: '打款成功',
            message: '请留意凭证',
            type: 'success'
            });
        
          }else{
            that.$notify.error({
            title: '打款失败',
            message: '请查明原因'
            });
          }
        })
        .catch(function (error) {
          console.log(error);
        });


    }


  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.applyitem{
  font-size: 14px;
  width: 100%;
  height: auto;
  margin: 0px auto;
  padding: 20px 0px;
  border-bottom:1px solid #f3f3f3;
}

.applypeople{
  height: 30px;
  line-height: 30px;
  width: 100%;
  text-align: left;
}
.applynum{
  height: 30px;
  line-height: 30px;
  width: 100%;
  text-align: left;
}
.applystate{
  height: 30px;
  line-height: 30px;
  width: 100%;
  text-align: left;
}
.fontcolor{
  color: #372add;
  font-weight: bold;
}
.applyuse{
  height: 30px;
  line-height: 30px;
  text-align: left;
  clear: both;
}
.applytime{
  height: 30px;
  line-height: 30px;
  text-align: left;
  clear: both;  
}
.btngroup{
  padding-top: 20px;
  text-align: right;
}
.titcolor{
  color: #9d9d9d;
}
.tips{
  padding-top: 10px;
  font-size: 12px;
}
.organinfo{
  width: 100%;
  height: auto;
  margin: 0px auto;
  padding: 20px 0px;
}
.organ_item{
  font-weight: bold;
  font-size: 14px;
  width: 100%;
  height: auto;
  padding: 6px 0px;
  text-align: left;
}
.organaddress{
  font-size: 10px;
}
.datatit{
  font-size: 20px;
  font-weight: bold;
  height: 40px;
  line-height: 40px;
}
.inputbg{
  width: 80%;
  margin-bottom: 20px;
}
.applybtn{
  width: 100%;
  text-align: left;
  margin-bottom: 20px;
  
}
.peoplelist{
  width: 40%;
  margin: 0px auto;
  text-align: left;
}
</style>
