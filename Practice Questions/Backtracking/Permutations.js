// Given an array nums of distinct integers,
// return all the possible permutations.
// You can return the answer in any order.
const recurse = (arr, result, visited = {}, temp = []) => {
  // base case
  if (temp.length === arr.length) {
    result.push([...temp])
    return
  }

  for (let i = 0; i < arr.length; i++) {
    // edge case
    const num = arr[i]
    if (!visited[num]) {
      // general case
      temp.push(num)
      visited[num] = true
      recurse(arr, result, visited, temp)
      temp.pop()
      delete visited[num]
    }
  }
}

export const permutations = (arr) => {
  const result = []
  recurse(arr, result)
  return result
}
