class Game{
    constructor(){

    }
    getState(){
        var gameStateRef=database.ref("gameState");
        gameStateRef.on("value",function(data){
            gameState=data.val()
        })
    }
    update(state){
        database.ref("/").update({
            gameState:state
        })
    }
    start(){
        if(gameState===0){
            form=new Form();
            form.display();
            player=new Player();
            player.getCount();
        }
    }
    play(){
        form.hide();
        textSize(25);
        text("Game Starts",100,100);
        Player.getPlayerInfo()
        var displayPosition=130;
        for(var i in allPlayers){
            if(i==="player"+player.index)
            fill("red");
            else{
                fill("black");
            }
            displayPosition=displayPosition+20;
            text(allPlayers[i].name+":"+ allPlayers[i].distance,120,displayPosition)

        }

    }
    if(keyIsDown(UP_ARROW) && player.index !== null){ 
        player.distance = player.distance+50
         player.update(); 
        }

    
}


