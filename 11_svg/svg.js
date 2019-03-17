// Thomas Lee
// SoftDev2 pd6
// K#11 -- Ask Circles [Change || Die] …While On The Go
// 2019-03-18

var pic = document.getElementById("vimage");

var clear = document.getElementById("clear");
var move = document.getElementById("move");
var surprise = document.getElementById("surprise");

var requestID;
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
	c.setAttribute("r", "15");
	c.setAttribute('xVel', 1);
	c.setAttribute('yVel', 1);
	pic.appendChild(c);
    }
};

var party = function(){
    function getRandomColor() {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
	    color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
    }
    pic.setAttribute("width", 700);
    pic.setAttribute("height", 700);
    pic.setAttribute("style", "border: 1px solid; background-color:" + getRandomColor());
    pic.childNodes.forEach(function(node){
	node.setAttribute("r", Math.floor(Math.random() * 91 + 10));
	node.setAttribute("fill", getRandomColor());
    });
};

var animate = function(){
    pic.childNodes.forEach(function(node){
	if (((node.cx.baseVal.value - 15) <= 0) || ((node.cx.baseVal.value + 15) >= 500)) {
      	    node.setAttribute('xVel', ((node.getAttribute('xVel'))*-1));
      	}
      	if (((node.cy.baseVal.value - 15) <= 0 )|| ((node.cy.baseVal.value + 15) >= 500)) {
            node.setAttribute('yVel', ((node.getAttribute('yVel'))*-1));
      	}

	//Dont know why these lines dont work
	//Teleports all points to origin and they vibrate in place
      	//node.setAttribute('cx', ((node.getAttribute("cx")) + (node.getAttribute("xVel"))));
      	//node.setAttribute('cy', ((node.getAttribute("cy")) + (node.getAttribute("yVel"))));
	
	if (node.getAttribute('xVel') == 1){
      	    if (node.getAttribute('yVel') == 1){
      		node.setAttribute('cx', (node.cx.baseVal.value + 1));
      		node.setAttribute('cy', (node.cy.baseVal.value + 1));
      	    }
      	    else {
      		node.setAttribute('cx', (node.cx.baseVal.value + 1));
      		node.setAttribute('cy', (node.cy.baseVal.value - 1));
      	    }
      	}
    	else {
    	    if (node.getAttribute('yVel') == 1){
    		node.setAttribute('cx', (node.cx.baseVal.value - 1));
    		node.setAttribute('cy', (node.cy.baseVal.value + 1));
    	    }
    	    else {
    		node.setAttribute('cx', (node.cx.baseVal.value - 1));
    		node.setAttribute('cy', (node.cy.baseVal.value - 1));
    	    }
    	}
    });
    window.cancelAnimationFrame(requestID);
    requestID = window.requestAnimationFrame(animate);
};



pic.addEventListener("click", draw);

move.addEventListener("click", animate);

surprise.addEventListener("click", party);

clear.addEventListener("click", function() {
	var dot = pic.firstChild;
	while(dot){
	    pic.removeChild(dot);
	    dot = pic.firstChild;
	}
    pic.setAttribute("width", 500);
    pic.setAttribute("height", 500);
    pic.setAttribute("style", "border: 1px solid; background-color:white");
    window.cancelAnimationFrame(requestID)
});
