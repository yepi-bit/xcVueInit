<template>
  <div id="relationEchart" ref="relationEchart"></div>
</template>

<script>
import * as echarts from "echarts";

export default {
  data() {
    return {
      relationEchart: null,
      initData: [
        {
          name: '侯亮平',
          // 个人描述
          des: '最高检反贪局侦查处处长，汉东省人民检察院副检察长兼反贪局局长。<br/>经过与腐败违法分子的斗争，最终将一批腐败分子送上了审判台，<br/>正义战胜邪恶，自己也迎来了成长。',
          // 圆圈展示大小
          symbolSize: 80,
          itemStyle: {
            color: 'red'
          }
        }, {
          name: '李达康',
          des: '汉东省省委常委，京州市市委书记。是一个正义无私的好官。<br/>但为人过于爱惜自己的羽毛，对待身边的亲人和朋友显得有些无情。',
          itemStyle: {
            color: 'red'
          }
        }, {
          name: '祁同伟',
          des: '汉东省公安厅厅长',
          symbolSize: 100
        }, {
          name: '陈岩石',
          des: '离休干部、汉东省检察院前常务副检察长。充满正义，平凡而普通的共 产 党人。<br/>对大老虎赵立春，以各种形式执着举报了十二年。<br/>在这场关系党和国家生死存亡的斗争中，老人家以耄耋高龄，<br/>义无反顾地背起了炸 药包，在反腐胜利前夕因病去世。',
          itemStyle: {
            color: 'red'
          }
        }, {
          name: '陆亦可',
          des: '汉东省检察院反贪局一处处长',
          itemStyle: {
            color: 'red'
          }
        }, {
          name: '高育良',
          des: '汉东省省委副书记兼政法委书记。年近六十，是一个擅长太极功夫的官场老手。侯亮平、陈海和祁同伟是其学生。',
          symbolSize: 100
        }, {
          name: '沙瑞金',
          des: '汉东省省委书记',
          itemStyle: {
            color: 'red'
          }
        }, {
          name: '高小琴',
          des: '山水集团董事长，是一位叱咤于政界和商界的风云人物，处事圆滑、精明干练。'
        }, {
          name: '高小凤'
        }, {
          name: '赵东来',
          des: '汉东省京州市公安局局长，充满正义，整治恶势力，<br/>在与检察部门的合作中从最初的质疑到之后的通力配合。',
          itemStyle: {
            color: 'red'
          }
        }, {
          name: '程度',
          des: '汉东省京州市公安局光明区分局局长，因犯错误，被李达康书记和赵东来局长点名要清除公安队伍。<br/>但在高小琴的帮助下，祁同伟调他当上了省公安厅办公室副主任。<br/>尽管程度逃避了所有罪责，上面也有人保他，<br/>但最终还是在反贪局局长侯亮平的缜密侦查下被绳之于法。',
        }, {
          name: '吴惠芬',
          des: '汉东省省委副书记高育良的妻子，汉东大学明史教授。',
          itemStyle: {
            color: 'red'
          }
        }, {
          name: '赵瑞龙',
          des: '副国级人物赵立春的公子哥，官二代，打着老子的旗子，<br/>黑白两道通吃，可谓呼风唤雨，权倾一时。',
        }, {
          name: '赵立春',
          des: '副国级领导人，曾经的改革闯将，在权利面前，显得极其渺小。',
        }, {
          name: '陈海',
          itemStyle: {
            color: 'red'
          }
        }, {
          name: '梁璐',
          itemStyle: {
            color: 'red'
          }
        }, {
          name: '刘新建'
        }, {
          name: '欧阳菁'
        }, {
          name: '吴心怡',
          itemStyle: {
            color: 'red'
          }
        }, {
          name: '蔡成功'
        }, {
          name: '丁义珍'
        }
      ], // 基础数据
      links: [
        {
          source: '高育良',
          target: '侯亮平',
          name: '师生',
        }, {
          source: '高育良',
          target: '祁同伟',
          name: '师生'
        }, {
          source: '赵立春',
          target: '高育良',
          name: "前领导"
        }, {
          source: '赵立春',
          target: '赵瑞龙',
          name: "父子"
        }, {
          source: '赵立春',
          target: '刘新建',
          name: "前部队下属"
        }, {
          source: '李达康',
          target: '赵立春',
          name: "前任秘书"
        }, {
          source: '祁同伟',
          target: '高小琴',
          name: "情人"
        }, {
          source: '陈岩石',
          target: '陈海',
          name: "父子"
        }, {
          source: '陆亦可',
          target: '陈海',
          name: "属下"
        }, {
          source: '沙瑞金',
          target: '陈岩石',
          name: "故人"
        }, {
          source: '祁同伟',
          target: '陈海',
          name: "师哥"
        }, {
          source: '祁同伟',
          target: '侯亮平',
          name: "师哥"
        }, {
          source: '侯亮平',
          target: '陈海',
          name: "同学，生死朋友"
        }, {
          source: '高育良',
          target: '吴惠芬',
          name: "夫妻"
        }, {
          source: '陈海',
          target: '赵东来',
          name: "朋友"
        }, {
          source: '高小琴',
          target: '高小凤',
          name: "双胞胎",
          symbolSize: '1'
        }, {
          source: '赵东来',
          target: '陆亦可',
          name: "爱慕"
        }, {
          source: '祁同伟',
          target: '程度',
          name: "领导"
        }, {
          source: '高育良',
          target: '高小凤',
          name: "情人"
        }, {
          source: '赵瑞龙',
          target: '祁同伟',
          name: "勾结",
          symbolSize: '1',
        }, {
          source: '李达康',
          target: '赵东来',
          name: "领导"
        }, {
          source: '赵瑞龙',
          target: '程度',
          name: "领导"
        }, {
          source: '沙瑞金',
          target: '李达康',
          name: "领导"
        }, {
          source: '沙瑞金',
          target: '高育良',
          name: "领导"
        }, {
          source: '祁同伟',
          target: '梁璐',
          name: "夫妻"
        }, {
          source: '吴惠芬',
          target: '梁璐',
          name: "朋友"
        }, {
          source: '李达康',
          target: '欧阳菁',
          name: "夫妻"
        }, {
          source: '赵瑞龙',
          target: '刘新建',
          name: "洗钱工具"
        }, {
          source: '赵瑞龙',
          target: '高小琴',
          name: "勾结，腐化",
          symbolSize: '1'
        }, {
          source: '赵瑞龙',
          target: '高小凤',
          name: "腐化"
        }, {
          source: '吴心怡',
          target: '陆亦可',
          name: "母女"
        }, {
          source: '吴心怡',
          target: '吴惠芬',
          name: "姐妹"
        }, {
          source: '蔡成功',
          target: '侯亮平',
          name: "发小"
        }, {
          source: '蔡成功',
          target: '欧阳菁',
          name: "举报",
          lineStyle: {
            type: 'dotted',
            color: '#000'
          }
        }, {
          source: '欧阳菁',
          target: '刘新建',
          name: "举报",
          lineStyle: {
            type: 'dotted',
            color: '#000'
          }
        }, {
          source: '刘新建',
          target: '赵瑞龙',
          name: "举报",
          lineStyle: {
            type: 'dotted',
            color: '#000'
          }
        }, {
          source: '李达康',
          target: '丁义珍',
          name: "领导"
        }, {
          source: '高小琴',
          target: '丁义珍',
          name: "策划出逃"
        }, {
          source: '祁同伟',
          target: '丁义珍',
          name: "勾结"
        }, {
          source: '赵瑞龙',
          target: '丁义珍',
          name: "勾结"
        }], // 连线关系
    }
  },
  mounted() {
    this.relationEchart = echarts.init(this.$refs.relationEchart);
    this.relationEchart.setOption(this.relationOption);
    window.onresize = () => {
      this.relationEchart.resize();
    }
    this.links.map((item,i)=>{
      return {
        source: this.links[i].source+'1',
        target: this.links[i].target+'1',
        name:'1'
      }
    })
    console.log(this.links)
    // this.links.map((item,i)=>{
    //   this.initData.forEach( o => {
    //     if(o.name === this.links[i].source) {
    //       if(o.name === this.links[i].target) {
    //         return {
    //           source: o.id,
    //           target: o.id,
    //         }
    //       }
    //     }
    //   })
    // })
    // console.log(this.links)
  },
  watch: {
    relationOption: {
      handler(newVal, oldVal) {
        if (this.relationEchart) {
          if (newVal) {
            this.relationEchart.setOption(newVal);
          } else {
            this.relationEchart.setOption(oldVal);
          }
        }
      },
      deep: true
    },
  },
  beforeDestroy() {
    if (!this.relationEchart) {
      return;
    }
    this.relationEchart.clear();
  },
  computed: {
    relationOption() {
      return {
        title: {text: '人民的名义关系图谱'},
        tooltip: {
          formatter: function (x) {
            return x.data.des;
          }
        },
        series: [
          {
            type: 'graph',
            layout: 'force',
            symbolSize: 60,
            roam: true,
            //边两端的标记类型，可以是一个数组分别指定两端，也可以是单个统一指定。默认不显示标记，常见的可以设置为箭头，如下：edgeSymbol: ['circle', 'arrow']
            edgeSymbol: ['circle', 'arrow'],
            edgeSymbolSize: [2, 8], // 边两端的标记大小，可以是一个数组分别指定两端，也可以是单个统一指定。
            force: {
              repulsion: 1500,  //相距距离
              edgeLength: [10, 30]
            },
            draggable: true,
            itemStyle: {
              color: '#66ffcc'
            },
            lineStyle: {
              width: 2,
              color: '#ccffff'
            },
            // 边的设置
            edgeLabel: {
              show: true,
              fontSize: 14,
              color: '#a4e0df', //线上的字体颜色
              formatter: function (x) {
                return x.data.name;
              }
            },
            label: {
              show: true,
            },
            data: this.initData,
            links: this.links
          }
        ]
      };
    },
  }
}
</script>

<style scoped>
#relationEchart {
  width: 100%;
  height: 80vh;
/*// 防止闪现滚动条*/
  overflow: hidden;
}
</style>
