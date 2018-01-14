function moveDesktop(){
		
	if(controls.right.isDown){
		if((player.body.onFloor() || player.body.touching.down)){
			player.animations.play('walkingRight');
		}		
		player.body.velocity.x = 150;
	}if(controls.left.isDown){
		if((player.body.onFloor() || player.body.touching.down)){
			player.animations.play('walkingLeft');
		}
		player.body.velocity.x = -150;
	}if(controls.up.isDown &&  player.body.touching.down){
		player.animations.play('stopped');
		player.body.velocity.y = -600;
	}if(controls.right.isDown && controls.up.isDown && player.body.touching.down){
		player.animations.play('jumpRight');
		player.body.velocity.y = -600;
	}if(controls.left.isDown && controls.up.isDown && player.body.touching.down){
		player.animations.play('jumpLeft');
		player.body.velocity.y = -600;
	}if(!controls.up.isDown && !controls.right.isDown && !controls.left.isDown){
		player.animations.play('stopped');
	}
	
}

function moveMobile(){
	
	if(right && !left){
		if((player.body.onFloor() || player.body.touching.down)){
			player.animations.play('walkingRight');
		}
		player.body.velocity.x = 150;
	}else if(left && !right){
		if((player.body.onFloor() || player.body.touching.down)){
			player.animations.play('walkingLeft');
		}
		player.body.velocity.x = -150;
	}if(jump && player.body.touching.down){
		player.animations.play('stopped');
		player.body.velocity.y = -600;
		//djump++;
		//console.log(djump);
	}if(right && jump && player.body.touching.down){
		player.animations.play('jumpRight');
		player.body.velocity.y = -600;
	}if(left && jump && player.body.touching.down){
		player.animations.play('jumpLeft');
		player.body.velocity.y = -600;
	}if(!jump && !left && !right && player.body.touching.down){
		player.animations.play('stopped');
	}/*if(player.body.touching.down){
		djump = 0;
		//console.log('down: '+djump);
	}*/
}