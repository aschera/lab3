/* 1111111111111111111111111111111111111111111111111111111111111 */
//Protoype Cicle!!!
function Circle(x, y, radius,lineColor){

	// variables.
	this.x = x;
	this.y = y;
    this.radius = radius;
    this.lineColor = lineColor;


  	// area method.
    this.area = function() {return Math.PI * this.radius * this.radius;};

	// points method.
	this.points = function() {
		let list = [
			{x : this.x,
			 y : this.y
			}
		];
		return list;
	}

	// move method.
	this.move = function(dx, dy) {
		this.x = dx + this.x;
		this.y = dy + this.y;
		return ('The new x is: ' + x + ' & The new y is: ' + y);
	};

	// distanceTo method.
	this.distanceTo = function(b) {

		let result = Math.sqrt(
			((b.x -this.x)*(b.x -this.x)) +
			((b.y-this.y)*(b.y-this.y))
			);

		let diameters = b.radius + this.radius;

		if(diameters > result) { return 0;}
		else { return result - diameters; }

	}

	//boundingBox() method.
	this.boundingBox = function() {

		x1 = this.x + this.radius,
		y1 = this.y - this.radius,
		x2 = this.x - this.radius,
		y2 = this.y + this.radius,

		s = new Rectangle(x1,y1,x2,y2); return s;
	}
}

/* 222222222222222222222222222222222222222222222222222222222222222222222222222 */
//Protoype Rectanglee!!!
function Rectangle(x1, y1, x2, y2){

	// variables.
	this.x1 = x1; // A
	this.y1 = y1;

    this.x2 = x2; // C
	this.y2 = y2;

	x3 = x2; // B
	y3 = y1;

	x4 = x1; // D
	y4 = y2;

	this.distanceA = Math.sqrt( (x2-x3)*(x2-x3) + (y2-y3)*(y2-y3) ); // distance AC and BD

	this.distanceB = Math.sqrt( (x2-x4)*(x2-x4) + (y2-y4)*(y2-y4) ); // distance AB and CD

	// area method.
    this.area = function() {return this.distanceA * this.distanceB;}

    // points method.
	this.points = function() {
		let listR = [
			{x : this.x1,
			 y : this.y1
			},
			{x : this.x2,
			 y : this.y2
			},
			{x : this.x2,
			 y : this.y1
			},
			{
			 x : this.x1,
			 y : this.y2
			}
		];
		return listR;
	}

	// move method.
	this.move = function(dx, dy) {

		this.x1 += dx;
		this.y1 += dy;
		this.x2 += dx;
		this.y2 += dy;
		this.x3 += dx;
		this.y3 += dy;
		this.x4 += dx;
		this.y4 += dy;

		return [
		{x: this.x1, y: this.y1},
		{x: this.x2, y: this.y2},
		{x: x3, y: y3},
		{x: x4, y: y4}
		];
	};

		// distanceTo method.
	this.distanceTo = function(b) {

		//Rectangle 2
		centerx2 = (b.y2+b.y1)/2;
		centery2 = (b.x2+b.x1)/2;

		//Rectangle 1
		this.centerx = (this.y2 + this.y1)/2;
		this.centery = (this.x2 + this.x1)/2;

		let result = Math.sqrt(
			((centerx2 -this.centerx)*(centerx2 -this.centerx)) +
			((centery2-this.centery)*(centery2-this.centery))
			);

		return result;
	}
}


/* 33333333333333333333333333333333333333333333333333333333333333333333 */
//Protoype Triangle!!!
function Triangle(x1, y1, x2, y2, x3, y3){

	// variables.
	this.x1 = x1;
	this.y1 = y1;
    this.x2 = x2;
	this.y2 = y2;
	this.x3 = x3;
	this.y3 = y3;

	// area method.
    this.area = function() {return (1/2)*(x1*y2+x2*y3+x3*y1-x1*y3-x2*y1-x3*y2);};

    // points method.
	this.points = function() {
		let listT = [
			{x : this.x1,
			 y : this.y1
			},
			{x : this.x2,
			 y : this.y2
			},
			{x : this.x3,
			 y : this.y3
			}
		];
		return listT;
	}

	// move method.
	this.move = function(dx, dy) {

		this.x1 = (dx + this.x1);
		this.y1 = (dy + this.y1);
		this.x2 = (dx + this.x2);
		this.y2 = (dy + this.y2);
		this.x3 = (dx + this.x3);
		this.y3 = (dy + this.y3);

	};

		// distanceTo method. (extra)
	this.distanceTo = function(b) {

		//triangle 2
		centerx2 = ((b.x1+b.x2+b.x3) / 3 );
		centery2 = ((b.y1+b.y2+b.y3) / 3);

		//triangle 1
		this.centerx = ((this.x1+this.x2+this.x3) / 3 );
		this.centery = ((this.y1+this.y2+this.y3) / 3);

		let result = Math.sqrt(

			((centerx2 -this.centerx)*(centerx2 -this.centerx)) +
			((centery2-this.centery)*(centery2-this.centery))
			);

		return result;
	}

	//boundingBox() method.
	this.boundingBox = function() {

		x1 = this.x1, //A
		y1 = this.y1,
		x2 = this.x2, //C
		y2 = this.y3,

		e = new Rectangle(x1,y1,x2,y2);

		return e;
	}
}

/* 444444444444444444444444444444444444444444444444444444444444444444444444444 */
//Protoype Polygon!!!
function Polygon(points){

	// area method.
    this.area = function() {

 	total = 0;

    for (var i = 0, l = points.length; i < l; i++) {
      var addX = points[i].x;
      var addY = points[i == points.length - 1 ? 0 : i + 1].y;
      var subX = points[i == points.length - 1 ? 0 : i + 1].x;
      var subY = points[i].y;

      total += (addX * addY * 0.5);
      total -= (subX * subY * 0.5);
    }

    return Math.abs(total);
	}

	// points method.
    this.points = function() {

      let list = points;
      let list2 = [];

      for (i = 1; i < points.length; i++) {

        let x= list[i].x;
        let y= list[i].y;

        list2 += {x,y};
      }
		return list;
    }

    // move method.
	this.move = function(dx, dy) {

		let stuff = this.points();

		stuff.forEach(function(item, index) {
  			stuff[index] = {x: (stuff[index].x) + dx, y : (stuff[index].y) + dy};
		});
		console.log(stuff);

	};

    	//boundingBox() method.
	this.boundingBox = function() {

		let stuff = this.points();

	var start = {x: 100, y:100 };
  	var end = {x: 0, y: 0};

  		for(var i = 0; i < stuff.length; i++) {
    		var p = stuff[i];
    		start.x = start.x > p.x   ? p.x : start.x;
    		console.log(start.x);
    		start.y = p.y < start.y ? p.y : start.y;

    		end.x = p.x > end.x ? p.x : end.x;
    		console.log(end.x);
    		end.y = p.y > end.y ? p.y : end.y;
  		}
	console.log(stuff);
	e = new Rectangle(start.x, start.y,end.x ,end.y );
  	return e;

};
}


/* ///////////////////////////////////////////////////////////////////////////// */
/* Create the objects and call the methods below:*/
