;

class Node
{
    constructor()
    {
        //Points to itself, unless its finds its not the root, then point there
        this.root = "";         //Current idea of root
        this.hops = 0;          //How many hops to the root
        this.me = "";           //Personal priority
        this.connections = [];  //List of other nodes connected to
    }

    setValue(name)
    {
        this.me = name;
    }

    setRoot(newRoot)
    {
        this.root = newRoot;
    }

    setHops(numHops)
    {
        this.hops = numHops;
    }

    addConnection(newConnection)
    {
        this.connections.push(newConnection);
    }

    severConnection()
    {
        
    }
}