// Your solution goes here
let game = {};
game['lives'] = 3;game['coins'] = 0;
console.log(game);
Object.defineProperty(game, 'points', {
  get: function() {    return (this.coins * 10);
  },});
Object.defineProperty(game, 'playerDies', {
    value: function(){        if (this.lives >0){
            this.lives = this.lives -1 ;        }
    }});

Object.defineProperty(game, 'newGame', {    value: function(){
        this.lives = 3;        this.coins = 0;
    }});

console.log("lives = " + game.lives);    // should be 3
console.log("coins = " + game.coins);    // should be 0
console.log("points = " + game.points);  // should be 0
game.coins = 2;
console.log("points = " + game.points);  // should be 20
game.playerDies();
console.log("lives = " + game.lives);    // should be 2
game.playerDies();
game.playerDies();
game.playerDies();
console.log("lives = " + game.lives);    // should be 0
game.newGame();
console.log("lives = " + game.lives);    // should be 3
console.log("coins = " + game.coins);    // should be 0