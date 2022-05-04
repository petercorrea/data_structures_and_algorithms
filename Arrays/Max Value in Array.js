// Given an array of integers and asked to find the maximum value.
const arr = [2, 4, 1, 7, 9]

export const findMax = (array) => {
  if (arr.length === 0) {
    return null
  }

  // initialize a current val
  let max = 0

  // iterate array
  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i]
    }
  }

  return max
}

findMax(arr)
