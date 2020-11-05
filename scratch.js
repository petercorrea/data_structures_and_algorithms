"use strict";
class GraphVertex {
    constructor(value, edges = []) {
        this.value = value;
        this.edges = edges;
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
    removeVertex(vertex) {
        while (this.adjacencyList[vertex] && this.adjacencyList[vertex].length !== 0) {
            let edge = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, edge.value);
        }
        delete this.adjacencyList[vertex];
    }
    addEdge(source, destination, weight) {
        const source_node = new GraphEdge(source, weight);
        const destination_node = new GraphEdge(destination, weight);
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
        if (this.adjacencyList[source] && this.adjacencyList[destination]) {
            this.adjacencyList[source] = this.adjacencyList[source].filter((vertex) => vertex.value !== destination);
            this.adjacencyList[destination] = this.adjacencyList[destination].filter((vertex) => vertex.value !== source);
        }
    }
    breadthFirstSearch(start) {
        let queue = [start];
        let result = [];
        let visited = {};
        let currentVertex;
        visited[start.value] = true;
        while (queue.length > 0) {
            currentVertex = queue.shift();
            result.push(currentVertex);
            if (this.adjacencyList[currentVertex.value]) {
                this.adjacencyList[currentVertex.value].forEach((edge) => {
                    if (!visited[edge.value]) {
                        visited[edge.value] = true;
                        queue.push(edge);
                    }
                });
            }
        }
        return result;
    }
}
let someGraph = new Graph({});
someGraph.addVertex('0');
someGraph.addVertex('1');
someGraph.addVertex('2');
someGraph.addVertex('3');
someGraph.addVertex('4');
someGraph.addVertex('5');
someGraph.addEdge('0', '1', 1);
someGraph.addEdge('1', '2', 3);
someGraph.addEdge('1', '3', 3);
someGraph.addEdge('3', '5', 3);
console.log(someGraph.breadthFirstSearch(new GraphEdge('0', 3)));
