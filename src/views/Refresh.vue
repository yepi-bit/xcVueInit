<template>
  <div class="singer-container">
    <h1 class="singer-title">Yepi~列表（触底刷新）</h1>
    <ul class="singer-list clearfix">
      <li class="singer-item" v-for="(item, index) in singerList" :key="index">
        <a href="#" class="">
          <div class="singer-info">
            <img :src="item.picUrl" alt=""/>
            <span>{{ item.name }}</span>
          </div>
        </a>
      </li>
    </ul>
    <van-loading v-if="!isShow" type="spinner" color="#1989fa" />
    <div style="color: #ccc" v-if='isShow'>已经到底了</div>
    <provide-in-ject></provide-in-ject>
  </div>
</template>

<script>
import {Loading} from "vant";
import provideInJect from "../components/provideInJect.vue"
export default {
  components: {
    provideInJect,
    [Loading.name]: Loading,
  },
  provide() {
    return {
      info:"提供数据",
      me:'yepi',
      toMe:()=> this.aa
    }
  },
  inject:['message'],
  data() {
    return {
      aa:'1',
      me:'yepi',
      loading: false,
      singerList: [
        {
          picUrl: 'https://github.githubassets.com/images/icons/emoji/unicode/1f3af.png',
          name: "yepi"
        },
        {
          picUrl: 'https://github.githubassets.com/images/icons/emoji/unicode/1f3af.png',
          name: "yepi"
        },
        {
          picUrl: 'https://github.githubassets.com/images/icons/emoji/unicode/1f3af.png',
          name: "yepi"
        }
      ],
      newList: [
        {
          picUrl: 'https://github.githubassets.com/images/icons/emoji/unicode/1f920.png',
          name: "yepi"
        },
        {
          picUrl: 'https://github.githubassets.com/images/icons/emoji/unicode/1f3af.png',
          name: "yepi"
        },
        {
          picUrl: 'https://github.githubassets.com/images/icons/emoji/unicode/1f3af.png',
          name: "yepi"
        }
      ],
      offset: 0,
      isShow: false,
    }
  },
  methods: {
    getSingerList() {
      let limit = true
      if (limit) {
        // 偏移量
        this.offset += 20
        // 合并结果
        this.singerList = [...this.singerList, ...this.newList]
      }
      if (this.offset === 100) {
        this.isShow = true
      }
    },
    // 触底触发函数
    listenBottomOut() {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      const clientHeight = document.documentElement.clientHeight
      const scrollHeight = document.documentElement.scrollHeight
      console.log(Number(scrollTop.toFixed(0)) + Number(clientHeight), 'scrollTop' + ': ' + scrollTop.toFixed(2), 'clientHeight' + ': ' + clientHeight, 'scrollHeight' + ': ' + scrollHeight)
      if (scrollTop + clientHeight >= scrollHeight) {
        // 没有数据后，不触发请求
        if (!this.isShow) {
          this.getSingerList()
        }
      }
    }
  },
  created() {
    // 预先加载一遍
    this.getSingerList()
  },
  mounted() {
    console.log(this.message,'message')
// 事件监听
    window.addEventListener('scroll', this.listenBottomOut, true)
  },
  destroyed() {
// 离开页面取消监听
    window.removeEventListener('scroll', this.listenBottomOut, false)
  }
}
</script>