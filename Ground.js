class Ground{
    constructor(x,y,width,height){
  var object_option = {isStatic:true}
  this.body = Bodies.rectangle(x,y,width,height,object_option);

  this.width = 1500
  this.height = 20;

  World.add(world,this.body);
    }
    display(){
         
        var c = this.body.position;
        fill("red");
        rectMode(CENTER);
        rect(c.x,c.y,this.width,this.height);

    }
}