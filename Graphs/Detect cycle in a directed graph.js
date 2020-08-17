const { Graph } = require("./Graph.js");

class DiGraph extends Graph {
	constructor(graph) {
		super(graph);
	}

	detectCycle() {
		let visited = {};
		let recStack = {};
		let startNodes = Object.keys(this.adjacencyList);

		for (let i = 0; i < startNodes.length; i++) {
			let current = startNodes[i];

			if (
				this._detectCycle(
					current,
					visited,
					recStack,
					this.adjacencyList
				)
			)
				return true;
		}

		return false;
	}

	_detectCycle(current, visited, recStack) {
		if (!visited[current]) {
			visited[current] = true;
			recStack[current] = true;

			let neighbors = this.adjacencyList[current];

			for (let i = 0; i < neighbors.length; i++) {
				let nextNode = neighbors[i];
				if (
					!visited[nextNode] &&
					this._detectCycle(
						nextNode,
						visited,
						recStack,
						this.adjacencyList
					)
				) {
					return true;
				} else if (recStack[nextNode]) {
					return true;
				}
			}

			recStack[current] = false;
			return false;
		}
	}
}

let containsCycle = {
	0: [],
	1: [0],
	5: [1, 4],
	4: [0, 3],
	3: [4, 5],
};

let noCycle = {
	1: [2, 3],
	2: [4],
	4: [],
	3: [4],
};

let someGraph = new DiGraph(noCycle);
console.log(someGraph.detectCycle());
