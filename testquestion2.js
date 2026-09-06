function setup(){
createCanvas(600,400);
background(220);
}
function draw(){
for( let i =0; i<10; i++){
fill(0 +i*50);
circle(50*i+50,60 +i*60,60);
}

}