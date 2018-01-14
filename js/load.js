
var loadState = {
	
	preload: function (){
		
		var progressBar = game.add.sprite(game.world.centerX, game.world.centerY,'progressBar');
			progressBar.anchor.setTo(0.5);
			
		game.load.setPreloadSprite(progressBar);

		//player
		game.load.spritesheet('player', 'assets/sprites/player/player.png', 180, 220);
		game.load.spritesheet('player2', 'assets/sprites/player/player2.png', 180, 220);
		
		//stage 1
		game.load.image('stage1Background1', 'assets/sprites/stage1/background/parallax-forest-back-trees.png');
		game.load.image('stage1Background2', 'assets/sprites/stage1/background/parallax-forest-front-trees.png');
		game.load.image('stage1Background3', 'assets/sprites/stage1/background/parallax-forest-lights.png');
		game.load.image('stage1Background4', 'assets/sprites/stage1/background/parallax-forest-middle-trees.png');
		game.load.image('block_bw', 'assets/sprites/stage1/plataforms/block_bw.jpg');
		game.load.image('block_yl', 'assets/sprites/stage1/plataforms/block_yellow.jpg');
		game.load.spritesheet('flag', 'assets/sprites/stage1/flag.png', 103, 179);
		
		// buttons
		game.load.image('Fullscreen', 'assets/sprites/controlsMobile/fullscreen.png');
		game.load.image('Reset', 'assets/sprites/controlsMobile/buttonReset.png');

		//virtual gamecontroller
		game.load.image('RightDirectional', 'assets/sprites/controlsMobile/buttonRight.png');
		game.load.image('LeftDirectional', 'assets/sprites/controlsMobile/buttonLeft.png');
		game.load.image('UpDirectional', 'assets/sprites/controlsMobile/buttonUp.png');
		game.load.image('DownDirectional', 'assets/sprites/controlsMobile/buttonDown.png');

		
		//physics
		game.physics.startSystem(Phaser.Physics.ARCADE);
		
		/*config screen
		game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;//EXACT_FIX;
		*/
	},
	
	create: function (){
		game.state.start('menu');
	}
	
}