function setup() {
    createCanvas(g.artboard.w, g.artboard.h);
    background(230);
    fill(170);
    _rightOf(// learn a bit of processing!
    // Try out our "tiles" library <_rightOf>, <_below> ( thanks dxnn :)
    // How a bout some macros? infix macros...
    // for (var i = 0; i < 10; i++) {
    //   rect( 50 * i, 50, 50, 50)
    // }
    // rect( 50, 50, 50, 50)
    // rect( 100, 50, 50, 50)
    // rect( 100, 100, 50, 50)
    // _below(_rightOf(square, square), _rightOf(square, square))
    // _rightOf(square, square)
    // _below(
    //   _below(_rightOf(square, square), _rightOf(square, square)),
    //   _below(_rightOf(square, square), _rightOf(square, square))
    // _below(_rightOf(square, square), _below(square, square))
    // )
    square | square);
}
function draw() {
    let shapes = linearize(shape_tree);
    shapes.forEach(draw_shape);
}