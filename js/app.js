console.log("Js file linked and working");

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let ballX = 100;
let ballY = 100;
let ballR = 10;

window.onload = ()=>{
  setInterval(draw, 500);
}



let draw = ()=>{
  ctx.beginPath();
  ctx.arc(ballX, ballY, ballR, 0, Math.PI * 2, false);
  ctx.strokeStyle = 'white';
  ctx.stroke();

  ballX += 10;

}

draw();