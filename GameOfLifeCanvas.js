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

	var starting_cells = [
	    [0,0,0,0,0,0,0,0,0,0],
	    [0,0,0,0,0,0,0,0,0,0],
	    [0,0,0,0,0,0,0,0,0,0],
	    [0,0,0,0,0,0,0,0,0,0],
	    [0,0,0,0,0,0,0,0,0,0],
	    [0,0,0,0,0,0,0,0,0,0],
	    [0,0,0,0,0,0,0,0,0,0],
	    [0,0,0,0,0,0,0,0,0,0],
	    [0,0,0,0,0,0,0,0,0,0],
	    [0,0,0,0,0,0,0,0,0,0]
	],

	params = { canvas_id   : canvas,
		   cell_width  : canvas.width,
		   cell_height : canvas.height,
		   init_cells  : starting_cells
		 },

	    game = new GOL(params);
	
    }
    resizeCanvas();

    //Drawing function - Will this cause it to refresh every time the size changes?

    game.step();
    
})();

	
