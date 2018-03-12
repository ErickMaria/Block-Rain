var gameOver = {

	create: function(){
		
		game.stage.backgroundColor = "#11111";

		this.txtGameOver = game.add.text(game.world.centerX, game.world.centerY/1.5, 'GAME OVER :(', {font: '30px Emulogic', fill: '#ffffff'});
		this.txtGameOver.anchor.setTo(0.5);
		this.reset = game.add.text(game.world.centerX/1.45, game.world.centerY/0.6, 'press enter to reset', {font: '10px Emulogic', fill: '#ffffff'});
		this.timing = game.add.text(game.world.centerX/1.2, game.world.centerY/0.54, ' time: '+VarGameSet.timing+'s', {font: '10px Emulogic', fill: '#ffffff'});
		
		if(game.device.desktop){
			this.redifineDificulty = game.add.text(game.world.centerX/1.40, game.world.centerY/1.05, 'redifine difficulty', {font: '10px Emulogic', fill: '#ffffff'});
			this.txtDificultyArrowLeft = game.add.text(game.world.centerX/1.2, game.world.centerY/0.8, '<', {font: '10px Emulogic', fill: '#f39c12'});
			this.txtDificulty = game.add.text(game.world.centerX/1.1, game.world.centerY/0.8, difficulty[countDificultyArray], {font: '10px Emulogic', fill: '#bdc3c7'});
			this.txtDificultyArrowRight = game.add.text(game.world.centerX/0.9+(10), game.world.centerY/0.8, '>', {font: '10px Emulogic', fill: '#f39c12'});
			
			if(countDificultyArray === 2){
				this.txtDificultyArrowRight.visible = false;
			}if(countDificultyArray === 0){
				this.txtDificultyArrowLeft.visible = false;
			}
		}
		
		var Resetfade = 0;
		game.time.events.repeat(Phaser.Timer.SECOND * 0.5, 1000, function(){
			if(Resetfade % 2 === 0 ) {
				this.reset.visible = false;
			}else{
				this.reset.visible = true;
			}
			Resetfade++;
		}, this);

		
	btnFullScreen();
	btnReset();

	},

	update: function(){

		btnFullScreenToggle()

		if(game.input.keyboard.addKey(Phaser.Keyboard.RIGHT).isDown && game.input.keyboard.addKey(Phaser.Keyboard.RIGHT).downDuration(1)){
			countDificultyArray++;
			if(countDificultyArray !== 3){
				this.txtDificulty.text = difficulty[countDificultyArray];
				VarGameSet.difficultySelected = countDificultyArray + 1;
				this.txtDificultyArrowLeft.visible = true;
				this.txtDificultyArrowRight.visible = true;
			}if(countDificultyArray >= 2){
				countDificultyArray = 2;
				this.txtDificultyArrowRight.visible = false;
			}
			
		}
		
		if(game.input.keyboard.addKey(Phaser.Keyboard.LEFT).isDown && game.input.keyboard.addKey(Phaser.Keyboard.LEFT).downDuration(1)){
			countDificultyArray--;
			if(countDificultyArray !== -1){
				this.txtDificulty.text = difficulty[countDificultyArray];
				VarGameSet.difficultySelected = countDificultyArray + 1;
				this.txtDificultyArrowLeft.visible = true;
				this.txtDificultyArrowRight.visible = true;
			}if(countDificultyArray <= 0){
				countDificultyArray = 0;
				this.txtDificultyArrowLeft.visible = false;
			}

		}

		if(game.input.keyboard.addKey(Phaser.Keyboard.ENTER).isDown){

			// reset to initial value
			totalFallingBlobks = 1000;
			timing = 0;
			
			game.state.start('stage1');
		}

	}

}