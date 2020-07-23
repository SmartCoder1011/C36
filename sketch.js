var canvas, database, form, game, player, playerCount;
var gameState=0;
var allPlayers=[];

function setup(){
  canvas=createCanvas(400,400);
  database = firebase.database();
game=new Game()
game.getState()
game.start()
}

function draw(){

}

