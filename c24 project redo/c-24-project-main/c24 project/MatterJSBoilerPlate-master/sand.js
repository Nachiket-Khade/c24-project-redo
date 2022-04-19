class sand{
  constructor(x, y, width, height, angle) {
      var options = {
          'restitution':1.3,
          'friction':5,
          'density':1
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      ellipseMode(CENTER);
      strokeWeight(10);
      stroke("gold");
      fill("gold")
      ellipse(0, 0, this.width, this.height);
      pop();
    }
}