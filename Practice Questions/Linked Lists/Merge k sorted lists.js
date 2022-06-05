// Input:
// [
//   1->4->5,
//   1->3->4,
//   2->6
// ]

// Output: 1->1->2->3->4->4->5->6

import Node from "../../Data Structures/Node"

export const mergeKLists = (lists) => {
  // Initialize a container for values
  const result = []

  // Guard against no lists
  if (lists.length === 0) {
    return null
  }

  // Iterate through lists
  for (const idx in lists) {
    const singleList = lists[idx]

    // If list is neither empty or null
    if (singleList !== null && singleList.length !== 0) {
      result.push(singleList[0].value)
      let ref = singleList[0].next
      while (ref !== null) {
        result.push(ref.value)
        ref = ref.next
      }
    }
  }

  const compareNumbers = (a, b) => {
    if (a > b) {
      return 1
    }

    if (b > a) {
      return -1
    }

    return 0
  }

  // Guard against no values
  if (result.length === 0) {
    return null
  }

  // Sort the values
  result.sort(compareNumbers)

  // Initialize a node and make a reference to it
  const finalNode = new Node()
  let currentNode = finalNode

  // Iterate the values in result
  for (const idx in result) {
    // Add current idx as the value of the primary node
    currentNode.value = result[idx]

    // if the next idx within range is not undefined
    if (result[parseInt(idx, 10) + 1] !== undefined) {
      // add empty node to node.next
      currentNode.next = new Node()
    }

    // traverse one node
    currentNode = currentNode.next
  }
  return finalNode
}
