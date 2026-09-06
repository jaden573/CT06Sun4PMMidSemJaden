function setup(){
createCanvas(600,600);
background(220);
}
function draw(){
for( let i =0; i<10; i++){
fill(0 +i*30);
circle(50*i+50,50 +i*50,50);
}

}