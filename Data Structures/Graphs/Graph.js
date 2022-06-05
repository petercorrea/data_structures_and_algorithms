import { GraphEdge } from "./GraphEdge"

export class Graph {
  adjacencyList

  constructor(graph) {
    this.adjacencyList = graph || {}
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = []
    }
  }

  addEdge(source, destination, weight) {
    const sourceNode = new GraphEdge(source, weight)
    const destinationNode = new GraphEdge(destination, weight)

    if (!this.adjacencyList[source]) {
      this.addVertex(source)
    }

    if (!this.adjacencyList[destination]) {
      this.addVertex(destination)
    }

    this.adjacencyList[source].push(destinationNode)
    this.adjacencyList[destination].push(sourceNode)
  }

  removeEdge(source, destination) {
    this.adjacencyList[source] = this.adjacencyList[source].filter(
      (vertex) => vertex.value !== destination
    )
    this.adjacencyList[destination] = this.adjacencyList[destination].filter(
      (vertex) => vertex.value !== source
    )
  }

  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length !== 0) {
      const edge = this.adjacencyList[vertex].pop()
      this.removeEdge(vertex, edge.value)
    }

    delete this.adjacencyList[vertex]
  }

  breadthFirstSearch(start, end) {
    const queue = [start]
    const visited = {}
    let current

    visited[start] = true

    while (queue.length > 0) {
      current = queue.shift()

      if (this.adjacencyList[current]) {
        for (const neighbor of this.adjacencyList[current]) {
          if (neighbor.value === end) return true

          if (!visited[neighbor.value]) {
            visited[neighbor.value] = true
            queue.push(neighbor.value)
          }
        }
      }
    }

    return false
  }

  depthFirstSearch(start) {
    const result = []
    const visited = {}

    const dfs = (vertex) => {
      if (!vertex) return null
      visited[vertex] = true
      result.push(vertex)

      if (this.adjacencyList[vertex]) {
        this.adjacencyList[vertex].forEach((neighbor) => {
          if (!visited[neighbor.value]) {
            return dfs(neighbor.value)
          }

          return null
        })
      }
      return null
    }

    dfs(start)
    return result
  }
}
