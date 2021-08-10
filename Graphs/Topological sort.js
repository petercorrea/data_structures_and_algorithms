const { Graph, } = require("./Graph")

const someGraph = new Graph()
someGraph.addEdge("0", "1", 4)
someGraph.addEdge("0", "4", 8)
someGraph.addEdge("1", "4", 11)
someGraph.addEdge("1", "2", 8)
someGraph.addEdge("4", "8", 7)
someGraph.addEdge("4", "5", 1)

someGraph.addEdge("2", "8", 2)
someGraph.addEdge("8", "5", 6)

someGraph.addEdge("2", "3", 7)
someGraph.addEdge("2", "6", 4)
someGraph.addEdge("5", "6", 2)

someGraph.addEdge("3", "6", 14)
someGraph.addEdge("3", "7", 9)
someGraph.addEdge("6", "7", 10)
console.log(someGraph.dijkstra("0"))
