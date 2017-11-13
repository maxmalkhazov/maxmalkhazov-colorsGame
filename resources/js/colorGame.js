var colors = generateRandomColor(6);
var header = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

// EASY BUTTON //
easyBtn.addEventListener("click", function(){
	this.classList.add("selected");
	hardBtn.classList.remove("selected");
	easy();
});

// HARD BUTTON //
hardBtn.addEventListener("click", function(){
	this.classList.add("selected");
	easyBtn.classList.remove("selected");
	hard();
});

// RESET BUTTON //
resetButton.addEventListener("click", function(){
	// GENERATE ALL NEW COLORS
	colors = generateRandomColor(6);
	// PICK A NEW RANDOM COLOR FROM ARRAY
	pickedColor = pickColor();
	// CHANGE COLORDISPLAY TO MATCH PICKED COLOR
	colorDisplay.textContent = pickedColor;
	// CHANGE COLORS OF SQUARES
	messageDisplay.textContent = "";
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
	}
	header.style.backgroundColor = "#20638f";
	resetButton.innerHTML = "<i class='fa fa-refresh' aria-hidden='true'></i>" + " " + "New Colors";
});


// GAME LOGIC //
colorDisplay.textContent = pickedColor;
for (var i = 0; i < squares.length; i++) {
	// ADD INITIAL COLORS TO SQUARES
	squares[i].style.backgroundColor = colors[i];

	// ADD CLICK LISTENERS TO SQUARES
	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor;
		if (clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct!";
			resetButton.textContent = "Play Again?";
			changeColors(clickedColor);
			header.style.backgroundColor = clickedColor;
		}
		else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again!";
		}
		console.log(pickedColor, clickedColor);
	});
}

// FUNCTIONS //
function changeColors(color) {
	// LOOP THROUGH ALL SQUARES AND CHANGE EACH COLOR TO MATCH GIVEN COLOR
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	// PICK A RANDOM COLOR NUMBER FROM THE COLORS ARRAY
	var randomNumber = Math.floor(Math.random() * colors.length);
	return colors[randomNumber];
}

function generateRandomColor(num) {
	// MAKE AN ARRAY
	var arr = [];
	// REPEAT NUM TIMES
	for (var i = 0; i < num; i++) {
		// GET RANDOM COLOR AND PUSH INTO ARRAY
		 arr.push(randomColor());
	}
	// RETURN THAT ARRAY
	return arr;

}

function randomColor() {
	// PICK A "RED" FROM 0 TO 255
	var r = Math.floor(Math.random() * 256);
	// PICK A "GREEN" FROM 0 TO 255
	var g = Math.floor(Math.random() * 256);
	// PICK A "BLUE" FROM 0 TO 255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + "," + " " + g + "," + " " + b + ")";
}

function easy() {
	colors = generateRandomColor(3);
	pickedColor = pickColor();
	// CHANFE COLORDISPLAY TO MATCH PICKED COLOR
	colorDisplay.textContent = pickedColor;
	// CHANGE COLORS OF SQUARES
	messageDisplay.textContent = "";
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
		if (colors[i]) {
			squares[i].style.backgroundColor = colors[i];
		}
		else {
			squares[i].style.display = "none";
		}
	}
}

function hard() {
	colors = generateRandomColor(6);
	pickedColor = pickColor();
	// CHANFE COLORDISPLAY TO MATCH PICKED COLOR
	colorDisplay.textContent = pickedColor;
	// CHANGE COLORS OF SQUARES
	messageDisplay.textContent = "";
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
	
	}
}


