const { GraphMinHeap } = require("../Heaps/GraphMinHeap");

class GraphVertex {
	constructor(value) {
		this.value = value;
		this.edges = [];
	}
}

class GraphEdge {
	constructor(value, weight = 0) {
		this.value = value;
		this.weight = weight;
	}
}

class Graph {
	constructor(graph) {
		this.adjacencyList = graph || {};
	}

	addVertex(vertex) {
		if (!this.adjacencyList[vertex]) {
			this.adjacencyList[vertex] = [];
		}
	}

	addEdge(source, destination, weight) {
		let source_node = new GraphEdge(source, weight);
		let destination_node = new GraphEdge(destination, weight);

		if (!this.adjacencyList[source]) {
			this.addVertex(source);
		}

		if (!this.adjacencyList[destination]) {
			this.addVertex(destination);
		}

		this.adjacencyList[source].push(destination_node);
		this.adjacencyList[destination].push(source_node);
	}

	removeEdge(source, destination) {
		this.adjacencyList[source] = this.adjacencyList[source].filter(
			(vertex) => vertex.value !== destination
		);
		this.adjacencyList[destination] = this.adjacencyList[
			destination
		].filter((vertex) => vertex.value !== source);
	}

	removeVertex(vertex) {
		while (this.adjacencyList[vertex].length !== 0) {
			let adjacentVertex = this.adjacencyList[vertex].pop();
			this.removeEdge(vertex.value, adjacentVertex.value);
		}

		delete this.adjacencyList[vertex];
	}

	bfs(start) {
		let queue = [start];
		let result = [];
		let visited = {};
		let currentVertex;

		visited[start] = true;

		while (queue.length > 0) {
			currentVertex = queue.shift();
			result.push(currentVertex);

			if (this.adjacencyList[currentVertex]) {
				this.adjacencyList[currentVertex].forEach((neighbor) => {
					if (!visited[neighbor.value]) {
						visited[neighbor.value] = true;
						queue.push(neighbor.value);
					}
				});
			}
		}

		return result;
	}

	dfsRecursive(start) {
		let result = [];
		let visited = {};

		let dfs = (vertex) => {
			if (!vertex) return null;
			visited[vertex] = true;
			result.push(vertex);

			if (this.adjacencyList[vertex]) {
				this.adjacencyList[vertex].forEach((neighbor) => {
					if (!visited[neighbor.value]) {
						return dfs(neighbor.value);
					}
				});
			}
		};

		dfs(start);
		return result;
	}

	dfsIterative(start) {
		let result = [];
		let stack = [start];
		let visited = {};
		visited[start] = true;
		let currentVertex;

		while (stack.length) {
			currentVertex = stack.pop();
			result.push(currentVertex);

			if (this.adjacencyList[currentVertex]) {
				this.adjacencyList[currentVertex].forEach((neighbor) => {
					if (!visited[neighbor.value]) {
						visited[neighbor.value] = true;
						stack.push(neighbor.value);
					}
				});
			}
		}

		return result;
	}

