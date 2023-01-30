<template>
  <div @scroll="scrollEvent" ref="scrollEvent" @mousewheel="scrollEvent">
    <div class="box">
      <van-image
          round
          :width="c > 50 && c < 80 ? this.c : '8rem'"
          :height="c > 50 && c < 80 ? this.c : '8rem'"
          src="https://github.githubassets.com/images/icons/emoji/unicode/1f3af.png"
      />
      <van-button
          :style="{'margin-left':Number(this.c) < 30 ? '80px' : 30 < Number(this.c) && Number(this.c) < 60?'50px':'30px'}"
          plain hairline type="primary">Yepi
      </van-button>
    </div>
    <div class="bottom" v-for="item in 12" :key="item">
      <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }">文字</van-divider>
    </div>
    <div class="page-box">
      <div class="main-box">领红包了</div>
    </div>
  </div>
</template>

<script>
import {Button} from 'vant';
import {Divider} from 'vant';
import {Image as VanImage} from 'vant';

export default {
  name: "HeaderAni",
  components: {
    [Button.name]: Button,
    [VanImage.name]: VanImage,
    [Divider.name]: Divider,
  },
  data() {
    return {
      c: 0
    }
  },
  watch: {},
  mounted() {
    // const a = this.$refs['scrollEvent']
    window.addEventListener('scroll', this.scrollEvent, true)
  },
  beforeDestroy() {
    // const b = this.$refs['scrollEvent']
    window.removeEventListener('scroll', this.scrollEvent, true)
  },
  methods: {
    scrollEvent() {
      this.c = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      // console.log(this.$refs['scrollEvent'].offsetTop)
    }
  }
}
</script>

<style scoped>
.box {
  display: flex;
  justify-content: center;
  align-items: center;
}

.page-box {
  cursor: pointer;
  margin: 0 auto;
  width: 400px;
  height: 200px;
  transform-style: preserve-3d;
}

.main-box {
  margin-top: 50px;
  height: 40px;
  width: 200px;
  border-radius: 5px;
  color: #fff;
  background-color: red;
  text-align: center;
  line-height: 40px;
  animation-name: scaleAnimation;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  transition-timing-function: ease-in-out;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

@keyframes scaleAnimation {
  0% {
    transform: scale(1);
  }

  25% {
    transform: scale(1.08);
  }

  50% {
    transform: scale(1);
  }
  75% {
    transform: scale(1.08);
  }
}
</style>