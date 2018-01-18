console.log("Js file linked and working");

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let ballX = 100;
let ballY = 100;
let ballR = 10;





let animate = ()=>{
  requestAnimationFrame(animate);
  ctx.clearRect(0,0,innerWidth, innerHeight);

  ballX += 10;

  ctx.beginPath();
  ctx.arc(ballX, ballY, ballR, 0, Math.PI * 2, false);
  ctx.strokeStyle = 'white';
  ctx.stroke();


}
animate();
