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
       
 


    var starting_cells = [
	    
	    [1,1,0,0,0,0,0,0,0,0],
	    [1,1,0,0,0,0,0,0,0,0],
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
		   cell_width   : 5,
		   cell_height  : 5,
		   init_cells   : starting_cells
		  };

	
    var  game = new GOL(params);

    game.tick();

   // resizeCanvas();
 
    
    
        //Drawing function - Will this cause it to refresh every time the size changes?


})();

	
