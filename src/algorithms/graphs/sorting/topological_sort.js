// Topological Sort:
// 	- validate no cycles and is directed (DAG)
// 	- pick any node to start
// 	- traverse node with dfs
// 	- add descendants in reverse order
// 	-repeat

// Kahns algorithm is a well done top sort algo. We will use DFS.

// A graph can have several topsorts, the algo just gets one.
// pseudocode: O(V+E)

// 	function topSort(graph):
// 		if (hasCycles(graph)) return false
// 		length = graph.length
// 		visited = new Array(graph.length).fill(false)
// 		topology = new Array(graph.length).fill(0)
// 		topIdx = length - 1
// 		for (let i=0; i<length; i++):
// 			if (visited[i] === false):
// 				currentVisited = []
// 				dfs(i, visited, currentVisited, graph)
// 				for (let node in currentVisited):
// 					topology[topIdx] = node
// 					topIdx--
// 		return topology

// 	function dfs(i, visited, currentVisited, graph):
// 		visited[i] = true
// 		edges = graph[i]
// 		for (let edge of edges):
// 			if (visited[edge.to] === false):
// 				dfs(edge.to, visited, currentVisited, graph)
// 		return currentVisited.push(i)

export const topSort = () => {}
