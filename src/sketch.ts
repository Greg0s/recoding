// -------------------
//  Parameters and UI
// -------------------

const gui = new dat.GUI()
const params = {
    Number_of_lines: 19,
    Number_of_columns: 14,
    Random_seed : 1,
    Download_Image: () => save(),
}
gui.add(params, "Number_of_lines", 1, 100, 1)
gui.add(params, "Number_of_columns", 1, 100, 1)
gui.add(params, "Random_seed", 0, 100, 1)
gui.add(params, "Download_Image")

// -------------------
//       Drawing
// -------------------

function draw() {
  randomSeed(params.Random_seed);
  background("white");

  noFill();
  strokeWeight(1);

  let nbColumns = params.Number_of_columns;
  let nbLines = params.Number_of_lines;
  let y_draw, x_draw;
  let firstLoop;
  for(let x = 0 ; x < nbColumns ; x++){//nb of lines
    for(let y = 0 ; y < nbLines ; y++){//nb of columns
     
      firstLoop = 0;
      beginShape();
      for(let k = 1; k < 23; k++){//number of segments of each draw
        if(k%2 == 0){
          x_draw = random((x + 0.75) * (width / nbColumns), (x) * (width/nbColumns));
        }else{
          y_draw = random((y + 0.75) * (height / nbLines), (y) * (height /nbLines));
        }
        if(firstLoop == 0){
          x_draw_start = x_draw;
          y_draw_start = y_draw;
          firstLoop = 1;
        }
      vertex(x_draw, y_draw);
      }
      vertex(x_draw_start, y_draw_start);
      
      endShape()
    }
  }
}

// -------------------
//    Menu
// -------------------

// -------------------
//    Initialization
// -------------------

function menu(){

}

function setup() {
    p6_CreateCanvas();
}

function windowResized() {
    p6_ResizeCanvas()
}
