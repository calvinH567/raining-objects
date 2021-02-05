class Drops {
    constructor(x,y){
        this.empty = []

        this.x = x;
        this.y = y;
        this.body = Bodies.circle(this.x,this.y,10);
        World.add(world,this.body)
    }

    display(){
        push()
        var pos = [this.body.position.x,this.body.position.y];
        this.empty.push(pos);
        ellipseMode(RADIUS);
        fill("blue")
        ellipse(this.empty[0][0],this.empty[0][1],10);
        if(this.body.position.y>1000||this.body.position.y<0){
          //  World.remove(world,this.body);
            Matter.Body.setPosition(this.body,{x:random (0,400),y:random (0,500)});
            
        }
        console.log(this.body.position.y)
        this.empty.pop();
        
        pop()       
    }
}