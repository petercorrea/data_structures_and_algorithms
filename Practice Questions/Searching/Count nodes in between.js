// Given a root node and an adj matrix of a directed graph find the distance to each other node.
// Each node as a weight of 1.
// in this graph, 4 is unreachable.
const adj = [
  [0, 1, 1, 1, 0],
  [0, 0, 1, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 0, 1, 0],
  [0, 1, 0, 0, 0]
]

// Expected Output
// object {
// 	0: 2,
// 	1: 0,
// 	2: 1,
// 	3: 3,
// 	4: Infinity
// }

const bfs = (graph, root) => {
  // Store distances
  const distances = {}

  // Set all nodes in distances obj to Infinity
  // We iterate the graph idxs
  for (let i = 0; i < graph.length; i++) {
    distances[i] = Math.Infinity
  }

  // set distance to the passed in root from itself to 0
  distances[root] = 0

  // Initialize a queue to track nodes to visit, starting with the provided root
  const queue = [root]
  let current

  // Traverse as long as there are items in the queue
  while (queue.length !== 0) {
    // remove first node in queue to traverse
    current = queue.shift()

    // get all the nodes which are connected to the current node
    const currentConnections = graph[current]

    // track a list of nodes idxs that are connected to the current node
    const neighborIdx = []
    // Grab the first node that is connected to the current node, taking the meaning of 1 from our adj mx
    let idx = currentConnections.indexOf(1)

    // If no node is conncted, set the idx variable to -1
    // So loop as long as there IS a node
    while (idx !== -1) {
      neighborIdx.push(idx)
      // Look for next connected node
      idx = currentConnections.indexOf(1, idx + 1)
    }

    // Now that we know all of the nodes idxs conected to the current node, we loop through them and get distance
    for (let j = 0; j < neighborIdx.length; j++) {
      // have not set the distance
      if (distances[neighborIdx[j]] === Infinity) {
        // Setting distance from root to neighbor, getting distance from prior while loop pass
        distances[neighborIdx[j]] = distances[current] + 1

        // Check neighbors for this node too
        queue.push(neighborIdx[j])
      }
    }
  }
  return distances
}

bfs(adj, 1)
