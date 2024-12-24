class Graph{
    constructor(){
        this.list = {};
    }

    addNode(node){
        if(!this.list[node]){
            this.list[node] = [];
        }
    }

    addEdge(node1, node2){
        if(!this.list[node1]){
            this.addNode(node1);
        }
        if(!this.list[node2]){
            this.addNode(node2);
        }
        this.list[node1].push(node2);
    }

    removeNode(node){
        for(let n of this.list[node]){
            this.removeEdge(node , n);
        }
        delete this.list[node];
    }

    removeEdge(node1 , node2){
        this.list[node1] = this.list[node1].filter(n => n !== node2);
    }
    printList(){
        for(let n in this.list){
            console.log(`${n} -> ${this.list[n].join(', ')}`);
        }
    }

}

let graph1 = new Graph();

graph1.addNode('A');
graph1.addNode('B');
graph1.addNode('C');
graph1.addNode('D');
graph1.addNode('E');

graph1.printList();

graph1.addEdge('A', 'B');

graph1.addEdge('A', 'C');

graph1.addEdge('B', 'D');

graph1.addEdge('C', 'E');
graph1.printList();

graph1.removeNode('A');

graph1.printList();
