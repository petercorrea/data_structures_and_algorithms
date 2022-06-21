// Given an array of distinct integers candidates and a target integer target,
// return a list of all unique combinations of candidates where the chosen
// numbers sum to target.You may return the combinations in any order.

// The same number may be chosen from candidates an unlimited number of times.
// Two combinations are unique if the frequency of at least one of the chosen
// numbers is different.

// It is guaranteed that the number of unique combinations that sum up to
// target is less than 150 combinations for the given input.

export const combinationSumRecursion = (nums, target) => {
  // edge cases
  if (target <= 0) return []

  const result = []

  const recurse = (nums, target, result, sum = 0, index = 0, temp = [], cache = {}) => {
    // base case
    const key = temp.join("-")
    if (sum === target && !cache[key]) {
      cache[key] = true
      result.push(temp)
      return
    }

    // guard
    if (index >= nums.length || sum > target) return

    // general case
    const newSum = sum + nums[index]
    const newTemp = [...temp]
    newTemp.push(nums[index])

    recurse(nums, target, result, sum, index + 1, temp, cache)
    recurse(nums, target, result, newSum, index, newTemp, cache)
    recurse(nums, target, result, newSum, index + 1, newTemp, cache)
  }

  recurse(nums, target, result)
  return result
}

export const combinationSum = (nums, target) => {
  // edge cases
  const result = []
  const temp = []

  const recurse = (index) => {
    if (target < 0) return

    // base case
    if (target === 0) {
      result.push([...temp])
    }

    // guard
    while (nums[index]) {
      // general case
      target -= nums[index]
      temp.push(nums[index])

      recurse(index)
      target += nums[index]
      temp.pop()
      index++
    }
  }

  recurse(0)
  return result
}
