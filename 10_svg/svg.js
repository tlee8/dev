// Thomas Lee
// SoftDev2 pd6
// K#10 -- Ask Circles [Change || Die]
// 2019-03-14

var pic = document.getElementById("vimage");

var clear = document.getElementById("clear");

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
    

pic.addEventListener("click", draw);

clear.addEventListener("click", function() {
	var dot = pic.firstChild;
	while(dot){
	    pic.removeChild(dot);
	    dot = pic.firstChild;
	}
});
