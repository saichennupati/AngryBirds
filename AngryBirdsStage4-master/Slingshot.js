class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        this.sling1=loadImage("sprites/sling1.png");
        this.sling2=loadImage("sprites/sling2.png");
        this.sling3=loadImage("sprites/sling3.png");
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.sling1,200,20);
        image(this.sling2,170,20);
        

        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            
            push();

            if(pointA.x<220){
                strokeWeight(7)
                stroke(42,28,8);
                line(pointA.x-21, pointA.y, pointB.x, pointB.y);
                line(pointA.x-21, pointA.y, pointB.x+29, pointB.y);
                image(this.sling3,pointA.x-31,pointA.y-7,15,15);
            }
            else{
                strokeWeight(3)
                stroke(42,28,8);
                line(pointA.x-21, pointA.y, pointB.x, pointB.y);
                line(pointA.x-21, pointA.y, pointB.x+29, pointB.y);
                image(this.sling3,pointA.x-31,pointA.y-7,15,15);   
            }
            pop();
        }
    }
    
}