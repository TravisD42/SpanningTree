var howMany = "0";
var disableIncrements = false;
var isOkayPressed = false;
var canvasWidth = 1400;
var canvasHeight = 800;
var ourTree;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  //background('grey');
  background(100, 0, 100);
}

function draw() {
  line(1200, 0, 1200, 800);

  textSize(18);
  text("Number of Nodes", 1230, 100);

  var white = color("white");
  fill(white);
  totalNodes = rect(1263, 120, 75, 75);
  var black = color("black");
  fill(black);
  textSize(32);
  totalNodes.text(howMany, 1292, 168);

  //Increase button
  var nodeIncrease = createButton("+");
  nodeIncrease.position(1263, 200);
  nodeIncrease.mousePressed(increase);

  //Decrease button
  var nodeDecrease = createButton("-");
  nodeDecrease.position(1319, 200);
  nodeDecrease.mousePressed(decrease);

  //Okay button
  var nodesDecided = createButton("Okay");
  nodesDecided.position(1280, 230);
  nodesDecided.mousePressed(initializeNodes);
}

function increase() {
  if (isOkayPressed == false) {
    var rn = parseInt(howMany);

    if (rn == 9) {
    } else {
      rn = rn + 1;
      howMany = rn;
    }
    draw();
  } else {
  }
}

function decrease() {
  if (isOkayPressed == false) {
    var rn = parseInt(howMany);
    if (rn == 0) {
    } else {
      rn = rn - 1;
      howMany = rn;
    }
    draw();
  } else {
  }
}

function initializeNodes() 
{
    if (isOkayPressed == true) 
    {
        console.log("Okay has already been pressed");
    } 
    else 
    {
        isOkayPressed = true;
        disableIncrements = true;
        //   Make X amount of Nodes

        ourTree = new Tree(howMany);

        ourTree.InitializeTree();

        for (var i = 0; i < howMany; i++) 
        {
            var randomWidth = Math.floor(Math.random() * canvasWidth);
            var randomHeight = Math.floor(Math.random() * canvasHeight);
            rect(randomWidth, randomHeight, 25, 25);
            fill(0);
        }
    }

  draw();
}

