// Thomas Lee
// SoftDev2 pd6
// K#11 -- Ask Circles [Change || Die] …While On The Go
// 2019-03-15

var pic = document.getElementById("vimage");

var clear = document.getElementById("clear");
var move = document.getElementById("move");
var surprise = document.getElementById("surprise");

//var clearer = function(e){
//    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
//    c.setAttribute("fill", "white");
//    c.setAttribute("cx", "250");
//    c.setAttribute("cy", "250");
//    c.setAttribute("r", "354")
//    pic.appendChild(c);
//}

var draw = function(e){

    var circ = false;
    var circNode = null;

    pic.childNodes.forEach(function(node){
	if ((Math.sqrt(Math.pow((node.cx.baseVal.value - e.offsetX),2) + Math.pow((node.cy.baseVal.value - e.offsetY),2))) <= 15){
        circ = true;
        circNode = node;
	}
    });
    
    if (circ) {
	if (circNode.getAttribute("fill") == "blue"){
	    circNode.setAttribute ("fill", "green");
	}
	else{
	    var randX = Math.floor(Math.random() * 501);
            var randY = Math.floor(Math.random() * 501);
            circNode.setAttribute("cx", randX);
            circNode.setAttribute("cy", randY);
            circNode.setAttribute("fill", "blue");
	};
    }
    else {
	var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	c.setAttribute("fill", "blue");
	c.setAttribute("cx", e.offsetX);
	c.setAttribute("cy", e.offsetY);
	c.setAttribute("r", "15")
	pic.appendChild(c);
    }
};
    

var animate = function(e){
    var xVel = 1;
    var yVel = 1;

pic.addEventListener("click", draw);

move.addEventListener("click", animate)

clear.addEventListener("click", function() {
	var dot = pic.firstChild;
	while(dot){
	    pic.removeChild(dot);
	    dot = pic.firstChild;
	}
});
