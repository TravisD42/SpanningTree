;

class Tree
{
    constructor(numNodes)
    {
        this.root = null;
        this.numNodes = numNodes;
        this.nodes = [];
    }

    InitializeTree()
    {
        //Create all nodes
        for(var i = 0; i < this.numNodes; i++)
        {
            this.nodes.push(new Node());
        }

        // Assign the "me" of Node: named A - Z
        var startValue = 'A'.charCodeAt(0);
        var endValue = 'Z'.charCodeAt(0);
        
        if(this.numNodes > endValue)
        {
            new Error('The number of Nodes is greater than 26.');
        }

        for(var i  = 0; i < this.numNodes; ++startValue)
        {   
            this.nodes[i].assignValue(String.fromCharCode(startValue));
        }
    }

    Elect()
    {

    }
}