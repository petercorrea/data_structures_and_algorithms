// Problem Statement:
// Given a directed graph, design an algorithm to find out whether there is a route between two nodes.

// Clarifing Questions:
// 	-

// Assume:
// 	-

// Sample Input and Output:
//

// Proposed Solution:

const { myGraph, } = require("./Sample Graph")

const adjGraph = myGraph.adjacency

function breadthFirstSearch(graph, start, end) {
  const queue = [start]
  const visited = {}
  let current

  visited[start] = true

  while (queue.length > 0) {
    current = queue.shift()

    if (graph[current]) {
      for (neighbor of graph[current]) {
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

// Test
console.log(breadthFirstSearch(adjGraph, 1, 8)) // true
console.log(breadthFirstSearch(adjGraph, 1, 9)) // false

// Notes after implementing:
//
