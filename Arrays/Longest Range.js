// Provided an unsorted array, determine the longest range.
// [1, 1, 1] is not a range
// [1, 1, 2, 3] is a range

// Time: n+nlogn
// Space: 1

function largestRange(array) {
  array.sort((a, b) => a - b)
  console.log(array)

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
    } else {
      if (currentPair[0] - currentPair[1] === 0) {
        currentPair = []
        continue
      }

      if (currentLength > maxLength) {
        maxLength = currentLength
        currentLength = 1

        maxPair = [...currentPair]
        currentPair = []
      }
    }
  }

  return maxPair
}

// Time: n
// Space: n
function largestRange(array) {
  let bestRange = []
  let longestLength = 0
  let nums = {}

  for (let num of array) {
    nums[num] = true
  }

  for (let num of array) {
    if (!nums[num]) continue
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

  return bestRange
}
