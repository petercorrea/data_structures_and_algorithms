// Given an array of integers compute the greatest sum possible
// without using only non-adjacent elements.

// recurrance relation:
// 		the max sum = max(
// 			current element + sum of non - adj elements,
// 			previous sum of non adj elements
// 		)
// 		max(array[i] + sums[i-2], sums[i-1])

export const maxSum = (arr) => {
  if (arr.length === 0) return 0
  if (arr.length === 1) return arr[0]
  const sums = Array(arr).fill(0)

  sums[0] = arr[0]
  sums[1] = Math.max(arr[0], arr[1])

  for (let i = 2; i < arr.length; i++) {
    if (arr[i] < 0) sums[i] = sums[i - 1]
    sums[i] = Math.max(arr[i] + sums[i - 2], sums[i - 1])
  }

  return sums[sums.length - 1]
}
