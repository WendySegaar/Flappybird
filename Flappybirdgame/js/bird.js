function Bird(ctx){

  	this.x = 0; //(De x positie van de vogel)
	this.y = 200; //(De y positie van de vogel)
	this.flap = false; //(Dit zorgt er voor dat je “Flapt” als je op een knopt drukt)
	this.vy = 0; //(Dit is de vilocity voor de Y-as.)
	this.gravity = 0.4; //(Dit zorgt er voor dat je weer naar beneden valt)
	this.width = 20;
	this.height = 20;

	this.draw = function(){
		//teken bird
		ctx.fillStyle = "red";
		ctx.fillRect(this.x , this.y, this.width, this.height);
		ctx.strokeStyle = "red";
		ctx.strokeRect(this.x , this.y, this.width, this.height);

	}

	
	this.move = function(){
		if(this.flap == true) {
			this.vy = 6;
			this.flap = false;
		}
		else {
			this.y -= this.vy;
			this.vy -= this.gravity;

		}
	}



}
