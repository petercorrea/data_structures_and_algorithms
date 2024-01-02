// There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1.
// You are given an array prerequisites where prerequisites[i] = [ai, bi]
// indicates that you must take course bi first if you want to take course ai.

// For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
// Return true if you can finish all courses. Otherwise, return false.

// All the pairs prerequisites[i] are unique.
const dfs = (adj, key, visited = {}) => {
  if (adj[key] === []) return true
  if (visited[`${key}`]) return false

  visited[`${key}`] = true
  const neighbors = adj[key]

  for (const i in neighbors) {
    const node = neighbors[i]
    if (!dfs(adj, node, visited)) return false
  }
  delete visited[`${key}`]
  adj[key] = []
  return true
}

const createAdj = (mx) => {
  const adj = {}

  for (let i = 0; i < mx.length; i++) {
    const course = mx[i][0]
    const prereq = mx[i][1]

    if (adj[`${prereq}`] !== undefined) {
      adj[`${prereq}`].push(course)
    } else {
      adj[`${prereq}`] = [course]
    }
  }
  return adj
}

export const canFinish = (num, mx) => {
  // create adjacency
  const adj = createAdj(mx)
  // traverse adjacency
  for (let i = 0; i < num; i++) {
    if (!dfs(adj, i)) return false
  }

  return true
}
