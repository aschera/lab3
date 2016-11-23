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


// ///////////////////////////////////////////////////////////////////////////////////////////////////
//Circle menu and options.
function showOne() {
    var e = document.getElementById('whatwedo1');
    e.style.display = 'none';
    
    var element = document.getElementById('whatwedo');
    element.style.display = 'block';
    print('Showing Circle options');
    
    
    var c = document.getElementById("myCanvas");  
        var mouseX1;
        var mouseY1;
        var mouseX2;
        var mouseY2;
        var radius = 0; 
        var j = 0;
            c.addEventListener("click", function(){
                if(j<1){
                    coords = c.relMouseCoords(event);
                        mouseX1 = coords.x;
                        mouseY1 = coords.y;
                    j++;
                    print('your centerpoint is: ' + mouseX1 + ':x,' + mouseY1 + ':y.');
                }
                else if((j<2) && (j=1)){
                    coords = c.relMouseCoords(event);
                        mouseX2 = coords.x;
                        mouseY2 = coords.y;
                    j++;
                    radius = Math.sqrt( 
			                 ((mouseX1 -mouseX2)*(mouseX1 -mouseX2)) + 
			                 ((mouseY1-mouseY2)*(mouseY1-mouseY2))
			                 );
                    print('your radius is: ' + radius);
                    
                    var drawIt = document.getElementById('draw');
                    function drawing() { print('Pressing Draw button.');print('Drawing your circle.');
                        draw(mouseX1,mouseY1,radius);
                    }
                    drawIt.onclick = drawing;
                } 
//draw circle
function draw(x,y,radius) {
    
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
      
  }}) 
}
// ///////////////////////////////////////////////////////////////////////////////////////////////////

// ///////////////////////////////////////////////////////////////////////////////////////////////////
//Triangle menu and options.
function showTwo() {
    var e = document.getElementById('whatwedo');
    e.style.display = 'none';
    
    var element = document.getElementById('whatwedo1');
    element.style.display = 'block';
    print('Showing Triangle options');
    
    
    var c = document.getElementById("myCanvas");  
        var mouseX1;
        var mouseY1;
        var mouseX2;
        var mouseY2;
        var radius = 0; 
        var j = 0;
            c.addEventListener("click", function(){
                if(j<1){
                    coords = c.relMouseCoords(event);
                        mouseX1 = coords.x;
                        mouseY1 = coords.y;
                    j++;
                    print('your centerpoint is: ' + mouseX1 + ':x,' + mouseY1 + ':y.');
                }
                else if((j<2) && (j=1)){
                    coords = c.relMouseCoords(event);
                        mouseX2 = coords.x;
                        mouseY2 = coords.y;
                    j++;
                    radius = Math.sqrt( 
			                 ((mouseX1 -mouseX2)*(mouseX1 -mouseX2)) + 
			                 ((mouseY1-mouseY2)*(mouseY1-mouseY2))
			                 );
                    print('your radius is: ' + radius);
                    
                    var drawIt = document.getElementById('draw');
                    function drawing() { print('Pressing Draw button.');print('Drawing your circle.');
                        draw(mouseX1,mouseY1,radius);
                    }
                    drawIt.onclick = drawing;
                } 
//draw circle
function draw(x,y,radius) {
    
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
      
  }}) 
}
// ///////////////////////////////////////////////////////////////////////////////////////////////////

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



// status bar text function
function print(text) {
  let con = document.getElementById('console');
  let lista = con.getElementsByTagName('pre');
  if( lista.length === 0 ) {  
    let e = document.createElement('pre');
    e.style.backgroundColor = 'lightblue';
    e.style.color = 'black';
    e.innerText = text + '\n';
    con.appendChild(e);
  } else {
    let e = lista[0];
    e.innerText +=  text + '\n';
  }
}

















