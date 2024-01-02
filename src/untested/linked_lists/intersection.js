// Problem Statement:
// Given two (singly) linked lists, determine if the two lists intersect.
// Return the intersecting node. Note that the intersection is defined based on
// reference, not value.That is, if the kth node of the first linked
// list is the exact same node(by reference) as the jth node of the second linked list,
// then they are intersecting.

// Clarifications and Assumptions:
// 	-

// Assume:
// 	-

// Sample Input and Output:
//

// Proposed Solution:
//
import Node from "../../data_structures/node.js"

const node5 = new Node(5, null, null)
const node4 = new Node(4, null, node5)
const node3 = new Node(3, null, node4)
const node2 = new Node(2, null, node3)
// eslint-disable-next-line no-unused-vars
const node1 = new Node(1, null, node2)

const node9 = new Node("D", null, node3) // intersection
const node8 = new Node("C", null, node9)
const node7 = new Node("B", null, node8)
// eslint-disable-next-line no-unused-vars
const node6 = new Node("A", null, node7)

export const intersection = (l1, l2) => {
  if (!sameTail(l1, l2)) return false

  const len1 = length(l1)
  const len2 = length(l2)
  let diff

  if (len1 > len2) {
    diff = len1 - len2
    while (diff !== 0) {
      l1 = l1.next
      diff--
    }
  } else {
    diff = len2 - len1
    while (diff !== 0) {
      l2 = l2.next
      diff--
    }
  }

  while (l1 !== l2) {
    l1 = l1.next
    l2 = l2.next
  }

  return l1
}

export const length = (list) => {
  let len = 0
  while (list) {
    len++
    list = list.next
  }

  return len
}

export const sameTail = (l1, l2) => {
  let tail1 = l1
  let tail2 = l2

  while (tail1.next) {
    tail1 = tail1.next
  }

  while (tail2.next) {
    tail2 = tail2.next
  }

  return tail1 === tail2
}

// Test

// Notes after implementing:
//
