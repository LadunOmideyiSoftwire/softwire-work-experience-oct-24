let gridrows = 20;
let gridcols = 10;
let gamegrid = Array.from({ length: gridrows }, () => Array(gridcols).fill(0));

const tetrispiece = [ // creates all possible pieces and various colours
    { shape: [[1, 1, 1, 1]], colour: 'cerulean blue' },
    { shape: [[1, 1], [1, 1]], colour: 'honey yellow' },
    { shape: [[1, 1, 1], [1, 0, 0]], colour: 'flurescent pink' },
    { shape: [[1, 1, 1], [0, 0, 1]], colour: 'brick red' },
    { shape: [[1, 1, 1], [0, 1, 0]], colour: 'mint green' },   
    { shape: [[1, 1, 0], [0, 1, 1]], colour: 'bauge' },
    { shape: [[0, 1, 1], [1, 1, 0]], colour: 'rose gold' }
];

function getrandompiece() { // creates a random piece and returns it
    const randomint = Math.floor(Math.random() * tetrispiece.length);
    return tetrispiece[randomint];
}

const Randompiece = getrandompiece(); // randomizes each piece and corresponding
console.log("random tetris piece:", Randompiece.shape);
console.log("random tetris colour:", Randompiece.colour);

function placepiece(cols, rows, piece, gamegrid) { // places a piece in the game grid
    for (let i = 0; i < piece.shape.length; i++) {
        for (let j = 0; j < piece.shape[i].length; j++) {
            if (piece.shape[i][j]) {
                gamegrid[rows + i][cols + j] = 1; // Correctly place the piece
            }
        }
    }
}

function canplacepiece(cols, rows, piece) { // checks if a piece can be placed
    for (let i = 0; i < piece.shape.length; i++) {
        for (let j = 0; j < piece.shape[i].length; j++) {
            if (piece.shape[i][j] && 
                (gamegrid[rows + i] === undefined || 
                 gamegrid[rows + i][cols + j] === undefined || 
                 gamegrid[rows + i][cols + j] !== 0)) {
                return false; // Cannot place
            }
        }
    }
    return true; // Can place
}

const startrow = 0; // start position for pieces
const startcol = 4;

if (canplacepiece(startcol, startrow, Randompiece)) { // Check if piece can be placed
    placepiece(startcol, startrow, Randompiece, gamegrid); // Pass the gamegrid
    console.log("Piece placed.");
} else {
    console.log("Cannot place");
}

function rendergrid(gamegrid) { // renders the gamegrid
    for (let row of gamegrid) {
        console.log(row.join(' '));
    }
}

rendergrid(gamegrid); // Render the grid after placing a piece

let piecePosition = {x: 4, y: 0}
function MovePiece(direction){ // function that moves the piece
    switch (direction) {
        case 'left':
            piecePosition.x -= 1;
            break;
        case 'right':
            piecePosition.x += 1;
            break;
        case 'down':
            piecePosition.y += 1;
            break; 
    }
}

function collision(){ // checks if pieces are touching and stops them from colliding
    for(let rows = 0; rows < currentPiece.shape.length; rows++){
        for(let cols = 0; cols < currentPiece.shape[rows].length; cols++) {
            if(currentPiece.shape[rows][cols]){
                const newX = piecePosition.x + cols;
                const newY = piecePosition.y + rows;
                if (newX < 0 || newX >= canvas.width/grid || newY >= canvas.height/grids){
                    return true
                }
                if (newY >= 0 && gamegrid[newY][newX]) {
                    return true;
                }
            }
        }
    }
    return false;
}


document.addEventListener('keydown', (event) => { // calls the function to execuet when the corresponding arrow key is pressed
    if(event.key === 'ArrowLeft'){
        MovePiece('left');
        if (collision()){
            piecePosition.x -= 1;
        }
    } else if (event.key === 'ArrowRight'){
        MovePiece('right');
        if (collision()){
            piecePosition.x += 1;
        }
    }else if (event.key === 'ArrowDown'){
        MovePiece('down');
        if (collision()){
            piecePosition.y -= 1;
        }
    }
})

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
ctx.lineWidth = 5;
ctx.fillStyle = 'orange'; // Set your desired background color
ctx.fillRect(0, 0, canvas.width, canvas.height); // Fill the entire canvas

const cellHeight = 100;
const cellWidth = 100;
const padding = 5;
let xcoordinate = 0;
let ycoordinate = 0;
let cell_fill_colour = "yellow";
let rows = 20;
let cols = 10;

function renderGamegrid(gamegrid, rows, cols){
    for (let i = 0; i < 20; i++) {
    for (let j = 0; j < 10; j++) {
        ctx.moveTo(xcoordinate,ycoordinate); 

        // if (gamegrid[rows + i][cols + j] !==0){ 
        //     ctx.fillStyle = gamegrid[rows + i][cols + j]
        if (xcoordinate > 200) { ctx.fillStyle = "green"
             } 
            else
            {ctx.fillStyle = cell_fill_colour;}
        ctx.fillRect(xcoordinate,ycoordinate, cellWidth,cellHeight);  
        xcoordinate += cellWidth;
        console.log(xcoordinate,ycoordinate, cellWidth,cellHeight)
        }
    xcoordinate = 0
    ycoordinate += cellHeight;
    console.log(xcoordinate,ycoordinate);
    }
}

