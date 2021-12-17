var score = 0;
var myTime= new Date()
var myStartingTime=myTime.getTime();
console.log('starting timestamp',myStartingTime);
var scoreValue = document.getElementById('score');
scoreValue.innerHTML=score;

function calcTime(){
    let currentTime=new Date()

    let int =currentTime.getTime()-myStartingTime;
    let mySpeed=Math.round((score/int)*10000000)
    let a = document.getElementById('MySpeed');
    a.innerHTML=mySpeed;
    return mySpeed;
}

///////////////////
function viewScore(){

document.getElementById('score').innerHTML=score;
}
var canvas = document.getElementById('myCanvas').getContext("2d");
var stopSnakeAuto = true;
var circle = document.getElementById("StopAuto");

circle.addEventListener('click', () => {
    if (circle.textContent == "StopAuto/Pause") {

        stopSnakeAuto = false;
        circle.textContent = "StartAuto/Game";
    } else {
        stopSnakeAuto = true;
        circle.textContent = "StopAuto/Pause";
    }
})

canvas.fillStyle = "olive";
var buttonStop = document.getElementById("StartGame");
buttonStop.addEventListener('click', () => {
    // for(let i=0 ;i<1000;i++){
    moveSqr();
    // }
    // createApple();
    if (buttonStop.textContent == "Stop") {
        buttonStop.textContent = "Start";
    } else {
        buttonStop.textContent = "Stop";
    }

});
var step = 10;
var a = 10;
var b = 10;
var speed = 1200;
var snake = {
    position:
        [
            { hor: 10, ver: 30 },
            { hor: 20, ver: 30 },
            { hor: 30, ver: 30 },
            { hor: 40, ver: 30 },
            { hor: 40, ver: 20 },
            { hor: 40, ver: 10 },
            { hor: 40, ver: 0 },
            { hor: 50, ver: 0 },
            { hor: 60, ver: 0 },
            { hor: 70, ver: 0 }
        ],
    direction: "right"
}
var arrowKeyLeft=true
var arrowKeyRight=true
var arrowKeyUp = true
var arrowKeyDown = true
//////////////////////
var btnArrowLeft='up'
var btnArrowRight='up'
var btnArrowUp = 'up'
var btnArrowDown = 'up'
/////////////////////////////


var isCalledLeft = false
var isCalledRight = false
var isCalledUp = false
var isCalledDown = false

/////////////////////////////////
var stopSnakeLeft
var stopSnakeRight
var stopSnakeUp
var stopSnakeDown
///////////////////
///////////////////






////
function moveSqr() {
    
    
    createApple();
    showSnake();
}
    

window.addEventListener('keyup',function(btn){
    if(btn.key =="ArrowLeft"){
        clearInterval(stopSnakeLeft)
        isCalledLeft = false
        btnArrowLeft='up'
        arrowKeyLeft=false
    }
    if(btn.key =="ArrowRight"){
        
        clearInterval(stopSnakeRight)
        isCalledRight = false
        btnArrowRight='up'
        arrowKeyRight=false
    }
    if(btn.key =="ArrowUp"){
        
        clearInterval(stopSnakeUp)
        isCalledUp = false
        btnArrowUp='up'
        arrowKeyUp=false
    }
    if(btn.key =="ArrowDown"){
        
        clearInterval(stopSnakeDown)
        isCalledDown=false
        btnArrowDown='up'
        // console.log(btnArrowDown)
        arrowKeyDown=false
    }
    // console.log(arrowKeyDown,arrowKeyLeft,arrowKeyRight,arrowKeyUp)
})

