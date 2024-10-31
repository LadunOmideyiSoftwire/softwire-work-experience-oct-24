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



