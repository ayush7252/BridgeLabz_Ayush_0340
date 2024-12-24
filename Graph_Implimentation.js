class Graph{
    constructor(){
        this.list = {};
    }

    addNode(node){
        if(!this.list[node]){
            this.list[node] = []
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
        this.list[node2].push(node1);
    }

    removeNode(node){
        for(let n of this.list[node]){
            this.removeEdge(node , n);
        }
        delete this.list[node];
    }

    removeEdge(node1, node2){
        this.list[node1] = this.list[node1].filter(n =>n !== node2);
        this.list[node2] = this.list[node2].filter(n => n !== node1);
    }

    printList(){
        for(let node in this.list){
            console.log(`${node} -> ${this.list[node]}`);
            
        }
    }
}

let graph = new Graph();

graph.addNode('A');
graph.addNode('B');
graph.addNode('C');
graph.addNode('D');
graph.printList();
graph.addEdge('B', 'D');
graph.addEdge('A', 'D');
graph.addEdge('B', 'C');
graph.printList();
graph.removeNode('B');
graph.printList();
graph.addEdge('A', 'C');
graph.addEdge('A', 'B');
graph.printList();
