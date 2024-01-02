/* eslint-disable max-classes-per-file */

// Singly LinkedList complexity:
//    insert - O(n)
//      prepend - O(1)
//      append - O(1)
//    search - O(n)  w/ hashmap - O(1)
//    delete - O(n)
//      head - O(1)
//      tail  - O(1)
//    reverse - O(n)

export class ListNode {
  constructor(value, next, prev) {
    this.value = value
    this.next = next
    this.prev = prev
  }
}

export class LinkedList {
  constructor() {
    this.head = undefined
    this.tail = undefined
  }

  append(value) {
    const newNode = new ListNode(value)

    // check for no head
    if (!this.head) {
      this.head = newNode
      this.tail = this.head
      return
    }

    // simply append to tail
    this.tail.next = newNode
    newNode.prev = this.tail
    this.tail = newNode
  }

  prepend(value) {
    const newNode = new ListNode(value)

    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    }

    this.head.prev = newNode
    newNode.next = this.head
    this.head = newNode
  }

  insert(value, after) {
    const first = this.search(after)
    const last = first ? first.next : undefined

    if (!first) {
      throw Error("search value not found")
    } else {
      const middle = new ListNode(value)
      first.next = middle
      middle.next = last
      middle.prev = first
      last.prev = middle
      return middle
    }
  }

  search(value) {
    let current = this.head

    while (current) {
      if (current.value === value) {
        return current
      }

      current = current.next
    }

    return undefined
  }

  delete(value) {
    // empty list
    if (!this.tail) {
      return
    }

    // one item list
    if (this.head.value === value && this.head === this.tail) {
      this.head = undefined
      this.tail = undefined
      return
    }

    let current = this.head

    while (current) {
      // if node is head
      if (this.head.value === value) {
        // update head
        this.head = current.next
        this.head.prev = undefined
        // if node is tail
      } else if (this.tail.value === value) {
        this.tail = this.tail.prev
        this.tail.next = undefined
        // arbitrary node
      } else if (current.value === value) {
        current.prev.next = current.next
        current.next.prev = current.prev
      }

      current = current.next
    }
  }

  reverse() {
    let prev = this.head
    let current = this.head
    let next = this.head

    while (current) {
      next = next.next

      current.next = prev
      current.prev = next

      prev = current
      current = next
    }

    // swap head and tail
    this.tail = this.head
    this.head = prev
  }
}
