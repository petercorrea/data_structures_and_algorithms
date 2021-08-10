const { Node, } = require("./LinkedList.js")

const list1 = new Node(-1, null, new Node(2, null, new Node(5)))
const list2 = new Node(
  1,
  null,
  new Node(3, null, new Node(4, null, new Node(6)))
)

function mergeTwoLists(l1, l2) {
  let currentL1 = l1
  let currentL2 = l2

  if (!l1) return l2
  if (!l2) return l1

  let beginning

  if (currentL1.value < currentL2.value) {
    beginning = currentL1
  } else {
    beginning = currentL2
  }

  while (currentL1 || currentL2) {
    if (currentL1 && currentL1.value < currentL2.value) {
      const previous = currentL1
      currentL1 = currentL1.next
      previous.next = currentL2
    } else {
      const previous = currentL2
      currentL2 = currentL2.next
      previous.next = currentL1
    }
  }

  return beginning
}

const result = mergeTwoLists(list1, list2)
console.log(result.next.next.next)
