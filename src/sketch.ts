// -------------------
//  Parameters and UI
// -------------------

const gui = new dat.GUI()
const params = {
    Number_of_lines: 19,
    Number_of_columns: 14,
    Number_of_vertices: 23,
    Random_seed : 1,
    Download_Image: () => save(),
}
gui.add(params, "Number_of_lines", 1, 100, 1)
gui.add(params, "Number_of_columns", 1, 100, 1)
gui.add(params, "Number_of_vertices", 2, 50, 1)
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

  let y_draw, x_draw;
  let firstLoop;
  let changed = 0;

  for(let x = 0 ; x < params.Number_of_columns ; x++){//nb of lines
    for(let y = 0 ; y < params.Number_of_lines ; y++){//nb of columns

      firstLoop = 0;
      beginShape();
      
      for(let k = 1; k <= params.Number_of_vertices; k++){//number of segments of each draw
        if(k==1){
          x_draw = random((x + 0.75) * (width / params.Number_of_columns), (x) * (width/params.Number_of_columns));
          y_draw = random((y + 0.75) * (height / params.Number_of_lines), (y) * (height /params.Number_of_lines));
        }else if(k%2 == 0){
          x_draw = random((x + 0.75) * (width / params.Number_of_columns), (x) * (width/params.Number_of_columns));
        }else{
          y_draw = random((y + 0.75) * (height / params.Number_of_lines), (y) * (height /params.Number_of_lines));
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
