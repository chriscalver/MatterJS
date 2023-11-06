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
        wireframe: false
      }

});


// ***********************************************************************
// Step Three - Make objects

function setup() {
  // let boxA = Bodies.rectangle(200, 100, 80, 80);
  let ground = Bodies.rectangle(200, 480, 810, 60, { isStatic: true })



// ***********************************************************************
// Step Four - Add bodies to world

  Composite.add(engine.world, ground);
  let boxA = Bodies.rectangle(200, 100, 80, 80);
  Composite.add(engine.world, boxA);


// ***********************************************************************
// Step Five - Run engine and renderer

Matter.Runner.run(engine);
Render.run(render);



  //createCanvas(400, 400);
}

function draw() {
  
}