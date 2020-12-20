var wall,bullet
var speed,weight
var thickness

function setup(){
    createCanvas(1600,400);
    speed=random(223,321)
    weight=random(30,52)
    thickness=random(22,83)
    bullet=createSprite(50,200,40,30);
    bullet.shapeColor=color(80,80,80);
    bullet.velocityX=speed;

    wall=createSprite(1000,200,thickness,height/2)
    wall.shapeColor=(80,80,80)
    
    

}

function draw(){
    background(0)
    hasCollider(bullet,wall)
    
    
    
    drawSprites()
}

function hasCollider(b,w){

    if(w.x-b.x < (b.width+w.width)/2)
    {
        b.velocityX=0
        var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)
        if(damage>10)
        {
            w.shapeColor=color(255,0,0)
        }
        else{
            w.shapeColor=color(0,255,0)
        }

    }
}