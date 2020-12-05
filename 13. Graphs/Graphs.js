/*
Objectives
  - Explain what a graph is
    - Collection of nodes and their connection between them
  - Compare and contrast different types of graphs and their use cases in the real world
    - Uses for graphs
      - Social networks
      - Location/Mapping
      - Etc
  - Implement a graph using an adjacency list
  - Traverse through a graph using BFS and DFS
  - Compare and contrast graph traversal algorithms
Graph Terms
  Vertex: a node
  Edge: connection between nodes
  Weighted/Unweighted: values assigned to distances between vertices
  Directed/Undirected: directions assigned to distanced between vertices

Big O
  - |V|: number of vertices
  - |E|: number of edges
Operation   Adj List    Adj Matrix
+ Vertex      O(1)          O(|V^2|)
+ Edge        O(1)          O(1)
- Vertex      O(|V|+|E|)    O(|V^2|)
- Edge        O(|E|)        O(1)
Query         O(|V|+|E|)    O(1)
Storage       O(|V|+|E|)    O(|V^2|)

Adj List
  Pro: Can take up less space (in sparce graphs), Faster to iterate over all edges
  Con: Can be slower to lookup specific edge
Adj Matrix
  Pro: Faster to lookup specific edge
  Con: Takes up more space (in sparse graphs), Slower to iterate over all edges
*/

// Graph Class
class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if(!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }
  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }
  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => v !== v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v !== v1);
  }
  removeVertex(v) {
    while(this.adjacencyList[v].length) {
      const adjacentVertex = this.adjacencyList[v].pop();
      this.removeEdge(v, adjacentVertex);
    }
    delete this.adjacencyList[v]
  }
  dfsRecursive(start) {
    const result = [],
          visited = {},
          adjacencyList = this.adjacencyList;
    (function dfs(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          return dfs(neighbor)
        }
      })
    }(start))
    return result;
  }
  dfsIterative(start) {
    const result = [],
          visited = {},
          stack = [start];
    let currentV;
    visited[start] = true;
    while(stack.length) {
      currentV = stack.pop();
      result.push(currentV);
      this.adjacencyList[currentV].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor)
        }
      });
    }
    return result;
  }
  bfs(start) {
    const queue = [start],
          result = [],
          visited = {};
    visited[start] = true;
    let currentV;
    while (queue.length) {
      currentV = queue.shift();
      result.push(currentV);
      this.adjacencyList[currentV].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      })
    }
    return result;
  }
}

let g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");

/*
    A
  /   \
 B     C
 |     |
 D --- E
  \   /
    F
*/