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

    dijkstra(start){
        const distance = {};
        const previous = {};
        const pq = [];
        for(let node in this.list){
            distance[node] = Infinity;
            previous[node] = null;
            pq.push({node: node , distance: distance[node]});
        }
        distance[start] = 0;
        pq.sort((a,b) => a.distance - b.distance);
        while(pq.length > 0){
            const curr = pq.shift();
            const currName = curr.node;
            if(curr.distance === Infinity){
                break;
            }
            for(let neighbor of this.list[currName]){
                const neighborNode = neighbor.node;
                const weight = neighbor.weight;
                const alternativeDist = distance[currName] + weight;
                if(alternativeDist < distance[neighborNode]){
                    distance[neighborNode] = alternativeDist;
                    previous[neighborNode] = currName;
                    const neighborIdx = pq.findIndex(n => n.node === neighborNode);
                    pq[neighborIdx].distance = alternativeDist;
                    pq.sort((a,b) => a.distance - b.distance);
                }
            }
        }
        return {distance, previous};
    }

    getPath(previous, target) {
        const path = [];
        let currentNode = target;
    
        while (currentNode !== null) {
            path.push(currentNode);
            currentNode = previous[currentNode];
        }
    
        return path.reverse();
    }
}

const graph = new Graph();
graph.addNode('A');
graph.addNode('B');
graph.addNode('C');
graph.addNode('D');
graph.addNode('E');
graph.addEdge('A', 'B', 2);
graph.addEdge('A', 'C', 4);
graph.addEdge('B', 'C', 1);
graph.addEdge('B', 'D', 7);
graph.addEdge('C', 'D', 3);
graph.addEdge('C', 'E', 5);
graph.addEdge('D', 'E', 1);

const { distances, previous } = graph.dijkstra('A');
console.log("Shortest distances from A:");
console.log(distances);
console.log("Shortest path from A to E:");
const path = graph.getPath(previous, 'E');
console.log(path);