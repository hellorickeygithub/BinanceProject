<template>
  <div>
       <div class="organimg">
          <img src="@/assets/wfflogo.png" width="100%" >
       </div>
       <div class="organname">世界自然基金会（WWF）</div>
       <div class="gettotal">累计募集 <span class="numcolor">{{balance}}BNB</span></div>

        <div class="">

            <el-button type="primary" class="paycoin" @click="islogin(1)">立即捐助</el-button>
            <el-button type="primary" class="otherpay" @click="islogin(2)">其他方式</el-button>

        </div>

       <div class="detailtabs">
       <template>
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="组织介绍" name="first">
                    <div class="contentline">世界自然基金会（WWF）是在全球享有盛誉的、最大的独立性非政府环境保护组织之一。WWF1961年成立，总部位于瑞士格朗。WWF在全世界超过100个国家有办公室、拥有5000名全职员工，并有超过500万名志愿者。WWF在中国的工作始于1980年的大熊猫及其栖息地的保护，是第一个受中国政府邀请来华开展保护工作的国际非政府组织。
                    </div>
                    <div class="contentline">
                        <span class="titfont">类别</span>&nbsp;&nbsp;&nbsp;&nbsp;动物
                    </div>
                    <div class="contentline">
                        <span class="titfont">负责人</span>&nbsp;&nbsp;&nbsp;&nbsp;Panda
                    </div>
                    <div class="contentline">
                        <span class="titfont">联系电话</span>&nbsp;&nbsp;&nbsp;&nbsp;010-1234567
                    </div>
                    <div class="contentline">
                        <span class="titfont">邮箱</span>&nbsp;&nbsp;&nbsp;&nbsp;pandanation@wwfus.org
                    </div>
                    <div class="contentline">
                        <!-- <span class="titfont">合约地址</span>&nbsp;&nbsp;&nbsp;&nbsp;tbnb12nrefqvmm2ay6rflgxrk8chyt2p3s0qp0wa2kk -->

                    </div>
                    <div class="linklist">
                        <div class="linklist_item">
                            <img src="@/assets/homeweb.png" width="100%"/>
                            <div class="linkname">官网</div>
                        </div>
                        <div class="linklist_item">
                            <img src="@/assets/weibo.png" width="100%"/>
                            <div class="linkname">微博</div>
                        </div>
                        <div class="linklist_item">
                            <img src="@/assets/weixin.png" width="100%"/>
                            <div class="linkname">订阅号</div>
                        </div>
                        <div class="linklist_item">
                            <img src="@/assets/facebook.png" width="100%"/>
                            <div class="linkname">Facebook</div>
                        </div>
                        <div class="linklist_item">
                            <img src="@/assets/twitter.png" width="100%"/>
                            <div class="linkname">Twitter</div>
                        </div>
                        <div class="linklist_item">
                            <img src="@/assets/youtube.png" width="100%"/>
                            <div class="linkname">Youtube</div>
                        </div>
                        <div class="linklist_item">
                            <img src="@/assets/otherlink.png" width="100%"/>
                            <div class="linkname">其他</div>
                        </div>
                        <div style="clear:both;"></div>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="收支记录" name="second">

                    <el-dropdown class="selectmode"  trigger="click" @command="handleCommand">
                    <el-button type="primary">
                        {{dropdownvalue}}<i class="el-icon-arrow-down el-icon--right"></i>
                    </el-button>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item command="转入">转入</el-dropdown-item>
                        <el-dropdown-item command="转出">转出</el-dropdown-item>
                    </el-dropdown-menu>
                    </el-dropdown>

                    <el-button class="freshbtn" type="primary" @click="freshdata" icon="el-icon-refresh"></el-button>
 
                    <div class="listdata" >
                   
                        <div  class="itemdata" v-for="item in listdata">
                            <div class="itemdata_left">
                                <div class="address">{{item.fromAddr}}</div>
                                <div class="coinnum">{{dropdownvalue}} <span class="fontweight">{{item.value}}</span>  BNB</div>
                                <div class="tradetime">{{item.timeStamp | dateformate}}</div>
                                <div class="mark">备注:{{item.memo}}</div>
                            </div>
                            <div class="itemdata_right">
                            
                                <div class="itemdata_right_item"><a :href="'https://testnet-explorer.binance.org/tx/'+item.txHash" target="_blank">详细信息</a></div>
                                <div class="itemdata_right_item" v-if="dropdownvalue=='转出'" @click="applyprovedialog=true">查看凭证</div>
                            </div>
                            <div style="clear:both;"></div>
                        </div>


                    </div>


                </el-tab-pane>
                <el-tab-pane label="慈善指数" lazy name="thrid">
                  
                    <chart ></chart>


                </el-tab-pane>
            </el-tabs>
       </template>
       </div>



      <el-dialog
        title="捐助"
        :visible.sync="paydialogVisible"
        width="80%"
      >
        <el-input style="margin-bottom:10px;" v-model="amount" type="number" placeholder="请输入捐助数量(BNB)"></el-input>
        <el-input style="margin-bottom:10px;" v-model="password" type="password" placeholder="请输入支付密码"></el-input>
        <el-input style="margin-bottom:10px;" v-model="message" type="text" placeholder="说点什么吧"></el-input>
        <span slot="footer" class="dialog-footer">
          <el-button @click="paydialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="submitpay">确 定</el-button>
        </span>
      </el-dialog>


     <el-dialog
        title="微信支付"
        :visible.sync="otherpay"
        width="80%"
      >
        <el-input style="margin-bottom:10px;" v-model="otherpayprice" type="text" placeholder="请输入捐助金额(元)"></el-input>
        <el-input style="margin-bottom:10px;" v-model="otherpaymessage" type="text" placeholder="说点什么吧"></el-input>
        <span slot="footer" class="dialog-footer">
          <el-button @click="otherpay = false">取 消</el-button>
          <el-button type="primary" @click="submitotherpay">确 定</el-button>
        </span>
      </el-dialog>


    <el-dialog
        title="支出凭证"
        :visible.sync="applyprovedialog"
        width="80%"
      >
        <div class="prove_txt">
            以下为发票证明
        </div>
        <div class="prove_img">
            <img src="@/assets/proveimg.jpeg" width="100%">
        </div>
        <div class="prove_talk">
            <div class="prove_talk_tit">讨论</div>
            <div class="talkitem">
                <div class="talkitem_name">cz:</div>
                <div class="talkitem_content">发票检验过了没有问题。</div>
            </div>
        </div>
        <div class="talkinput">
        <el-input class="talkinput_text" style="margin-bottom:10px;" v-model="provdtalk" type="text" placeholder="我想说"></el-input>
        <div class="talkinput_btn" >发 布</div>
        <div style="clear:both;"></div>
        </div>


        <span slot="footer" class="dialog-footer">
            
          <el-button >举报</el-button>  
          <el-button @click="applyprovedialog = false">关闭</el-button>
          
        </span>
      </el-dialog>

      <el-dialog
        title="登录提示"
        :visible.sync="logindialogVisible"
        width="70%"
        >
        <span>登录测试账号</span>
        <span slot="footer" class="dialog-footer">
            <el-button @click="logindialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="userlogin">确 定</el-button>
        </span>
     </el-dialog>

  </div>
