class PlayerBase{

    constructor(x,y,width, height){
        var options1={
            isStatic:true,
        };
    
        this.body=Bodies.rectangle(x, y, width, height, options1);
        this.width=width;
        this.height=height
        this.image= loadImage("./assets/base1.png");
        World.add(world, this.body)
    
    }
    
    display(){
    
    var pos= this.body.position;
    var angle= this.body.angle;
    
    push();
    translate(pos.x, pos.y)
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height)
    pop();
    }
    
    }