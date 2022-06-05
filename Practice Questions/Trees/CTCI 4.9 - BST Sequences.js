// Problem Statement:
// A binary search tree was created by traversing through an array from left to right and inserting each element. Given a binary search tree with distinct elements, print all possible arrays that could have led to this tree.

// Clarifications and Assumptions:
// 	-

// Assume:
// 	-

// Sample Input and Output:
//

// Proposed Solution:
//

export const sequencesToCreateBST = (tree) => {
  if (!tree) {
    return null
  }
  return sequencesRecursive(tree)
}

const sequencesRecursive = (node) => {
  if (!node) {
    return null
  }
  let perms = permutations(
    sequencesRecursive(node.left),
    sequencesRecursive(node.right)
  )
  if (!perms) {
    perms = [[node.value]]
  } else {
    perms.forEach((p) => p.unshift(node.value))
  }
  return perms
}

const permutations = (left, right) => {
  // false, true -> true
  // false, false -> false
  // true, true -> else
  // if both are truthy enter else clause
  if (!left || !right) {
    return left || right
  }
  let perms = []
  for (let i = 0; i < left.length; ++i) {
    for (let j = 0; j < right.length; ++j) {
      perms = [...perms, permutationsRecursive([], left[i], right[j], [], 0, 0)]
    }
  }
  return perms
}

const permutationsRecursive = (perms, list1, list2, prefix, i, j) => {
  //

  if (i === list1.length && j === list2.length) {
    perms.push(prefix.slice(0))
  } else {
    if (i < list1.length) {
      prefix.push(list1[i])

      permutationsRecursive(perms, list1, list2, prefix, i + 1, j)
      prefix.pop()
    }

    if (j < list2.length) {
      prefix.push(list2[j])

      permutationsRecursive(perms, list1, list2, prefix, i, j + 1)
      prefix.pop()
    }
  }

  return perms
}

// Test
//

// Notes after implementing:
//
