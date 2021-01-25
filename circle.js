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
/////////////////////////////////
///////////////////////
function moveSqr() {

    createApple();
    let sizeX=10;
    window.addEventListener('keydown', (aa) => {
        canvas.fillStyle = "#45";
        
        let iHlp = i;
        let jHlp = j;
        if (aa.key == "ArrowLeft") {

            if (i == 0) { i = 300 }
            i -= 2;
        } else if (aa.key == "ArrowRight") {
            i += 2;
            if (i == 300) { i = 0 }


        } else if (aa.key == "ArrowUp") {
            j -= 2;
        } else if (aa.key == "ArrowDown") {
            j += 2;
        }

        console.log(i, j, a, b);
        if(catchApple(a,b,i,j)){
            console.log("catched");
            createApple();
            sizeX+=10;
        }
        canvas.clearRect(iHlp, jHlp, sizeX, 10);
        canvas.fillRect(i, j, sizeX, 10);
        
    })
}
var snake = [];

function createApple() {
    a = Math.floor(Math.random() * 300);
    b = Math.floor(Math.random() * 150);

    canvas.fillStyle = "#446599";
    var sqr = canvas.fillRect(a, b, 10, 10);
    return sqr;
}

//////////////////
//////////////

function catchApple(a, b, i, j) {
    console.log(a, b, i, j)
    if ((a > i && a < i + 10) && (b > j && b < j + 10)) {
        console.log('catched');
        return true
    }
    return false;
}

