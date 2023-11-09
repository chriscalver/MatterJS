// ******************************************************************
//Step One - Add essential modules

let Engine = Matter.Engine,
  Render = Matter.Render,
  Runner = Matter.Runner,
  Bodies = Matter.Bodies,
  Composite = Matter.Composite;

// *******************************************************************
//Step Two - Create engine and renderer

let engine = Engine.create();
let render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    width: 500,
    height: 500,
    wireframe: false,
  },
});
engine.gravity.x = 0;      // wind
engine.gravity.y = 0.5;   // gravity


// ***********************************************************************
// Step Three - Make objects

function setup() {
  //let boxA = Bodies.rectangle(200, 100, 80, 80);
  let ground = Bodies.rectangle(200, 480, 810, 60, { isStatic: true });
  let ramp1 = Bodies.rectangle(300, 380, 300, 20, { isStatic: true });
  Matter.Body.rotate(ramp1, -0.3);
  let ball = Bodies.circle(200, -800, 15);
  let boxA = Bodies.rectangle(200, 100, 18, 18);

  // ***********************************************************************
  // Step Four - Add bodies to world

  Composite.add(engine.world, ground);
  Composite.add(engine.world, boxA);
  Composite.add(engine.world, ball);
  Composite.add(engine.world, ramp1);

  // ***********************************************************************
  // Step Five - Run engine and renderer

  Matter.Runner.run(engine);
  Render.run(render);

  //createCanvas(400, 400);
}

function draw() {

  Composite.add(engine.world, ball);
}
