import Node from "../../Data Structures/Node.js"

class RandomNode extends Node {
  constructor(value, random) {
    super(value)
    this.random = random
  }
}

const randomNode1 = new RandomNode("1")
const randomNode2 = new RandomNode("2")
const randomNode3 = new RandomNode("3")

randomNode1.next = randomNode2
randomNode2.next = randomNode3
randomNode1.random = randomNode3
randomNode3.random = randomNode2
randomNode2.random = randomNode1

export const copy = (head) => {
  let current = head
  while (current) {
    const copyNode = new Node(current.value)
    copyNode.next = current.next
    current.next = copyNode
    current = current.next.next
  }

  current = head.next
  let original = head
  while (current) {
    current.random = original.random
    current = current.next
    original = original.next
  }

  original = head
  while (original) {
    original.next = original.next.next
    original = original.next
  }

  return head
}

copy(randomNode1)
