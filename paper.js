class Paper{
    constructor(x,y,radius){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:15,
            density:1.2
        }
       this.body=Bodies.circle(x,y,radius,options);
        this.x=x;
        this.y=y;
        this.radius=radius;
        this.image =loadImage("IMAGES/paper.png")

        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        push() ;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,40,40);
        pop();
        
        
           }
}