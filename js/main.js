var version = 'alpha 0.0.2';

var player;
var controls;
var buttonFullScreen;

var left=false;
var right=false;
var jump=false;

var difficulty = new Array('easy','mediun','hard');
var countDificultyArray = 1;

var totalFallingBlocks = 1000000000000000000;
var countTolalFallingblocks = totalFallingBlocks;
var timing = 0;

var VarGameSet = {
	difficultySelected: 0,
	stage_end_time: 0,
	timing: 0


};

//640 | 360
var game = new Phaser.Game(640, 360, Phaser.CANVAS, 'game');
	

	game.state.add('boot', bootState);
	game.state.add('load', loadState);
	game.state.add('menu', menuState);
	game.state.add('stage1', stageState);
	game.state.add('gameOver', gameOver);
	game.state.add('end', endState);
	

	game.state.start('boot');
	