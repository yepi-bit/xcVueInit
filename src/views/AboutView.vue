<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div class="total">
      <div class="top">
        <img src="../assets/logo.svg"/>
      </div>
      <div class="bottom">落叶聚还散，寒鸦栖复惊。
        相思相见知何日？此时此夜难为情！
        入我相思门，知我相思苦。
        长相思兮长相忆，短相思兮无穷极。
        早知如此绊人心，何如当初莫相识。
      </div>
    </div>
  </div>
</template>

<style scoped>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

/* 给所有内容一个盒子（包括需要做出过渡效果的内容） */
.total {
  width: 300px;
  height: 300px;
  border: 1px solid #999999;
  overflow: hidden;
}

/* 再给一个盒子放入内容（不包括需要做出过渡效果的内容） */
.top {
  width: 300px;
  height: 300px;
  /* 给这个盒子一个过渡，因为我们是想让这个盒子出现过渡效果 */
  transition: all .4s ease-in-out;
}

/* 底部的上移效果 */
.bottom {
  width: 300px;
  height: 150px;
  /*line-height: 50px;*/
  background-color: transparent;
  color: white;
  text-align: left;
  font-weight: bold;
  font-size: 14px;
}

/* 给total一个hover，高度是总盒子的高度减去bottom盒的高度 */
.total:hover .top {
  height: 150px;
  cursor: pointer;
}
</style>
