// Given an array, return an array of the same length where array[i]
// equals the product of all the elements except for the once located at i.

// Time: n
// Space: n
export const arrayOfProducts = (array) => {
  const result = []

  for (let i = 0; i < array.length; i++) {
    let leftProduct = 1
    for (let j = i - 1; j >= 0; j--) {
      leftProduct *= array[j]
    }

    let rightProduct = 1
    for (let k = i + 1; k < array.length; k++) {
      rightProduct *= array[k]
    }

    result.push(leftProduct * rightProduct)
  }

  return result
}

export const productExceptSelf = (nums) => {
  // setup
  const result = new Array(nums.length).fill(0)

  // add trailing product
  let prev = nums[0]
  for (let i = 1; i < nums.length; i++) {
    result[i] = prev
    prev *= nums[i]
  }
  result[0] = 1

  // multiply leading product
  prev = nums[nums.length - 1]
  for (let i = nums.length - 2; i >= 0; i--) {
    const currentProduct = prev * nums[i]
    result[i] *= prev
    prev = currentProduct
  }

  return result
}
