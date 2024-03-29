/* eslint-disable consistent-return */
import Graph from "../../data_structures/graph.js"

export class DiGraph extends Graph {
  detectCycle() {
    const visited = {}
    const recStack = {}
    const startNodes = Object.keys(this.adjacencyList)

    for (let i = 0; i < startNodes.length; i++) {
      const current = startNodes[i]

      if (this._detectCycle(current, visited, recStack, this.adjacencyList))
        return true
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
          !visited[nextNode] &&
          this._detectCycle(nextNode, visited, recStack, this.adjacencyList)
        ) {
          return true
        }
        if (recStack[nextNode]) {
          return true
        }
      }

      recStack[current] = false
      return false
    }
  }
}