</template>

<script>
import axios from 'axios';
import md5 from 'js-md5';
import chart from "@/components/Charttest";

export default {
  name: 'HelloWorld',

  components:{
    chart:chart,
  },
  data () {
    return {
      activeName: 'first',
      paydialogVisible:false,
      otherpay:false,
      applyprovedialog:false,
      logindialogVisible:false,
      amount:"",
      addressfrom:"",
      addressto:"tbnb12nrefqvmm2ay6rflgxrk8chyt2p3s0qp0wa2kk",
      message:"",
      password:"",
      privatekey:"",
      dropdownvalue:"转入",
      listdata:[],
      otherpayprice:"",
      otherpaymessage:"",
      balance:"",
      provdtalk:"",
      showchart:false
    }
  },methods:{
    handleClick(tab, event) {
        console.log(tab, event);
    }
    ,submitpay(){
        var that=this;
        var apiurl=that.GLOBAL.apiurl;
        var amount=this.amount
        var addressfrom=this.$cookieStore.getCookie("address");
        var addressto=this.addressto;
        var message=this.message;
        var password=this.password;
        var privatekey=this.$cookieStore.getCookie("privatekey");

  
        const loading = this.$loading({
          lock: true,
          text: '捐款处理中',
          spinner: 'el-icon-loading',
          background: 'rgba(255, 255, 255, 0.9)'
        });
        axios.get(apiurl+"/pay",{params:{amount:amount,"addressfrom":addressfrom,addressto:addressto,message:message,password:password,privatekey:privatekey}})
        .then(function (response) {
          loading.close();
          console.log(response.data);
         
          if(response.data.status==200){
            that.paydialogVisible=false;
            that.$notify({
            title: '捐助成功',
            message: '感谢您的爱心',
            type: 'success'
            });
        
          }else{
            that.$notify.error({
            title: '捐助失败',
            message: '该次捐助未完成'
            });
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },handleCommand(command){
        this.dropdownvalue=command;
        var that=this;
        if(command=="转入"){
            var side="RECEIVE";
        }else{
            var side="SEND";
        }
        var address=this.addressto;
        this.loadlistdata(address,side);

    }, timeFormat(time) {

    },loadlistdata(address,side){
        var that=this;
        var apiurl=that.GLOBAL.apiurl;
        axios.get(apiurl+"/tradelist",{params:{side:side,address:address}})
        .then(function (response) {
            that.listdata=response.data.tx;
        //     for(var item in listdata){
        //         console.log(listdata[item].timeStamp=);
        //     }
        //   console.log(response.data);
   
        })
        .catch(function (error) {
          console.log(error);
        });
  },successupdate(){
    this.dropdownvalue="转入";
    var side="RECEIVE";
    var address=this.addressto;
    this.loadlistdata(address,side);
  },freshdata(){
        var command=this.dropdownvalue;
        var that=this;
        if(command=="转入"){
            var side="RECEIVE";
        }else{
            var side="SEND";
        }
        var address=this.addressto;
        this.loadlistdata(address,side);
  },submitotherpay(){
      var that=this;
      var memo=this.otherpaymessage;
      var addressto=this.addressto;
      var name="Aurora慈善捐助";
      var pay_type="jsapi"; 
      var price=this.otherpayprice;
      var order_id =Date.parse(new Date());
      var notify_url="http://0.0.0.0:8181";
      var return_url=that.GLOBAL.weburl+"/Handlewxpay/"+addressto+"/"+price+"/"+memo;
   var aid="3258";
   var secret="3dbb043e925545478df590a9e74d29c2";
   var sign=md5(name + pay_type + price + order_id + notify_url + secret);

        this.otherpay=false;

   window.location.href="https://xorpay.com/api/cashier/"+aid+"?"+"name="+name+"&pay_type="+pay_type+"&price="+price+"&order_id="+order_id+"&notify_url="+notify_url+"&return_url="+return_url+"&sign="+sign;
      
  },getbalance(address){
        var that=this;
        var binanceurl=that.GLOBAL.binanceurl;
        axios.get(binanceurl+"/account/"+address)
        .then(function (response) {
            
          that.balance=response.data.balances[0].free;
          console.log(response.data.balances[0].free);
   
        })
        .catch(function (error) {
          console.log(error);
        });
  },viewresult(){
      
  },islogin(paytype){
    var nickname= this.$cookieStore.getCookie("nickname"); 
    if(nickname==""){
        this.logindialogVisible=true;
    }else{
      if(paytype==1){
        this.paydialogVisible=true;
      }else{
        this.otherpay=true;
      }
    }  

  },userlogin(){
    var address="tbnb1u4wwf2xpgz0g8xqe9c6vcg9ayqkcjc5emvvfpr";
    var nickname="rickey";
    var privatekey="6ae3bffad61798584d12617da74833feef956e4a2d585df3c25d235f67d748a0";
    this.$cookieStore.setCookie("address",address);
    this.$cookieStore.setCookie("nickname",nickname);
    this.$cookieStore.setCookie("privatekey",privatekey);
    location.reload();
  }

  },created(e){
    //   console.log(this.$route.params.id)
    this.successupdate();
    this.getbalance(this.addressto);




  },mounted(){
 
    
},filters:{
      
      dateformate(val){
        var d = new Date(val);
    
        var year = d.getFullYear();       //年  
        var month = d.getMonth() + 1;     //月  
        var day = d.getDate();            //日  
    
        var hh = d.getHours();            //时  
        var mm = d.getMinutes();          //分  
        var ss = d.getSeconds();           //秒  
    
        var clock = year + "/";
    
        if (month < 10)
            clock += "0";
    
        clock += month + "/";
    
        if (day < 10)
            clock += "0";
    
        clock += day + " ";
    
        if (hh < 10)
            clock += "0";
    
        clock += hh + ":";
        if (mm < 10) clock += '0';
        clock += mm + ":";
    
        if (ss < 10) clock += '0';
        clock += ss;
        return (clock);
          
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.organimg{
    width: 25%;
    margin: 0px auto;
    border:1px solid #f3f3f3;
    border-radius: 4px;
    margin-top: 40px;
    background: red;
}
.organimg img{
    display: block;
}
.organname{
    font-size: 20px;
    width: 80%;
    margin: 0px auto;
    text-align: center;
    padding-top: 20px;
    font-weight: bold;
}
.gettotal{
    width: 100%;
    text-align: center;
    font-size: 16px;
    padding-top:20px; 
}
.numcolor{
    font-weight: bold;
    color: #543fec;
}
.detailtabs{
    width: 90%;
    margin:0px auto;
    margin-top: 30px;
    font-size: 14px;
}
.contentline{
    width: 100%;
    text-align: left;
    text-align: justify;
    padding-bottom: 10px;
    padding-top: 10px;
    border-bottom: 1px solid #f9f9f9;
}
.titfont{
    font-weight: bold;
}
.linklist{
    padding: 20px 0px ;
}
.linklist_item{
    font-size: 14px;
    float: left;
    margin-right: 10px;
    margin-bottom: 10px;
    width: 60px;
    height:auto;
}
.linkname{
    width: 60px;
    height: 24px;
    line-height: 24px;
    text-align: center;
    margin: 0px auto;
    font-size: 12px;
}
.linklist_item img{
    display: block;
    padding: 10px;
    width: 20px;
    height: 20px;
    border-radius: 100px;
    background: #354158;
    margin: 0px auto;
}
.linklist_item img:hover{
    background: #543fec;
}
.linklist_item img:active{
    background: #543fec;
}
.paycoin{
    width: 40%;
    margin: 0px auto;
    margin-top: 40px;
    display: block;
}
.otherpay{
    border:none;
    color: #fff;
    background: #354158;
    width: 40%;
    margin: 0px auto;
    margin-top: 20px;
}
.selectmode{
    float: left;
}
.freshbtn{
    float: right;
}
.itemdata{
    font-size: 14px;
    width: 100%;
    margin: 0px auto;
    clear: both;
    height: auto;
    padding: 14px 0px;
    border-bottom:1px solid #efefef;
}
.itemdata_left{
    width: 80%;
    float: left;
    overflow: hidden;

}
.itemdata_right{
    width: 20%;
    float: left;
}
.address{
    width: 100%;
    text-align: left;
    height: 30px;
    line-height: 30px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.coinnum{
    float: left;
    text-align: left;
    height: 30px;
    line-height: 30px;
}
.tradetime{
    float: left;
    text-align: right;
    height: 30px;
    line-height: 30px;
    margin-left: 20px;
}
.itemdata_right_item{
    text-align: right;
    height: 45px;
    line-height: 45px;
    color: #543fec;
    font-size: 12px;
}
@media screen and (max-width: 1000px) {
    .tradetime{
        clear: both;
        height: 30px;
        line-height: 30px;
        text-align: left;
        margin-left: 0px;
    }
    .itemdata_right_item{
    text-align: right;
    height: 60px;
    line-height: 60px;
    color: #543fec;
    font-size: 12px;
    }
}
.mark{
    width:100%;
    clear:both;
    text-align: left;
    height: 30px;
    line-height: 30px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.fontweight{
    font-weight: bold;
    color: #543fec;
}
a{
    color: #543fec;
    text-decoration: none;
}
a:hover{
    text-decoration: underline;
}
.prove_txt{
    width: 100%;
    text-align: left;
    margin: 0px auto;
    padding-bottom: 10px;
}
.prove_img{
    width: 70%;
    margin: 0px auto;
}
.talkitem{
    width: 100%;
    border-bottom: 1px solid #f3f3f3;
    padding-bottom: 20px;
}
.prove_talk_tit{
    color: #000;
    width: 100%;
    text-align: left;
    font-weight: bold;
    margin-top: 20px;
}
.talkitem_name{
    text-align: left;
    width: 100%;
    font-weight: bold;
    color: #543fec;
    margin-top: 10px;
}
.talkitem_content{
    font-size: 12px;
    width: 100%;
    text-align: left;
    margin: 0px auto;
}
.talkinput{
    margin-top: 10px;
}
.talkinput_text{
    width: 85%;
    float: left;
}
.talkinput_btn{
    font-size: 12px;
    width: 15%;
    float: right;
    color: #543fec;
    height: 42px;
    line-height: 42px;
    font-weight: bold;
}
</style>
