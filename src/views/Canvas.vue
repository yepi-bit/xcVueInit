<template>
  <div>
    <canvas id="canvas" width="300" height="300"></canvas>
    <canvas id="canvas2" width="300" height="300"></canvas>
    <div>
      <svg version="1.1"
           baseProfile="full"
           width="300" height="200"
           xmlns="http://www.w3.org/2000/svg">

        <rect width="100%" height="100%" stroke="red" stroke-width="4" fill="yellow" />

        <circle cx="150" cy="100" r="80" fill="green" />
<!--  椭圆      -->
        <ellipse cx="30" cy="18" rx="20" ry="10"
                 style="fill:red;stroke:purple;stroke-width:2"/>
        <text x="150" y="115" font-size="16" text-anchor="middle" fill="white">RUNOOB SVG TEST</text>

      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "Canvas",
  mounted() {
    this.setCanvas()
    let canvas = document.getElementById('canvas')
    let ctx = canvas.getContext("2d")

    let raf;

    const ball = {
      x: 100,
      y: 100,
      vx: 5,
      vy: 2,
      radius: 25,
      color: "blue",
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fill();
      },
    };

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ball.draw();
      ball.x += ball.vx;
      ball.y += ball.vy;
      ball.vy *= 0.99;
      ball.vy += 0.25;

      if (ball.y + ball.vy > canvas.height || ball.y + ball.vy < 0) {
        ball.vy = -ball.vy;
      }
      if (ball.x + ball.vx > canvas.width || ball.x + ball.vx < 0) {
        ball.vx = -ball.vx;
      }

      raf = window.requestAnimationFrame(draw);
    }

    canvas.addEventListener("mouseover", (e) => {
      raf = window.requestAnimationFrame(draw);
    });

    canvas.addEventListener("mouseout", (e) => {
      window.cancelAnimationFrame(raf);
    });

    ball.draw();
  },
  methods:{
    setCanvas() {
      let canvas2 = document.getElementById('canvas2')
      let ctx2 = canvas2.getContext("2d")
      ctx2.fillStyle = "rgba(0, 0, 200, 0.5)";
      ctx2.rotate(0.1); //1表示57.3度（1弧度）
      ctx2.fillRect(0,0,300,300)

      for (var i=0;i<6;i++){
        for (var j=0;j<6;j++){
          ctx2.fillStyle = 'rgb(' + Math.floor(255-42.5*i) + ',' +
              Math.floor(255-42.5*j) + ',0)';
          ctx2.fillRect(j*25,i*25,25,25);
        }
      }

      let image = new Image()
//设置图片的路径
        image.src = '../assets/logo.svg'
//当图片成功加载，就画图（上屏幕）
      image.onload = function(){
        //显示图片的API
        // ctx.drawImage(image, 100, 100); //表示x和y坐标
        // ctx.drawImage(image, 100, 100, 150, 150); //表示x和y坐标
        // ctx.drawImage(img,切片X,切片Y,切片W,切片H,画布X,画布Y,图片W,图片H);
        ctx2.drawImage(image, 0, 0);
      }
    }
  },
}
</script>

<style scoped>

</style>