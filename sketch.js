function setup() {
  createCanvas(1000, 800);
   background("white");
}


function draw() {
  
  stroke ("#472780");
  fill ("#00020C");
 
  
  // console.log(mouseIsPressed);
  
  if (mouseIsPressed){
  circle (mouseX, mouseY, 20, 35);
  }
}
