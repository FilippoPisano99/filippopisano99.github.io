Snake = function (x,y) {

	this.x = x;
	this.y = y;
	this.w = 20;

	this.xSpeed = 1;
	this.ySpeed = 0;

	this.score = 0;

	this.coda = [];

	this.update = function() {

		if(this.score > 0)
		{
			this.coda.shift();
			this.coda.push([this.x,this.y]);
		}
		

		this.x += this.xSpeed * this.w;
		this.y += this.ySpeed * this.w;

		this.x = constrain(this.x, 0 , width -(this.w+1));
		this.y = constrain(this.y, 0 , height-(this.w+1));

		for (var i = 0; i < this.coda.length; i++) {
			if(this.coda[i][0] - this.x === 0 && this.coda[i][1] - this.y === 0)
			{
				this.score = 0;
				this.coda = [];
				this.x = 0;
				this.y = 0;
				console.log("HIT")
			}
		}
	}

	this.draw = function() {
		fill(0, 200 , 0);

		if(this.score>0)
		{
			for (var i = 0; i < this.coda.length; i++) {
				rect(this.coda[i][0] , this.coda[i][1] , this.w , this.w);
			}
		}
		fill(255, 0 , 0);
		rect(this.x , this.y , this.w , this.w);
	}

	this.setDir = function (dirX , dirY) {
		this.xSpeed = dirX;
		this.ySpeed = dirY;
	}

	this.eat = function (food) {
	
		if( this.x - food.x === 0 && this.y - food.y === 0  )
		{
			this.score++;
			this.coda.unshift( [this.x, this.y] );
			food.spawnFood();
		}
	}

	this.getScore = function () {
		return this.score;
	}



}