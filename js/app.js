console.log("Js file linked and working");

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');


//All of these variables are stored in the global scope
//this is the x coordinate of the ball which is being randomized
let x = Math.random() * 890;
//this is the x velocity of the ball which is being randomized, but not too quickly
let dx = (Math.random() - 0.5) * 10;
//y coordinate of the ball also random
let y = Math.random() * innerHeight;
//y axis veloctiy also random
let dy = (Math.random() - 0.5) * 10;
//radius of our ball
let r = 10;
//starting position for our 1st paddle
let paddle1Y = 100;
//starting position for the second paddle
let paddle2Y = 100;
//this is the paddle height 
let paddleH = 100;
//a variable to store the score in 
let score;




const animate = ()=>{
  //essentially creates a loop and allows to give the illlusion of animation
  requestAnimationFrame(animate);
  //clearing the canvas so the ball doesnt leave a trail
  ctx.clearRect(0,0,innerWidth, innerHeight);
  //calling our functions to be animated
  moveBall();
  paddle1();
  paddle2();
  // making the ball
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2, false);
  ctx.strokeStyle = 'white';
  ctx.stroke();
}

const paddle1 = ()=>{
  ctx.fillStyle = 'blue';
  ctx.fillRect(0, paddle1Y, 10, paddleH)
}

const paddle2 = ()=>{
  ctx.fillStyle = 'blue';
  ctx.fillRect(890, paddle2Y, 10, paddleH)
}


//the function controlling how our ball is moving
const moveBall = ()=>{
  //setting the velocity of the ball
  x += dx;
  y += dy;
  //if the ball hits the left wall
  if(x - r < 0){
    //if the ball hits the wall where our paddle currently is it reverses direction
    if(y > paddle1Y && y < paddle1Y + paddleH){
      dx = -dx
      //if it hits anywhere else on the wall it resets
    }else{ 
    resetBall();
    }
    //if the ball hits the right wall
  }else if(x > 890){
    //if the ball hits the wall where the paddle is it reverses direction
    if(y > paddle2Y && y < paddle2Y + paddleH){
      dx = -dx
      //if it hits the wall it resets
    }else{
      resetBall();
    }
    //if the ball hits anywhere on the ceiling or floor it reverses direction
  }else if(y + r > 700 || y - r < 0){
    dy = -dy;
  }
}

//function that resets the ball in the center of the canvas
const resetBall = ()=>{
  x = canvas.width/2
  y = canvas.height/2
}

//listening for keys being pressed. currently a 2 player game
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




