// Given a number sequence, find the length of its Longest Alternating Subsequence(LAS).
// A subsequence is considered alternating if its elements are in alternating order.

// A three element sequence(a1, a2, a3) will be an alternating sequence if its elements
// hold one of the following conditions:

// { a1 > a2 < a3 } or { a1 < a2 > a3 }.

// Input: {1,2,3,4}
// Output: 2
// Explanation: There are many LAS: { 1, 2 }, { 3, 4 }, { 1, 3 }, { 1, 4 }

// Input: {3,2,1,4}
// Output: 3
// Explanation: The LAS are { 3, 2, 4 } and { 2, 1, 4 }.

// Input: {1,3,2,4}
// Output: 4
// Explanation: The LAS is {1,3,2,4}.

// TC: 2^n
// SP: n
export const findLASLength = (nums) => {
  const findLASLengthRecursive = (nums, previousIndex, currentIndex, isAsc) => {
    if (currentIndex === nums.length) return 0

    let c1 = 0
    // if ascending, the next element should be bigger
    if (isAsc) {
      if (previousIndex === -1 || nums[previousIndex] < nums[currentIndex])
        c1 =
          1 +
          findLASLengthRecursive(nums, currentIndex, currentIndex + 1, !isAsc)
    } else {
      // if descending, the next element should be smaller
      // eslint-disable-next-line no-lonely-if
      if (previousIndex === -1 || nums[previousIndex] > nums[currentIndex])
        c1 =
          1 +
          findLASLengthRecursive(nums, currentIndex, currentIndex + 1, !isAsc)
    }
    // skip the current element
    const c2 = findLASLengthRecursive(
      nums,
      previousIndex,
      currentIndex + 1,
      isAsc
    )
    return Math.max(c1, c2)
  }
  // we have to start with two recursive calls, one where we will consider that the first element is
  // bigger than the second element and one where the first element is smaller than the second element
  return Math.max(
    findLASLengthRecursive(nums, -1, 0, true),
    findLASLengthRecursive(nums, -1, 0, false)
  )
}

// Memo
export const findLASLengthMemo = (nums) => {
  const dp = []

  const findLASLengthRecursive = (nums, previousIndex, currentIndex, isAsc) => {
    if (currentIndex === nums.length) return 0

    dp[previousIndex + 1] = dp[previousIndex + 1] || []
    dp[previousIndex + 1][currentIndex] =
      dp[previousIndex + 1][currentIndex] || []
    if (
      typeof dp[previousIndex + 1][currentIndex][isAsc ? 1 : 0] === "undefined"
    ) {
      let c1 = 0
      // if ascending, the next element should be bigger
      if (isAsc) {
        if (previousIndex === -1 || nums[previousIndex] < nums[currentIndex]) {
          c1 =
            1 +
            findLASLengthRecursive(nums, currentIndex, currentIndex + 1, !isAsc)
        }
      } else {
        // if descending, the next element should be smaller
        // eslint-disable-next-line no-lonely-if
        if (previousIndex === -1 || nums[previousIndex] > nums[currentIndex]) {
          c1 =
            1 +
            findLASLengthRecursive(nums, currentIndex, currentIndex + 1, !isAsc)
        }
      }
      // skip the current element
      const c2 = findLASLengthRecursive(
        nums,
        previousIndex,
        currentIndex + 1,
        isAsc
      )
      dp[previousIndex + 1][currentIndex][isAsc ? 1 : 0] = Math.max(c1, c2)
    }

    return dp[previousIndex + 1][currentIndex][isAsc ? 1 : 0]
  }
  return Math.max(
    findLASLengthRecursive(nums, -1, 0, true),
    findLASLengthRecursive(nums, -1, 0, false)
  )
}

// DP
// TC: n^2
// SP: n
export const findLASLengthDP = (nums) => {
  if (nums.length === 0) return 0
  // dp[i][0] = stores the LAS ending at 'i' such that the last two elements are in ascending order
  // dp[i][1] = stores the LAS ending at 'i' such that the last two elements are in descending order
  const dp = Array(nums.length)
    .fill(0)
    .map(() => Array(2).fill(0))

  let maxLength = 1
  for (let i = 0; i < nums.length; i++) {
    // every single element can be considered as a LAS of length 1
    dp[i][1] = 1
    dp[i][0] = dp[i][1]
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        // if nums[i] is BIGGER than nums[j] then we will consider the LAS ending at 'j' where the
        // last two elements were in DESCENDING order
        dp[i][0] = Math.max(dp[i][0], 1 + dp[j][1])
        maxLength = Math.max(maxLength, dp[i][0])
      } else if (nums[i] !== nums[j]) {
        // if the numbers are equal, don't do anything
        // if nums[i] is SMALLER than nums[j] then we will consider the LAS ending at 'j' where the
        // last two elements were in ASCENDING order
        dp[i][1] = Math.max(dp[i][1], 1 + dp[j][0])
        maxLength = Math.max(maxLength, dp[i][1])
      }
    }
  }
  return maxLength
}
