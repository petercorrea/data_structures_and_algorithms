// Problem Statement:
// The Power set is the set containing all the subsets of a given set.
// Write a method to return the powerset of a set.

// Clarifying Questions and Assumptions:
//

// Sample Input and Output:
// input = [1, 2, 3]

const powerset = (array, idx = null) => {
  if (idx === null) {
    idx = array.length - 1
  }
  if (idx < 0) {
    return [[]]
  }
  const ele = array[idx]
  const subsets = powerset(array, idx - 1)
  const { length } = subsets

  for (let i = 0; i < length; i++) {
    const currentSubset = subsets[i]
    subsets.push(currentSubset.concat(ele))
  }
  return subsets
}

// Tests:
console.log(powerset(["A", "B", "C"]))
console.log(powerset([1, 2, 3]))
