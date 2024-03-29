import DbLinkedList from "../../data_structures/linked_list.js"

export const findMiddleNode = (list) => {
  let slow = list.head
  let fast = list.head

  while (fast !== list.tail && fast !== null) {
    slow = slow.next
    fast = fast.next.next
  }

  return slow
}

const ll = new DbLinkedList()
ll.append("Peter")
ll.append("Michael")
ll.append("Miguel")
ll.append("Correa")
ll.prepend("Pedro")
