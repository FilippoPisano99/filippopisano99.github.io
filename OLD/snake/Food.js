Food = function () {

	this.x = 0;
	this.y = 0;
	this.w = 20;

	this.draw = function()
	{
		fill(255,0,150);
		rect(this.x , this.y , this.w , this.w);
	}

	this.spawnFood = function () {
		this.x = floor( random(0,20) ) * 20;
		this.y = floor( random(0,20) ) * 20;
	}

}