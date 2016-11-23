
var WidthScreen = 601;
var HeigthScreen = 401;

var img;
var snake;

var food;

var boxW = 20;

var Pause = false;

function setup() {
	
	console.log(HeigthScreen)

	canvas = createCanvas(WidthScreen, HeigthScreen);
	canvas.id("Game");
	frameRate(10);

	snake = new Snake(0,0);
	food = new Food();
	food.spawnFood();

}

function update() {
	snake.eat(food);
	snake.update();
}

function draw() {
	background(40);

	for(i = 0 ; i <  WidthScreen; i+=20)
	{
		fill(0);
		line(i,0,i,HeigthScreen);
	}

	for(i = 0 ; i < HeigthScreen ; i+=20)
	{
		fill(0);
		line(0,i, WidthScreen,i);
	}
			

	food.draw();
	snake.draw();

	fill(255)
	textSize(10);
	text("Score: " + snake.getScore().toString(), 0, 10);


	if(!Pause)
	{
		update();
	}
	else
	{
		textStyle(BOLD);
		textSize(33);
		text("Pause", (WidthScreen/2)-50, (HeigthScreen/2));
	}

}

function keyPressed() {

	if( keyCode === 83 ){ //S
		snake.setDir(0, 1);
	}
	if( keyCode === 87 ){ //W
		snake.setDir(0,-1);
	}
	if( keyCode === 65 ){ //A
		snake.setDir(-1,0);
	}
	if( keyCode === 68 ){ //D
		snake.setDir(1,0);
	}

	if( keyCode === 27 ){ //Esc
		Pause = !Pause;
	}
}
