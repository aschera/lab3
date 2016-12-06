
var currentShape = {};  // holds the current shape Object data

var pointArray = []; // to hold all the different points in order.

//////////////////////////////////////////////////////////////

// point list

function insertPoints() {
    let result = ' ';

    for (let i = 0; i < pointArray.length; i++) {
        let x = pointArray[i].x;
        let y = pointArray[i].y;

        result += '// Point ' + [i+1] + ': ' + [(x),(y)] + ' ';
        document.getElementById ("points").value = result;
      }
}

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
    if(stringed === '{}') {
      print('You do not have any shape to export yet! Draw something first.');
    } else {
      print('Your JSON object has been exported! ' + stringed);
      insertData(stringed);
    }
}
function insertData(data) {
document.getElementById ("JSONexport").value = data;
}

//////////////////////////////////////////////////////////////


// Import JSON

function importJSON(){
let importedObject = document.getElementById ("import").value;
let substringC = "radius";
let substringT = "y1";
let substringR = "distanceA";
let substringP = '[{"x":';

    if(importedObject === '') {
      print('You have to enter a JSON string into the textfield below first.');
    }
    if (importedObject.indexOf(substringC) !== -1) {
        console.log('circle');
        console.log(currentShape.lineColor);
        importShape();
    } else if (importedObject.indexOf(substringR) !== -1){
        console.log('rectangle');
        importShape2();
    }else if (importedObject.indexOf(substringP) !== -1){
        console.log('polygon');
        importShape3();
    } else if (importedObject.indexOf(substringT) !== -1){
        console.log('triangle');
        importShape1();
    }
}



//////////////////////////////////////////////////////////////

// Import JSON Circle
function importShape(){
    var text = document.getElementById ("import").value;
    var canvas = document.getElementById('myCanvas');
    currentShape = JSON.parse(text);

    lineColor = currentShape.lineColor;

    let x = currentShape.x;
    let y = currentShape.y;
    let radius =   currentShape.radius;
    print('Your JSON object has been imported!' + text);
    drawC(x,y,radius,lineColor);

};

// Import JSON Triangle
function importShape1(){
    var text = document.getElementById ("import").value;
    var canvas = document.getElementById('myCanvas');
    currentShape = JSON.parse(text);

    let x = currentShape.x1;
    let y = currentShape.y1;
    let x1 = currentShape.x2;
    let y1 = currentShape.y2;
    let x2 = currentShape.x3;
    let y2 = currentShape.y3;
    print('Your JSON object has been imported!'  + text);
   drawT(x,y,x1,y1,x2,y2);

};

// Import JSON Rectangle
function importShape2(){
    var text = document.getElementById ("import").value;
    var canvas = document.getElementById('myCanvas');
    currentShape = JSON.parse(text);

    let x = currentShape.x1;
    let y = currentShape.y1;
    let x1 = currentShape.x2;
    let y1 = currentShape.y2;
print('Your JSON object has been imported!'  + text);
   drawR(x,y,x1,y1);
};

// Import JSON Polygon

function importShape3(){
    var text = document.getElementById ("import").value;
    var canvas = document.getElementById('myCanvas');

    currentShape = JSON.parse(text);


    for( i = 0 ; i < currentShape.length ; i++){

        let x = currentShape[i].x;
        let y = currentShape[i].y;
        pointArray.push({x,y});
    }

       print('Your JSON object has been imported!'  + text);
       drawP();
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

// Getting the correct mouse coordinates


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

  insertPoints();
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
currentShape = {};
pointArray = [];
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
