const { Graph, } = require("./Graph.js")

class DiGraph extends Graph {
  constructor(graph) {
    super(graph)
  }

  detectCycle() {
    const visited = {}
    const recStack = {}
    const startNodes = Object.keys(this.adjacencyList)

    for (let i = 0; i < startNodes.length; i++) {
      const current = startNodes[i]

      if (
        this._detectCycle(
          current,
          visited,
          recStack,
          this.adjacencyList
        )
      ) return true
    }

    return false
  }

  _detectCycle(current, visited, recStack) {
    if (!visited[current]) {
      visited[current] = true
      recStack[current] = true

      const neighbors = this.adjacencyList[current]

      for (let i = 0; i < neighbors.length; i++) {
        const nextNode = neighbors[i]
        if (
          !visited[nextNode]
					&& this._detectCycle(
					  nextNode,
					  visited,
					  recStack,
					  this.adjacencyList
					)
        ) {
          return true
        } if (recStack[nextNode]) {
          return true
        }
      }

      recStack[current] = false
      return false
    }
  }
}

const containsCycle = {
  0: [],
  1: [0],
  5: [1, 4],
  4: [0, 3],
  3: [4, 5],
}

const noCycle = {
  1: [2, 3],
  2: [4],
  4: [],
  3: [4],
}

const someGraph = new DiGraph(noCycle)
console.log(someGraph.detectCycle())
