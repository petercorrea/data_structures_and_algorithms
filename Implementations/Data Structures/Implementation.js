// Stacks - LIFO
class Stack {
  constructor() {
    this.data = []
    this.size = 0
  }

  push(e) {
    this.data[this.size] = e
    this.size++
  }

  pop() {
    if (this.size == 0) {
      return "The stack is empty"
    }

    const removed = this.data[this.size - 1]
    delete this.data[this.size - 1]
    this.size--
    return removed
  }

  peek() {
    return this.data[this.size - 1]
  }

  length() {
    return this.size
  }

  isEmpty() {
    if (this.size == 0) {
      return true
    }

    return false
  }

  print() {
    console.log(this.data)
  }
}

const someStack = new Stack()
someStack.push("Peter")
someStack.push("Michael")
someStack.push("Correa")
someStack.peek()
someStack.isEmpty()
someStack.pop()
someStack.print()

// Queue - FIFO
