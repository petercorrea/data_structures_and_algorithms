// Problem Statement:
// 		(A)
//		You have two numbers represented by a linked list,
// 		where each node contains a single digit.The digits are stored in reverse order,
// 		such that the 1's digit is at the head of the list.
// 		Write a function that adds the two numbers and returns the sum as a linked list.

// 		(B)
// 		Suppose the digits are stored in forward order. Repeat the above problem.

// Clarifications and Assumptions:
// 	-

// Assume:
// 	-

// Sample Input and Output:
// 		(A)
//		Input: (7-> 1 -> 6) + (5 -> 9 -> 2). That is, 617 + 295.
// 		Output: 2 -> 1 -> 9.That is, 912.
//
// 		(B)
// 		Input: (6 -> 1 -> 7) + (2 -> 9 -> 5).That is,617 + 295.
// 		Output: 9 -> 1 -> 2.That is, 912.

// Proposed Solution:
//

import Node from "../../Data Structures/Node"
// set B
const node11 = new Node(1, null, null)
// eslint-disable-next-line no-unused-vars
const node10 = new Node(1, null, node11)

const node9 = new Node(1, null, null)
const node8 = new Node(9, null, node9)
const node7 = new Node(9, null, node8)
// eslint-disable-next-line no-unused-vars
const node6 = new Node(1, null, node7)

export const sumListsB = (list1, list2) => {
  if (!list1 && !list2) return null

  const length1 = length(list1)
  const length2 = length(list2)

  if (length1 > length2) {
    list2 = pad(list2, length1 - length2)
  } else {
    list1 = pad(list1, length2 - length1)
  }

  const { previousSum, currentSum } = carry(sum(list1, list2), 0)
  return currentSum
    ? append(previousSum, new Node(currentSum, null, null))
    : previousSum
}

// Utility functions
export const length = (node) => {
  let len = 0

  while (node) {
    len++
    node = node.next
  }

  return len
}

export const pad = (list, num) => {
  while (num !== 0) {
    const node = new Node(0, null, null)
    node.next = list
    list = node
    num--
  }

  return list
}

export const append = (head, node) => {
  node.next = head
  return node
}

export const carry = (previousSum, currentSum) => {
  if (previousSum.value >= 10) {
    previousSum.value %= 10
    currentSum += 1
  }

  return {
    previousSum,
    currentSum
  }
}

export const sum = (l1, l2) => {
  if (!l1.next && !l2.next) {
    return new Node(l1.value + l2.value, null, null)
  }

  const value = l1.value + l2.value

  const { previousSum, currentSum } = carry(sum(l1.next, l2.next), value)
  return append(previousSum, new Node(currentSum, null, null))
}

// Test

// Notes after implementing:
// since we can't directly traverse backwarks in a singly linked list
// we can utilize recursion to achieve the same effect.
// do not attempt to reassign names in obj destruct
