// Problem Statement:
// Find all permutations of a string.

// Clarifications and Assumptions:
// 	-

// Assume:
// 	-

// Sample Input and Output:
//

// Proposed Solution:
//

export const permsIter = (string, perms = []) => {
  const twoChars = string.substring(0, 2)
  const remaindingChars = string.substring(2)

  perms.push(twoChars[0] + twoChars[1])
  perms.push(twoChars[1] + twoChars[0])

  for (const char of remaindingChars) {
    const permsLength = perms.length

    for (let j = 0; j < permsLength; j++) {
      const perm = perms.shift()

      for (let i = 0; i <= perm.length; i++) {
        const newPerm = perm.substring(0, i) + char + perm.substring(i)
        perms.push(newPerm)
      }
    }
  }

  return perms
}

export const permsRecurs = (string, perms = []) => {
  if (string.length === 2) {
    return [string[0] + string[1], string[1] + string[0]]
  }

  for (let i = 0; i < string.length; i++) {
    const rightHalf = string.substring(0, i)
    const char = string[i]
    const leftHalf = string.substring(i + 1)

    const results = permsRecurs(rightHalf + leftHalf)

    for (const idx in results) {
      results[idx] = char + results[idx]
      perms.push(results[idx])
    }
  }

  return perms
}

// Test

// Notes after implementing:
// Do not refernce the object length directly as the terminating condition
// for the loop. Save the value.
