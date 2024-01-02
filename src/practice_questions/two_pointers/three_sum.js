// Given an integer array nums, return all the triplets[nums[i], nums[j], nums[k]] such that
// i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
// Notice that the solution set must not contain duplicate sets of triplets.

// sort, eliminate duplicates, one pointer for a loop and the other two are l&r pointers
import { mergeSort } from "../../algorithms/sorting/merge_sort"

export const threeSum = (nums) => {
  const sorted = mergeSort(nums)
  const result = []
  const target = 0

  const hash = {}

  for (const i in sorted) {
    let l = parseInt(i, 10) + 1
    let r = sorted.length - 1
    while (l < r) {
      const sum = sorted[i] + sorted[l] + sorted[r]
      if (sum === target) {
        const key = [sorted[i], sorted[l], sorted[r]]
        if (!hash[key]) {
          hash[key] = true
          result.push(key)
        }
      }
      if (sum > target) {
        r--
      } else {
        l++
      }
    }
  }

  return result
}
