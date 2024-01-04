// SSSP Algo...works only with DAG with only positive edge weights (because its greedy), typically O(E*log(V))

//  Data Structures
//    visited[false...]
//    shortestDistances[Infinity...]
//    priorityQueue (nodeIndex, distance)

//  Conceptual Overview
//    PQ.insert(startNode)
//    while PQ is not empty
//      PQ.poll()
//      for neighbor in node.neighbors
//        relaxing distance to neighbor
//        if new minimum is found, PQ.insert(node, newShortestDistance)

//  Lazy Dijkstra's
//  Eager Dijkstra's
//  Heap Dijkstra's

// Single Source Shortest Path (shortest path from one specific node to all other nodes):
// - validate DAG
// - do topSort then SSSP
// - initialize array with INFINITY of length graph.length representing shortest distances
// - iterate through the topSorted array and iterate through each nodes edges
// - find the min distances to reach destination node, remember to add the distance of the node its coming from

// additional: for longest path on a DAG, multiply all edges by -1, find shortest path, then multiply those edges by -1 again

import { GraphEdge } from "../../../data_structures/graph.js"
import { MinHeap } from "../../../data_structures/min_heap.js"

export const dijkstra = (source) => {
  //  Single Source Shortest Path - works on directed and undirected graphs
  const distances = {}
  const path = {}
  const heap = new MinHeap()
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
    if (vertex === source) {
      idxCount += 1
      const edge = new GraphEdge(source, 0)
      map.set(vertex, { edgeObj: edge, index: idxCount })
      heap.insert(edge, map)
    } else {
      idxCount += 1
      const edge = new GraphEdge(vertex, Number.MAX_SAFE_INTEGER)
      map.set(vertex, { edgeObj: edge, index: idxCount })
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

    if (this.adjacencyList[current.value]) {
      this.adjacencyList[current.value].forEach((neighbor) => {
        // if the heap has the neighbor
        if (map.has(neighbor.value)) {
          const distanceToCurrent = distances[current.value]
          const costToNeighbor = neighbor.weight
          const distanceToNeighbor = distances[neighbor.value]

          if (distanceToCurrent + costToNeighbor < distanceToNeighbor) {
            distances[neighbor.value] = distanceToCurrent + costToNeighbor

            // update node in heap
            // adjust heap, bubble up

            map.get(neighbor.value).edgeObj.weight =
              distanceToCurrent + costToNeighbor

            let idx = map.get(neighbor.value).index

            if (idx > 1) {
              while (
                heap.heap[idx].weight < heap.heap[Math.floor(idx / 2)].weight
              ) {
                if (idx >= 1) {
                  // FIX idxs IN MAP
                  map.get(heap.heap[Math.floor(idx / 2)].value).index = idx

                  map.get(heap.heap[idx].value).index = Math.floor(idx / 2)

                  // Object destructuring to swap values
                  // eslint-disable-next-line semi-style
                  ;[heap.heap[Math.floor(idx / 2)], heap.heap[idx]] = [
                    heap.heap[idx],
                    heap.heap[Math.floor(idx / 2)]
                  ]

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
            path[neighbor] = current.value
          }
        }
      })
    }
  }

  return distances
}
