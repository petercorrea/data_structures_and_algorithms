class Vertex {
  constructor(value) {
    this.value = value
    this.edges = []
  }
}

class Edge {
  constructor(value, weight = 0) {
    this.value = value
    this.weight = weight
  }
}

class Graph {
  constructor(graph) {
    this.adjacency = graph || {}
  }

  addVertex(vertex) {
    if (!this.adjacency[vertex]) {
      this.adjacency[vertex] = []
    }
  }

  addEdge(source, destination, weight = 0) {
    const source_node = new Edge(source, weight)
    const destination_node = new Edge(destination, weight)

    if (!this.adjacency[source]) {
      this.addVertex(source)
    }

    if (!this.adjacency[destination]) {
      this.addVertex(destination)
    }

    this.adjacency[source].push(destination_node)
    this.adjacency[destination].push(source_node)
  }

  removeEdge(source, destination) {
    this.adjacency[source] = this.adjacency[source].filter(
      (vertex) => vertex.value !== destination
    )

    this.adjacency[destination] = this.adjacency[destination].filter(
      (vertex) => vertex.value !== source
    )
  }

  removeVertex(vertex) {
    while (this.adjacency[vertex].length !== 0) {
      const edge = this.adjacency[vertex].pop()
      this.removeEdge(vertex, edge.value)
    }

    delete this.adjacency[vertex]
  }
}

const myGraph = new Graph()
myGraph.addEdge(1, 2, 0)
myGraph.addEdge(1, 3, 0)
myGraph.addEdge(2, 4, 0)
myGraph.addEdge(4, 3, 0)
myGraph.addEdge(4, 5, 0)
myGraph.addEdge(4, 6, 0)
myGraph.addEdge(4, 7, 0)
myGraph.addEdge(6, 7, 0)
myGraph.addEdge(7, 8, 0)

module.exports = {
  myGraph,
}
