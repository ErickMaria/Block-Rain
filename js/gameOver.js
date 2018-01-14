var gameOver = {

	create: function(){

		game.stage.backgroundColor = "#11111";

		this.txtGameOver = game.add.text(500, game.world.centerY/1.5, 'GAME OVER :(', {font: '30px Emulogic', fill: '#ffffff'});
		this.txtGameOver.anchor.setTo(0.5);

		this.reset = game.add.text(397, game.world.centerY/0.6, 'press enter to reset', {font: '10px Emulogic', fill: '#ffffff'});
		this.timing = game.add.text(445, game.world.centerY/0.54, ' time: '+VarGameSet.timing+'s', {font: '10px Emulogic', fill: '#ffffff'});
		if(game.device.desktop){		
			this.redifineDificulty = game.add.text(397, game.world.centerY/1.2, 'redifine difficulty', {font: '10px Emulogic', fill: '#ffffff'});
			this.txtDificultyArrowLeft = game.add.text(440, game.world.centerY/1.1, '<', {font: '10px Emulogic', fill: '#f39c12'});
			this.txtDificulty = game.add.text(460, game.world.centerY/1.1, difficulty[countDificultyArray], {font: '10px Emulogic', fill: '#bdc3c7'});
			this.txtDificultyArrowRight = game.add.text(530, game.world.centerY/1.1, '>', {font: '10px Emulogic', fill: '#f39c12'});
			
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