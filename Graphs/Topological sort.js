const { DirectedGraph } = require("./Graph");

let DAG = new DirectedGraph();
DAG.addEdge("A", "C", 1);
DAG.addEdge("B", "C", 1);
DAG.addEdge("B", "D", 1);
DAG.addEdge("C", "E", 1);
DAG.addEdge("D", "F", 1);
DAG.addEdge("E", "F", 1);
DAG.addEdge("F", "G", 1);
DAG.addEdge("A", "B", 1);
console.log(DAG.adjacencyList);
console.log(DAG.topologicalSort());
console.log(DAG.dfsIterative("B"));
console.log(DAG.dfsRecursive("B"));
console.log(DAG.bfs("B"));
