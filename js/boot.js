var bootState = {
	
	init: function(){
		
		game.scale.scaleMode = Phaser.ScaleManager.USER_SCALE;
		game.scale.fullScreenScaleMode = Phaser.ScaleManager.RESIZE;
		game.scale.pageAlignVertically = true;
		game.scale.pageAlignHorizontally = true;

	},
	
	preload: function(){
		game.load.image('progressBar', 'assets/sprites/progressBar.png');
		game.load.image('play', 'assets/sprites/controlsMobile/buttonPlay.png');
	},
	
	create: function (){

		this.btnPlay =game.add.sprite(180, 30, 'play');
		this.btnPlay.width = 300;
		this.btnPlay.height = 300;

		game.input.onDown.add(function(){
			goFull();
			game.state.start('load');
		}, this);
		
	
	}

};  