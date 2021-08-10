const { Node, dbLinkedList, } = require("./LinkedList.js")

class ExtendedDBLinkedList extends dbLinkedList {
  constructor(val) {
    super(val)
  }

  remove_dupes() {
    let current = this.head
    const map = new Map()

    while (current) {
      if (!map.has(current.value)) {
        map.set(current.value, true)
      } else {
        console.log(`Removed ${current.value}`)
        current.prev.next = current.next
        current.next.prev = current.prev
      }

      current = current.next
    }
  }
}

const ll = new ExtendedDBLinkedList()
ll.append("Peter")
ll.append("Pedro")
ll.append("Peter")
ll.append("Michael")
ll.remove_dupes()
console.log(ll)
