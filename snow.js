class Snow{

    constructor(x,y,radius) {
        var options = {
            'isStatic' :false,
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
            
        }

        this.body = Bodies.circle(x,y,radius, options);
        this.r = radius;
        this.image = loadImage("snow5.webp");
        World.add(world, this.body);
    }
    
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.r,this.r);
        pop();
    }
}