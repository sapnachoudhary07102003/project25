class Dustbin{
    constructor(x,y,width,height){
    var options={
        isStatic:true,
        friction:15
    }
    this.body=Bodies.rectangle(x,y,width,height,options);
    this.width=width;
    this.height=height;
    this.x=x;
    this.y=y;
this.dustbin=loadImage("IMAGES/dustbingreen.png");
    World.add(world,this.body);
    }

    display(){
 var pos=this.body.position;
 imageMode(CENTER);

 image(this.dustbin,pos.x,pos.y-60,this.width,150);
    }
}