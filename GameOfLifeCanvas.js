//Canaan McKenzie Copyright 2017

//Canvas Splash Screen Resize
//IIFP

(function () {
    var canvas = document.getElementById("GOLcanvas"),
	context = canvas.getContext('2D');

        //dynamically fill browser window
        window.addEventListener('resize',resizeCanvas,false);

    function resizeCanvas() {
	
	canvas.width = window.innerWidth;
	
	canvas.height = "50";

    }
    
    resizeCanvas();
 


    var starting_cells = [
	    
	    [0,1,0,0,0,0,0,0,0,0],
	    [0,0,0,0,0,0,0,0,0,0],
	    [0,0,0,0,0,0,0,0,0,0],
	    [0,0,0,0,0,0,0,0,0,0],
	    [0,0,0,0,0,0,0,1,0,0],
	    [0,0,0,0,0,0,1,1,0,0],
	    [0,0,0,0,0,0,1,0,0,0],
	    [0,0,0,0,0,0,0,1,0,0],
	    [0,0,0,0,1,0,0,1,0,0],
	    [0,0,0,0,0,0,0,0,0,0]
    ];

	 params = { canvas_id   : "GOLcanvas",
		   cell_width   : 10,
		   cell_height  : 10,
		   init_cells   : starting_cells
		  };

	
	  var  game = new GOL(params);

          interval = setInterval(game.tick,1000);
    
          game.setInterval(interval);

         // game();
    
        //Drawing function - Will this cause it to refresh every time the size changes?


})();

	
