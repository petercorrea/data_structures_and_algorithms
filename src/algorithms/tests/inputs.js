export const DAG = {
  A: ["B"],
  B: ["C", "D", "E"],
  C: ["F"],
  D: ["G"],
  E: [],
  F: ["G"],
  G: [],
}

export const Digraph = {
  A: ["B"],
  B: ["C"],
  C: ["A"],
}

export const weightedDAG = [
  [0, 1, 3, 0, 0],
  [0, 0, 0, 2, 0],
  [0, 0, 0, 2, 1],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 5, 0]
]

export const weightedDigraph = [
  [0, 1, 3, 0, 0],
  [0, 0, 0, 2, 0],
  [0, 0, 0, 2, 1],
  [2, 0, 0, 0, 0],
  [0, 0, 0, 5, 0]
]

export const negativeWeightedDigraph = [
  [0, 1, 3, 0, 0],
  [0, 0, 0, 2, 0],
  [0, 0, 0, 2, 1],
  [-2, 0, 0, 0, 0],
  [0, 0, 0, 5, 0]
]
