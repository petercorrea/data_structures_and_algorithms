export const countMinJumps = (jumps) => {
  const solveRecursive = (jumps, currentIndex) => {
    if (currentIndex === jumps.length - 1) return 0
    if (jumps[currentIndex === 0]) return Number.MAX_VALUE

    let totalJumps = Number.MAX_VALUE

    let start = currentIndex + 1
    const end = currentIndex + jumps[currentIndex]

    while (start < jumps.length && start <= end) {
      const minJumps = solveRecursive(jumps, start++)
      if (minJumps !== Number.MAX_VALUE) {
        totalJumps = Math.min(totalJumps, minJumps + 1)
      }
    }

    return totalJumps
  }

  return solveRecursive(jumps, 0)
}

export const countMinJumpsDp1 = (jumps) => {
  const dp = []

  const countMinJumpsRecursive = (jumps, currentIndex) => {
    // if we have reached the last index, we don't need any more jumps
    if (currentIndex === jumps.length - 1) return 0

    // If an element is 0, then we cannot move through that element
    if (jumps[currentIndex] === 0) return Number.MAX_VALUE

    // if we have already solved this problem, return the result
    if (typeof dp[currentIndex] === "undefined") {
      let totalJumps = Number.MAX_VALUE
      let start = currentIndex + 1
      const end = currentIndex + jumps[currentIndex]
      while (start < jumps.length && start <= end) {
        // jump one step and recurse for the remaining array
        const minJumps = countMinJumpsRecursive(jumps, start++)
        if (minJumps !== Number.MAX_VALUE)
          totalJumps = Math.min(totalJumps, minJumps + 1)
      }
      dp[currentIndex] = totalJumps
    }
    return dp[currentIndex]
  }
  return countMinJumpsRecursive(jumps, 0)
}

export const countMinJumpsDp = (jumps) => {
  const dp = Array(jumps.length).fill(0)

  // initialize with infinity, except the first index which should be zero as we start from there
  for (let i = 1; i < jumps.length; i++) dp[i] = Number.MAX_VALUE

  for (let start = 0; start < jumps.length - 1; start++) {
    for (
      let end = start + 1;
      end <= start + jumps[start] && end < jumps.length;
      end++
    ) {
      dp[end] = Math.min(dp[end], dp[start] + 1)
    }
  }

  return dp[jumps.length - 1]
}

// TC: n^2
// SP: n
export const jumps = (arr) => {
  if (arr.length === 1) return 0
  const dp = Array(arr.length).fill(Infinity)
  dp[0] = 0

  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (j + arr[j] >= i) {
        dp[i] = Math.min(dp[i], dp[j] + 1)
      }
    }
  }

  return dp[arr.length - 1]
}

// TC: n
// SP: n
// maxreach is like the longest ladder provided
export const jumpsLinear = (arr) => {
  if (arr.length === 1) return 0
  let maxReach = arr[0]
  let steps = arr[0]
  let jumps = 0

  for (let i = 1; i < arr.length - 1; i++) {
    steps--
    maxReach = Math.max(maxReach, i + arr[i])

    if (steps === 0) {
      steps = maxReach - i
      jumps++
    }
  }

  return jumps + 1
}

console.log(`Minimum jumps needed: ---> ${countMinJumpsDp([2, 1, 1, 1, 4])}`)
console.log(
  `Minimum jumps needed: ---> ${countMinJumpsDp([1, 1, 3, 6, 9, 3, 0, 1, 3])}`
)
