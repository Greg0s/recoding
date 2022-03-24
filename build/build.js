var gui = new dat.GUI();
var params = {
    Number_of_lines: 19,
    Number_of_columns: 14,
    Number_of_vertices: 23,
    Random_seed: 1,
    Download_Image: function () { return save(); },
};
gui.add(params, "Number_of_lines", 1, 100, 1);
gui.add(params, "Number_of_columns", 1, 100, 1);
gui.add(params, "Number_of_vertices", 2, 50, 1);
gui.add(params, "Random_seed", 0, 100, 1);
gui.add(params, "Download_Image");
function draw() {
    randomSeed(params.Random_seed);
    background("white");
    noFill();
    strokeWeight(1);
    var y_draw, x_draw;
    var firstLoop;
    var changed = 0;
    for (var x = 0; x < params.Number_of_columns; x++) {
        for (var y = 0; y < params.Number_of_lines; y++) {
            firstLoop = 0;
            beginShape();
            for (var k = 1; k <= params.Number_of_vertices; k++) {
                if (k == 1) {
                    x_draw = random((x + 0.75) * (width / params.Number_of_columns), (x) * (width / params.Number_of_columns));
                    y_draw = random((y + 0.75) * (height / params.Number_of_lines), (y) * (height / params.Number_of_lines));
                }
                else if (k % 2 == 0) {
                    x_draw = random((x + 0.75) * (width / params.Number_of_columns), (x) * (width / params.Number_of_columns));
                }
                else {
                    y_draw = random((y + 0.75) * (height / params.Number_of_lines), (y) * (height / params.Number_of_lines));
                }
                if (firstLoop == 0) {
                    x_draw_start = x_draw;
                    y_draw_start = y_draw;
                    firstLoop = 1;
                }
                vertex(x_draw, y_draw);
            }
            vertex(x_draw_start, y_draw_start);
            endShape();
        }
    }
}
function menu() {
}
function setup() {
    p6_CreateCanvas();
}
function windowResized() {
    p6_ResizeCanvas();
}
var __ASPECT_RATIO = 1;
var __MARGIN_SIZE = 25;
function __desiredCanvasWidth() {
    var windowRatio = windowWidth / windowHeight;
    if (__ASPECT_RATIO > windowRatio) {
        return windowWidth - __MARGIN_SIZE * 2;
    }
    else {
        return __desiredCanvasHeight() * __ASPECT_RATIO;
    }
}
function __desiredCanvasHeight() {
    var windowRatio = windowWidth / windowHeight;
    if (__ASPECT_RATIO > windowRatio) {
        return __desiredCanvasWidth() / __ASPECT_RATIO;
    }
    else {
        return windowHeight - __MARGIN_SIZE * 2;
    }
}
var __canvas;
function __centerCanvas() {
    __canvas.position((windowWidth - width) / 2, (windowHeight - height) / 2);
}
function p6_CreateCanvas() {
    __canvas = createCanvas(__desiredCanvasWidth(), __desiredCanvasHeight());
    __centerCanvas();
}
function p6_ResizeCanvas() {
    resizeCanvas(__desiredCanvasWidth(), __desiredCanvasHeight());
    __centerCanvas();
}
var p6_SaveImageSequence = function (durationInFrames, fileExtension) {
    if (frameCount <= durationInFrames) {
        noLoop();
        var filename_1 = nf(frameCount - 1, ceil(log(durationInFrames) / log(10)));
        var mimeType = (function () {
            switch (fileExtension) {
                case 'png':
                    return 'image/png';
                case 'jpeg':
                case 'jpg':
                    return 'image/jpeg';
            }
        })();
        __canvas.elt.toBlob(function (blob) {
            p5.prototype.downloadFile(blob, filename_1, fileExtension);
            setTimeout(function () { return loop(); }, 100);
        }, mimeType);
    }
};
//# sourceMappingURL=../src/src/build.js.map