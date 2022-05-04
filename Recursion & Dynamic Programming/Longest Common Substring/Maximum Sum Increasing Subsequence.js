// Given a number sequence, find the increasing subsequence with the highest sum. Write a method that returns the highest sum.

// Brute
// TC: O2^n
// SC: On
export const findMSIS = (nums) => {
  const findMSISRecursive = (nums, currentIndex, previousIndex, sum) => {
    if (currentIndex === nums.length) return sum

    // include nums[currentIndex] if it is larger than the last included number
    let s1 = sum
    if (previousIndex === -1 || nums[currentIndex] > nums[previousIndex])
      s1 = findMSISRecursive(
        nums,
        currentIndex + 1,
        currentIndex,
        sum + nums[currentIndex]
      )

    // excluding the number at currentIndex
    const s2 = findMSISRecursive(nums, currentIndex + 1, previousIndex, sum)

    return Math.max(s1, s2)
  }
  return findMSISRecursive(nums, 0, -1, 0)
}

export const findMSISDP = (nums) => {
  const dp = []

  const findMSISRecursive = (nums, currentIndex, previousIndex, sum) => {
    if (currentIndex === nums.length) return sum

    const subProblemKey = `${currentIndex}-${previousIndex}-${sum}`
    if (typeof dp[subProblemKey] === "undefined") {
      // include nums[currentIndex] if it is larger than the last included number
      let s1 = sum
      if (previousIndex === -1 || nums[currentIndex] > nums[previousIndex]) {
        s1 = findMSISRecursive(
          nums,
          currentIndex + 1,
          currentIndex,
          sum + nums[currentIndex]
        )
      }

      // excluding the number at currentIndex
      const s2 = findMSISRecursive(nums, currentIndex + 1, previousIndex, sum)
      dp[subProblemKey] = Math.max(s1, s2)
    }

    return dp[subProblemKey]
  }
  return findMSISRecursive(nums, 0, -1, 0)
}

// Brute
// TC: n^2
// SC: n
export const maxSumBrute = (array) => {
  const sums = array.map((num) => num)
  let maxSumIdx = 0

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < i; j++) {
      if (array[j] < array[i] && sums[j] + array[i] >= sums[i]) {
        sums[i] = sums[j] + array[i]
      }

      if (sums[i] > sums[maxSumIdx]) {
        maxSumIdx = i
      }
    }
  }

  return sums[maxSumIdx]
}

// Modified the above function to also return the list of nums contributing to the max sum
const maxSum = (array) => {
  const sums = array.map((num) => num)
  let maxSumIdx = 0
  const sequences = Array(array.length)

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < i; j++) {
      if (array[j] < array[i] && sums[j] + array[i] >= sums[i]) {
        sums[i] = sums[j] + array[i]
        sequences[i] = j
      }

      if (sums[i] > sums[maxSumIdx]) {
        maxSumIdx = i
      }
    }
  }

  // return sums[maxSumIdx];
  return [sums[maxSumIdx], buildSequence(array, sequences, maxSumIdx)]
}

const buildSequence = (array, sequences, currentIdx) => {
  const finalSequence = []

  while (currentIdx !== undefined) {
    finalSequence.unshift(array[currentIdx])
    currentIdx = sequences[currentIdx]
  }

  return finalSequence
}

console.log(maxSum([8, 12, 2, 3, 15, 5, 7]))
