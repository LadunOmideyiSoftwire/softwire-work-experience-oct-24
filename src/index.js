// global variables
let gridrows = 20;
let gridcols = 10;
let gamegrid = Array.from({ length: gridrows }, () => Array(gridcols).fill(0));

// Tetris pieces with shapes and colors
const tetrispiece = [
    { shape: [[1, 1, 1, 1]], colour: 'blue' },
    { shape: [[1, 1], [1, 1]], colour: 'orange' },
    { shape: [[1, 1, 1], [1, 0, 0]], colour: 'pink' },
    { shape: [[1, 1, 1], [0, 0, 1]], colour: 'red' },
    { shape: [[1, 1, 1], [0, 1, 0]], colour: 'green' },
    { shape: [[1, 1, 0], [0, 1, 1]], colour: 'brown' },
    { shape: [[0, 1, 1], [1, 1, 0]], colour: 'gold' }
];

// Piece handling

function getrandompiece() { // Creates a random piece and returns it
    const randomint = Math.floor(Math.random() * tetrispiece.length);
    return tetrispiece[randomint];
}

function canplacepiece(cols, rows, piece, gamegrid) { // Checks if a piece can be placed
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

function placepiece(cols, rows, piece, gamegrid) { // Places a piece in the game grid
    for (let i = 0; i < piece.shape.length; i++) {
        for (let j = 0; j < piece.shape[i].length; j++) {
            if (piece.shape[i][j]) {
                gamegrid[rows + i][cols + j] = piece.colour; // Correctly place the piece
            }
        }
    }
    return gamegrid;
}

function returnNewGridWithPieceMovedDown(startcol, startrow, piece, gridrows, gridcols) {
    let newGrid = Array.from({ length: gridrows }, () => Array(gridcols).fill(0));
    startrow += 1; // Move start row down by one

    for (let i = 0; i < piece.shape.length; i++) {
        for (let j = 0; j < piece.shape[i].length; j++) {
            if (piece.shape[i][j]) {
                newGrid[startrow + i][startcol + j] = piece.colour; // Place piece one row down
            }
        }
    }

    return newGrid; // Return the new grid with the piece moved down
}

// Rendering 

function renderGamegrid(grid, rows, cols) {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.lineWidth = 5;
    ctx.fillStyle = 'orange'; // Background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const cellHeight = 100;
    const cellWidth = 100;
    let xcoordinate = 0;
    let ycoordinate = 0;
    let cell_fill_colour = "yellow";

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            ctx.moveTo(xcoordinate, ycoordinate);

            if (grid[i][j] !== 0) {
                ctx.fillStyle = grid[i][j];
            } else {
                ctx.fillStyle = cell_fill_colour;
            }
            ctx.fillRect(xcoordinate, ycoordinate, cellWidth, cellHeight);
            xcoordinate += cellWidth;
        }
        xcoordinate = 0;
        ycoordinate += cellHeight;
    }
}

function renderPieceOnGameGrid() {
    let grid = Array.from({ length: gridrows }, () => Array(gridcols).fill(0));
    let Randompiece = getrandompiece();
    console.log("random tetris piece:", Randompiece.shape);
    console.log("random tetris colour:", Randompiece.colour);

    let startcol = 4;
    let startrow = 0;

    renderGamegrid(grid, gridrows, gridcols);

    // Initial placement
    let updatedGrid = placepiece(startcol, startrow, Randompiece, grid);
    console.log("Initial placement:", updatedGrid);

    renderGamegrid(updatedGrid, gridrows, gridcols);

    setTimeout(() => {
        // Move the piece down by one row
        updatedGrid = returnNewGridWithPieceMovedDown(startcol, startrow, Randompiece, gridrows, gridcols);
        renderGamegrid(updatedGrid, gridrows, gridcols);
    }, 500);
}

// Game start

function startGame() {
    renderPieceOnGameGrid();
}

startGame();
