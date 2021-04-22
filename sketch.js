var bouncer;
var rebounder;
var hunter;
var runner;
var walker;
var sitter;

function setup() {
  createCanvas(450, 450);
  bouncer = new ColoredBouncyBalls (5, -10);
  rebounder = new ColoredBouncyBalls (10, 5);
  shooter = new ColoredBouncyBalls (15, -2)
  runner = new ColoredBouncyBalls (20, -6);
  walker = new ColoredBouncyBalls (25, -7);
  sitter = new ColoredBouncyBalls (30, -60);
}

function draw() {
  background(0,0,230);
  bouncer.show();
  bouncer.move();
  bouncer.bounce();
  rebounder.show2();
  rebounder.move();
  rebounder.bounce();
  shooter.show3();
  shooter.move();
  shooter.bounce();
  runner.show4();
  runner.move();
  runner.bounce();
  walker.show5();
  walker.move();
  walker.bounce();
  sitter.show6();
  sitter.move();
  sitter.bounce();
}