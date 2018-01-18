console.log("Js file linked and working");

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let draw = ()=>{
  ctx.beginPath();
  ctx.arc(100, 100, 30, 0, Math.PI * 2, false);
  ctx.strokeStyle = 'white';
  ctx.stroke();
}

draw();