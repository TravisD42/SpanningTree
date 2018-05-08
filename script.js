var howMany = "0";
var disableIncrements = false;
var isOkayPressed = false;
var canvasWidth = 1400;
var canvasHeight = 800;
// myTree = new Tree(10);

// if statement to declare howMany placement in the box to keep it centered.

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
  if (nodesDecided.mousePressed() > 0) {
    console.log("Okay Button is pressed");
    isOkayPressed = true;
  }
  // Prevent reinitialization while initializing
  if (disableIncrements != true) {
    isOkayPressed == true;
    nodesDecided.mousePressed(initializeNodes());
  }

  if (isOkayPressed == true) {
    console.log("We made it");
    var randomWidth = Math.floor(Math.random() * canvasWidth);
    var randomHeight = Math.floor(Math.random() * canvasHeight);

    for (var i = 0; i < howMany; i++) {
      rect(randomWidth, randomHeight, 25, 25);
      fill(255);
      draw();
    }
  }

  //.mousePressed(drawTree());
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

function initializeNodes() {
  if (isOkayPressed == true) {
    console.log("HERE I AM DADDY");
    var randomWidth = Math.floor(Math.random() * canvasWidth);
    var randomHeight = Math.floor(Math.random() * canvasHeight);

    for (var i = 0; i < howMany; i++) {
      rect(randomWidth, randomHeight, 25, 25);
      fill(255);
      draw();
    }
  }

  //Can't increase or decrease so make it so the + and - buttons don't effect

  //Okay can't be pressed anymore

  //Make X amount of Nodes

  //Make Random amount of connections

  var nodeHeight = 50;
  var nodeWidth = 50;
}

/*function drawTree()
{
    //Can't increase or decrease so make it so the + and - buttons don't effect 
    var nodeHeight = 50;
    var nodeWidth = 50;

}*/

var nodeValue = 1;
var nodeID = "";

function generateNode(nodeValue, nodeID) {
  // Create a node at a random location;

  var node = document.createElement("input");
  node.type = "text";
  //document.appendChild(node);
  node.getElementById(nodeID).nodeValue;
  node.style.backgroundColor = "blue";
}
