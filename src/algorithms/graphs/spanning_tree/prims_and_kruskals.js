// Minimum Cost Spanning Tree (these dont work on DAGs)
// A MCST is a subgraph of a graph which connects every vertex with only V-1 edges.
// The number of spanning trees can be determined by EComb(V-1)
// If there are cycles then the number of spanning trees are EComb(V-1) - (# of cycles)

// Prims (optimally with Fibonacci heap)
// Select any vertex then select the next connected minimum edge
// TC: V*(V-1) -> V^2 because we have to search each edge for each vertex.
// Improved TC: ElogV using Fibonacci heap
// Greedy
// gives connected component as well as it works only on connected graph.
// runs faster in dense graphs. (more edges than vertices)
// It generates the minimum spanning tree starting from the root vertex.

// Kruskals (optimally with union find)
// Select the minimum edge, the select the next minimum edge regardless of being
// connected or not. Before determining whether to connect it or not, determine if it will
// create a cycle, if so, skip it.
// TC: O(E log V)

// Greedy
// can generate forest(disconnected components) at any instant as well as it can work on disconnected components
// runs faster in sparse graphs.
// It generates the minimum spanning tree starting from the least weighted edge.
