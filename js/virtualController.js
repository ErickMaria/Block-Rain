// create our virtual game controller buttons

function virtualController(){
	if(!game.device.desktop){
		var buttonjump = game.add.button(game.world.centerY+378, game.world.centerX-42, 'UpDirectional', null, this, 0, 1, 0, 1);
		buttonjump.fixedToCamera = true;  
		buttonjump.events.onInputOver.add(function(){jump=true;});
		buttonjump.events.onInputOut.add(function(){jump=false;});
		buttonjump.events.onInputDown.add(function(){jump=true;});
		buttonjump.events.onInputUp.add(function(){jump=false;});

		/*
		var buttonfire = game.add.button(0, 0, '', null, this, 0, 1, 0, 1);
		buttonfire.fixedToCamera = true;
		buttonfire.events.onInputOver.add(function(){fire=true;});
		buttonfire.events.onInputOut.add(function(){fire=false;});
		buttonfire.events.onInputDown.add(function(){fire=true;});
		buttonfire.events.onInputUp.add(function(){fire=false;});        
		*/

		var buttonleft = game.add.button(2, game.world.centerY/0.65, 'LeftDirectional', null, this, 0, 1, 0, 1);
		buttonleft.fixedToCamera = true;
		buttonleft.events.onInputOver.add(function(){left=true;});
		buttonleft.events.onInputOut.add(function(){left=false;});
		buttonleft.events.onInputDown.add(function(){left=true;});
		buttonleft.events.onInputUp.add(function(){left=false;});

		var buttonright = game.add.button(66, game.world.centerY/0.65, 'RightDirectional', null, this, 0, 1, 0, 1);
		buttonright.fixedToCamera = true;
		buttonright.events.onInputOver.add(function(){right=true;});
		buttonright.events.onInputOut.add(function(){right=false;});
		buttonright.events.onInputDown.add(function(){right=true;});
		buttonright.events.onInputUp.add(function(){right=false;});
	}
}

function btnFullScreen(){
	if(!game.device.desktop){
		buttonFullScreen = game.add.button(590, 8, 'Fullscreen', null, this, 0, 1, 0, 1);
		buttonFullScreen.scale.setTo(0.8);
		buttonFullScreen.fixedToCamera = true;
		buttonFullScreen.events.onInputDown.add(function(){
			if (!game.scale.isFullScreen){
				game.scale.startFullScreen();
			}
		});
	}
}

function btnReset(){
	if(!game.device.desktop){
		var buttonReset = game.add.button(game.world.centerX-50, game.world.centerY, 'Reset');
		buttonReset.scale.setTo(0.4);
		buttonReset.events.onInputDown.add(function(){
			game.state.start('stage1');
		});
	}
}

function btnFullScreenToggle(){
	if(!game.device.desktop){
		if(!game.scale.isFullScreen){
			buttonFullScreen.width = 45;
		}else{
			buttonFullScreen.width = 0;
		}
	}
}