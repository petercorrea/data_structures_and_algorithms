/* eslint-disable max-classes-per-file */
// LinkedLists are a sequential list of nodes where each node points to another node.
// The first node is often referred to as the head, and the last node as the tail.
// Nodes may contain references to other nodes, these references are called pointers.
// LinkedLists are often used as arrays-like structures, stacks, or queues.

// head -> node -> node -> node -> tail

// SinglyLinked List:
// Each node keeps a reference of the proceeding node.
// pros: less memory
// cons: cant traverse backwards

// DoublyLinked List:
// Each node keeps a reference of its previous and proceeding node.
// pros: can traverse backwards
// cons: more memory

// Time complexity:
// lookup by index w/ hashmap - O(1)
// lookup naive - O(n)
// search - O(n)
// appending - O(1)
// insert - O(n)
// delete - O(n)
// delete head - O(1)
// delete tail - O(1) -- O(n) for singly linked list

// LinkedList vs Arrays

// Arrays
// - Direct access to values
// - Are stored contiguously in memory, which benefit from cache
// - Adding and removing elements are slow

// LinkedLists
// - No direct access to values
// - Are stored discontiguous
// - Adding and removing elements are fast
// - Searching is slow

export class LinkedListNode {
  constructor(value, prev, next) {
    this.value = value
    this.prev = prev
    this.next = next
  }
}

export class DbLinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }

  append(value) {
    const newNode = new LinkedListNode(value)

    if (!this.tail) {
      this.head = newNode
      this.tail = newNode
      return
    }

    this.tail.next = newNode
    newNode.prev = this.tail
    this.tail = newNode
  }

  prepend(value) {
    const newNode = new LinkedListNode(value)

    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    }

    this.head.prev = newNode
    newNode.next = this.head
    this.head = newNode
  }

  search(value) {
    let current = this.head

    while (current) {
      if (current.value === value) {
        return current
      }

      current = current.next
    }

    return null
  }

  reverse() {
    let { prev } = this.head
    let current = this.head
    let { next } = this.head

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

  delete(value) {
    if (!this.tail) {
      return
    }

    if (this.head.value === value && this.head === this.tail) {
      this.head = null
      this.tail = null
      return
    }

    let current = this.head

    while (current) {
      if (this.head.value === value) {
        this.head = current.next

        if (current === this.tail) {
          this.tail = null
          return
        }

        this.head.prev = null
      } else if (this.tail.value === value) {
        this.tail = this.tail.prev
        this.tail.next = null
      } else if (current.value === value) {
        current.prev.next = current.next
        current.next.prev = current.prev
      }

      current = current.next
    }
  }
}
