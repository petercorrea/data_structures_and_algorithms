// Given an array represent heights of columns, return the area of trapped water.

export const waterArea = (heights) => {
  let totalSum = 0

  for (let i = 0; i < heights.length; i++) {
    let leftMaxHeight = 0
    let rightMaxHeight = 0
    const currentHeight = heights[i]

    for (let j = 0; j < i; j++) {
      leftMaxHeight = Math.max(leftMaxHeight, heights[j])
    }

    for (let k = heights.length - 1; k > i; k--) {
      rightMaxHeight = Math.max(rightMaxHeight, heights[k])
    }

    if (leftMaxHeight !== 0 && rightMaxHeight !== 0) {
      const area = Math.min(leftMaxHeight, rightMaxHeight) - currentHeight
      if (area > 0) totalSum += area
    }
  }

  return totalSum
}