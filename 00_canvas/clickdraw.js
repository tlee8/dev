//Thomas Lee
//SoftDev2 pd6
//K00 -- I See A Red Door
//2019-01-31

var c = document.getElementById("slate");
var ctx = c.getContext("2d");
var state = "box";

var clearCanvas = function() {
    ctx.clearRect(0, 0, c.width, c.height);
};

var draw = function(event) {
    var border = c.getBoundingClientRect();
    var x = event.clientX - border.left;
    var y = event.clientY - border.top;
    if (state == "box"){
	ctx.fillStyle = "#ff0000"
	ctx.fillRect(x, y, 50, 100);
    }
    else{
	ctx.fillStyle = "#ffff00"
	ctx.beginPath();
	ctx.ellipse(x, y, 5, 5, 0, 0, 2 * Math.PI);
	ctx.fill();
    }
}

var changeState = function() {
    if (state == "box"){
	state = "dot";
    }
    else{
	state = "box"
    }
    console.log(state)
}

var clear = document.getElementById("clear");
var change = document.getElementById("change");

clear.addEventListener("click", clearCanvas)
change.addEventListener("click", changeState)
