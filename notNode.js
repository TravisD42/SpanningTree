;

class Node {
  constructor() {
    //Points to itself, unless its finds its not the root, then point there
    this.root = ""; //Current idea of root
    this.hops = 0; //How many hops to the root
    this.me = ""; //Personal priority
    this.connections = []; //List of other nodes connected to

    var randomWidth = Math.floor(Math.random() * canvasWidth);
    if (randomWidth > 1170) {
      randomWidth = randomWidth - 250;
    }
    this.xcord = randomWidth;

    var randomHeight = Math.floor(Math.random() * canvasHeight);
    if (randomHeight > 775) {
      randomHeight = randomHeight - 50;
    }
    this.ycord = randomHeight;

    rect(randomWidth, randomHeight, 25, 25);
    fill(0);
  }

  setValue(name) {
    this.me = name;
  }

  setRoot(newRoot) {
    this.root = newRoot;
  }

  setHops(numHops) {
    this.hops = numHops;
  }

  addConnection(newConnection) {
    this.connections.push(newConnection);
  }

  severConnection() {}
}
