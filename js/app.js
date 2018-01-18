console.log("Js file linked and working");

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let x = 100;
let dx = 5;
let y = 100;
let dy = 5;
let r = 10;
let paddle1Y = 100;
let paddle2Y = 100




let animate = ()=>{
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

let paddle1 = ()=>{
  ctx.fillStyle = 'blue';
  ctx.fillRect(0, paddle1Y, 10, 100)
}

let paddle2 = ()=>{
  ctx.fillStyle = 'blue';
  ctx.fillRect(890, paddle2Y, 10, 100)
}

let moveBall = ()=>{
  x += dx;
  if(x > 890 || x < 0){
    dx = -dx;
  }
  // else if(x < 0){
  //   -dx = dx
  // }
}


document.addEventListener('keydown', (event)=>{
  let key = event.which;
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

animate();




