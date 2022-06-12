// Given an array, return an array of the same length where array[i]
// equals the product of all the elements except for the once located at i.

// Notes:
// [1,  2,  3, 4]
// [24, 12, 4, 1] left
// [24, 12, 8, 6] right

// Time: n
// Space: n
export const product = (nums) => {
  const result = new Array(nums.length).fill(1)

  let prev = nums[nums.length - 1]

  // left product
  for (let i = result.length - 2; i >= 0; i--) {
    result[i] *= prev
    if (Object.is(result[i], -0)) result[i] = 0
    prev = result[i] * nums[i]
  }

  // right product
  prev = nums[0]
  for (let i = 1; i < result.length; i++) {
    result[i] *= prev
    if (Object.is(result[i], -0)) result[i] = 0
    prev *= nums[i]
  }

  return result
}
