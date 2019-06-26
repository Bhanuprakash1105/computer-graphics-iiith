var canvas = document.getElementById('frameCanvas');

var c = canvas.getContext('2d');
/* Variable c helps in drawing the lines on canvas */

var number = canvas.getContext("2d");
/* Variable number helps in adding the numbers around frame */
number.font = "12px Arial";

var flag = 0;
var memoryHeight = 0;
var memoryWidth = 0;

if ( !c ) {
	alert("Your Browser doesn't support canvas");
	/* Alert message if the canvas is not supported in browser */
} else {
	var horizontalBoxes = 15;
	var verticalBoxes = 15;
	var division = 15;
	var sx = 0;
	var sy = 0;

	drawDefaultFrame();
	/* Initially a default frame is made on canvas screen */

	function drawDefaultFrame() {
		horizontalBoxes = 15;
		verticalBoxes = 15;
		division = 15;
		
		/* In the default frame the framewidth and frameheight are taken as 15 and 15 respectively */

		c.clearRect(0, 0, 575, 575);
		console.log(canvas);
		number.fillStyle = "white";

		sx = 0;
		sy = 0;
		for (var i = 0; i <= horizontalBoxes; i++) {
			if (i > 0) {
				number.fillText(i - 1, sx, 15);
				number.fillText(i - 1, sx, 40 + sy)
			}
			c.beginPath();
			sy = 0;
			c.moveTo(sx + 25, sy + 25);
			sy = verticalBoxes*(500 / division);
			c.lineTo(sx + 25, sy + 25);
			c.strokeStyle = "white";
			c.stroke();
			sx = sx + 500 / division;
		}
		
		sx = 0;
		sy = 0;
		sx = horizontalBoxes*(500 / division);
		for (var i = verticalBoxes; i >= 0; i--) {
			if (i > 0) {
				number.fillText(i - 1, 32 + sx, sy + 40);
				number.fillText(i - 1, 5, sy + 40);
			}
			c.beginPath();
			sx = 0;
			c.moveTo(sx + 25, sy + 25);
			sx = horizontalBoxes*(500 / division);
			c.lineTo(sx + 25, sy + 25);
			c.strokeStyle = "white";
			c.stroke();
			sy = sy + 500 / division;
		}
	}

	function drawFrame() {
		c.clearRect(0, 0, 575, 575);
		console.log(canvas);

		horizontalBoxes = Number(document.getElementById('frameWidth').value);
		verticalBoxes = Number(document.getElementById('frameHeight').value);
		memoryWidth = horizontalBoxes;
		memoryHeight = verticalBoxes;

		if ( horizontalBoxes >= verticalBoxes ) {
			division = horizontalBoxes;
		} else if ( verticalBoxes > horizontalBoxes ) {
			division = verticalBoxes;
		}

		if (verticalBoxes > 25 || horizontalBoxes > 25) {
			alert("Max width = 25 and max height = 25");
			
			drawDefaultFrame();
			document.getElementById('frameWidth').value = 15;
			document.getElementById('frameHeight').value = 15;
		} else if (horizontalBoxes <= 0 || verticalBoxes <= 0) {
			alert("Frame width and height cannot be negative or zero");
			
			drawDefaultFrame();
			document.getElementById('frameWidth').value = 15;
			document.getElementById('frameHeight').value = 15;
		} else if ( Number.isInteger(horizontalBoxes) == false || Number.isInteger(verticalBoxes) == false) {
			alert("Enter the frame width and height as positive integer");
			
			drawDefaultFrame();
			document.getElementById('frameWidth').value = 15;
			document.getElementById('frameHeight').value = 15;
		} else {
			/* If the inputs of user is correct and is satisfied then this else part will be executed */  
			c.clearRect(0, 0, 575, 575);
			console.log(canvas);
			number.fillStyle = "white";

			var sx = 0;
			var sy = 0;
			for (var i = 0; i <= horizontalBoxes; i++) {
				if (i > 0) {
					number.fillText(i - 1, sx, 15);
					number.fillText(i - 1, sx, 40 + sy)
				}
				c.beginPath();
				sy = 0;
				c.moveTo(sx + 25, sy + 25);
				sy = verticalBoxes*(500 / division);
				c.lineTo(sx + 25, sy + 25);
				c.strokeStyle = "white";
				c.stroke();
				sx = sx + 500 / division;
			}
			
			var sx = 0;
			var sy = 0;
			sx = horizontalBoxes*(500 / division);
			for (var i = verticalBoxes; i >= 0; i--) {
				if (i > 0) {
					number.fillText(i - 1, 32 + sx, sy + 40);
					number.fillText(i - 1, 5, sy + 40);
				}
				c.beginPath();
				sx = 0;
				c.moveTo(sx + 25, sy + 25);
				sx = horizontalBoxes*(500 / division);
				c.lineTo(sx + 25, sy + 25);
				c.strokeStyle = "white";
				c.stroke();
				sy = sy + 500 / division;
			}
			flag = 100;
		}
		
		if ( flag == 100 ) {
			show_hide_content();
			/*	If the flag == 100 then it will indicate that the user has entered a correct input
				When the input is correct then the show_hind_content function will be called */
		}

		function show_hide_content() {
			/*	If firstInputs are shown previously then firstInputs block will be hidden 
				and secondInputs block will displayed and vis versa */  
			var content1 = document.getElementById('forFirstInputs');
			var content2 = document.getElementById('forSecondInputs')
  			if (content1.style.display === "none") {
    			content1.style.display = "block";
    			content2.style.display = "none";
  			} else {
    			content2.style.display = "block";
    			content1.style.display = "none";
  			}
		}
		console.log(canvas);	
	}

	function change_content() {
		var content1 = document.getElementById('forFirstInputs');
		var content2 = document.getElementById('forSecondInputs');
		var content3 = document.getElementById('forThirdInputs');
		if (content2.style.display === "none") {
    		c.clearRect(0, 0, 575, 575);
    		document.getElementById('frameWidth').value = memoryWidth;
    		document.getElementById('frameHeight').value = memoryHeight;
    		drawFrame();

    		content2.style.display = "block";
    		content3.style.display = "none";
    		content1.style.display = "none";
  		} else {
  			content1.style.display = "none";
    		content2.style.display = "none";
    		content3.style.display = "block";
  		}	
	}
	
	function coordinatesEntered() {
		var startX = Number(document.getElementById('startX').value);
		var startY = Number(document.getElementById('startY').value);

		var endX = Number(document.getElementById('endX').value);
		var endY = Number(document.getElementById('endY').value);

		if ( startX > endX ) {
			/* For swaping x coordinates of starting and ending points */
			var temp = startX;
			startX = endX;
			endX = temp;
			/* For swaping y coordinates of starting and ending points */
			temp = startY;
			startY = endY;
			endY = temp;
		}

		if ( (Number.isInteger(startX) == false || Number.isInteger(startY) == false) || (Number.isInteger(endX) == false || Number.isInteger(endY) == false) ) {
			alert("The coordinates of starting and ending points must be integer values according to the experiment");
		} else if ( startX < 0 || startY < 0 || endX < 0 || endY < 0 ) {
			alert("The coordinates of starting and ending points must be positive value according to the experiment");
		} else if ( (startX >= horizontalBoxes || endX >= horizontalBoxes) || (startY >= verticalBoxes || endY >= verticalBoxes) ) {
			alert("The coordinates of starting and ending points must be less than the frame-height and frame-width according to the experiment");
		} else {
			change_content();	

			/* Saving the entered coordinates into another variable for filling the box with color */
			var xbox = startX;
			var ybox = startY;
			var x2box = endX;
			var y2box = endY;

			/* The starting and ending coordinates are copied into (x1, y1) and (x2, y2) respectively */
			var x1 = xbox;
			var y1 = ybox;
			var x2 = x2box;
			var y2 = y2box;

			startX = ( startX*( 500 / division ) ) + (250 / division);
			startY = ( startY*( 500 / division ) ) + (250 / division);
		
			endX = ( endX*( 500 / division ) ) + (250 / division);
			endY = ( endY*( 500 / division ) ) + (250 / division);

			startY = (verticalBoxes*(500 / division)) - startY;
			endY = (verticalBoxes*(500 / division)) - endY;

			var box = canvas.getContext('2d');
			/* For filling the box ( pixel ) with color */
			box.beginPath();
			box.fillStyle = "yellow";
			box.fillRect( (xbox*(500/division)) + 25, ((verticalBoxes - 1)*(500/division)) - (ybox*(500/division)) + 25, 500 / division, 500 / division );

			var dot = canvas.getContext('2d');
			/* For adding a blue dot at the starting point of the Rasterization line */
			dot.beginPath();
			dot.arc(startX + 25, startY + 25, 2.5, 0, Math.PI * 2, false);
			dot.fillStyle = "blue";
			dot.fill();
			/* For adding a white dot at the starting point of the Rasterization line */
			dot.beginPath();
			dot.arc(endX + 25, endY + 25, 2.5, 0, Math.PI * 2, false);
			dot.fillStyle = "white";
			dot.fill();

			/* The slope of the line is calculated and stored in the vairable m */
			var m = ( y2 - y1 ) / ( x2 - x1 ); 
			/* Bresenham's Line Rasterization Algorithm */
			if ( m <= 1 && m >= 0 ) {
				/* If slope of the line belongs to [0, 1] */
				var deltaX = x2 - x1;
				var deltaY = y2 - y1;
				var p = 2*deltaY - deltaX;
				
				while( x1 <= x2 ) {
					box.beginPath();
					box.fillStyle = "red";
					var temp = y1;
					box.fillRect( (x1*(500/division)) + 25, ((verticalBoxes - 1)*(500/division)) - (y1*(500/division)) + 25, 500 / division, 500 / division );
					x1 += 1;
					if ( p < 0 ) {
						p = p + 2*deltaY;
					} else {
						p = p + (2*deltaY) - (2*deltaX);
						y1 += 1;
					}
				}
			} else if ( m > 1 ) {
				/* If slope of the line belongs to (1, infinite) */
				var deltaX = x2 - x1;
				var deltaY = y2 - y1;
				var p = 2*deltaX - deltaY;
				
				while( y1 <= y2 ) {
					box.beginPath();
					box.fillStyle = "red";
					box.fillRect( (x1*(500/division)) + 25, ((verticalBoxes - 1)*(500/division)) - (y1*(500/division)) + 25, 500 / division, 500 / division );
					y1 += 1;
					if ( p < 0 ) {
						p = p + 2*deltaX;
					} else {
						p = p + (2*deltaX) - (2*deltaY);
						x1 += 1;
					}
				}
			} else if ( m < 0 && m >= -1) {
				/* If slope of the line belongs to [-1, 0) */
				var deltaX = x2 - x1;
				var deltaY = y1 - y2;
				var p = 2*deltaY - deltaX;
				
				while( x1 <= x2 ) {
					box.beginPath();
					box.fillStyle = "red";
					box.fillRect( (x1*(500/division)) + 25, ((verticalBoxes - 1)*(500/division)) - (y1*(500/division)) + 25, 500 / division, 500 / division );
					x1 += 1;
					if ( p < 0 ) {
						p = p + 2*deltaY;
					} else {
						p = p + (2*deltaY) - (2*deltaX);
						y1 -= 1;
					}
				}
			} else if ( m < -1 ) {
				/* If slope of the line belongs to ( -infinite, -1) */
				
				if ( x1 == x2 && y1 > y2 ) {
					/* Special case where slope of line = -infinity */
					while( y1 >= y2 ) {
						box.beginPath();
						box.fillStyle = "red";
						box.fillRect( (x1*(500/division)) + 25, ((verticalBoxes - 1)*(500/division)) - (y1*(500/division)) + 25, 500 / division, 500 / division );
						y1 -= 1;
					}
				} else {
					var deltaX = x2 - x1;
					var deltaY = y1 - y2;
					var p = 2*deltaX - deltaY;
					while( y1 >= y2 ) {
						box.beginPath();
						box.fillStyle = "red";
						box.fillRect( (x1*(500/division)) + 25, ((verticalBoxes - 1)*(500/division)) - (y1*(500/division)) + 25, 500 / division, 500 / division );
						y1 -= 1;
						if ( p < 0 ) {
							p = p + 2*deltaX;
						} else {
							p = p + (2*deltaX) - (2*deltaY);
							x1 += 1;
						}
					} 
				}
			}

			/* Re-Drawing the frame so that lines are clearly visible */ 
			horizontalBoxes = memoryWidth;
			verticalBoxes = memoryHeight;
			
			if ( horizontalBoxes >= verticalBoxes ) {
				division = horizontalBoxes;
			} else if ( verticalBoxes > horizontalBoxes ) {
				division = verticalBoxes;
			}

			number.fillStyle = "white";

			var sx = 0;
			var sy = 0;
			for (var i = 0; i <= horizontalBoxes; i++) {
				if (i > 0) {
					number.fillText(i - 1, sx, 15);
					number.fillText(i - 1, sx, 40 + sy)
				}
				c.beginPath();
				sy = 0;
				c.moveTo(sx + 25, sy + 25);
				sy = verticalBoxes*(500 / division);
				c.lineTo(sx + 25, sy + 25);
				c.strokeStyle = "white";
				c.stroke();
				sx = sx + 500 / division;
			}
			
			var sx = 0;
			var sy = 0;
			sx = horizontalBoxes*(500 / division);
			for (var i = verticalBoxes; i >= 0; i--) {
				if (i > 0) {
					number.fillText(i - 1, 32 + sx, sy + 40);
					number.fillText(i - 1, 5, sy + 40);
				}
				c.beginPath();
				sx = 0;
				c.moveTo(sx + 25, sy + 25);
				sx = horizontalBoxes*(500 / division);
				c.lineTo(sx + 25, sy + 25);
				c.strokeStyle = "white";
				c.stroke();
				sy = sy + 500 / division;
			}

			var line = canvas.getContext('2d');
			/* For drawing the line from the starting point to the ending point */
			line.beginPath();
			line.moveTo( startX + 25, startY + 25 );
			line.strokeStyle = "white";
			line.lineTo( endX + 25, endY + 25);
			line.stroke();

			var dot = canvas.getContext('2d');
			/* For adding a blue dot at the starting point of the Rasterization line */
			dot.beginPath();
			dot.arc(startX + 25, startY + 25, 2.5, 0, Math.PI * 2, false);
			dot.fillStyle = "blue";
			dot.fill();
			/* For adding a white dot at the starting point of the Rasterization line */
			dot.beginPath();
			dot.arc(endX + 25, endY + 25, 2.5, 0, Math.PI * 2, false);
			dot.fillStyle = "white";
			dot.fill();
		}
	}
}