var say = document.getElementById('say');
var text = '';

var canvas = document.getElementById('myCanvas').getContext("2d");
say.addEventListener('keydown', (a) => {
    text += a.key
    canvas.fillText(text, 50, 59)
})

var clearButton = document.getElementById("clear");
clearButton.addEventListener('click', () => {
    say.value = '';
    text = '';
    canvas.clearRect(0, 0, 400, 400);
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

})
var i = 0;
var j = 30;
var a = 10;
var b = 10;

var snake = {
    position:
    [
    { hor: 10, ver: 30 },
    { hor: 20, ver: 30 },
    { hor: 30, ver: 30 },
    { hor: 40, ver: 30},
    { hor: 40, ver: 20},
    {hor: 40, ver: 10},
    {hor: 40, ver: 0},
    {hor:50,ver:0},
    {hor:60,ver:0},
    {hor:70,ver:0}
],
direction:"right"
}

/////////////////////////////////
///////////////////////
function moveSqr() {

    createApple();
    showSnake();
    window.addEventListener('keydown', (aa) => {
        canvas.fillStyle = "#45";

        if (aa.key == "ArrowLeft") {

            
            // изчисляваме пътя
            let path = snake.position[snake.position.length-1];
        
            
            let newX = path.hor - 10;
            let newY = path.ver;
            
            let newPath = { hor: newX, ver: newY };
        
            snake.position.push(newPath);
            
            showfirstSqr(newX,newY);//    показваме новата кутия
             
            // махаме последна кутийка
            let eraseLast=snake.position[0]
            
            clearLastSqr(eraseLast.hor,eraseLast.ver);
            
            snake.position.splice(0,1);

        } else if (aa.key == "ArrowRight") {
            // изчисляваме пътя
            let path = snake.position[snake.position.length-1];
            let newX = path.hor + 10;
            let newY = path.ver;
            let newPath = { hor: newX, ver: newY };
            snake.position.push(newPath);
            
            showfirstSqr(newX,newY);//    показваме новата кутия
             
            // махаме последна кутийка
               let eraseLast=snake.position[0]
               clearLastSqr(eraseLast.hor , eraseLast.ver);
                 snake.position.splice(0,1);
           
        } else if (aa.key == "ArrowUp") {
             // изчисляваме пътя
             let path = snake.position[snake.position.length - 1];
             let newX = path.hor ;
             let newY = path.ver - 10;
             let newPath = { hor: newX, ver: newY };
             snake.position.push(newPath);
             
             showfirstSqr(newX,newY);//    показваме новата кутия
              
             // махаме последна кутийка
                let eraseLast=snake.position[0];
                clearLastSqr(eraseLast.hor , eraseLast.ver);
                  snake.position.splice(0,1);
        } else if (aa.key == "ArrowDown") {
          
                // изчисляваме пътя
                let path = snake.position[snake.position.length-1];
                let newX = path.hor ;
                let newY = path.ver + 10 ;
                let newPath = { hor: newX, ver: newY };
                snake.position.push(newPath);
                
                showfirstSqr(newX,newY);//    показваме новата кутия
                 
                // махаме последна кутийка
                   let eraseLast=snake.position[0]
                   
                   clearLastSqr(eraseLast.hor , eraseLast.ver);
                   
                     snake.position.splice(0,1);
        }

        // console.log(i, j, a, b);
        if (catchApple(a, b, i, j)) {
            snake++;
            console.log("catched");
            createApple();

        }



    })
}

function createApple() {
    a = Math.floor(Math.random() * 300);
    b = Math.floor(Math.random() * 150);

    canvas.fillStyle = "#446599";
    var sqr = canvas.fillRect(a, b, 5, 5);
    return sqr;
}

//////////////////
//////////////

function catchApple(a, b, i, j) {
    // console.log(a, b, i, j)
    if ((a > i && a < i + 10) && (b > j && b < j + 10)) {
        console.log('catched');
        return true
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
