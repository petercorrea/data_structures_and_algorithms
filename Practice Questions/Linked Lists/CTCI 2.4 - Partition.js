// Problem Statement:
// Write code to partition a linked list around a value x,
// such that all nodes less than x come before all nodes greater
// than or equal to x.If x is contained within the list the values of x
// only need to be after the elements less than x(see below).The partition
// element x can appear anywhere in the "right partition"; it does not need to
// appear between the left and right partitions.

// Clarifications and Assumptions:
// 	-

// Assume:
// 	-

// Sample Input and Output:
//

// Proposed Solution:
//

import Node from "../../Data Structures/Node"

const node8 = new Node(8, null, null)
const node7 = new Node(1, null, node8)
const node6 = new Node(6, null, node7)
const node5 = new Node(10, null, node6)
const node4 = new Node(3, null, node5)
const node3 = new Node(5, null, node4)
const node2 = new Node(2, null, node3)
// eslint-disable-next-line no-unused-vars
const node1 = new Node(1, null, node2)

export const partition = (node, x) => {
  let head = node
  let tail = node
  let next = null

  while (node !== null) {
    next = node.next

    if (node.value < x) {
      node.next = head
      head = node
    } else {
      tail.next = node
      tail = node
    }

    node = next
  }

  tail.next = null
  return head
}

// Test

// Notes after implementing:
//
