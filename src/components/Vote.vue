<template>
    <div>

        <div>
            <div class="votebg"><img src="@/assets/votebg.png" width="100%"/></div>
            <div class="votetit"></div>
        </div>

        <div class="tit_split">
            机构介绍
        </div>

        <div class="content">
                    <div class="contentline">
                        <span class="bigfont">世界自然基金会（WWF）</span> 
                    </div>
                    <div class="contentline">
                        世界自然基金会（WWF）是在全球享有盛誉的、最大的独立性非政府环境保护组织之一。WWF1961年成立，总部位于瑞士格朗。WWF在全世界超过100个国家有办公室、拥有5000名全职员工，并有超过500万名志愿者。WWF在中国的工作始于1980年的大熊猫及其栖息地的保护，是第一个受中国政府邀请来华开展保护工作的国际非政府组织。
                    </div>
                    <div class="contentline">
                        <span class="titfont">类别</span>&nbsp;&nbsp;&nbsp;&nbsp;动物
                    </div>
                    <div class="contentline">
                        <span class="titfont">负责人</span>&nbsp;&nbsp;&nbsp;&nbsp;小明
                    </div>
                    <div class="contentline">
                        <span class="titfont">联系电话</span>&nbsp;&nbsp;&nbsp;&nbsp;010-1234567
                    </div>
                    <div class="contentline">
                        <span class="titfont">邮箱</span>&nbsp;&nbsp;&nbsp;&nbsp;aurora@aurora.com
                    </div>
                    <div class="contentline">
                        <span class="titfont">附件</span>&nbsp;&nbsp;&nbsp;&nbsp;<span class="download">下载</span>
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
        </div>

        <div class="tit_split">
            投票规则
        </div>
        <div class="vote_rule">
投票分为基金委员会投票和平台用户投票，双方分开记票，投票时间截止后，如基金委员会的支持票数大于反对票数并且平台用户的支持票数也大于反对票数即为通过，如只有一方支持票数大于反对票数或双方反对票大于支持票数则为失败，在整个投票期间，双方的投票数据不对外显示，投票结束后公布详细数据。请您根据该机构所提交的资料作出客观理性的判断，你的每一票都意义重大。
        </div>

        <div class="tit_split">
            开始投票
        </div>

        <div class="vote_start">
            <div class="vote_check">
                <el-checkbox v-model="checked">我承诺<br/>以客观、自愿、负责、诚实的态度进行此次投票。</el-checkbox>
            </div>
            <div class="votereason">
                <el-input v-model="votereason" placeholder="输入理由(选填)"></el-input>
            </div>
            <div class="vote_btns">
                <el-button type="success" class="btn">支持</el-button>
                <el-button type="danger" class="btn">反对</el-button>
            </div>
        </div>

    </div>
</template>

<script>
export default {

  name: 'HelloWorld',
  data () {
    return {
      votereason:"",
      checked:false,
      msg: 'Welcome to Your Vue.js App'
    }
  },methods:{

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content{
    font-size: 12px;
    width: 90%;
    margin: 0px auto;
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
    padding: 20px 0px 0px;
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
.bigfont{

    font-size:18px;
}
.votebg{
    width: 50%;
    margin: 0px auto;
    margin-top: 20px;
}
.votetit{
    width: 35%;
    text-align: justify;
    font-size: 12px;
    color: black;
    font-weight: bold;
}
.tit_split{
    width: 90%;
    text-align: left;
    border-left:6px solid #543fec;
    margin: 0px auto;
    padding-left: 10px;
    color: #000;
    font-weight: bold;
    font-size:20px;
    margin-bottom: 20px;
    margin-top: 20px;
}
.download{
    color: #543fec;
    font-weight: bold;
}
.vote_rule{
    font-size: 18px;
    color: #354158;
    width: 90%;
    height: auto;
    margin: 0px auto;
    font-size: 12px;
    text-align: justify;
    padding-bottom: 10px;
}
.vote_btns{
    padding: 20px 0px 60px;
}
.votereason{
    width: 60%;
    margin: 0px auto;
    margin-top: 20px;
}
.vote_check{
    width: 100%;
    margin: 0px auto;
    text-align: center;
}
.btn{
    width: 30%;
}
</style>
