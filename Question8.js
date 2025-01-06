class Graph {
    constructor(vertices) {
      this.vertices = vertices;
      this.adjList = new Map();
      for (let i = 0; i < vertices; i++) {
        this.adjList.set(i, []);
      }
    }
  
    addEdge(u, v) {
      this.adjList.get(u).push(v);
    }

    dfsHelper(node, visited, stack) {
      visited[node] = true;
      const neighbors = this.adjList.get(node);
      
      for (let neighbor of neighbors) {
        if (!visited[neighbor]) {
          this.dfsHelper(neighbor, visited, stack);
        }
      }
      
      stack.push(node);
    }

    topologicalSortDFS() {
      let visited = new Array(this.vertices).fill(false);
      let stack = [];
      
      for (let i = 0; i < this.vertices; i++) {
        if (!visited[i]) {
          this.dfsHelper(i, visited, stack);
        }
      }
  
      return stack.reverse(); 
    }
  }

  const graphDFS = new Graph(5); 
  graphDFS.addEdge(0, 1);
  graphDFS.addEdge(0, 2);
  graphDFS.addEdge(2, 3);
  graphDFS.addEdge(1, 3);
  
  const topoOrderDFS = graphDFS.topologicalSortDFS();
  console.log("Topological Order (DFS):", topoOrderDFS);
  