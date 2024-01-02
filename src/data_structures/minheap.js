// Heaps are visualized as complete binary trees.
// We can represent this more efficiently as an array.

// To make the math workout easier, we place null at index 0 and work off index 1.
// For insertion, we insert at the end and sort up
// for pop, we replace head w/ last element sort down
// left child: i * 2
// right child: (i * 2) + 1
// parent: i / 2

export class MinHeap {
  // Constructor initializes the heap with a null at index 0 and sets the size to 0
  constructor() {
    this.heap = [null]
    this.size = 0
  }

  // Helper function to swap two elements in the heap array
  _swap(a, b) {
    [this.heap[b], this.heap[a]] = [this.heap[a], this.heap[b]]
  }

  // Helper function to validate if the input is a number
  _isValidNumber(num) {
    return typeof num === "number" && !isNaN(num)
  }

  // Insert a number into the heap
  insert(num) {
    // Validate the input
    if (!this._isValidNumber(num)) {
      throw new Error("Invalid input. Only numbers are allowed.")
    }

    // Add the new number to the end of the heap array
    this.heap.push(num)
    this.size++

    // Initialize child and parent indices
    let child = this.heap.length - 1
    let parent = Math.floor(child / 2)

    // Bubble-up loop...boundry check, min-heap property check
    while (child > 1 && this.heap[child] < this.heap[parent]) {
      this._swap(child, parent)
      child = parent
      parent = Math.floor(child / 2)
    }
  }

  // Remove and return the smallest element from the heap
  pop() {
    // If heap is empty, return null
    if (this.size === 0) return null

    // Store the smallest element to return later
    const minVal = this.heap[1]

    // Move the last element to the root and remove the last element
    this.heap[1] = this.heap[this.size]
    this.heap.pop()
    this.size--

    // Initialize indices for current node and its children
    let current = 1
    let leftChild = 2 * current
    let rightChild = 2 * current + 1

    // Bubble-down loop to maintain min-heap property
    while (
      this.heap[leftChild] !== undefined
      && (this.heap[current] > this.heap[leftChild]
        || this.heap[current] > this.heap[rightChild])
    ) {
      // Determine which child is smaller
      if (
        this.heap[leftChild] < this.heap[rightChild]
        || this.heap[rightChild] === undefined
      ) {
        this._swap(current, leftChild)
        current = leftChild
      } else {
        this._swap(current, rightChild)
        current = rightChild
      }

      // Update indices for the next iteration
      leftChild = 2 * current
      rightChild = 2 * current + 1
    }

    return minVal
  }
}
