// Given an integer array nums of unique elements, return all possible subsets (the power set).
// The solution set must not contain duplicate subsets. Return the solution in any order.

export const subsets = (nums) => {
  const result = [[]]

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    for (const j in result) {
      const item = result[j]
      const temp = [...item]
      temp.push(num)
      result.push(temp)
    }
  }

  return result
}
