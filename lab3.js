var currentShape = {};

//////////////////////////////////////////////////////////////

// Stop button

function stopbutton() {
    window.location.reload(false);
    currentShape = {};
    pointArray = [];
}

//////////////////////////////////////////////////////////////

//Export to JSON

function exportShape(){
    print('Pressed Exporting JSON button');
    var canvas = document.getElementById('myCanvas');
    var stringed = JSON.stringify(currentShape);
    
    console.log(currentShape instanceof Circle);
    print('Your JSON object has been exported! ' + stringed);
    insertData(stringed);
};

function insertData(data) {
document.getElementById ("JSONexport").value = data;
}

//////////////////////////////////////////////////////////////


// Import JSON 

function importJSON(){
    var imported = document.getElementById('import').value;
    var canvas = document.getElementById('myCanvas');
    currentShape = JSON.parse(imported);

    let x = currentShape.x;
    let y = currentShape.y;
    let radius =   currentShape.radius;
    print('Your JSON object has been imported! ' + imported);
   drawC(x,y,radius);

};

//////////////////////////////////////////////////////////////

// Import JSON Circle
function importShape(){
    var text = prompt('Insert JSON object string');
    var canvas = document.getElementById('myCanvas');
    currentShape = JSON.parse(text);

    let x = currentShape.x;
    let y = currentShape.y;
    let radius =   currentShape.radius;
    print('Your JSON object has been imported!' + currentShape);
   drawC(x,y,radius);

};

// Import JSON Triangle
function importShape1(){
    var text = prompt('Insert JSON object string');
    var canvas = document.getElementById('myCanvas');
    currentShape = JSON.parse(text);

    let x = currentShape.x1;
    let y = currentShape.y1;
    let x1 = currentShape.x2;
    let y1 = currentShape.y2;
    let x2 = currentShape.x3;
    let y2 = currentShape.y3;
    print('Your JSON object has been imported!');
   drawT(x,y,x1,y1,x2,y2);

};

// Import JSON Rectangle
function importShape2(){
    var text = prompt('Insert JSON object string');
    var canvas = document.getElementById('myCanvas');
    currentShape = JSON.parse(text);

    let x = currentShape.x1;
    let y = currentShape.y1;
    let x1 = currentShape.x2;
    let y1 = currentShape.y2;
print('Your JSON object has been imported!');
   drawR(x,y,x1,y1);

};
//////////////////////////////////////////////////////////////

//Toggle menu
function toggleMenu() {
    
  var menuBox = document.getElementById('nav-trigger');
  var welcomeBox = document.getElementById('welcome');
  var instructionBox = document.getElementById('instruction');
  var canvasBox = document.getElementById('canvas_box');
  var canvasHeader = document.getElementById('canvasheader');
  var statusBar = document.getElementById('console');
    
  if(menuBox.style.display === "block") { 
    // if is menuBox displayed, hide it
    menuBox.style.display = "none";
    welcomeBox.style.display = "block";
    instructionBox.style.display = "none";
    canvasBox.style.display = "none";
    canvasHeader.style.display = "none";
    statusBar.style.display = "none";
    print('menu is hidden!');
  }
  else { // if is menuBox hidden, display it
    menuBox.style.display = "block";
    welcomeBox.style.display = "none";
    instructionBox.style.display = "block";
    canvasBox.style.display = "block";
    canvasHeader.style.display = "block";
    statusBar.style.display = "block";
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
    print('Drawing your polygon.');
  }

//mouseclick draw polygon 2nd function
function drawingPolygon() {
    
print('Choose minimum 4 points on the canvas and then press this button again to draw a polygon');
print('You have: ' + pointArray.length + ' points.');
    
    print('Pressing Draw Polygon button.');

    drawP();
    
    var shapeP = new Polygon(pointArray);
    console.log(shapeP);
    currentShape = shapeP;
}

//////////////////////////////////////////////////////////////
// draw rectangle function
function drawR(x,y,x1,y1) {
print('Choose two points on the canvas and then press this button again to draw a rectangle');  
print('You have: ' + pointArray.length + ' points.');
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
    
     print('Drawing your rectangle.');
  }

//mouseclick draw rectangle 2nd function
function drawingRectangle() {
    
print('Choose two points on the canvas and then press this button again to draw a rectangle');
print('You have: ' + pointArray.length + ' points.');
    let x = pointArray[0].x;
    let y = pointArray[0].y;
    let x1 = pointArray[1].x;
    let y1 = pointArray[1].y;
    
    print('Pressing Draw Rectangle button.');
    
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
    print('Drawing your triangle.');
  }

//mouseclick draw triangle 2nd function
function drawingTriangle() {
print('Choose three points on the canvas and then press this button again to draw a triangle');
print('You have: ' + pointArray.length + ' points.');
    let x = pointArray[0].x;
    let y = pointArray[0].y;
    let x1 = pointArray[1].x;
    let y1 = pointArray[1].y;
    let x2 = pointArray[2].x;
    let y2 = pointArray[2].y;
    
    print('Pressing Draw Triangle button.');
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
      print('Drawing your circle.');
  } 

//mouseclick draw circle 2nd function
function drawingCircle() {
print('Choose two points on the canvas and then press this button again to draw a circle');
print('You have: ' + pointArray.length + ' points.');
    let x = pointArray[0].x;
    let y = pointArray[0].y;
    let x1 = pointArray[1].x;
    let y1 = pointArray[1].y;
    let  radius = Math.sqrt( 
		((x -x1)*(x -x1)) + 
		((y-y1)*(y-y1))
		);
    print('Pressing Draw Circle button.');
    

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
    e.style.border = '5px solid lightblue;';
    e.style.color = 'black';
      e.style.width= '90%';
    e.style.fontFamily = 'Open Sans", sans-serif';
    e.innerText = text + '\n';
    con.appendChild(e);
  } else {
    let e = lista[0];
    e.innerText +=  text + '\n';
  }
}

//////////////////////////////////////////////////////////////

// Clear canvas

function clearCanvas() {
let canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
ctx.clearRect(0, 0, canvas.width, canvas.height);
    print('Clearing the canvas.');
}

//////////////////////////////////////////////////////////////

// on mouse over functions

//Circle button
function mouseOverCircle() {
    document.getElementById("circle_button");
    print('Starts drawing a circle');
}

//Triangle button
function mouseOverTriangle() {
    document.getElementById("triangle_button");
    print('Starts drawing a triangle');
}

//Rectangle button
function mouseOverRectangle() {
    document.getElementById("rectangle_button");
    print('Starts drawing a rectangle');
}

//Polygon button
function mouseOverPolygon() {
    document.getElementById("polygon_button");
    print('Starts drawing a polygon');
}

//Clear button
function mouseOverClear() {
    document.getElementById("clear_button");
    print('Press to clear the canvas');
}

//Stop button
function mouseOverStop() {
    document.getElementById("stop_button");
    print('Press to stop drawing and clear all current settings.');
}

//Export button
function mouseOverExport() {
    document.getElementById("export_button");
    print('Press to export your shape to a JSON string');
}

//Import button
function mouseOverImport() {
    document.getElementById("import_button");
    print('Press to import your JSON string and paint it on the canvas');
}

//ADD button
function mouseOverAddColor() {
    document.getElementById("add");
    print('Press to add this color to the select list for the line color');
}
//////////////////////////////////////////////////////////////