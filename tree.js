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
            var sv = Math.floor(Math.random() * (this.numNodes - 1));
            var sv2 = Math.floor(Math.random() * (this.numNodes - 1));

            var temp = this.nodes[sv];
            this.nodes[sv] = this.nodes[sv2];
            this.nodes[sv2] = temp;
        }

        var indexValues = [];
        for (var i =0; i < this.numNodes; i++)
        {
            indexValues.push(i);
        }

        for (var i = 0 ;i < this.numNodes - 1; i++)
        {
            this.nodes[i].addConnection(i + 1);
            this.nodes[this.numNodes - 1 - i].addConnection(this.numNodes - 2 - i);
        }

        var randAddConn = Math.floor(Math.random() * (this.numNodes - 1));
        randAddConn = randAddConn + this.numNodes / 2;

        for (var i =0; i < randAddConn; i++)
        {
            var conn1 = -1;
            var conn2 = -1;
            while(conn1 == conn2)
            {
                conn1 = Math.floor(Math.random() * (this.numNodes - 1));
                conn2 = Math.floor(Math.random() * (this.numNodes - 1));
            }
            var alreadyConn = false;
            for (var j =0; j < this.nodes[conn1].connections.length; j++)
            {
                if(this.nodes[conn1].connections[j] == conn2)
                {
                    alreadyConn = true;
                    break;
                }
            }

            if(alreadyConn)
            {
                continue;
            }

            this.nodes[conn1].addConnection(conn2);
            this.nodes[conn2].addConnection(conn1);            
        }
    }

    Elect()
    {
        var retVal = false;

        for(var i =0; i < this.numNodes; i++)
        {
            for(var j = 0; j < this.nodes[i].connections.length; j++)
            {
                if(this.nodes[i].root > this.nodes[this.nodes[i].connections[j]].root)
                {
                    this.nodes[i].root = this.nodes[this.nodes[i].connections[j]].root;

                    this.nodes[i].hops = this.nodes[this.nodes[i].connections[j]].hops + 1;
                    retVal = true;
                }
                else if(this.nodes[i].root == this.nodes[this.nodes[i].connections[j]].root && this.nodes[i].hops < this.nodes[this.nodes[i].connections[j]].hops + 1)
                {
                    this.nodes[i].connections.splice(j, 1);
                    retVal = true;
                }
                else if(this.nodes[i].root == this.nodes[this.nodes[i].connections[j]].root && this.nodes[i].hops > this.nodes[this.nodes[i].connections[j]].hops + 1)
                {
                    this.nodes[i].hops = this.nodes[this.nodes[i].connections[j]].hops + 1;
                    retVal = true;
                }
                else if(this.nodes[i].root < this.nodes[this.nodes[i].connections[j]].root)
                {
                    this.nodes[i].connections.splice(j, 1);
                    retVal = true;
                }
                
            }
            
        }

        return retVal;
    }
}