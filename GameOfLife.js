//Copyright 2017 Canaan McKenzie

//Conway's game of life, implementation

var canvas = document.getElementById("GOLcanvas").getContext('2d'),
    cells = [];

    canvas.strokeStyle = '#7FFB90';
    canvas.fillStyle  = '#1BA92F';

//canvas display colors
console.log("made it to conway's game of life");

init();

function init() {
    for (var i = 0; i < 64; i++){
	cells[i] = [];
	for (var j=0; j < 64; j++){
	    cells[i][j] = 0;
	}
    }

    //pre-filled cells
    [
    // Gosper glider gun initialization
    [1, 5], [1, 6],[2, 5], [2, 6],[11, 5],[11, 6],[11, 7],[12, 4],
    [12, 8],[13, 3],[13, 9],[14, 3],[14, 9],[15, 6],[16, 4],[16, 8],
    [17, 5],[17, 6],[17, 7],[18, 6],[21, 3],[21, 4],[21, 5],[22, 3],
    [22, 4],[22, 5],[23, 2],[23, 6],[25, 1],[25, 2],[25, 6],[25, 7],
    [35, 3],[35, 4],[36, 3],[36, 4]
        
    ]

    .forEach(function(point) {
        cells[point[0]][point[1]] = 1;
    });
    
update(); //check still alive cells

}

function update(){

    var result = [];

    function count_neighbors(x,y){

	var amount = 0;

	function is_filled(x,y){

	    return cells[x] && cells[x][y];
	}

	//check below x,y
	if (is_filled(x -1, y-1)){ amount++;}
	if (is_filled(x, y-1)){ amount++;}
	if (is_filled(x+1, y-1)){ amount++;}

	//check above x,y
	if (is_filled(x-1, y+1)){ amount++;}
	if (is_filled(x, y+1)){ amount++;}
	if (is_filled(x+1,y+1)){ amount++;}

	//check either side of x,y
	if (is_filled(x-1,y)){ amount++;}
	if (is_filled(x+1,y)){ amount++;}

	return amount;

    }

    
    cells.forEach(function(row, x){

	result[x] = [];
	
	row.forEach(function(cell,y){
	    var alive = 0,
		count = count_neighbors(x,y);

	    if (cell > 0) {
		alive = count === 2 || count === 3 ? 1 : 0;
	    } else {
		alive = count === 3 ? 1 : 0;
	    }

	    result[x][y] = alive;
	});
    });


    cells = result;

    draw();

}

function draw() {

    //change dynamically
    canvas.clearRect(0, 0, 1512, 512);
    cells.forEach(function(row, x) {
        row.forEach(function(cell, y) {
            canvas.beginPath();
            canvas.rect(x*8, y*8, 8, 8);
            if (cell) {
                canvas.fill();
            } else {
                canvas.stroke();
            }
        });
    });
    setTimeout(function() {update();}, 70);
    //window.requestAnimationFrame(update); // Too fast!
}
