var canvas = document.querySelector('canvas');

canvas.width = 30*20;
canvas.height = 30*20;

var c = canvas.getContext('2d');

if ( !c ) {
	alert("Your Browser doesn't support canvas");
} else {
	var horizontalBoxes = 15;
	var verticalBoxes = 15;
	var division = 15;
	var sx = 0;
	var sy = 0;

	drawDefaultFrame();

	function drawDefaultFrame() {
		horizontalBoxes = 15;
		verticalBoxes = 15;
		division = 15;
		sx = 0;
		sy = 0;
		c.clearRect(0, 0, 600, 600);
		console.log(canvas);
		for (var i = 0; i <= horizontalBoxes; i++) {
			c.beginPath();
			sy = 0;
			c.moveTo(sx, sy);
			sy = verticalBoxes*(500 / division);
			c.lineTo(sx, sy);
			c.strokeStyle = "white";
			c.stroke();
			sx = sx + 500 / division;
		}
		sx = 0;
		sy = 0;
		for (var i = 0; i <= verticalBoxes; i++) {
			c.beginPath();
			sx = 0;
			c.moveTo(sx, sy);
			sx = horizontalBoxes*(500 / division);
			c.lineTo(sx, sy);
			c.strokeStyle = "white";
			c.stroke();
			sy = sy + 500 / division;
		}
	}

	function drawFrame() {
		c.clearRect(0, 0, 600, 600);
		console.log(canvas);

		horizontalBoxes = Number(document.getElementById('frameWidth').value);
		verticalBoxes = Number(document.getElementById('frameHeight').value);

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
			c.clearRect(0, 0, 600, 600);
			console.log(canvas);
			
			var sx = 0;
			var sy = 0;
			for (var i = 0; i <= horizontalBoxes; i++) {
				c.beginPath();
				sy = 0;
				c.moveTo(sx, sy);
				sy = verticalBoxes*(500 / division);
				c.lineTo(sx, sy);
				c.strokeStyle = "white";
				c.stroke();
				sx = sx + 500 / division;
			}
			
			var sx = 0;
			var sy = 0;
			for (var i = 0; i <= verticalBoxes; i++) {
				c.beginPath();
				sx = 0;
				c.moveTo(sx, sy);
				sx = horizontalBoxes*(500 / division);
				c.lineTo(sx, sy);
				c.strokeStyle = "white";
				c.stroke();
				sy = sy + 500 / division;
			}
		}
	}
	console.log(canvas);
}

