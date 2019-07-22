<template>
  <div id="app">
    <div class="datainfo">

      <div class="datainfo_item">

        <div class="datainfo_icon"></div>
        <div class="datainfo_tit">累计获捐</div>
        <div class="datainfo_value">30 BNB</div>

      </div>

      <div class="datainfo_item">

        <div class="datainfo_icon"></div>
        <div class="datainfo_tit">累计支出</div>
        <div class="datainfo_value">10 BNB</div>

      </div>

      <div class="datainfo_item">

        <div class="datainfo_icon"></div>
        <div class="datainfo_tit">累计资助人</div>
        <div class="datainfo_value">20</div>

      </div>

      <div class="datainfo_item">

        <div class="datainfo_icon"></div>
        <div class="datainfo_tit">累计被捐者</div>
        <div class="datainfo_value">30</div>

      </div>




      <div class="datainfo_item">

        <div class="datainfo_icon"></div>
        <div class="datainfo_tit">新增资助人</div>
        <div class="datainfo_value">6</div>

      </div>


      <div class="datainfo_item">

        <div class="datainfo_icon"></div>
        <div class="datainfo_tit">新增被捐者</div>
        <div class="datainfo_value">4</div>

      </div>


      <div class="datainfo_item">

        <div class="datainfo_icon"></div>
        <div class="datainfo_tit">重复资助人</div>
        <div class="datainfo_value">2</div>

      </div>

      <div class="datainfo_item">

        <div class="datainfo_icon"></div>
        <div class="datainfo_tit">未活跃地址数</div>
        <div class="datainfo_value">2</div>

      </div>

      <div class="datainfo_item">

        <div class="datainfo_icon"></div>
        <div class="datainfo_tit">捐助提取笔数</div>
        <div class="datainfo_value">4</div>

      </div>

      <div class="datainfo_item">

        <div class="datainfo_icon"></div>
        <div class="datainfo_tit">作废地址数</div>
        <div class="datainfo_value">2</div>

      </div>

      <div class="datainfo_item">

        <div class="datainfo_icon"></div>
        <div class="datainfo_tit">密钥丢失地址</div>
        <div class="datainfo_value">0</div>

      </div>

      <div class="datainfo_item">

        <div class="datainfo_icon"></div>
        <div class="datainfo_tit">未说明转出</div>
        <div class="datainfo_value">0</div>

      </div>

      <div class="datainfo_item">

        <div class="datainfo_icon"></div>
        <div class="datainfo_tit">用户交流数</div>
        <div class="datainfo_value">2</div>

      </div>      

      <div class="datainfo_item">

        <div class="datainfo_icon"></div>
        <div class="datainfo_tit">举报记录</div>
        <div class="datainfo_value">0</div>

      </div>       

      <div style="clear:both;"></div>
    </div>
    <div class="charttit">
      季度数据
    </div>
    <div id="main" style="width: 100%;height:400px;" class="mychart1"></div>
    <div class="charttit">
      综合指数
    </div>
    <div id="main2" style="width: 100%;height:400px;" class="mychart2"></div>
  </div>
</template>

<script>
export default {
  name: "app",
  data(){
  return {
    option2:{
    title: {
        text: ''
    },
    tooltip: {},
    legend: {
        data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
    },
    radar: {
        // shape: 'circle',
        name: {
            textStyle: {
                color: '#fff',
                backgroundColor: '#999',
                borderRadius: 3,
                padding: [3, 5]
           }
        },
        indicator: [
           { name: '收入', max: 100},
           { name: '支出', max: 100},
           { name: '效率', max: 100},
           { name: '受益人', max: 100},
           { name: '影响力', max: 100},
           { name: '信用', max: 100}
        ]
    },
    series: [{
        name: '',
        type: 'radar',
        // areaStyle: {normal: {}},
        data : [
            {
                value : [90, 80, 85, 40, 90, 100],
                name : ''
            },
             
        ]
    }]
},



  }
  },
  methods: {
    drawChart() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("main"));
      let myChart2 = this.$echarts.init(document.getElementById("main2"));
      // 指定图表的配置项和数据
    var option = {
    title: {
        text: ''
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['身长','体重','新生数','死亡数']
    },
    grid: {
        left: '4%',
        right: '4%',
        bottom: '0%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['第一季度','第二季度','第三季度','第四季度']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name:'身长',
            type:'line',
    
  
            data:[80, 85, 95, 105]
        },
        {
            name:'体重',
            type:'line',


            data:[20, 30, 50, 70]
        },
        {
            name:'新生数',
            type:'line',
  
  
            data:[0, 12, 16, 19]
        },
        {
            name:'死亡数',
            type:'line',

            data:[8, 4, 2, 0]
        }
    ]
};
    var option2 = this.option2;

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
      myChart2.setOption(option2);
    }
  },
  mounted() {
    this.drawChart()
  //   var that=this;
  //  setTimeout(function(){
  //   var main2 = that.$echarts.init(that.$refs.main2);
    
  //   main2.setOption(that.option2);
  //   },1000)
 
  },created(){

  }
};
</script>

<style scoped>
.mychart1{
  margin: 0px auto;
}
.mychart2{
  margin: 0px auto;
}
.charttit{
  text-align: left;
  width: 90%;
  margin: 0px auto;
  border-left: 6px solid #644fff;
  margin-top: 60px;
  margin-bottom: 20px;
  padding-left: 10px;
  color: #000;
  font-weight: bold;
}
.datainfo_item{
  width: 25%;
  float: left;
}
.datainfo_tit{
  font-weight: bold;
  color: #000;
  width: 100%;
  text-align: center;
  margin-top: 30px;
}
.datainfo_value{
  font-weight: bold;
  color: #644fff;
  width: 100%;
  text-align: center;  
}

</style>