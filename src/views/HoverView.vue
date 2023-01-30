<template>
  <div class="all">
    <div class="imag" style="width: 300px;height: 300px">
    </div>
    <div class="content">
      <div style="display: flex;justify-content: space-between">
        <div class="">Yepi</div>
        <div class="">播放1万6</div>
      </div>
      <div class="text-left introduce">程序员Yepi程序员Yepi程序员Yepi程序员Yepi程序员Yepi程序员Yepi</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HoverView"
}
</script>

<style scoped>

/* 主体 */
.all {
  position: relative;
  overflow: hidden;
  cursor: pointer
}

/* 设置底图样式 */
.imag {
  background-repeat: no-repeat;
  background-size: 100% 100%;
  transition: transform .8s;
  background-image: url("../assets/logo.svg");
}

/* 鼠标进入该区域 图片放大1.2倍 */
.all:hover .imag {
  transform: scale(1.2);
}

/* 个人信息的渐变背景 */
.content {
  width: 300px;
  height: 64px;
  z-index: 2;
  color: #fff;
  font-size: 14px;
  position: absolute;
  left: 0;
  transition: transform .8s;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.6) 100%);
}

/* 鼠标进入该区域  向上移xx px */
.all:hover .content {
  transform: translateY(-60px);
}

/* 个人描述 */
.introduce {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 6px;
}

</style>