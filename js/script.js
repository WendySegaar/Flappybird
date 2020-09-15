window.onload = function(){

	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');

	var width = canvas.width = 1200;
	var height = canvas.height = 600;
	var bird = new Bird(ctx); 
	var obstacles = [];
	var score = 0;

	setInterval(draw, 30);
	function draw() {

		//teken speelveld
		ctx.fillStyle = "lightgrey";
		ctx.fillRect(0, 0, width, height);
		ctx.strokeStyle = "black";
		ctx.strokeRect(0, 0, width, height);

		//teken bird
		bird.draw();
		for(var i = 0; i < obstacles.length; i++){
			obstacles[i].draw();
		}
	}
	
	window.addEventListener('keydown', function(e){
		if(e.keyCode == 32){bird.flap = true;}
	})

	window.addEventListener('keyup', function(e){
		if(e.keyCode == 32){bird.flap = false ;}
	}) 

	setInterval(move, 30);

	function move() {
		bird.move();
	}

	setInterval(createPillars, 5000);

	function createPillars() {
		obstacles.push(new Obstacle(ctx, canvas.height, canvas.width, bird.height));
	}

	setInterval(collision, 30);
	function collision() {
		for(var i = 0; i < obstacles.length; i++){    			
       		if(
       		(obstacles[i].x + obstacles[i].width > bird.x && obstacles[i].x < bird.width + bird.x 
       		&& obstacles[i].topy + obstacles[i].heightTop > bird.y && obstacles[i].topy < bird.y ) ||
       		(obstacles[i].x + obstacles[i].width > bird.x && obstacles[i].x < bird.width + bird.x 
       		&& obstacles[i].bottomy - obstacles[i].heightBottom < bird.y + bird.height && obstacles[i].bottomy > bird.y))
       		{
       			 	alert("Game over. Je score was: " + score);
       			 	location.reload();
       		}
       		else if (obstacles.x < -100) {
       			obstacles.splice(i, 1);
       		}
		}

	}

	setInterval(count, 30);

	function count() {
		document.getElementById('score').innerHTML = "Score:" + score;
		for(var i = 0; i < obstacles.length; i++){ 
			if(bird.x + bird.width > obstacles[i].x + obstacles[i].width){
				score = i + 1;
			}
		}
	}
}
