var say = document.getElementById('say');
var text = '';

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
var step = 1;
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
            // while(aa.key == "ArroeLeft"){

            snake.direction = 'left';
            moveLeft();
        }
        // } 
        if (aa.key == "ArrowRight") {


            snake.direction = 'right'
            moveRight();

        }
        if (aa.key == "ArrowUp") {
            snake.direction = 'up';
            moveUp();
        }
        if (aa.key == "ArrowDown") {
            snake.direction = 'down';
            moveDown();
        }

        catchApple();
    })
}

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
    console.log(coor.hor, 'coor.hor', coor.ver, 'coor.ver', a, b);
    // snake.direction='non';
    let p = coor.hor;
    let q = coor.ver;
    if ((p > a && p < a + 10) && (q> b && q < b + 10)) {

        console.log('catched');
        canvas.clearRect(a, b, 10, 10);
        createApple();
        addToSnake();
        return true;

    } else {
        canvas.fillStyle = 'red';
        canvas.fillRect(a, b, 10, 10);
    }
    p += 10;
    if ((p > a && p < a + 10) && (q > b && q < b+ 10)) {

        console.log('catched');
        canvas.clearRect(a, b, 10, 10);
        createApple();
        addToSnake();
        return true;

    } else {
        canvas.fillStyle = 'red';
        canvas.fillRect(a, b, 10, 10);
    }
    q += 10;
    if ((p > a && p < a + 10) && (q > b && q < b + 10)) {

        console.log('catched');
        canvas.clearRect(a, b, 10, 10);
        createApple();
        addToSnake();
        return true;

    } else {
        canvas.fillStyle = 'red';
        canvas.fillRect(a, b, 10, 10);
    }
    p -= 10;
    if ((p > a && p < a + 10) && (q > b && q < b + 10)) {

        console.log('catched');
        canvas.clearRect(a, b, 10, 10);
        createApple();
        addToSnake();
        return true;

    } else {
        canvas.fillStyle = 'red';
        canvas.fillRect(a, b, 10, 10);
    }
    return false;

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
    // while(snake.direction == 'right'){

    if (snake.direction == "left" || snake.direction == "up" || snake.direction == "down") return true;
    let path = snake.position[snake.position.length - 1];
    let newX = path.hor + step;
    let newY = path.ver;
    let newPath = { hor: newX, ver: newY };
    snake.position.push(newPath);

    showfirstSqr(newX, newY, '#355');//    показваме новата кутия

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

    showfirstSqr(newX, newY, 'olive');//    показваме новата кутия

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

    showfirstSqr(newX, newY, "olive");//    показваме новата кутия

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

    showfirstSqr(newX, newY, 'olive');//    показваме новата кутия

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
///////////////////////////
///////////////////////
function addToSnake() {

    let coor = snake.position[0]
    let add = { hor: "", ver: "" }
    add.hor = coor.hor--;
    add.ver = coor.ver;
    snake.position.unshift(add);
}

















