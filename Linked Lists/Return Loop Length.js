const { Node, dbLinkedList, } = require("./LinkedList.js")

function detectLoopLength(list) {
  let slow = list
  let fast = list.next
  let length = 0

  if (fast == null) {
    return "only one item."
  }

  // break when same or null
  while (slow !== fast && fast.next.next !== null) {
    slow = slow.next
    fast = fast.next.next
  }

  // if null
  if (fast.next == null || fast.next.next == null) {
    return "no loop found."
  }

  // if same
  while (fast) {
    slow = slow.next
    fast = fast.next.next
    length++

    if (slow == fast) {
      return length
    }
  }

  return length
}

// Cycle
const node1 = new Node("Pedro")
const node2 = new Node("Peter")
const node3 = new Node("Michael")
const node4 = new Node("Miguel")
const node5 = new Node("Correa")

node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5
node5.next = node3

console.log(detectLoopLength(node1))
