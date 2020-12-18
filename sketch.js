var thickness;
var speed;
var weight;
var wall;
var damage;

function setup() {

  createCanvas(1550,750);
  bullet=createSprite(200, 375, 30, 30);
  wall=createSprite(1400,375,thickness,height/2);
  speed=random(223,321);
  bullet.velocityX=speed;
  weight=random(50,52);
  thickness=random(22,83);
  bullet.shapeColor="blue";
  wall.shapeColor="blue";

}

function draw() {
  background(0);  
  
  fill ("red");
  textSize(30);
  text("BULLETS AND WALLS",575,100);

  if (bulletTouching(bullet,wall)){
    bullet.velocityX=0;
    damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
    
    if(damage>10)
    {
       background("red");
       fill ("green");
       textSize(30);
       text("WALL IS NOT EFFECTIVE",575,100);
    }

    if(damage<10)
    {
       background("green");
       fill ("red");
       textSize(30);
       text("WALL IS EFFECTIVE",575,100);
    }
  }

  drawSprites();
}

