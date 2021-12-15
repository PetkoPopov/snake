
window.addEventListener('keyup', (k) => {
    console.log(k.key);
})

var c = document.getElementById("myCanvas").getContext("2d");
var x = 160;
var y = 70;
var stop = document.getElementById('Stop');
stop.addEventListener('click', function () {
    if (stop.textContent == "STOP") {

        var stepX = 2;
        var stepY = 2;
        click(stepX, stepY)
                stop.textContent = "START"
    } else {
        click()
        stop.textContent = "STOP";


    }

})
//////////////////////////////////////
//////////////////////////////////////


function click() {

    // c.ellipse(50,50,40,40,90,10,180);
    
    c.triangle(1,1,34,34,5,6)

    c.stroke();

    return true;
}
////////////////
var count = 0;
function one(count) {
    ////////// one is caller

    click();
    setTimeout(function () {
        count++;
        two(count)
        console.log(count);
    }, 300);

}

function two(count) {
    ////stoper
    if (count > 10234) {
        return 1;
    }

    one(count)

}




