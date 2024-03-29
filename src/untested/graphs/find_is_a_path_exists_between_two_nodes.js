// Sample Input

// const airports = "PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM".split(" ")

// const routes = [
//   ["PHX", "LAX"],
//   ["PHX", "JFK"],
//   ["JFK", "OKC"],
//   ["JFK", "HEL"],
//   ["JFK", "LOS"],
//   ["MEX", "LAX"],
//   ["MEX", "BKK"],
//   ["MEX", "LIM"],
//   ["MEX", "EZE"],
//   ["LIM", "BKK"]
// ]

// Create graph
// airports.forEach(addNode)
// routes.forEach((route) => addEdge(...route))

// The graph
const adjacencyList = new Map()

// Add node
export const addNode = (airport) => {
  adjacencyList.set(airport, [])
}

// Add edge, undirected
export const addEdge = (origin, destination) => {
  adjacencyList.get(origin).push(destination)
  adjacencyList.get(destination).push(origin)
}

// All routes
export const bfs = (start) => {
  const queue = [start]
  const visited = new Set()

  while (queue.length > 0) {
    const airport = queue.shift()
    const destinations = adjacencyList.get(airport)

    for (const destination of destinations) {
      // if (destination === "BKK") {
      // }

      if (!visited.has(destination)) {
        visited.add(destination)
        queue.push(destination)
      }
    }
  }
}

// Any route exist
export const dfs = (start, visited = new Set()) => {
  visited.add(start)

  const destinations = adjacencyList.get(start)

  for (const destination of destinations) {
    if (destination === "BKK") {
      return
    }

    if (!visited.has(destination)) {
      dfs(destination, visited)
    }
  }
}

// bfs('PHX')
dfs("PHX")
