var howMany = "0";
var disableIncrements = false;
var isOkayPressed = false;
var canvasWidth = 1400;
var canvasHeight = 800;
var ourTree;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  background('grey');
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

  //Elect button
  var timeToElect = createButton("Calculate");
  timeToElect.position(1268, 260);
  timeToElect.mousePressed(electNodes);
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
        drawConnections();
    }

  draw();
}

function drawConnections()
{
  for(var i = 0; i < ourTree.nodes.length; i++)
  {
    for(var j = 0; j < ourTree.nodes[i].connections.length; j++)
    {
      var xfirst = ourTree.nodes[i].xcord + 12.5;
      var yfirst = ourTree.nodes[i].ycord + 12.5;

      var xsecond = ourTree.nodes[ourTree.nodes[i].connections[j]].xcord + 12.5;
      var ysecond = ourTree.nodes[ourTree.nodes[i].connections[j]].ycord + 12.5;

      line(xfirst, yfirst, xsecond, ysecond);
      fill(0);
    }
  }
}

function electNodes()
{
  if(isOkayPressed ==  false)
  {
    draw();
  }
  else
  {
    
  }
}