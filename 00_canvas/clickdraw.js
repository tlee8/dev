var c = document.getElementById("slate");
var ctx = c.getContext("2d");
ctx.fillRect(50,50,100,200)

var clear = function() {
    ctx.clearRect(0,0,600,600);
}

var clearButt = getElementById("clear");

clearButt.addEventListener("click", clear);


