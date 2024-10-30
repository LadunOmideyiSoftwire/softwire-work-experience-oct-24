let rows = 20;
let cols = 10;
let gamegrid = new Array(rows).fill(0).map(() => new Array(cols).fill(0));
for (let y = 0; y < 20; y++) {
    for (let x = 0; x < 10; x++) {       
        console.log(gamegrid[y][x]);
    }
}

