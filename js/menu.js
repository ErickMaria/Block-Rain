var menuState = {
	create: function (){

		this.fallingblocksMenu = game.add.group();
		game.time.events.repeat(Phaser.Timer.SECOND * 0.8, totalFallingBlocks, function(){
				
			var blockFall = this.fallingblocksMenu.create(game.world.randomX, -100, 'block_yl');
			game.physics.arcade.enable(blockFall);
			blockFall.enableBody = true;
			blockFall.body.gravity.y = 1400;
			blockFall.width = 40;
			blockFall.height = 40;
				
		}, this);

		this.txtTitle = game.add.text(game.world.centerX, game.world.centerY/1.3, "Block Rain", { font: "30px Emulogic", fill: "#ffffff" });
		this.txtTitle.anchor.set(0.5);

		if(!game.device.desktop){
			this.btnPlay =game.add.button(game.world.centerX/1.1, game.world.centerY/0.8, 'play');
			this.btnPlay.scale.setTo(2);
		}else{
			this.txtDificultyArrowLeft = game.add.text(game.world.centerX-50, game.world.centerY/1, '<', {font: '10px Emulogic', fill: '#f39c12'});
			this.txtDificulty = game.add.text(game.world.centerX-30, game.world.centerY/1, difficulty[countDificultyArray], {font: '10px Emulogic', fill: '#bdc3c7'});
			this.txtDificultyArrowRight = game.add.text(game.world.centerX+40, game.world.centerY/1, '>', {font: '10px Emulogic', fill: '#f39c12'});

			this.txtStartGame = game.add.text(game.world.centerX, game.world.centerY/0.8, 'Press Enter', { font: '10px Emulogic', fill: '#f1f1f1'});
			this.txtStartGame.anchor.set(0.5);	
		}


		this.txtVersion = game.add.text(game.world.centerX-(game.world.centerX/-1.2), game.world.centerY/0.51, 'version: '+ version,{font: '8px Emulogic', fill: '#ffffff'});
		this.txtVersion.anchor.set(0.5);	

		this.txtState = game.add.text(game.world.centerX/2, game.world.centerY/1.3, 'STAGE 1', {font: '30px Emulogic', fill: '#ffffff'});
		this.txtState.visible = false;
		this.txtStateGoal = game.add.text(game.world.centerX/2, game.world.centerY/0.88, 'arrive at the end stage before the blocks knock him', {font: '10px Emulogic', fill: '#ffffff'});
		this.txtStateGoal.visible = false;
		this.txtStateGO = game.add.text(game.world.centerX/2, game.world.centerY/1.3, 'GO!', {font: '30px Emulogic', fill: '#ffffff'});
		this.txtStateGO.visible = false;

		//go fullscreen in device mobile
		btnFullScreen();
		//game.input.onDown.add(goFull, game);
		
	},
	
	update: function (){

		btnFullScreenToggle()
		
		if(game.input.keyboard.addKey(Phaser.Keyboard.RIGHT).isDown && game.input.keyboard.addKey(Phaser.Keyboard.RIGHT).downDuration(1)){
			countDificultyArray++;
			if(countDificultyArray !== 3){
				this.txtDificulty.text = difficulty[countDificultyArray];
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
				this.txtDificultyArrowLeft.visible = true;
				this.txtDificultyArrowRight.visible = true;
			}if(countDificultyArray <= 0){
				countDificultyArray = 0;
				this.txtDificultyArrowLeft.visible = false;
			}

		}
		
		//mobile
		if(!game.device.desktop){
			this.btnPlay.events.onInputDown.add(function(){
				this.btnPlay.visible = false;
				this.displayStateGoal();
			}, this);
		}

		//desktop
		if(game.input.keyboard.addKey(Phaser.Keyboard.ENTER).isDown){
			this.txtStartGame.visible = false;
			this.displayStateGoal();
		}
	},

	displayStateGoal: function(){
		this.txtStartGame.visible = false;

		this.txtTitle.visible =false;
		this.txtVersion.visible = false;
		this.txtDificultyArrowLeft.visible = false;
		this.txtDificultyArrowRight.visible = false;
		this.txtDificulty.visible = false;
		this.txtState.visible = true;
		this.txtStateGoal.visible = true;
		game.time.events.add(Phaser.Timer.SECOND * 2.1, function(){
			this.txtState.visible = false;
			this.txtStateGoal.visible = false;
			this.txtStateGO.visible = true;
			
			VarGameSet.difficultySelected = countDificultyArray + 1;

			game.time.events.add(Phaser.Timer.SECOND * 0.3, function(){
				game.state.start('stage1');
			}, this);
		}, this);
		
	}
	
};