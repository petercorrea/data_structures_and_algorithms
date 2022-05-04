// Problem Statement:
// Implement an algorithm to delete a node in the middle
// (i.e., any node but the first and last node, not necessarily the exact middle)
// of a singly linked list, given only access to that node.

// Clarifications and Assumptions:
// 	- Do we have access to the head? - No.

// Assume:
// 	-

// Sample Input and Output:
//

// Proposed Solution:
//

const { Node } = require("../Implementations/Data Structures/Node")

const node8 = new Node(8, null, null)
const node7 = new Node(7, null, node8)
const node6 = new Node(6, null, node7)
const node5 = new Node(5, null, node6)
const node4 = new Node(4, null, node5)
const node3 = new Node(3, null, node4)
const node2 = new Node(2, null, node3)
// eslint-disable-next-line no-unused-vars
const node1 = new Node(1, null, node2)

const deleteNode = (node) => {
  if (node === null || node.next === null) return false
  node.value = node.next.value
  node.next = node.next.next
  return node
}

// Test
console.log(deleteNode(node4)) // result

// Notes after implementing:
//
