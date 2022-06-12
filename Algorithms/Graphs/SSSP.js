// Single Source Shortest Path (shortest path from one specific node to all other nodes):
// - validate DAG
// - do topSort then SSSP
// - initialize array with INFINITY of length graph.length representing shortest distances
// - iterate through the topSorted array and iterate through each nodes edges
// - find the min distances to reach destination node, remember to add the distance of the node its coming from

// additional: for longest path on a DAG, multiply all edges by -1, find shortest path, then multiply those edges by -1 again

// pseudocode: O(V+E)
// function SSSP(graph, start):
//     length = graph.length
//     sorted = topSort(graph)
//     distances = new Array(graph.length).fill(INFINITY)\
//     for (let i = 0; i < length; i++):
//         node = sorted[i]
//         edges = graph.node
//         if (edges):
//             for (edge of edges):
//                 currentDistance = distances[node] + edge.weight
//                 distances[edge] = math.min(distances[edge], currentDistance)
//     return distances
