import { Graph } from "./Graph.js"
import GraphEdge from "./GraphEdge.js"

export class DirectedGraph extends Graph {
  constructor(graph) {
    super(graph)
    this.adjacencyList = graph || {}
  }

  addEdge(source, destination, weight) {
    if (!this.adjacencyList[source]) {
      this.addVertex(source)
    }

    const destinationNode = new GraphEdge(destination, weight)

    this.adjacencyList[source].push(destinationNode)
  }

  removeEdge(source, destination) {
    this.adjacencyList[source] = this.adjacencyList[source].filter(
      (vertex) => vertex.value !== destination
    )
  }

  removeVertex(vertex) {
    delete this.adjacencyList[vertex]

    const keys = Object.keys(this.adjacencyList)

    for (let i = 0; i < keys.length; i++) {
      this.adjacencyList[keys[i]] = this.adjacencyList[keys[i]].filter(
        (v) => v.value !== vertex
      )
    }
  }

  // Only works on acyclical directed graphs
  topologicalSort(adjList = this.adjacencyList) {
    const indegrees = {}
    const noIndegrees = []
    const result = []

    const keys = Object.keys(adjList)

    // count indegrees
    for (let i = 0; i < keys.length; i++) {
      if (!indegrees[keys[i]]) {
        indegrees[keys[i]] = 0
      }

      const neighbors = adjList[keys[i]]

      for (let j = 0; j < neighbors.length; j++) {
        if (!indegrees[neighbors[j].value]) {
          indegrees[neighbors[j].value] = 0
        }

        indegrees[neighbors[j].value] += 1
      }
    }

    // push 0 indegrees
    for (const node in indegrees) {
      if (indegrees[node] === 0) {
        noIndegrees.push(node)
      }
    }

    while (noIndegrees.length > 0) {
      const node = noIndegrees.pop()
      result.push(node)

      let neighbors
      if (adjList[node]) {
        neighbors = adjList[node]
      } else {
        neighbors = []
      }

      for (let i = 0; i < neighbors.length; i++) {
        indegrees[neighbors[i].value] -= 1

        if (indegrees[neighbors[i].value] === 0) {
          noIndegrees.push(neighbors[i].value)
        }
      }
    }

    return result
  }
}
