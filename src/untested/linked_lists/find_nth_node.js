import DbLinkedList from "../../data_structures/linked_list.js"

export const findNthNode = (list, nth) => {
  let current = list.head
  let counter = 0

  while (current && counter !== nth) {
    current = current.next
    counter++
  }

  if (counter === nth) {
    return current
  }

  return false
}

const ll = new DbLinkedList()
ll.append("Peter")
ll.append("Michael")
ll.append("Miguel")
ll.append("Correa")
ll.prepend("Pedro")
ll.delete("Pedro")
