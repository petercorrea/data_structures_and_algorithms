class GraphVertex {
	value: string;
	edges: object;

	constructor(value: string, edges: [] = []) {
		this.value = value
		this.edges = edges
	}
}

class GraphEdge {
	value: string;
	weight: number;
	
	constructor(value: string, weight:number = 0) {
		this.value = value
		this.weight = weight
	}
}

class Graph {
	adjacencyList: {[index: string]:GraphEdge[]};

	constructor(graph: {}) {
		this.adjacencyList = graph || {}
	}

	addVertex(vertex: string) {
		if (!this.adjacencyList[vertex]) {
			this.adjacencyList[vertex] = [];
		}
	}

	removeVertex(vertex: string) {
		while (this.adjacencyList[vertex] && this.adjacencyList[vertex].length !== 0) {
			let edge: GraphEdge = this.adjacencyList[vertex].pop()
			this.removeEdge(vertex, edge.value)
		}

		delete this.adjacencyList[vertex]
	}

	addEdge(source: string, destination: string, weight: number) {
		const source_node = new GraphEdge(source, weight)
		const destination_node = new GraphEdge(destination, weight)

		if (!this.adjacencyList[source]) {
			this.addVertex(source)
		}

		if (!this.adjacencyList[destination]) {
			this.addVertex(destination)
		}

		this.adjacencyList[source].push(destination_node)
		this.adjacencyList[destination].push(source_node)
	}

	removeEdge(source: string, destination: string) {

		if (this.adjacencyList[source] && this.adjacencyList[destination]) {

			this.adjacencyList[source] = this.adjacencyList[source].filter(
				(vertex: GraphEdge) => vertex.value !== destination
			)
				
			this.adjacencyList[destination] = this.adjacencyList[destination].filter(
				(vertex: GraphEdge) => vertex.value !== source
			)
		}
	}

	breadthFirstSearch(start: GraphEdge) {
		let queue: GraphEdge[]= [start]
		let result: GraphEdge[] = []
		let visited:{[index: string]: boolean}  = {}
		let currentVertex: any;

		visited[start.value] = true

		while (queue.length > 0) {
			currentVertex = queue.shift()
			result.push(currentVertex)

			if (this.adjacencyList[currentVertex.value]) {
				this.adjacencyList[currentVertex.value].forEach((edge: GraphEdge) => {
					if (!visited[edge.value]) {
						visited[edge.value] = true
						queue.push(edge)
					}
				})
			}
		}

		return result
	}
}

let someGraph = new Graph({})
someGraph.addVertex('0')
someGraph.addVertex('1')
someGraph.addVertex('2')
someGraph.addVertex('3')
someGraph.addVertex('4')
someGraph.addVertex('5')
someGraph.addEdge('0','1', 1)
someGraph.addEdge('1','2', 3)
someGraph.addEdge('1','3', 3)
someGraph.addEdge('3','5', 3)


console.log(someGraph.breadthFirstSearch(new GraphEdge('0', 3)))