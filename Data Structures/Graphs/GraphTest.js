import { Graph } from "./Graph.js"

const adjacency = {
  A: ["B", "C"],
  B: ["A", "D"]
}

const myGraph = new Graph(adjacency)
console.log(myGraph)
