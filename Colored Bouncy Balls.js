class ColoredBouncyBalls {
  constructor(xSpeed, ySpeed) {
    this.pos = createVector(100, 100);
    this.vel = createVector(xSpeed, ySpeed);
  }

  show() {
    fill(255, 0, 0);
    noStroke();
    circle(this.pos.x, this.pos.y, 30);
  }
  
  show2() {
    fill(0,0,255);
    noStroke();
    circle(this.pos.x, this.pos.y, 30);
  }
  
  show3(){
    fill(255,0,255);
    noStroke();
    circle(this.pos.x, this.pos.y, 30);
  }
  
  show4(){
    fill(0,255,0);
    noStroke();
    circle(this.pos.x, this.pos.y, 30);
  }
  
  show5(){
    fill(0,255,255);
    noStroke();
    circle(this.pos.x, this.pos.y, 30);
  }
  
  show6(){
    fill('0BFFC7');
    noStroke();
    circle(this.pos.x, this.pos.y, 30);
  }

  move() {
    this.pos.sub(this.vel);
  }

  bounce() {
    if (this.pos.x > width || this.pos.x < 0) this.vel.x *= -1;
    if (this.pos.y > height || this.pos.y < 0) this.vel.y *= -1;
  }
}