// import Tree from 'tree.js';
// var howMany = '0';
// var disableIncrements = false;
// var isOkayPressed = false;
// // myTree = new Tree(10);

// // if statement to declare howMany placement in the box to keep it centered.

// function setup() 
// {
//     createCanvas(1400, 800);
//     //background('grey');
//     background(100, 0, 100);
// }

// function draw()
// {
//   line(1200, 0, 1200, 800);

//   textSize(18);
//   text('Number of Nodes', 1230, 100);
 
//   var white = color('white');
//   fill(white);
//   totalNodes = rect(1263, 120, 75, 75);
//   var black = color('black');
//   fill(black);
//   textSize(32);
//   totalNodes.text(howMany, 1292, 168);

//   var nodeIncrease = createButton('+');
//   nodeIncrease.position(1263,200);
//   nodeIncrease.mousePressed(increase);

//   var nodeDecrease = createButton('-');
//   nodeDecrease.position(1319, 200);
//   nodeDecrease.mousePressed(decrease);
  
//   var nodesDecided = createButton('Okay');
//   nodesDecided.position(1280,230);
//   // Prevent reinitialization while initializing
//   if(disableIncrements != true)
//   {
//     isOkayPressed == true;
//     nodesDecided.mousePressed(initializeNodes());
//   }
  
//   //.mousePressed(drawTree());
// }
  
// function increase()
// {
//     if (isOkayPressed == false)
//     {
//         var rn = parseInt(howMany);

//         if (rn == 9)
//         {

//         }
//         else
//         {
//             rn = rn + 1;
//             howMany = rn;
//         }
//         draw(); 
//     }
//     else
//     {

//     }   
// }

// function decrease()
// {
//     if (isOkayPressed == false)
//     {
//         var rn = parseInt(howMany);
//         if(rn == 0)
//         {
            
//         }
//         else
//         {
//             rn = rn - 1;
//             howMany = rn;
//         }
//         draw(); 
//     }
//     else
//     {

//     }
// }

// function initializeNodes()
// {
//     //Can't increase or decrease so make it so the + and - buttons don't effect

//     //Okay can't be pressed anymore

//     //Make X amount of Nodes 

//     //Make Random amount of connections 

//     var nodeHeight = 50;
//     var nodeWidth = 50;
    
// }

// /*function drawTree()
// {
//     //Can't increase or decrease so make it so the + and - buttons don't effect 
//     var nodeHeight = 50;
//     var nodeWidth = 50;


    
// }*/