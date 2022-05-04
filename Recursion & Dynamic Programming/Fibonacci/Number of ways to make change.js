// Given an array of positive integers representing coin denominations and an integer representing a target sum
// determine the total number of ways to make the exact change.

// the recurrance relation is:
// 		totalWaysWithCoin = totalWaysWithCoin + totalWaysWithoutCoin
// 		dp[denom][targetSum] = dp[denom][targetSum - coin] + dp[denom - 1][targetSum]

// TC: (n)
// SP: (n^2)...can be reduced to (n) since we only need the previous row to compute the current

const numOfWays = (denoms, targetSum) => {
  // Initialize targetSums[]
  const targetSums = Array(targetSum + 1).fill(0)

  // The amount of ways to make 0 change with 0 coins is 1
  targetSums[0] = 1

  // Traverse denoms[]
  for (let i = 0; i < denoms.length; i++) {
    const coin = denoms[i]

    // Traverse targetSums[]
    for (let j = 1; j < targetSums.length; j++) {
      // if the denomination is less than the target sum
      // total count = count with denomination + count without denomination
      if (coin <= j) {
        targetSums[j] = targetSums[j - coin] + targetSums[j]
      }
    }
  }

  return targetSums[targetSums.length - 1]
}

console.log(numOfWays([1, 2, 5, 10], 10))
