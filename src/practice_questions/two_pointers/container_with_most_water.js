// You are given an integer array height of length n.There are n vertical lines drawn such that
// the two endpoints of the ith line are(i, 0) and(i, height[i]).
// Find two lines that together with the x - axis form a container,
// such that the container contains the most water.
// Return the maximum amount of water a container can store.
// Notice that you may not slant the container.

// This is similar to trapped rain water...for this problem, we are not subtracting the
// space each height takes up.

export const mostWater = (heights) => {
  let l = 0
  let r = heights.length - 1
  let max = 0

  while (l < r) {
    const smallerWall = Math.min(heights[l], heights[r])
    const distance = r - l
    const sum = smallerWall * distance
    max = Math.max(max, sum)

    if (heights[l] >= heights[r]) {
      r--
    } else {
      l++
    }
  }

  return max
}
