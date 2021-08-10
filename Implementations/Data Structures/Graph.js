const { GraphMinHeap, } = require("../Heaps/GraphMinHeap")

class GraphVertex {
  constructor(value) {
    this.value = value
    this.edges = []
  }
}

class GraphEdge {
  constructor(value, weight = 0) {
    this.value = value
    this.weight = weight
  }
}

class Graph {
  constructor(graph) {
    this.adjacencyList = graph || {}
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = []
    }
  }

  addEdge(source, destination, weight) {
    const source_node = new GraphEdge(source, weight)
    const destination_node = new GraphEdge(destination, weight)

    if (!this.adjacencyList[source]) {
      this.addVertex(source)
    }

    if (!this.adjacencyList[destination]) {
      this.addVertex(destination)
    }

    this.adjacencyList[source].push(destination_node)
    this.adjacencyList[destination].push(source_node)
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
        for (neighbor of this.adjacencyList[current]) {
          if (neighbor.value == end) return true

          if (!visited[neighbor.value]) {
            visited[neighbor.value] = true
            queue.push(neighbor.value)
          }
        }
      }
    }

    return false
  }

  dfsRecursive(start) {
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
        })
      }
    }

    dfs(start)
    return result
  }

  dfsIterative(start) {
    const result = []
    const stack = [start]
    const visited = {}
    visited[start] = true
    let currentVertex

    while (stack.length) {
      currentVertex = stack.pop()
      result.push(currentVertex)

      if (this.adjacencyList[currentVertex]) {
        this.adjacencyList[currentVertex].forEach((neighbor) => {
          if (!visited[neighbor.value]) {
            visited[neighbor.value] = true
            stack.push(neighbor.value)
          }
        })
      }
    }

    return result
  }

  dijkstra(source) {
    //  Single Source Shortest Path - works on directed and undirected graphs
    const distances = {}
    const path = {}
    const heap = new GraphMinHeap()
    const map = new Map()

    // Initialize distance object
    for (const vertex in this.adjacencyList) {
      distances[vertex] = Number.MAX_SAFE_INTEGER

      const neighbor = this.adjacencyList[vertex]
      for (let i = 0; i < neighbor.length; i++) {
        distances[neighbor[i].value] = Number.MAX_SAFE_INTEGER
      }
    }

    distances[source] = 0
    let idxCount = 0
    // initialize heap obj
    for (const vertex in distances) {
      if (vertex == source) {
        idxCount += 1
        const edge = new GraphEdge(source, 0)
        map.set(vertex, { edgeObj: edge, index: idxCount, })
        heap.insert(edge, map)
      } else {
        idxCount += 1
        const edge = new GraphEdge(vertex, Number.MAX_SAFE_INTEGER)
        map.set(vertex, { edgeObj: edge, index: idxCount, })
        heap.insert(edge, map)
      }
    }

    // Set path
    path[source] = [source, null]

    // while heap is not empty
    while (heap.peek()) {
      // extract minimum distance
      const current = heap.remove(map)
      map.delete(current.value)
      // console.log("current", current);

      if (this.adjacencyList[current.value]) {
        this.adjacencyList[current.value].forEach((neighbor) => {
          console.log("current", current.value)
          console.log("neighbor", neighbor.value)

          console.log(map.has(neighbor.value))

          // if the heap has the neighbor
          if (map.has(neighbor.value)) {
            const distanceToCurrent = distances[current.value]
            const costToNeighbor = neighbor.weight
            const distanceToNeighbor = distances[neighbor.value]

            console.log("current", current.value, "neighbor", neighbor.value)
            console.log("distance to current: ", distanceToCurrent)
            console.log("cost to neighbor: ", costToNeighbor)
            console.log("distance to neighbor: ", distanceToNeighbor)

            if (distanceToCurrent + costToNeighbor < distanceToNeighbor) {
              console.log("relaxed", distanceToCurrent + costToNeighbor)
              distances[neighbor.value] = distanceToCurrent + costToNeighbor

              // update node in heap
              // adjust heap, bubble up

              map.get(neighbor.value).edgeObj.weight =								distanceToCurrent + costToNeighbor

              // let idx = heap.heap.indexOf(
              // 	map.get(neighbor.value)
              // );

              let idx = map.get(neighbor.value).index
              console.log("nei idx", idx)
              console.log("nei idx", map.get(neighbor.value))
              console.log("node 1", map.get("1"))
              console.log("node 2", map.get("2"))
              console.log("node 3", map.get("3"))
              console.log("node 4", map.get("4"))
              console.log("node 5", map.get("5"))
              console.log("node 6", map.get("6"))
              console.log("node 7", map.get("7"))
              console.log("node 8", map.get("8"))
              console.log("node 9", map.get("9"))

              console.log(heap.heap)

              // console.log("idx", idx);

              if (idx > 1) {
                while (
                  heap.heap[idx].weight < heap.heap[Math.floor(idx / 2)].weight
                ) {
                  console.log("adjusting heap")
                  if (idx >= 1) {
                    console.log("fixing ids in map")
                    // FIX IDXS IN MAP
                    console.log(map.get(heap.heap[Math.floor(idx / 2)].value))

                    console.log(map.get(heap.heap[idx].value))

                    map.get(heap.heap[Math.floor(idx / 2)].value).index = idx

                    map.get(heap.heap[idx].value).index = Math.floor(idx / 2);

                    // Object destructuring to swap values
                    [heap.heap[Math.floor(idx / 2)], heap.heap[idx]] = [
                      heap.heap[idx],
                      heap.heap[Math.floor(idx / 2)]
                    ]

                    console.log("checking ids...")
                    console.log(map.get(heap.heap[Math.floor(idx / 2)].value))

                    console.log(map.get(heap.heap[idx].value))

                    // if the parent is not the root node, keep traversing
                    if (Math.floor(idx / 2) > 1) {
                      // move up to the parent idx
                      idx = Math.floor(idx / 2)
                    } else {
                      break
                    }
                  }
                }
              }
              console.log(heap.heap)
              // console.log("map", map.get(neighbor.value));
              path[neighbor] = current.value
            }
          }
        })
      }
    }

    return distances
  }
}

class DirectedGraph extends Graph {
  constructor(graph) {
    super(graph)
    this.adjacencyList = graph || {}
  }

  addEdge(source, destination, weight) {
    if (!this.adjacencyList[source]) {
      this.addVertex(source)
    }

    const destination_node = new GraphEdge(destination, weight)

    this.adjacencyList[source].push(destination_node)
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
      this.adjacencyList[keys[i]] = this.adjacencyList[keys[i]].filter((v) => v.value !== vertex)
    }
  }

  // Only works on acyclical directed graphs
  topologicalSort(adjList = this.adjacencyList) {
    const indegrees = {}
    const no_indegrees = []
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
      if (indegrees[node] == 0) {
        no_indegrees.push(node)
      }
    }

    while (no_indegrees.length > 0) {
      const node = no_indegrees.pop()
      result.push(node)

      let neighbors
      if (adjList[node]) {
        neighbors = adjList[node]
      } else {
        neighbors = []
      }

      for (let i = 0; i < neighbors.length; i++) {
        indegrees[neighbors[i].value] -= 1

        if (indegrees[neighbors[i].value] == 0) {
          no_indegrees.push(neighbors[i].value)
        }
      }
    }

    return result
  }
}

module.exports = {
  Graph,
  DirectedGraph,
  GraphVertex,
  GraphEdge,
}
