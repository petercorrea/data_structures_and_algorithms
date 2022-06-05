export const findMinFee = (fee) => {
  const findMinFeeRecursive = (fee, currentIndex) => {
    if (currentIndex > fee.length - 1) return 0

    // if we take 1 step, we are left with 'n-1' steps;
    const take1Step = findMinFeeRecursive(fee, currentIndex + 1)
    // similarly, if we took 2 steps, we are left with 'n-2' steps;
    const take2Step = findMinFeeRecursive(fee, currentIndex + 2)
    // if we took 3 steps, we are left with 'n-3' steps;
    const take3Step = findMinFeeRecursive(fee, currentIndex + 3)

    const min = Math.min(take1Step, take2Step, take3Step)

    return min + fee[currentIndex]
  }
  return findMinFeeRecursive(fee, 0)
}

export const findMinFeeMemo = (fee) => {
  const dp = []

  const findMinFeeRecursive = (fee, currentIndex) => {
    if (currentIndex > fee.length - 1) return 0

    if (typeof dp[currentIndex] === "undefined") {
      // if we take 1 step, we are left with 'n-1' steps;
      const take1Step = findMinFeeRecursive(fee, currentIndex + 1)
      // similarly, if we took 2 steps, we are left with 'n-2' steps;
      const take2Step = findMinFeeRecursive(fee, currentIndex + 2)
      // if we took 3 steps, we are left with 'n-3' steps;
      const take3Step = findMinFeeRecursive(fee, currentIndex + 3)

      dp[currentIndex] =
        fee[currentIndex] + Math.min(take1Step, take2Step, take3Step)
    }

    return dp[currentIndex]
  }
  return findMinFeeRecursive(fee, 0)
}

export const findMinFeeDp = (fee) => {
  const dp = Array(fee.length + 1).fill(0)
  dp[0] = 0 // if there are no steps, we dont have to pay any fee
  dp[1] = fee[0] // only one step, so we have to pay its fee
  // for 2 steps, since we start from the first step, so we have to pay its fee
  // and from the first step we can reach the top by taking two steps, so
  // we dont have to pay any other fee.
  dp[2] = fee[0]

  // please note that dp[] has one extra element to handle the 0th step
  for (let i = 2; i < fee.length; i++) {
    dp[i + 1] = Math.min(
      fee[i] + dp[i],
      fee[i - 1] + dp[i - 1],
      fee[i - 2] + dp[i - 2]
    )
  }

  return dp[fee.length]
}
