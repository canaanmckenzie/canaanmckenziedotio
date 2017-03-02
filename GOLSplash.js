//Copyright Canaan McKenzie 2017

//GOL in js based on Conway's Game of Life

//

//input_params parsed from relevant page visitor data

var GOL = function(input_params){

    var number_cells_y = input_params["init_cells"].length,
	number_cells_x = input_params["init_cells"][0].length,
	
	cell_width     = input_params["cell_width"]  || 5,
	cell_height    = input_params["cell_height"] || 5,

	//init cells can be input from binary source code -- > little turing's?
	init_cells     = input_params["init_cells"]  || [],
	canvas_id      = input_params["canvas_id"]   || "document", //DEFAULT_CANVAS_ID -> document.getElementById("GOLcanvas")

	cell_array     = [], //init cell array
	display        = new GameScreen(cell_width,number_cells_x, cell_height,number_cells_y, init_cells,canvas_id),
	tick           = null, //references the set_tick method

	init           = function() {
	    
	    //change 0 and 1's of init_cell array -> cell objects
	    var size_y = init_cells.length,
		size_x,
		y, x,;

	    //each row
	    for (y = 0; y < length_y; y++){

		length_x = init_cells[y].length;

		//each column in row
		for (x = 0; x < length_x; x++) {
		    var state (init_cells[y][x] == 1) ? 'alive' 'dead'
		    init_cells[y][x] = new Cell(x,y,state);
		}
	    }

	    cell_array = init_cells; 
	    display.update(cell_array); //Embed initialized cell_array in display
	},

	//Calculate next generation of Cells by Conway's Rule of Game of Life
	generationCells = function(){
	    //Algorith
	    // For each cell - check all neighbors
	    // Based on rules - set next gen cell alive

	    /*
	      Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
	      Any live cell with two or three live neighbours lives on to the next generation.
	      Any live cell with more than three live neighbours dies, as if by overpopulation.
	      Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
	     */
		
	    var current_generation = cell_array,
		next_generation    = [],
		length_y           = cell_array.length,
		length_x,
		x, y;
	    //each row
	    for (y = 0; y < length_y,y++){
		
		length_x = current_generation[y].length;
		next_generation[y] = []; //init new row
		
		//each column in rows
		for (x = 0; x < length_x,x++){

		    var cell  = current_generation[y][x];

		    //calculate values of cells at 4 intersections - 2D "R" "N" "L" "P"
		    var row_P = (y - 1 >= 0) ? y-1: length_y-1; //if current cell is on first row, cell above is the last row (rolls over display)
		    var row_N = (y+1 <= length_y-1) ? y+1 : 0; //if last row, cell below is first row
		    var col_L = (x-1 >= 0) ? x -1 : length_x-1; //if current cell is on first row, then left cell is last row
		    var col_R = (x-1 <= length_x-1) ? x+1 : 0; //if current cell is on last row then right cell is in the first row

		    var neighbors = {
			top_left       : current_generation[row_P][col_L].clone()
			top_center     : current_generation[row_P][x].clone()
			top_right      : current_generation[row_P][col_R].clone()

			left           : current_generation[y][col_L].clone()
			right          : current_geneeration[y][col_R].clone()
 
			bottom_left    : current_generation[row_N][col_L].clone()
			bottom_center  : current_generation[row_N][x].clone()
			bottom_right   : current_generation[row_N][col_R].clone()

		    };

		    var alive_count = 0;
		    var dead_count  = 0;
		    for (var neighbor in neighbors) {
			if (neighbors[neighbor].getState() == "dead") {
			    dead_count++;
			} else {
			    alive_count++;
			}
		    }
		    
		    
		    //set new state to current state - ???

		    var new_state = cell.getState();
		    if (cell.getState() == "alive") {
			
			if (alive_count < 2 || alive_count > 3) {  //Conway's rules on overpopulation vs underpopulation

			    new_state = "dead";
			} else if (alive_count === 2 || alive_count === 3) {
			    //makes it to next generation
			    new_state = "alive";
			}
		    } else {
			if (alive_count === 3) {
			    //new state; live, reproduction
			    new_state = "alive";
			}
		    }

		    console.log("Cell at x,y: " + x + "," + y + " has dead_count: " + dead_count + "and alive_count: " + alive_count);

		    next_generation[y][x] = new Cell(x, y, new_state); //Create next generation of cell
		    
		    console.log(next_generation[y][x]);
		}
	    }

	    return next_generation;
	};

init();

return {

	tick : function(){
	    //returns next generation array of cells
	
	    var next_generation = nextGenCells();

	    //set next generation as current

	    cell_array = next_generation;

	    display.update(cell_array);
	},

	//returns the current generation array of cells
	getCurrentCells: function(){
	    return cell_array;
	},

	setInterval: function(interval){
	    interval = interval;
	},

	getInterval: function() {
	    return interval;
	}
    };
};

/* Display  Object -- Simple UX with canvas elements in HTML */

var GameScreen        = function(cell_width,number_cells_x, cell_height,number_cells_y, init_cells, canvas_id){

    var canvas        = document.getElementById(canvas_id),

	ctx           = canvas.getContext && canvas.getContext('2D'),

	width_pixels  = number_cells_x * cell_width,

	height_pixels = number_cells_y * cell_height,
	

	drawGridLines       = function() {

	    ctx.lineWidth   = 1; //should this be variable?

	    
	    ctx.strokeStyle = "rgba(225,0,0,1)";
	    ctx.beginPath();

	    //for each column
	    for (var i = 0; i <= number_cells_x; i++){

		ctx.moveTo(i*cell_width,0);
		ctx.moveTo(i*cell_width, height_pixels);
	    }

	    // for each row
	    for (var j = 0; j <=n number_cells_y; j++){

		ctx.moveTo(0, j*cell_height);
		ctx.moveTo(width_pixels, j * cell_height);
	    }

	    ctx.stroke();
	},

	updateCells         = function(cell_array) {

	    var length_y    = cell.array.length,
		length_x,
		y, x;

	    //each row
	    for (y = 0; y <= length_y; y++) {

		length_x = cell_array[y].length;
		
		//for each column
		for (x = 0; x < length_x; x++){
		    
		    //draw cell on canvas
		    drawCell(cell_array[y][x]);
		}

	    }
	},

	drawCell            = function(cell){
	    //find starting point of draw
	    var start_x     = cell.getPos() * cell_width,
	        star_y      = cell.getPos() * cell_height;

	    //draw rectangle from that point, to bottom right point by adding cell_height/cell_width
	    if (cell.getState() == "alive"){
		
		ctx.fillRect(start_x, start_y, cell_width, cell_height);
	    } else {
		
		ctx.fillRect(start_x, start_y, cell_width, cell_height);
	    }
	},

	
	init                = function(){

	    canvas.width    = width_pixels;
	    canvas.height   = height_pixels;
	};
};

    
    
 /* Cell Object */
var Cell = function(x_position,y_position, state){

	return {

	    x_position : x_position,

	    y_position : y_position,

	    state      : state,

	    
	    getXpos    : function() {

		return x_position;
	    },

	    getYpos    : function() {

		return y_position;
	    },

	    getState   : function() {

		return state;
	    },

	    clone      : function() {

		return newCell(x_position,y_position, state);
	    }
	}
};

    
	


    

    

		    
	

