class Graph {
	constructor() {
		this.adjacencyList = {};
	}

	addVertex(vertex) {
		if (!this.adjacencyList[vertex]) {
			this.adjacencyList[vertex] = [];
		}
	}

	addEdge(source, destination) {
		if (!this.adjacencyList[source]) {
			this.addVertex(source);
		}

		if (!this.adjacencyList[destination]) {
			this.addVertex(destination);
		}

		this.adjacencyList[source].push(destination);
		this.adjacencyList[destination].push(source);
	}

	removeEdge(source, destination) {
		this.adjacencyList[source] = this.adjacencyList[source].filter(
			(vertex) => vertex !== destination
		);
		this.adjacencyList[destination] = this.adjacencyList[
			destination
		].filter((vertex) => vertex !== source);
	}

	removeVertex(vertex) {
		while (this.adjacencyList[vertex]) {
			let adjacentVertex = this.adjacencyList[vertex].pop();
			this.removeEdge(vertex, adjacentVertex);
		}

		delete this.adjacencyList[vertex];
	}

	bfs(start) {
		let queue = [start];
		let result = [];
		let visited = {};
		let currentVertex;

		visited[start] = true;

		while (queue.length) {
			currentVertex = queue.shift();
			result.push(currentVertex);

			this.adjacencyList[currentVertex].forEach((neighbor) => {
				if (!visited[neighbor]) {
					visited[neighbor] = true;
					quwuw.push(neighbor);
				}
			});
		}

		return result;
	}

	dfsRecursive(start) {
		let result = [];
		let visited = {};
		let adjacencyList = this.adjacencyList;

		function dfs(vertex) {
			if (!vertex) return null;
			visited[vertex] = true;
			result.push(vertex);

			adjacencyList[vertex].forEach((neighbor) => {
				if (!visited[neighbor]) {
					return dfs(neighbor);
				}
			});
		}

		dfs(start);
		return result;
	}

	dfsIterative(start) {
		let result = [];
		let queue = [start];
		let visited = {};
		visited[start] = true;
		let currentVertex;

		while (queue.length) {
			currentVertex = queue.pop();
			result.push(currentVertex);

			this.adjacencyList[currentVertex].forEach((neighbor) => {
				if (!visited[neighbor]) {
					visited[neighbor] = true;
					stack.push(neighbor);
				}
			});
		}

		return result;
	}
}

module.exports = {
	Graph,
};
