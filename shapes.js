// All the functions to draw the shapes.

//////////////////////////////////////////////////////////////

// draw polygon function
function drawP() {
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      context.beginPath();
      context.moveTo(pointArray[0].x, pointArray[0].y);

        for( item = 0 ; item < pointArray.length ; item++){
            context.lineTo(
            pointArray[item].x ,
            pointArray[item].y )
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
var shapeP;

function drawingPolygon() {

    if(pointArray.length <=3) {
        print('Choose minimum 4 points on the canvas and then press this button again to draw a polygon');
        print('You have: ' + pointArray.length + ' points.');
    } else {
        print('Pressing Draw Polygon button.');

        drawP();

        shapeP = new Polygon(pointArray);
        console.log(shapeP.points(pointArray));
        currentShape = shapeP.points(pointArray);
    }
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

     print('Drawing your rectangle.');
  }

//mouseclick draw rectangle 2nd function
function drawingRectangle() {

if(pointArray.length <2) {
        print('Choose minimum 2 points on the canvas and then press this button again to draw a rectangle');
        print('You have: ' + pointArray.length + ' points.');

} else {

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
if(pointArray.length <3) {
        print('Choose minimum 2 points on the canvas and then press this button again to draw a triangle');
        print('You have: ' + pointArray.length + ' points.');

} else {
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
}}

 //////////////////////////////////////////////////////////////

//draw circle function
function drawC(x,y,radius,lineColor) {
      this.x = x;
      this.y = y;
      this.lineColor = lineColor;

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

if(pointArray.length <2) {
        print('Choose minimum 2 points on the canvas and then press this button again to draw a circle');
        print('You have: ' + pointArray.length + ' points.');

} else {
    let x = pointArray[0].x;
    let y = pointArray[0].y;
    let x1 = pointArray[1].x;
    let y1 = pointArray[1].y;
    let  radius = Math.sqrt(
		((x -x1)*(x -x1)) +
		((y-y1)*(y-y1))
		);
    print('Pressing Draw Circle button.');


    drawC(x,y,radius,lineColor);

    lineColor = currentShape.lineColor;
    var shapeC = new Circle(x,y,radius,lineColor);
    console.log(shapeC);
    currentShape = shapeC;
    console.log(pointArray);
}}