// console.log(arrowKeyDown,arrowKeyLeft,arrowKeyRight,arrowKeyUp)
    window.addEventListener('keydown', (btn) => {
        canvas.fillStyle = "#45";

        if (btn.key == "ArrowLeft" ) {
           //arrowKeyLeft=true
        //    btnArrowLeft="down"
        //    snake.direction = 'left';
            moveLeft();
            
        }
        if (btn.key == "ArrowRight" ) {
            //arrowKeyRight=true
            // btnArrowRight='down'
            // snake.direction = 'right'
            moveRight();

        }
        if (btn.key == "ArrowUp"  ) {
            //arrowKeyUp=true
            // btnArrowUp='down'
            // snake.direction = 'up';
            moveUp();
        }
        if (btn.key == "ArrowDown" ) {
            //arrowKeyDown=true
            // btnArrowDown='down'
            // snake.direction = 'down';
            // console.log('btn_down' , btnArrowDown )
            moveDown();
        }

        catchApple();
    })


function createApple() {
    a = Math.floor(Math.random() * 300);
    b = Math.floor(Math.random() * 150);

    canvas.fillStyle = "#446599";
    var sqr = canvas.fillRect(a, b, 10, 10);
    // let simbol = "<a>&#9752;</a>"
    // canvas.fillText(simbol,100,100);
    return sqr;
}

//////////////////
//////////////

function catchApple() {
    let coor = snake.position[snake.position.length - 1];
    // snake.direction='non';
    let p = coor.hor;
    let q = coor.ver;
   
    if(catchHlp(p,q)){score++;viewScore();calcTime();return true}
    p += 10;
    if(catchHlp(p,q)){score++;viewScore();calcTime();return true}
    q += 10;
    if(catchHlp(p,q)){score++;viewScore();calcTime();return true}
     
    p -= 10;
    if(catchHlp(p,q)){score++;viewScore();calcTime();return true}

    return false;

}
///////////////////////
function catchHlp(p,q){
    if ((p >= a && p <= a + 10) && (q >= b && q <= b + 10)) {

        console.log('catched');
        canvas.clearRect(a, b, 10, 10);
        createApple();
        addToSnake();
        return true;

    } else {
        canvas.fillStyle = 'red';
        canvas.fillRect(a, b, 10, 10);
    }
    return false ;
}
////////////////
function showfirstSqr(a, b, color = '',text='') {

    if (color == '') {

        canvas.fillStyle = "#199";
    } else {
        canvas.fillStyle = color;
    }

    canvas.fillRect(a, b, 10, 10);
}
///////////////////
function clearLastSqr(lastA, lastB) {
    canvas.clearRect(lastA, lastB, 10, 10);

}
//////////////////////////////

function showSnake() {
    // console.log(i,j,a,b);

    for (x of snake.position) {
        showfirstSqr(x.hor, x.ver);
    }

}
/////////////////////
function moveRight() {


    if(isCalledRight == true ){return true}
     else{isCalledRight = true }

     if(stopSnakeAuto === true ){
        stopSnakeRight = setInterval(()=>{

            let path = snake.position[snake.position.length - 1];
            let newX = path.hor + step;
            if(newX>300){
                newX = 0;
            }
            let newY = path.ver;
            let newPath = { hor: newX, ver: newY };
            snake.position.push(newPath);
        
            showfirstSqr(newX, newY, '#355');//    показваме новата кутия
        
            // махаме последна кутийка
            let eraseLast = snake.position[0]
            clearLastSqr(eraseLast.hor, eraseLast.ver);
            snake.position.splice(0, 1);
            showSnake();
            
         },speed)
     }else{
    let path = snake.position[snake.position.length - 1];
    let newX = path.hor + step;
    if(newX>300){
        newX = 0;
    }
    let newY = path.ver;
    let newPath = { hor: newX, ver: newY };
    snake.position.push(newPath);

    showfirstSqr(newX, newY, '#355');//    показваме новата кутия

    // махаме последна кутийка
    let eraseLast = snake.position[0]
    clearLastSqr(eraseLast.hor, eraseLast.ver);
    snake.position.splice(0, 1);
    showSnake();
  }
}


