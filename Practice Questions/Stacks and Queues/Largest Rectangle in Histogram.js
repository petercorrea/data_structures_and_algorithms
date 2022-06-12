// Given an array of integers heights representing the histogram's bar height where
// the width of each bar is 1, return the area of the largest rectangle in the histogram.

// O(n^2)...exceeds runtime in leetcode
export const largestRect2 = (arr) => {
  let maxArea = 0
  let currentMax = 0
  let maxHeight = 0

  for (let i = 0; i < arr.length; i++) {
    maxHeight = Math.max(maxHeight, arr[i])
  }

  for (let i = 1; i <= maxHeight; i++) {
    for (let j = 0; j < arr.length; j++) {
      const height = arr[j]

      if (height >= i) {
        currentMax += i
      } else {
        maxArea = Math.max(maxArea, currentMax)
        currentMax = 0
      }
    }
    maxArea = Math.max(maxArea, currentMax)
    currentMax = 0
  }

  return maxArea
}

// O(n)
export const largestRect = (heights) => {
  const stack = []
  let maxArea = 0

  for (const i in heights) {
    const height = heights[i]
    let start = i

    // while the current height is less than the last height in the stack
    while (stack.length && height < stack[stack.length - 1][1]) {
      const lastItem = stack.pop()
      const currentArea = (i - lastItem[0]) * lastItem[1]
      maxArea = Math.max(maxArea, currentArea)
      // since the current height is shorter than the last height
      // this current height's area could start from the previous item....this repeats
      start = lastItem[0]
    }
    // at this point the heights should be "filtered" to be strictly increasing
    stack.push([start, height])
  }

  for (const i in stack) {
    const item = stack[i]
    const currentArea = (heights.length - item[0]) * item[1]
    maxArea = Math.max(maxArea, currentArea)
  }

  return maxArea
}
