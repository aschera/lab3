var currentShape = {};

//Export to JSON
function exportShape(){
    var canvas = document.getElementById('myCanvas');
    JSON.stringify(currentShape);
    console.log(currentShape);
};


//////////////////////////////////////////////////////////////

//Toggle menu
function toggleMenu() {
  var menuBox = document.getElementById('nav-trigger');    
  if(menuBox.style.display === "block") { 
    // if is menuBox displayed, hide it
    menuBox.style.display = "none";
    print('menu is hidden!');
  }
  else { // if is menuBox hidden, display it
    menuBox.style.display = "block";
    print('menu is shown!');
  }
}

//////////////////////////////////////////////////////////////

// draw polygon function
function drawP(x,y,x1,y1) {

      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
     
context.moveTo(pointArray[0].x, pointArray[0].y);
for( item = 1 ; item < pointArray.length-1 ; item++){
    context.lineTo( pointArray[item].x , pointArray[item].y )
}
    
      context.closePath();
    
      context.fillStyle = chosenColor;
      context.fill();
      context.lineWidth = 5;
      context.strokeStyle = lineColor;
      context.stroke();  
  }

//mouseclick draw polygon 2nd function
function drawingPolygon() {

    print('Pressing Draw Polygon button.');
    print('Drawing your polygon.');
     
    drawP();
    
    var shapeP = new Polygon(pointArray);
    console.log(shapeP);
    currentShape = shapeP;
}

//////////////////////////////////////////////////////////////
// draw rectangle function
function drawR(x,y,x1,y1) {
    
        this.x = x; //A
        this.y = y;
    
        this.x1 = x1;  // C
        this.y1 = y1;
    
        x3 = x1; // B
	    y3 = y;
	
	    x4 = x; // D
	    y4 = y1;
    
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.moveTo(x, y); //A
      context.lineTo(x3, y3); //B
      context.lineTo(x1, y1); //C
      context.lineTo(x4, y4); //D
      context.closePath();
    
      context.fillStyle = chosenColor;
      context.fill();
      context.lineWidth = 5;
      context.strokeStyle = lineColor;
      context.stroke();  
  }

//mouseclick draw rectangle 2nd function
function drawingRectangle() {
    let x = pointArray[0].x;
    let y = pointArray[0].y;
    let x1 = pointArray[1].x;
    let y1 = pointArray[1].y;
    
    print('Pressing Draw Rectangle button.');
    print('Drawing your rectangle.');
 
    drawR(x,y,x1,y1); 
    
    var shapeR = new Rectangle(x,y,x1,y1);
    console.log(shapeR);
    currentShape = shapeR;
}


 //////////////////////////////////////////////////////////////
// draw triangle function
function drawT(x,y,x1,y1,x2,y2) {
    
        this.x = x;
        this.y = y;
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
    
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.moveTo(x, y);
      context.lineTo(x1, y1);
      context.lineTo(x2, y2);
      context.closePath();
    
      context.fillStyle = chosenColor;
      context.fill();
      context.lineWidth = 5;
      context.strokeStyle = lineColor;
      context.stroke();  
  }

//mouseclick draw triangle 2nd function
function drawingTriangle() {
    let x = pointArray[0].x;
    let y = pointArray[0].y;
    let x1 = pointArray[1].x;
    let y1 = pointArray[1].y;
    let x2 = pointArray[2].x;
    let y2 = pointArray[2].y;
    
    print('Pressing Draw Triangle button.');
    print('Drawing your triangle.');
 
    drawT(x,y,x1,y1,x2,y2);
    
    var shapeT = new Triangle(x,y,x1,y1,x2,y2);
    console.log(shapeT);
    currentShape = shapeT;
}
 //////////////////////////////////////////////////////////////

//draw circle function
function drawC(x,y,radius) {
    
        this.x = x;
        this.y = y;
    
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.arc(this.x, this.y, radius, 0,2 * Math.PI, false);
      context.fillStyle = chosenColor;
      context.fill();
      context.lineWidth = 5;
      context.strokeStyle = lineColor;
      context.stroke();  
  } 

//mouseclick draw circle 2nd function
function drawingCircle() {
    let x = pointArray[0].x;
    let y = pointArray[0].y;
    let x1 = pointArray[1].x;
    let y1 = pointArray[1].y;
    let  radius = Math.sqrt( 
		((x -x1)*(x -x1)) + 
		((y-y1)*(y-y1))
		);
    print('Pressing Draw Circle button.');
    print('Drawing your circle.');

    drawC(x,y,radius); 
    
    var shapeC = new Circle(x,y,radius);
    console.log(shapeC);
    currentShape = shapeC;
}
 //////////////////////////////////////////////////////////////
  


// Getting the correct mouse coordinates
var pointArray=[]; // to hold all the different points in order.

window.onload=function(){
let canvas = document.getElementById('myCanvas');
let info = document.getElementById('info');
canvas.addEventListener('click', function(event) {
  let coords = canvas.relMouseCoords(event);
  mouseX1 = coords.x;
  mouseY1 = coords.y;
  pointArray.push({x:mouseX1, y:mouseY1});
  print('your point is: ' + mouseX1 + ':x,' + mouseY1 + ':y.');
  let r = event.target.getBoundingClientRect();
})

// coordinates
function relMouseCoords(event){
    var totalOffsetX = 0;
    var totalOffsetY = 0;
    var canvasX = 0;
    var canvasY = 0;
    var currentElement = this;

    do{
        totalOffsetX += currentElement.offsetLeft - currentElement.scrollLeft;
        totalOffsetY += currentElement.offsetTop - currentElement.scrollTop;
    }
    while(currentElement = currentElement.offsetParent)

    canvasX = event.pageX - totalOffsetX;
    canvasY = event.pageY - totalOffsetY;

    return {x:canvasX, y:canvasY}
}
HTMLCanvasElement.prototype.relMouseCoords = relMouseCoords;
}

//////////////////////////////////////////////////////////////

// status bar text function
function print(text) {
  let con = document.getElementById('console');
  let lista = con.getElementsByTagName('pre');
  if( lista.length === 0 ) {  
    let e = document.createElement('pre');
    e.style.border = '1px solid #000000';
    e.style.color = 'black';
    e.innerText = text + '\n';
    con.appendChild(e);
  } else {
    let e = lista[0];
    e.innerText +=  text + '\n';
  }
}