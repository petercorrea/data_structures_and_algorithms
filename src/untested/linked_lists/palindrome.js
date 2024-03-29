// Problem Statement:
// Implement a function to check if a linked list is a palindrome.

// Clarifications and Assumptions:
// 	-

// Assume:
// 	-

// Sample Input and Output:
//

// Proposed Solution:
//
import Node from "../../data_structures/node.js"

const node8 = new Node(1, null, null)
const node7 = new Node(2, null, node8)
const node6 = new Node(3, null, node7)
const node5 = new Node("x", null, node6)
const node4 = new Node("x", null, node5)
const node3 = new Node(3, null, node4)
const node2 = new Node(2, null, node3)
// eslint-disable-next-line no-unused-vars
const node1 = new Node(1, null, node2)

export const palindrome = (list) => {
  const len = length(list)

  const result = recurse(list, len)
  if (result === null) {
    return true
  }
  return false
}

export const length = (list) => {
  let len = 0
  while (list) {
    len++
    list = list.next
  }

  return len
}

export const recurse = (list, length) => {
  if (length === 2) {
    if (list.value === list.next.value) {
      return list.next.next
    }
  } else if (length === 1) {
    return list.next
  }

  const value = recurse(list.next, length - 2)

  if (list.value === value.value) {
    return value.next
  }
  return false
}

// Test

// Notes after implementing:
//
