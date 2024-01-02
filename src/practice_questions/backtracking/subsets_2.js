// Given an integer array nums that may contain duplicates, return all possible subsets (the power set).
// The solution set must not contain duplicate subsets. Return the solution in any order.
import { mergeSort } from "../../algorithms/sorting/merge_sort"

export const subset = (arr) => {
  // sort input
  const sorted = mergeSort(arr)

  const recurse = (arr, result = [[]], index = 0, temp = []) => {
    for (let i = index; i < arr.length; i++) {
      const item = arr[i]
      const newTemp = [...temp, item]
      result.push(newTemp)

      let j = i
      while (item === arr[j] && j < arr.length) {
        j++
      }

      recurse(arr, result, j, newTemp)
    }

    return result
  }

  return recurse(sorted)
}
