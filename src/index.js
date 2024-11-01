const gridRows = 20;
const gridCols = 10;
const gameGrid = Array.from({ length: gridRows }, () => Array(gridCols).fill(0));

const tetrisPiece = [ // creates all possible pieces and various colours
    { shape: [[1, 1, 1, 1]], colour: 'blue' },
    { shape: [[1, 1], [1, 1]], colour: 'yellow' },
    { shape: [[1, 1, 1], [1, 0, 0]], colour: 'pink' },
    { shape: [[1, 1, 1], [0, 0, 1]], colour: 'red' },
    { shape: [[1, 1, 1], [0, 1, 0]], colour: 'green' },   
    { shape: [[1, 1, 0], [0, 1, 1]], colour: 'maroon' },
    { shape: [[0, 1, 1], [1, 1, 0]], colour: 'orange' }
];

function getrandompiece() { // creates a random piece and returns it
    const randomInt = Math.floor(Math.random() * tetrisPiece.length);
    return tetrisPiece[randomInt];
}

const randomPiece = getrandompiece(); // randomizes each piece and corresponding
console.log("random tetris piece:", randomPiece.shape);
console.log("random tetris colour:", randomPiece.colour);
let randomPieceColour = randomPiece.colour;

function placePiece(cols, rows, piece, gameGrid) { // places a piece in the game grid
    for (let i = 0; i < piece.shape.length; i++) {
        for (let j = 0; j < piece.shape[i].length; j++) {
            if (piece.shape[i][j] === 1) {
                gameGrid[rows + i][cols + j] = colourLetter(randomPiece); // Correctly place the piece so that where block occupies is first letter of colour
            }
        }
    }
}

function colourLetter(randomPiece) { 
    let firstLetter = randomPieceColour[0];
    return firstLetter
}

function canPlacePiece(cols, rows, piece) { // checks if a piece can be placed
    for (let i = 0; i < piece.shape.length; i++) {
        for (let j = 0; j < piece.shape[i].length; j++) {
            if (piece.shape[i][j] && 
                (gameGrid[rows + i] === undefined || 
                 gameGrid[rows + i][cols + j] === undefined || 
                 gameGrid[rows + i][cols + j] !== 0)) {
                return false; // Cannot place
            }
            if (rows + i >= gridRows || cols + j >= gridCols){
                return false //outside grid limits
            }      
        }
    }
    return true; // Can place
}

const startRow = 0; // start position for pieces
const startCol = 4;

if (canPlacePiece(startCol, startRow, randomPiece)) { // Check if piece can be placed
    placePiece(startCol, startRow, randomPiece, gameGrid); // Pass the gamegrid
    console.log("Piece placed.");
} else {
    console.log("Cannot place");
}

function renderGrid(gameGrid) { // renders the gamegrid
    for (let row of gameGrid) {
        console.log(row.join(' '));
    }
}

renderGrid(gameGrid); // Render the grid after placing a piece