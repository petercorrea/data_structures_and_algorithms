class GraphVertex {
	constructor(value) {
		this.value = value;
		this.edges = [];
	}
}

function cloneGraph(vertex) {
	if (vertex == null) {
		return null;
	}

	let vertexMap = new Map();
	let queue = [vertex];
	vertexMap.set(vertex, new GraphVertex(vertex.value));

	while (queue.length) {
		let currentVertex = queue.shift();

		currentVertex.edges.forEach((v) => {
			if (!vertexMap.has(v)) {
				vertexMap.set(v, new GraphVertex(v.value));
				queue.push(v);
			}

			vertexMap.get(currentVertex).edges.push(vertexMap.get(v));
		});
	}
	return vertexMap.get(vertex);
}

let n1 = new GraphVertex(1);
let n2 = new GraphVertex(2);
let n3 = new GraphVertex(3);
let n4 = new GraphVertex(4);
n1.edges.push(n2, n4);
n2.edges.push(n1, n3);
n3.edges.push(n2, n4);
n4.edges.push(n1, n3);
let result = cloneGraph(n1);
console.log(result);
