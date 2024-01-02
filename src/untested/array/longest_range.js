// Provided an unsorted array, determine the longest range.
// [1, 1, 1] is not a range
// [1, 1, 2, 3] is a range

// Time: n+nlogn
// Space: 1

export const solution1 = (array) => {
  array.sort((a, b) => a - b)

  let maxLength = 0
  let maxPair = []
  let currentLength = 1
  let currentPair = []

  if (array.length === 1) {
    return [1, 1]
  }

  for (let i = 0; i <= array.length; i++) {
    if (array[i] - array[i - 1] === 1 || array[i] - array[i - 1] === 0) {
      currentLength++

      if (currentPair[0] === undefined) {
        currentPair = [array[i - 1], array[i]]
      } else {
        currentPair[1] = array[i]
      }
    } else if (currentPair[0] - currentPair[1] === 0) {
      currentPair = []
    } else if (currentLength > maxLength) {
      maxLength = currentLength
      currentLength = 1

      maxPair = [...currentPair]
      currentPair = []
    }
  }

  return maxPair
}

// Time: n
// Space: n
export const solution2 = (array) => {
  let bestRange = []
  let longestLength = 0
  const nums = {}

  for (const num of array) {
    nums[num] = true
  }

  for (const num of array) {
    if (nums[num]) {
      nums[num] = false

      let currentLength = 1
      let left = num - 1
      let right = num + 1

      while (left in nums) {
        nums[left] = false
        currentLength++
        left--
      }

      while (right in nums) {
        nums[right] = false
        currentLength++
        right++
      }

      if (currentLength > longestLength) {
        longestLength = currentLength
        bestRange = [left + 1, right - 1]
      }
    }
  }

  return bestRange
}
