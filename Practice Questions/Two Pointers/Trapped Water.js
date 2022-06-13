// Given an array represent heights of columns, return the area of trapped water.
// the sum of water trapped at any given height is min(l, r) - heights[i]

export const trappedWater = (heights) => {
  let maxSum = 0
  let l = 0
  let r = heights.length - 1
  let leftMax = heights[l]
  let rightMax = heights[r]

  while (l < r) {
    if (leftMax < rightMax) {
      // endpoints cant contain water
      l++
      leftMax = Math.max(leftMax, heights[l])
      maxSum += leftMax - heights[l]
    } else {
      r--
      rightMax = Math.max(rightMax, heights[r])
      maxSum += rightMax - heights[r]
    }
  }

  return maxSum
}
