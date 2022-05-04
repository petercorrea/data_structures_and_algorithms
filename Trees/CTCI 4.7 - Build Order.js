// Problem Statement:
// You are given a list of projects and a list of dependencies (which is a list of pairs of projects,wherethesecondprojectisdependentonthefirstproject).Allofaproject'sdependencies must be built before the project is. Find a build order that will allow the projects to be built. If there is no valid build order, return an error.

// Clarifications and Assumptions:
// 	-

// Assume:
// 	-

// Sample Input and Output:
// Input:
// projects: a, b, c, d, e, f
// dependencies: (a, d), (f, b), (b, d), (f, a), (d, c)
// Output: f, e, a, b, d, c

// Proposed Solution:
//
const projectsArray = ["a", "b", "c", "d", "e", "f"]
const dependenciesArray = [
  ["a", "d"],
  ["f", "b"],
  // ["a", "f"], // cycle
  ["b", "d"],
  ["f", "a"],
  ["d", "c"]
]

const buildOrder = (
  projects,
  dependencies,
  adj = {},
  discovered = new Set(),
  path = new Set(),
  result = []
) => {
  for (const project of projects) {
    adj[project] = []
  }

  for (const pair of dependencies) {
    adj[pair[1]].push(pair[0])
  }

  for (const project of projects) {
    topologicalSort(project, adj, discovered, path, result)
  }

  return result
}

const topologicalSort = (project, adj, discovered, path, result) => {
  if (discovered.has(project)) {
    return
  }

  discovered.add(project)
  path.add(project)

  for (const neighbor of adj[project]) {
    if (path.has(neighbor)) {
      throw new Error("Cycle detected")
    }
    topologicalSort(neighbor, adj, discovered, path, result)
  }

  path.delete(project)
  result.push(project)
}

// Test
console.log(buildOrder(projectsArray, dependenciesArray)) // result

// Notes after implementing:
//
