var say = document.getElementById('say');
var text = '';

var canvas = document.getElementById('myCanvas').getContext("2d");
var stopSnakeAuto = true;
var circle = document.getElementById('Move');
circle.addEventListener('click', () => {
   if(circle.textContent == "StopAuto"){ 

    stopSnakeAuto = false;
   circle.textContent="StartAuto";
}else{
    stopSnakeAuto=true;
circle.textContent="StopAuto";
}
})

canvas.fillStyle = "olive";
var buttonStop = document.getElementById("Stop");
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
var step=1;
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

/////////////////////////////////
///////////////////////
function moveSqr() {

    createApple();
    showSnake();

    window.addEventListener('keydown', (aa) => {
        canvas.fillStyle = "#45";

        if (aa.key == "ArrowLeft") {
            snake.direction = 'left';
            moveLeft();
        } else if (aa.key == "ArrowRight") {
            // изчисляваме пътя
            snake.direction = 'right'
            moveRight();

        } else if (aa.key == "ArrowUp") {
            snake.direction = 'up';
            moveUp();
        } else if (aa.key == "ArrowDown") {
            snake.direction = 'down';
            moveDown();
        }

        // console.log(i, j, a, b);
        // if (catchApple()) {

        //     // console.log("catched");
        //     // createApple();

        // }



    })
}

function createApple() {
    a = Math.floor(Math.random() * 300);
    b = Math.floor(Math.random() * 150);

    canvas.fillStyle = "#446599";
    var sqr = canvas.fillRect(a, b, 10, 10);
    return sqr;
}

//////////////////
//////////////

function catchApple() {
    let coor = snake.position[snake.position.length - 1];
    console.log(coor.hor, 'coor.hor', coor.ver, 'coor.ver', a, b);
    // snake.direction='non';

    if ((coor.hor > a && coor.hor < a + 10) && (b > coor.ver && b < coor.ver + 10)) {

        console.log('catched');
        canvas.clearRect(a,b,10,10);
        createApple();
        return true;

    }else{
        canvas.fillStyle='red';
        canvas.fillRect(a,b,10,10);
    }
    return false;

}
////////////////
function showfirstSqr(a, b) {
    canvas.fillStyle = "#199";
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
    // while(snake.direction == 'right'){

    if (snake.direction == "left" || snake.direction == "up" || snake.direction == "down") return true;
    let path = snake.position[snake.position.length - 1];
    let newX = path.hor + step;
    let newY = path.ver;
    let newPath = { hor: newX, ver: newY };
    snake.position.push(newPath);

    showfirstSqr(newX, newY);//    показваме новата кутия

    // махаме последна кутийка
    let eraseLast = snake.position[0]
    clearLastSqr(eraseLast.hor, eraseLast.ver);
    snake.position.splice(0, 1);
    showSnake();
    if (stopSnakeAuto) {
        moveRightHelp();
    }
}
//////////////
function moveRightHelp() {


    setTimeout(function () {

        moveRight();
    }, speed)
}


/////////////////////
function moveLeft() {
    // while(snake.direction == 'right'){

    if (snake.direction == "right" || snake.direction == "up" || snake.direction == "down") return true;
    let path = snake.position[snake.position.length - 1];
    let newX = path.hor - step;
    let newY = path.ver;
    let newPath = { hor: newX, ver: newY };
    snake.position.push(newPath);

    showfirstSqr(newX, newY);//    показваме новата кутия

    // махаме последна кутийка
    let eraseLast = snake.position[0]
    clearLastSqr(eraseLast.hor, eraseLast.ver);
    snake.position.splice(0, 1);
    showSnake();
    if (stopSnakeAuto) {
        moveLeftHelp();
    }
}
//////////////
function moveLeftHelp() {


    setTimeout(function () {

        moveLeft();
    }, speed)
}
///////////////////////////////

/////////////////////
function moveUp() {
    // while(snake.direction == 'right'){

    if (snake.direction == "left" || snake.direction == "down" || snake.direction == "right") return true;
    let path = snake.position[snake.position.length - 1];
    let newX = path.hor;
    let newY = path.ver - step;
    let newPath = { hor: newX, ver: newY };
    snake.position.push(newPath);

    showfirstSqr(newX, newY);//    показваме новата кутия

    // махаме последна кутийка
    let eraseLast = snake.position[0]
    clearLastSqr(eraseLast.hor, eraseLast.ver);
    snake.position.splice(0, 1);
    showSnake();
    if (stopSnakeAuto) {
        moveUpHelp();
    }
}
//////////////
function moveUpHelp() {


    setTimeout(function () {

        moveUp();
    }, speed)
}

/////////////////////
function moveDown() {
    // while(snake.direction == 'right'){

    if (snake.direction == "left" || snake.direction == "up" || snake.direction == "right") return true;
    let path = snake.position[snake.position.length - 1];
    let newX = path.hor;
    let newY = path.ver + step;
    let newPath = { hor: newX, ver: newY };
    snake.position.push(newPath);

    showfirstSqr(newX, newY);//    показваме новата кутия

    // махаме последна кутийка
    let eraseLast = snake.position[0]
    clearLastSqr(eraseLast.hor, eraseLast.ver);
    snake.position.splice(0, 1);
    showSnake();
    if (stopSnakeAuto) {
        moveDownHelp();
    }
}
//////////////
function moveDownHelp() {


    setTimeout(function () {

        moveDown();

    }, speed)
}









