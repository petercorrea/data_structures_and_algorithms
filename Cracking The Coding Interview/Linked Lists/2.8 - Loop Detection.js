// Problem Statement:
// Given a circular linked list, implement an algorithm that
// returns the node at the beginning of the loop.
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

const node7 = new Node(7, null, null)
const node6 = new Node(6, null, null)
const node5 = new Node(5, null, null)
const node4 = new Node(4, null, null)
const node3 = new Node(3, null, null)
const node2 = new Node(2, null, null)
const node1 = new Node(1, null, null)

node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5 // beg. of loop
node5.next = node6
node6.next = node7
node7.next = node4 // go to loop

const hasLoopWithMap = (list) => {
  let slow = list
  let fast = list

  while (slow && fast) {
    slow = slow.next
    fast = fast.next?.next

    if (slow == fast) {
      // console.log("Collision at node: ", slow);
      break
    }
  }

  if (!slow || !fast) return false

  slow = list
  const map = new Map()

  while (slow) {
    if (map.has(slow)) {
      // console.log("Beginning of loop: ", slow);
      return slow
    }
    map.set(slow, true)
    slow = slow.next
  }
}

const hasLoopWithNoMap = (list) => {
  let slow = list
  let fast = list

  while (slow && fast) {
    slow = slow.next
    fast = fast.next?.next

    if (slow == fast) {
      // console.log("Collision at node: ", slow);
      break
    }
  }

  if (!slow || !fast) return false

  slow = list

  while (slow != fast) {
    slow = slow.next
    fast = fast.next
  }

  if (slow == fast) {
    return slow
  }
}

// Test
console.log(hasLoopWithMap(node1)) // result
console.log(hasLoopWithNoMap(node1)) // result

// Notes after implementing:
//
