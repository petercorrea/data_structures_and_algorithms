// Problem Statement:
// Given a directed graph, design an algorithm to find out whether there is a route between two nodes.

// Clarifications and Assumptions:
// 	-

// Assume:
// 	-

// Sample Input and Output:
//

// Proposed Solution:

export const breadthFirstSearch = (graph, start, end) => {
  const queue = [start]
  const visited = {}
  let current

  visited[start] = true

  while (queue.length > 0) {
    current = queue.shift()

    if (graph[current]) {
      for (const neighbor of graph[current]) {
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

// Notes after implementing:
//
