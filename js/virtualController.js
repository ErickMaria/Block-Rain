// create our virtual game controller buttons

function virtualController(){
	
	var buttonjump = game.add.button(940, 680, 'UpDirectional', null, this, 0, 1, 0, 1);
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
	
	var buttonleft = game.add.button(2, 680, 'LeftDirectional', null, this, 0, 1, 0, 1);
	buttonleft.fixedToCamera = true;
	buttonleft.events.onInputOver.add(function(){left=true;});
	buttonleft.events.onInputOut.add(function(){left=false;});
	buttonleft.events.onInputDown.add(function(){left=true;});
	buttonleft.events.onInputUp.add(function(){left=false;});

	var buttonright = game.add.button(66, 680, 'RightDirectional', null, this, 0, 1, 0, 1);
	buttonright.fixedToCamera = true;
	buttonright.events.onInputOver.add(function(){right=true;});
	buttonright.events.onInputOut.add(function(){right=false;});
	buttonright.events.onInputDown.add(function(){right=true;});
	buttonright.events.onInputUp.add(function(){right=false;});
	
}

function btnFullScreen(){

	buttonFullScreen = game.add.button(590, 2, 'Fullscreen', null, this, 0, 1, 0, 1);
	buttonFullScreen.scale.setTo(0.8);
	buttonFullScreen.fixedToCamera = true;
	buttonFullScreen.events.onInputDown.add(function(){
		if (!game.scale.isFullScreen){
			game.scale.startFullScreen();
		}
	});

}

function btnFullScreenToggle(){
	if(!game.scale.isFullScreen){
		buttonFullScreen.width = 45;
	}else{
		buttonFullScreen.width = 0;
	}
}