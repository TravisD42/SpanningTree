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

    assignValue(name)
    {
         this.me = name;
    }
}