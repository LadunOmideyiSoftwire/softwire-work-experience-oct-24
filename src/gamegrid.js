const rows = 20;
const cols = 10;
const gamegrid = new Array(rows).fill(0).map(() => new Array(cols).fill(0));
for (let y = 0; y < 20; y++) {
    for (let x = 0; x < 10; x++) {       
        console.log(gamegrid[y][x]);
    }
}

