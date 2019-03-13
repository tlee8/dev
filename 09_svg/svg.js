// Thomas Lee
// SoftDev2 pd6
// K#09 -- Connect the Dots
// 2019-03-13

var pic = document.getElementById("vimage");

var clear = document.getElementById("clear");

var lastX = 0;
var lastY = 0;

//var clearer = function(e){
//    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
//    c.setAttribute("fill", "white");
//    c.setAttribute("cx", "250");
//    c.setAttribute("cy", "250");
//    c.setAttribute("r", "354")
//    pic.appendChild(c);
//}

var draw = function(e){
    if (lastX){
      var l = document.createElementNS("http://www.w3.org/2000/svg", "line");
      l.setAttribute("x1", lastX);
      l.setAttribute("y1", lastY);
      l.setAttribute("x2", e.offsetX);
      l.setAttribute("y2", e.offsetY);
      l.setAttribute("stroke", "black")
      pic.appendChild(l);
    }

    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c.setAttribute("fill", "red");
    c.setAttribute("cx", e.offsetX);
    c.setAttribute("cy", e.offsetY);
    c.setAttribute("r", "10")
    pic.appendChild(c);

    lastX = e.offsetX;
    lastY = e.offsetY;
}



pic.addEventListener("click", draw);

clear.addEventListener("click", function() {
	var dot = pic.firstChild;
	while(dot){
	    pic.removeChild(dot);
	    dot = pic.firstChild;
	}
	lastX = 0;
	lastY = 0;
});
