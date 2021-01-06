class Dustbin
{
 constructor(x, y, width, height)
 {
    var option=
    {
        isStatic: true
    }
    this.body= Bodies.rectangle(x, y, width, height, option)
    this.width= width;
    this.height= height;
    World.add(world, this.body);
    //this.image = loadImage("dustbin1.png");
 }

 display()
 {
  var angle = this.body.angle;
  push();
  translate(this.body.position.x, this.body.position.y);
  rotate(angle);
  rectMode(CENTER);
  fill("black")
  rect(0, 0, this.width, this.height);
  pop();
 }

}