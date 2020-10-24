function preload(){

}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center() 
}
function draw(){
    fill('red');
    stroke('blue')
circle(200,200,50)

}
function take_snapshot(){
save("MyFilterPhoto");
}
