// Given an array, determine the smallest subarray inorder to sort the
// whole array.

function subarraySort(array) {
  let min = null
  let max = null
  const result = []

  for (let i = 0; i < array.length; i++) {
    if (array[i - 1] > array[i] || array[i] > array[i + 1]) {
      if (array[i] < array[min] || min === null) min = i
      if (array[i] > array[max] || max === null) max = i
    }
  }

  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[min]) {
      result.push(i)
      break
    }
  }

  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] <= array[max]) {
      result.push(i)
      break
    }
  }

  if (result.length === 0) return [-1, -1]
  return result
}