	dijkstra(source) {
		//  Single Source Shortest Path - works on directed and undirected graphs
		let distances = {};
		let path = {};
		let heap = new GraphMinHeap();
		let map = new Map();

		// Initialize distance object
		for (let vertex in this.adjacencyList) {
			distances[vertex] = Number.MAX_SAFE_INTEGER;

			let neighbor = this.adjacencyList[vertex];
			for (let i = 0; i < neighbor.length; i++) {
				distances[neighbor[i].value] = Number.MAX_SAFE_INTEGER;
			}
		}

		distances[source] = 0;

		// initialize heap obj
		for (let vertex in distances) {
			if (vertex == source) {
				let edge = new GraphEdge(source, 0);
				map.set(vertex, edge);
				heap.insert(edge);
			} else {
				let edge = new GraphEdge(vertex, Number.MAX_SAFE_INTEGER);
				map.set(vertex, edge);
				heap.insert(edge);
			}
		}

		// Set path
		path[source] = [source, null];

		// while heap is not empty
		while (heap.peek()) {
			// extract minimum distance
			let current = heap.remove();
			map.delete(current.value);
			console.log("current", current);

			if (this.adjacencyList[current.value]) {
				this.adjacencyList[current.value].forEach((neighbor) => {
					// if the heap has the neighbor
					if (map.has(neighbor.value)) {
						let distanceToCurrent = distances[current.value];
						let costToNeighbor = neighbor.weight;
						let distanceToNeighbor = distances[neighbor.value];

						console.log(
							"current",
							current.value,
							"neighbor",
							neighbor.value
						);
						console.log("distance to current: ", distanceToCurrent);
						console.log("cost to neighbor: ", costToNeighbor);
						console.log(
							"distance to neighbor: ",
							distanceToNeighbor
						);

						if (
							distanceToCurrent + costToNeighbor <
							distanceToNeighbor
						) {
							console.log("relaxred");
							distances[neighbor.value] =
								distanceToCurrent + costToNeighbor;

							// update node in heap
							// adjust heap, bubble up
							map.get(neighbor.value).weight =
								distanceToCurrent + costToNeighbor;

							let idx = heap.heap.indexOf(
								map.get(neighbor.value)
							);
							console.log("idx", idx);

							if (idx > 1) {
								while (
									heap.heap[idx].weight <
									heap.heap[Math.floor(idx / 2)].weight
								) {
									if (idx >= 1) {
										// Object destructuring to swap values
										[
											heap.heap[Math.floor(idx / 2)],
											heap.heap[idx],
										] = [
											heap.heap[idx],
											heap.heap[Math.floor(idx / 2)],
										];
										// if the parent is not the root node, keep traversing
										if (Math.floor(idx / 2) > 1) {
											// move up to the parent idx
											idx = Math.floor(idx / 2);
										} else {
											break;
										}
									}
								}
							}
							// console.log("map", map.get(neighbor.value));
							path[neighbor] = current.value;
						}
					}
				});
			}
		}

		return distances;
	}
}

class DirectedGraph extends Graph {
	constructor(graph) {
		super(graph);
		this.adjacencyList = graph || {};
	}

	addEdge(source, destination, weight) {
		if (!this.adjacencyList[source]) {
			this.addVertex(source);
		}

		let destination_node = new GraphEdge(destination, weight);

		this.adjacencyList[source].push(destination_node);
	}

	removeEdge(source, destination) {
		this.adjacencyList[source] = this.adjacencyList[source].filter(
			(vertex) => vertex.value !== destination
		);
	}

	removeVertex(vertex) {
		delete this.adjacencyList[vertex];

		let keys = Object.keys(this.adjacencyList);

		for (let i = 0; i < keys.length; i++) {
			this.adjacencyList[keys[i]] = this.adjacencyList[keys[i]].filter(
				(v) => {
					return v.value !== vertex;
				}
			);
		}
	}

	// Only works on acyclical directed graphs
	topologicalSort(adjList = this.adjacencyList) {
		let indegrees = {};
		let no_indegrees = [];
		let result = [];

		let keys = Object.keys(adjList);

		// count indegrees
		for (let i = 0; i < keys.length; i++) {
			if (!indegrees[keys[i]]) {
				indegrees[keys[i]] = 0;
			}

			let neighbors = adjList[keys[i]];

			for (let j = 0; j < neighbors.length; j++) {
				if (!indegrees[neighbors[j].value]) {
					indegrees[neighbors[j].value] = 0;
				}

				indegrees[neighbors[j].value] += 1;
			}
		}

		// push 0 indegrees
		for (let node in indegrees) {
			if (indegrees[node] == 0) {
				no_indegrees.push(node);
			}
		}

		while (no_indegrees.length > 0) {
			let node = no_indegrees.pop();
			result.push(node);

			let neighbors;
			if (adjList[node]) {
				neighbors = adjList[node];
			} else {
				neighbors = [];
			}

			for (let i = 0; i < neighbors.length; i++) {
				indegrees[neighbors[i].value] -= 1;

				if (indegrees[neighbors[i].value] == 0) {
					no_indegrees.push(neighbors[i].value);
				}
			}
		}

		return result;
	}
}

module.exports = {
	Graph,
	DirectedGraph,
	GraphVertex,
	GraphEdge,
};
