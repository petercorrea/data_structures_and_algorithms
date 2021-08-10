// Problem Statement: Implement an algorithm to find the kth to last element of a singly linked list.
//

// Clarifing Questions:
// 	-

// Assume:
// 	-

// Sample Input and Output:
//

// Proposed Solution:
//
const { Node, } = require("../../Linked Lists/LinkedList")

const node8 = new Node(8, null, null)
const node7 = new Node(7, null, node8)
const node6 = new Node(6, null, node7)
const node5 = new Node(5, null, node6)
const node4 = new Node(4, null, node5)
const node3 = new Node(3, null, node4)
const node2 = new Node(2, null, node3)
const node1 = new Node(1, null, node2)

const kth = (head, k) => {
  let p1 = head
  let p2 = head

  for (let i = 0; i <= k - 1; i++) {
    if (p2 == null) return null
    p2 = p2.next
  }

  while (p2.next != null) {
    p1 = p1.next
    p2 = p2.next
  }

  return p1
}

// Test
console.log(kth(node1, 3)) // result

// Notes after implementing:
//
