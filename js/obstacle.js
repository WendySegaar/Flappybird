function Obstacle(ctx, height, width, bird){

	this.heightTop = 0;
	this.heightBottom = 0;
	this.width = 20;
	this.speed = 2;
	this.x = width;
	this.topy = 0;
	this.bottomy = height;

	this.calc = function() {
		while(this.heightTop + this.heightBottom > height - (3 * bird) || this.heightTop + this.heightBottom < height - 200){
			this.heightTop = Math.floor(Math.random() * height) +1;
			this.heightBottom = Math.floor(Math.random() * height) +1;
		}
	}

	this.calc();

	this.draw = function() {
		ctx.fillStyle = "green";
		ctx.fillRect(this.x -= this.speed, this.topy, this.width, this.heightTop);
		ctx.fillRect(this.x -= this.speed, this.bottomy - this.heightBottom , this.width, this.heightBottom);
	}

	


}