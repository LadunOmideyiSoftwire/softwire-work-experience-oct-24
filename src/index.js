// Global variables
let gridRows = 20;
let gridCols = 10;
let gameGrid = Array.from({ length: gridRows }, () => Array(gridCols).fill(0));

// Tetris pieces with shapes and colors
const tetrisPiece = [
    { shape: [[1, 1, 1, 1]], color: 'blue' },
    { shape: [[1, 1], [1, 1]], color: 'orange' },
    { shape: [[1, 1, 1], [1, 0, 0]], color: 'pink' },
    { shape: [[1, 1, 1], [0, 0, 1]], color: 'red' },
    { shape: [[1, 1, 1], [0, 1, 0]], color: 'green' },
    { shape: [[1, 1, 0], [0, 1, 1]], color: 'brown' },
    { shape: [[0, 1, 1], [1, 1, 0]], color: 'gold' }
];

// Piece handling

function getRandomPiece() { // Creates a random piece and returns it
    const randomInt = Math.floor(Math.random() * tetrisPiece.length);
    return tetrisPiece[randomInt];
}

function canPlacePiece(cols, rows, piece, gameGrid) { // Checks if a piece can be placed
    for (let i = 0; i < piece.shape.length; i++) {
        for (let j = 0; j < piece.shape[i].length; j++) {
            if (piece.shape[i][j] &&
                (gameGrid[rows + i] === undefined ||
                    gameGrid[rows + i][cols + j] === undefined ||
                    gameGrid[rows + i][cols + j] !== 0)) {
                return false; // Cannot place
            }
        }
    }
    return true; // Can place
}

function placePiece(cols, rows, piece, gameGrid) { // Places a piece in the game grid
    for (let i = 0; i < piece.shape.length; i++) {
        for (let j = 0; j < piece.shape[i].length; j++) {
            if (piece.shape[i][j]) {
                gameGrid[rows + i][cols + j] = piece.color; // Correctly place the piece
            }
        }
    }
    return gameGrid;
}

function returnNewGridWithPieceMovedDown(startCol, startRow, piece, gridRows, gridCols) {
    let newGrid = Array.from({ length: gridRows }, () => Array(gridCols).fill(0));
    startRow += 1; // Move start row down by one

    for (let i = 0; i < piece.shape.length; i++) {
        for (let j = 0; j < piece.shape[i].length; j++) {
            if (piece.shape[i][j]) {
                newGrid[startRow + i][startCol + j] = piece.color; // Place piece one row down
            }
        }
    }

    return newGrid; // Return the new grid with the piece moved down
}

// Rendering 

function renderGameGrid(grid, rows, cols) {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.lineWidth = 5;
    ctx.fillStyle = 'orange'; // Background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const cellHeight = 100;
    const cellWidth = 100;
    let xCoordinate = 0;
    let yCoordinate = 0;
    let cellFillColor = "yellow";

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            ctx.moveTo(xCoordinate, yCoordinate);

            if (grid[i][j] !== 0) {
                ctx.fillStyle = grid[i][j];
            } else {
                ctx.fillStyle = cellFillColor;
            }
            ctx.fillRect(xCoordinate, yCoordinate, cellWidth, cellHeight);
            xCoordinate += cellWidth;
        }
        xCoordinate = 0;
        yCoordinate += cellHeight;
    }
}

function renderPieceOnGameGrid() {
    let grid = Array.from({ length: gridRows }, () => Array(gridCols).fill(0));
    let randomPiece = getRandomPiece();
    console.log("random tetris piece:", randomPiece.shape);
    console.log("random tetris color:", randomPiece.color);

    let startCol = 4;
    let startRow = 0;

    renderGameGrid(grid, gridRows, gridCols);

    // Initial placement
    let updatedGrid = placePiece(startCol, startRow, randomPiece, grid);
    console.log("Initial placement:", updatedGrid);

    renderGameGrid(updatedGrid, gridRows, gridCols);

    setTimeout(() => {
        // Move the piece down by one row
        updatedGrid = returnNewGridWithPieceMovedDown(startCol, startRow, randomPiece, gridRows, gridCols);
        renderGameGrid(updatedGrid, gridRows, gridCols);
    }, 500);
}

// Game start

function startGame() {
    renderPieceOnGameGrid();
}

startGame();
