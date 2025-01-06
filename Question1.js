function dijkstra(graph, source) {
    const distances = {};
    const visited = new Set();
    const priorityQueue = new PriorityQueue();
    
    for (let node in graph) {
        distances[node] = Infinity;
    }
    distances[source] = 0;
    
    priorityQueue.enqueue(source, 0);
    
    while (!priorityQueue.isEmpty()) {
        const currentNode = priorityQueue.dequeue();
        const currentDistance = distances[currentNode];
        
        if (visited.has(currentNode)) continue;
        visited.add(currentNode);
        
        for (let neighbor in graph[currentNode]) {
            if (visited.has(neighbor)) continue;
            
            const weight = graph[currentNode][neighbor];
            const newDistance = currentDistance + weight;
            
            if (newDistance < distances[neighbor]) {
                distances[neighbor] = newDistance;
                priorityQueue.enqueue(neighbor, newDistance);
            }
        }
    }

    return distances;
}

class PriorityQueue {
    constructor() {
        this.queue = [];
    }

    enqueue(node, priority) {
        this.queue.push({ node, priority });
        this.queue.sort((a, b) => a.priority - b.priority);
    }

    dequeue() {
        return this.queue.shift().node; 
    }

    isEmpty() {
        return this.queue.length === 0;
    }
}

const graph = {
    1: { 2: 4, 3: 2 },
    2: { 1: 4, 4: 7, 5: 1 },
    3: { 1: 2, 6: 5 },
    4: { 2: 7 },
    5: { 2: 1, 6: 3 },
    6: { 3: 5, 5: 3 }
};

const source = 1;

const result = dijkstra(graph, source);

console.log("Shortest Path from Source (" + source + "):", result);
