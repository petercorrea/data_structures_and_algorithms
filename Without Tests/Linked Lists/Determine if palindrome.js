import DbLinkedList from "../../Data Structures/LinkedList.js"
import Node from "../../Data Structures/Node.js"

class Stack {
  constructor() {
    this.head = null
  }

  push(value) {
    const newNode = new Node(value)

    if (this.head === null) {
      this.head = newNode
      return
    }

    this.head.next = newNode
    newNode.prev = this.head
    this.head = this.head.next
  }

  pop() {
    if (this.head.prev === null) {
      this.head = null
      return
    }

    this.head = this.head.prev
    this.head.next = null
  }
}

const ll = new DbLinkedList()

ll.append("Pedro")
ll.append("Peter")
ll.append("Michael")
ll.append("Peter")
ll.append("Pedro")

export const isPalindrome = (someLL) => {
  const stack = new Stack()
  let current = someLL.head

  // create stack
  while (current) {
    stack.push(current.value)
    current = current.next
  }

  // attempt to empty stack
  current = someLL.head
  while (current) {
    if (current.value === stack.head.value) {
      stack.pop()
    } else {
      break
    }

    current = current.next
  }

  // check stack for emptiness
  if (stack.head === null) {
    return true
  }
  return false
}
