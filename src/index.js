const gridrows = 20;
const gridcols = 10;
const gamegrid = Array.from({ length: gridrows }, () => Array(gridcols).fill(0));

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