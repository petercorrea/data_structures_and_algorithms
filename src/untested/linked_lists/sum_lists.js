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

import Node from "../../data_structures/node.js"
// set A
const node5 = new Node(1, null, null)
// eslint-disable-next-line no-unused-vars
const node4 = new Node(4, null, node5)

const node3 = new Node(3, null, null)
const node2 = new Node(8, null, node3)
// eslint-disable-next-line no-unused-vars
const node1 = new Node(9, null, node2)

export const sumListsA = (list1, list2) => {
  let carry = 0
  let result = new Node(null, null, null)
  const head = result
  let sum = 0

  while (list1 !== null || list2 !== null) {
    if (list1 !== null) {
      sum += list1.value || 0
      list1 = list1.next
    }

    if (list2 !== null) {
      sum += list2.value || 0
      list2 = list2.next
    }

    sum += carry

    if (sum > 9) {
      result.value = sum - 10
      carry = 1
    } else {
      result.value = sum
      carry = 0
    }

    result.next = new Node(null, null, null)
    result = result.next
    sum = 0
  }

  return head.next
}

// Test

// Notes after implementing:
// remember to use pointer to traverse the list, not the list itself