/////////////////////
function moveLeft() {
    if(isCalledLeft == true ){return true}
    else{isCalledLeft = true }
    if(stopSnakeAuto === true ){
        stopSnakeLeft = setInterval(()=>{

            let path = snake.position[snake.position.length - 1];
            let newX = path.hor - step;
            if(newX < 0 ){
                newX = 300;
            }
            let newY = path.ver;
            let newPath = { hor: newX, ver: newY };
            snake.position.push(newPath);
        
            showfirstSqr(newX, newY, 'olive');//    показваме новата кутия
        
            // махаме последна кутийка
            let eraseLast = snake.position[0]
            clearLastSqr(eraseLast.hor, eraseLast.ver);
            snake.position.splice(0, 1);
            showSnake();
        },speed)
        }else{
    let path = snake.position[snake.position.length - 1];
    let newX = path.hor - step;
    if(newX < 0 ){
        newX = 300;
    }
    let newY = path.ver;
    let newPath = { hor: newX, ver: newY };
    snake.position.push(newPath);

    showfirstSqr(newX, newY, 'olive');//    показваме новата кутия

    // махаме последна кутийка
    let eraseLast = snake.position[0]
    clearLastSqr(eraseLast.hor, eraseLast.ver);
    snake.position.splice(0, 1);
    showSnake();
 }
}
///////////////////////////////

/////////////////////
function moveUp() {
   
    if(isCalledUp === true){return true}
    else{isCalledUp = true }

    if(stopSnakeAuto === true ){
        stopSnakeUp = setInterval(()=>{
     
    let path = snake.position[snake.position.length - 1];
    let newX = path.hor;
    let newY = path.ver - step;
    if(newY < 0 ){
        newY = 140 ;
    }
    let newPath = { hor: newX, ver: newY };
    snake.position.push(newPath);

    showfirstSqr(newX, newY, "olive");//    показваме новата кутия

    // махаме последна кутийка
    let eraseLast = snake.position[0]
    clearLastSqr(eraseLast.hor, eraseLast.ver);
    snake.position.splice(0, 1);
    showSnake();       
        },speed)

    }else{
        let path = snake.position[snake.position.length - 1];
        let newX = path.hor;
        let newY = path.ver - step;
        if(newY < 0 ){
            newY = 140 ;
        }
        let newPath = { hor: newX, ver: newY };
        snake.position.push(newPath);
    
        showfirstSqr(newX, newY, "olive");//    показваме новата кутия
    
        // махаме последна кутийка
        let eraseLast = snake.position[0]
        clearLastSqr(eraseLast.hor, eraseLast.ver);
        snake.position.splice(0, 1);
        showSnake();
    }
  }

/////////////////////
function moveDown() {
    // console.log("IN MOVE DOWN " , isCalledDown)
    if(isCalledDown === true ){return 0}
    else{isCalledDown = true }
// console.log("AfTER IF " , isCalledDown)
    if(stopSnakeAuto === true ){
        stopSnakeDown = setInterval(()=>{
            
    let path = snake.position[snake.position.length - 1];
    let newX = path.hor;
    let newY = path.ver + step;
    if( newY > 140){
        newY = 0;
    }
    let newPath = { hor: newX, ver: newY };
    snake.position.push(newPath);

    showfirstSqr(newX, newY, 'olive');//    показваме новата кутия

    // махаме последна кутийка
    let eraseLast = snake.position[0]
    clearLastSqr(eraseLast.hor, eraseLast.ver);
    snake.position.splice(0, 1);
    showSnake();
        },speed)
    }else{
    let path = snake.position[snake.position.length - 1];
    let newX = path.hor;
    let newY = path.ver + step;
    if( newY > 140){
        newY = 0;
    }
    let newPath = { hor: newX, ver: newY };
    snake.position.push(newPath);

    showfirstSqr(newX, newY, 'olive');//    показваме новата кутия

    // махаме последна кутийка
    let eraseLast = snake.position[0]
    clearLastSqr(eraseLast.hor, eraseLast.ver);
    snake.position.splice(0, 1);
    showSnake();
  }
}
////////////////////////
///////////////////////
function addToSnake() {

    let coor = snake.position[0]
    let add = { hor: "", ver: "" }
    add.hor = coor.hor--;
    add.ver = coor.ver;
    snake.position.unshift(add);
    
}

















