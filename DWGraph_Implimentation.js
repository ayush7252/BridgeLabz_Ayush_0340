class Graph{
    constructor(){
        this.list = {};
    }

    addNode(node){
        if(!this.list[node]){
            this.list[node]= [];
        }
    }

    addEdge(node1,node2, weight){
        if(!this.list[node1]){
            this.addNode(node1);
        }
        if(!this.list[node2]){
            this.addNode(node2);
        }
        this.list[node1].push({node:node2, weight: weight});
    }

    removeNode(node){
        for(let n of this.list[node]){
            this.removeEdge(node , n);
        }
        delete this.list[node];
    }

    removeEdge(node1, node2){
        if(this.list[node1]){
            this.list[node1] = this.list[node1].filter(edge => edge.node !== node2);
        }
    }

    printGraph(){
        for(let node in this.list){
            console.log(node + ' ->'+ this.list[node].map(edge => edge.node + ':'+ edge.weight).join(', '));
        }
    }
}

let graph = new Graph();

graph.addNode('A');

graph.addNode('B');

graph.addNode('C');

graph.addEdge('A', 'B', 1);

graph.addEdge('A', 'C', 2);

graph.addEdge('B', 'C', 3);

graph.printGraph();