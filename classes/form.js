class Form{
    constructor(){
        this.input=createInput("name");
        this.button=createButton("play")
        this.greeting=createElement("h2")
    }
    hide(){
        this.button.hide();
        this.greeting.hide();
        this.input.hide();a
    }
    display(){
        var title = createElement('h1')
        title.html("Car Racing Game")
        title.position(100,10);
        //var input = createInput('name');
        this.input.position(100,100)
        //var button = createButton('Submit')
        this.button.position(150,150);
        //var greeting = createElement('h3');
        
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            this.greeting.position(100,120);
            this.greeting.html("Hello "+player.name)
            playerCount = playerCount+1;
            player.updateCount(playerCount);
            player.update();
        })
    }
}