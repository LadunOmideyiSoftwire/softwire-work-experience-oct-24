
const tetrispiece = [
    { shape: [[1,1,1,1]], colour: 'cerulean blue'},
    { shape: [[1,1], [1,1]], colour: 'honey yellow'},
    { shape: [[1,1,1], [1,0,0]], colour: 'flurescent pink'},
    { shape: [[1,1,1], [0,0,1]], colour: 'brick red'},
    { shape: [[1,1,1], [0,1,0]], colour: 'mint green'},   
    { shape: [[1,1,0], [0,1,1]], colour: 'bauge'},
    { shape: [[0,1,1], [1,1,0]], colour: 'rose gold'}
];
function getrandompiece(){
    const randomint = Math.floor(Math.random()*tetrispiece.length);
    return tetrispiece[randomint];
}
const Randompiece = getrandompiece();
 console.log("random tetris piece:" ,Randompiece.shape);
console.log("random tetris colour:" ,Randompiece.colour);
