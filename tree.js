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
        
        for(var i  = 0; i < this.numNodes; i++)
        {   
            this.nodes[i].setValue(String.fromCharCode(startValue));
            this.nodes[i].setRoot(String.fromCharCode(startValue));
            startValue++;
        }

        for(var i = 0; i < this.numNodes / 2; i++)
        {
            var sv = Math.floor(Math.random() * this.numNodes - 1);
            var sv2 = Math.floor(Math.random() * this.numNodes - 1);

            var temp = this.nodes[sv];
            this.nodes[sv] = this.nodes[sv2];
            this.nodes[sv2] = temp;
        }
    }

    Elect()
    {

    }
}