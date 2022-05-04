export class DbLinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }

  append(value) {
    const newNode = new Node(value)

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
    const newNode = new Node(value)

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
