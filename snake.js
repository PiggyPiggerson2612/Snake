const LEFT = 37;
const UP = 38;
const RIGHT = 39;
const DOWN = 40;

class Snake {
    constructor(_snakehead, _snakeLength, ) {


    }
}
class Dot {
    constructor(_xpos, _ypos) {
        this.xpos = _xpos;
        this.ypos = _ypos;
        let elem = document.getElementById("food");
        this.elem = elem;
    }


    render() {
        this.elem.style.top = this.ypos + "px";
        this.elem.style.left = this.xpos + "px";

    }
}

class SnakeGame {
    constructor() {
        document.addEventListener("keydown", this.direction);
        this.dot = new Dot(Math.random() * 300, 0);
        this.direction = UP;
    }

    play() {

        let that = this;
        setInterval(function () {
            that.dot.render();
        }, 100);

    }


}

direction(event) {
    console.log(event);

    if (event.keycode == 37) {
        this.direction = LEFT;
    } else if (event.keycode == 38) {
        this.direction = UP;
    } else if (event.keycode == 39) {
        this.direction = RIGHT;
    } else if (event.keycode == 40) {
        this.direction = DOWN;
    }

}

}

let food = new SnakeGame;
food.play();









//  constructor(_player, _scoreboard, _dot, _xpos, _ypos, _LEFT, _RIGHT, _UP, _DOWN) {
//      this.player = ;
//      this.scoreboard =;
//      this.dot = ;
//      this.xpos =;
//      this.ypos = ;
//      this.LEFT = 37;
//      this.UP = 38;
//      this.RIGHT = 39;
//      this.DOWN = 40;
//      this.container = document.getElementById('container');
//      this.startButton = document.getElementById(_id);
//      this.restartButton = document.getElementById(_id);
//    }



/*document.addEventListener("keydown",direction);

function direction(event) {
  if (event.keycode == 37) {
    d = LEFT;
  } else if {
    (event.keycode == 38){
      d = UP;
  } else if {
    (event.keycode == 39 ){
      d = RIGHT;
  } else if {
    (event.keycode == 40 ){
      d = DOWN;

      }
    }
  }

}


function eat(){
  var snakeHead = {x: 5, y: 5, width: 50, height: 50};
  var dot = {x: 20, y: 10, width: 10, height: 10};

    if (snakeHead.x < dot.x + dot.width &&
   snakeHead.x + snakeHead.width > dot.x &&
   snakeHead.y < dot.y + dot.height &&
  snakeHead.y + snakeHead.height > dot.y)
    // collision detected!
}

// filling in the values =>

if (5 < 30 &&
    55 > 20 &&
    5 < 20 &&
    55 > 10) {
    // collision detected!
}

function createSnake(){
  let snake = [];
}

function updateSnakeLength(){
  let newLength = snake.pop();

}

let d;



function updateScore(){

}

function getScore(){
  let score = [];

}

function createDot(){
  this.xpos = (Math.floor(Math.random() *
      columns - 1) + 1) * scale;
    this.ypos = (Math.floor(Math.random() *
      rows - 1) + 1) * scale;
  }

}



function updateScoreboard(){

}
function displayScoreboard(){

}

function newGame(){

}

function gameOver(){

}
*/
