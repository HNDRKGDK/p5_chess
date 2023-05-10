let image;

function preload() {

	img = loadImage(assets/pawn.png);
}

function setup() {

	createCanvas(600, 600);
	background(220);

	for (var x = 0; x < width; x += width / 7) {
		for (var y = 0; y < height; y += height / 7) {
			stroke(0);
			strokeWeight(1);
			line(x, 0, x, height);
			line(0, y, width, y);
      		square(100, width, height);
		}
	}
}

function draw() {

	cursor(CROSS);
	// image(img, 0 ,0);
}

// function show() {
// 	image(this.image, 200, 200);
// }


