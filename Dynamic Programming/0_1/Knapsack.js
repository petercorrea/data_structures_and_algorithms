// Problem Statement:
// Given a set of items with their corresponding weights 'W' and profits 'P',
// maximize for profit without surpassing capacity 'C'.

// Build a knapsack of items that holds:
// 		-the greatest sum of profit
// 		-without surpassing max capacity 'C'
// 		-each item can only be selected once or not at all

const profits = [1, 6, 10, 16]
const weights = [1, 2, 3, 5]
const capacity = 7

const knapSackMemo = function (profits, weights, capacity) {
  const memo = []

  function solveRecursive(profits, weights, capacity, currentIndex) {
    if (
      currentIndex >= profits.length
			|| profits.length != weights.length
			|| capacity <= 0
    ) return 0

    memo[currentIndex] = memo[currentIndex] || []

    if (typeof memo[currentIndex][capacity] === "undefined") {
      // We select the item at currentIndex, and recursivelly process the rest.
      let profit1 = 0
      if (weights[currentIndex] <= capacity) {
        profit1 =					profits[currentIndex]
					+ solveRecursive(
					  profits,
					  weights,
					  capacity - weights[currentIndex],
					  currentIndex + 1
					)
      }

      // We skip the item at currentIndex
      const profit2 = solveRecursive(
        profits,
        weights,
        capacity,
        currentIndex + 1
      )

      memo[currentIndex][capacity] = Math.max(profit1, profit2)
    }

    return memo[currentIndex][capacity]
  }

  return solveRecursive(profits, weights, capacity, 0)
}

const knapSackTab = function (profits, weights, capacity) {
  const n = profits.length

  if (n == 0 || profits.length != weights.length || capacity <= 0) return 0

  // setup table, rows represent item [profit, weight], cols represent capacity 0 to C
  // don't forget to add an additional column to represent a capacity of 0
  const table = Array(n)
    .fill(0)
    .map(() => Array(capacity + 1).fill(0))

  // setup first column: since capacity=0, then profit=0
  for (let i = 0; i < n; i++) {
    table[i][0] = 0
  }

  // setup first row: we take the profit of the first item as long as it's weight doesn't surpass capacity
  // do not rewrite the data under the first column
  for (let col = 1; col <= capacity; col++) {
    if (weights[0] <= col) {
      table[0][col] = profits[0]
    }
  }

  // process values
  for (let i = 1; i < n; i++) {
    for (let col = 1; col <= capacity; col++) {
      // skip the item
      const profit1 = table[i - 1][col]

      // or select the item
      let profit2 = 0
      if (weights[i] <= col) {
        profit2 = profits[i] + table[i - 1][col - weights[i]]
      }

      table[i][col] = Math.max(profit1, profit2)
    }
  }

  return table[n - 1][capacity]
}

console.log(knapSackMemo(profits, weights, capacity))
console.log(knapSackTab(profits, weights, capacity))
