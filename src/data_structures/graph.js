export class GraphVertex {
  constructor(value) {
    this.value = value
    this.edges = []
  }
}

export class GraphEdge {
  constructor(value, weight = 0) {
    this.value = value
    this.weight = weight
  }
}

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
          if (neighbor.value === end) return neighbor

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
    const visited = {}

    const dfs = (vertex, end) => {
      if (vertex.value === end) return vertex
      if (!vertex) return false
      visited[vertex] = true

      if (this.adjacencyList[vertex]) {
        this.adjacencyList[vertex].forEach((neighbor) => {
          if (!visited[neighbor.value]) {
            return dfs(neighbor.value)
          }

          return false
        })
      }
      return false
    }

    return dfs(start)
  }
}

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
