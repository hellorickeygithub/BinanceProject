<template>
<div>
    <div class="stepsnav">
        <el-steps :active="active" align-center>
        <el-step title="提交资料" ></el-step>
        <el-step title="投票" ></el-step>
        <el-step title="公布结果" ></el-step>
        </el-steps>
    </div>
    <div class="step1" v-if="active==1">
        <el-input  placeholder="组织名称" v-model="organ_name" class="inputstyle"></el-input>
        <div class="selecttype">
            <template >
                <el-select v-model="defaultvalue" placeholder="选择类别">
                <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
                </el-select>
            </template>
        </div>
        <el-input  placeholder="负责人姓名" v-model="organ_admin" class="inputstyle"></el-input>
        <el-input  placeholder="组织联系方式" v-model="organ_contact" class="inputstyle"></el-input>
        <el-input type="textarea" v-model="organ_introduce" placeholder="组织介绍" class="inputstyle"></el-input>
        <div class="upload">
            <el-upload
            class="upload-demo"
            action="a"
            >
            <el-button size="small" type="primary">上传更多附件资料</el-button>
            <div slot="tip" class="el-upload__tip">上传更多的证明,便于审核以及投票。</div>
            </el-upload>   
        </div>
          <el-button type="primary" class="nextbtn" @click="next">下一步</el-button>
    </div>
    <div class="step2" v-if="active==2">
        <div>
            <img src="@/assets/vote.png" class="voteimg"/>
            <div class="votetitle">
                投票将于{{endvotedate}}截止
            </div>
            <div class="voteshort">
                投票规则:投票分为基金委员会投票和平台用户投票，双方分开记票，投票时间截止后，如基金委员会的支持票数大于反对票数并且平台用户的支持票数也大于反对票数即为通过，如只有一方支持票数大于反对票数或双方反对票大于支持票数则为失败，在整个投票期间，双方的投票数据不对外显示，投票结束后公布详细数据。
            </div>
        </div>
        <el-button type="primary" class="nextbtn" @click="next">下一步</el-button>
    </div>
    <div class="step2" v-if="active==4">
        <div>
            <img src="@/assets/votesuccess.png" class="voteimg"/>
            <div class="votesuccess">
                恭喜WWF，投票通过
            </div>
            <div class="votedetail">
                <span class="stylefont">基金委员会</span>
                <br/>
                支持:20  反对:3
                <br/>
                <br/>
                <span class="stylefont">平台用户</span>
                <br/>
                支持:134 反对:16
            </div>
        </div>
        <el-button type="primary" class="nextbtn" @click="next">下一步</el-button>
    </div>
</div>


</template>

<script>
import axios from 'axios';
export default {

  name: 'HelloWorld',
  data () {
    return {
        active: 1,
        defaultvalue:"选择类别",
        endvotedate:"",
        organ_name:"",
        organ_admin:"",
        organ_contact:"",
        organ_introduce:"",
        options: [ {
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
    }
  },methods:{
    next() {
     
       switch(this.active){
           case 1:
              this.active=this.active+1;
           break;
           case 2:
              this.active=this.active+2;
           break;
           default:
              this.active=1;
           break;
       }

 

      this.getNowFormatDate();
    }, getNowFormatDate() {
        var date = new Date();
        date.setDate(date.getDate() + 3);
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        if (month >= 1 && month <= 9) {
            month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
        }
        var currentdate = year + "年" + month + "月"+ strDate+ "日" ;
        this.endvotedate=currentdate;
       
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.stepsnav{
    width: 80%;
    margin: 0px auto;
    margin-top:30px;
}
.inputstyle{
    width: 80%;
    margin: 0px auto;
    margin-top: 20px;
}
.selecttype{
    width: 80%;
    margin: 0px auto;
    margin-top: 20px;
    text-align: left;
}
.upload{
    width: 80%;
    text-align: left;
    margin: 0px auto;
    margin-top: 20px;
}
.nextbtn{
    width: 40%;
    margin: 0px auto;
    margin-top: 40px;
    text-align: center;
}
.step1,.step2{
    padding-bottom: 40px;
}
.voteimg{
    width: 20%;
    display: block;
    margin: 0px auto;
    margin-top: 30px;
}
.votetitle{
    width: 100%;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    padding-top: 10px;
}
.voteshort{
    font-size: 14px;
    color: #969696;
    width: 70%;
    margin: 0px auto;
    text-align: justify;
    font-size: 12px;
    padding-top: 14px;
}
.votesuccess{
    width: 100%;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    padding-top: 10px;
}
.votedetail{
    font-size: 14px;
    width: 70%;
    margin: 0px auto;
    text-align: center;
    font-size: 12px;
    padding-top: 14px;
}
.stylefont{
    font-weight: bold;
}
</style>
