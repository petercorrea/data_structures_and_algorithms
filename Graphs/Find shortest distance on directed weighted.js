// Try to use Dijkstra's algorithm or Bellmann-Ford's algorithm

const edgesExample = [
  // origin, dest, dist
  [1, 4, 3],
  [1, 3, 6],
  [2, 1, 3],
  [3, 4, 2],
  [4, 3, 1],
  [4, 2, 1],
  [4, 6, 2],
  [5, 2, 4],
  [5, 4, 2],
  [6, 7, 3],
  [7, 4, 1]
]

function dp(start, edges) {
  const memo = {}
  let targetVertexCount = 0
  // Distance to itself is 0
  memo[start] = [0]

  // Set all distances to Infinity
  edges.forEach((d) => {
    if (!memo[d[0]]) {
      memo[d[0]] = [Number.MAX_SAFE_INTEGER]
      targetVertexCount++
    }
  })

  while (targetVertexCount--) {
    edges.forEach((edge) => {
      const from = edge[0]
      const to = edge[1]
      const distance = edge[2]

      if (memo[from][0] + distance < memo[to][0]) {
        memo[to] = [memo[from][0] + distance, from]
      }
    })
  }

  return memo
}

console.log(dp(7, edgesExample))
