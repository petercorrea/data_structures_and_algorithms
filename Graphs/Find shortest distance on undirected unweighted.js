// Node and Vertices
// Directed and Undirected
// Weighted and Unweighted
// Adjacency list - each entry representing a node contains a list of connected nodes. Good for undirected graphs.
// Adjacency matrix - each node is represented on both the vertical and horizontal axis, and the intersection represents a connection. Good for directed graphs.
// Incidence matrix - rows are nodes, columns are verticies, each column shows how two nodes are connected. Can work for both directed and undirected.

let someGraph = [
	[0, 1, 1, 1, 0],
	[0, 0, 1, 0, 0],
	[1, 1, 0, 0, 0],
	[0, 0, 0, 1, 0],
	[0, 1, 0, 0, 0],
];

function bfs(graph, root) {
	// initialize results object
	let result = {};

	for (let i = 0; i < graph.length; i++) {
		result[i] = Number.MAX_SAFE_INTEGER;
	}

	// set distance to root to 0
	result[root] = 0;

	// initialize queue with root
	// initialize current pointer
	let toVisit = [root];
	let current;

	// iterate queue
	while (toVisit.length) {
		// remove current node
		current = toVisit.shift();
		// grab current node connections
		let connections = graph[current];

		// grab current node neighbors
		let neighbors = [];
		let idx = connections.indexOf(1);
		while (idx != -1) {
			neighbors.push(idx);
			idx = connections.indexOf(1, idx + 1);
		}

		// iterate neighbors
		for (let i = 0; i < neighbors.length; i++) {
			// if distance to neighbor has not been updated, update
			if (result[neighbors[i]] == Number.MAX_SAFE_INTEGER) {
				result[neighbors[i]] = result[current] + 1;
				// push neightbor to visit later on
				toVisit.push(neighbors[i]);
			}
		}
	}

	return result;
}

console.log(bfs(someGraph, 1));
