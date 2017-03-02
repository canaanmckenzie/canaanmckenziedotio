//copyright 2017 Canaan McKenzie


function game_toggle(game, force){

    var interval = game.getInterval();

    if (force == "stop" || interval !== null){

	//stop immediately
	clearInterval(interval);
	game.setInteval(null);
    } else {

	//start
	interval = setInterval(game.tick,1000);
	game.setInterval(interval);
    }
}


function add_listeners(game) {

    $( "#" + ".toggle, # " + "canvas").click(function(){
	game_toggle(game);
    });
    $("#" + ".step").click(function(){
	game_toggle(game,"stop");
	game.tick;
    });
}
    
