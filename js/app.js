console.log("Js file linked and working");

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let x = Math.random() * 890;
let dx = (Math.random() - 0.5) * 10;
let y = Math.random() * innerHeight;
let dy = (Math.random() - 0.5) * 10;
let r = 10;
let paddle1Y = 100;
let paddle2Y = 100;




const animate = ()=>{
  //essentially creates a loop and allows to give the illlusion
  requestAnimationFrame(animate);
  ctx.clearRect(0,0,innerWidth, innerHeight);
  moveBall();
  paddle1();
  paddle2();
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2, false);
  ctx.strokeStyle = 'white';
  ctx.stroke();
}

const paddle1 = ()=>{
  ctx.fillStyle = 'blue';
  ctx.fillRect(0, paddle1Y, 10, 100)
}

const paddle2 = ()=>{
  ctx.fillStyle = 'blue';
  ctx.fillRect(890, paddle2Y, 10, 100)
}

const moveBall = ()=>{
  x += dx;
  y += dy;
  if(x > 890 || x - r < 0){
    // dx = -dx;
    resetBall();
  }else if(y + r > 700 || y - r < 0){
    dy = -dy;
  }
}

const resetBall = ()=>{
  x = canvas.width/2
  y = canvas.height/2
}


document.addEventListener('keydown', (event)=>{
  const key = event.which;
  if(key == 38){
    paddle2Y -= 20;
  }else if(key == 40){
    paddle2Y +=20
  }else if(key == 65){
    paddle1Y -=20
  }else if(key == 90){
    paddle1Y +=20
  }
  // console.log(key)
});

//calling our animate function
animate();




