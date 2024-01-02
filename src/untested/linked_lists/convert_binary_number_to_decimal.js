import Node from "../../data_structures/node.js"

export const getDecimalValue = (head) => {
  let result = 0

  while (head) {
    result = result * 2 + head.value
    head = head.next
  }

  return result
}

const node1 = new Node(1)
const node2 = new Node(1)
const node3 = new Node(0)

node1.next = node2
node2.next = node3
