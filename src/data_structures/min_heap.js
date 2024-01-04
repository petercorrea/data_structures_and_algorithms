// Do not edit the class below except for the buildHeap,
// siftDown, siftUp, peek, remove, and insert methods.
// Feel free to add new properties and methods to the class.
export class MinHeap {
  constructor(array) {
    this.heap = this.buildHeap(array)
  }

  buildHeap(array) {
    this.heap = []
    this.size = 0

    if (array.length === 0 || array === undefined) {
      return []
    }

    for (const item of array) {
      // push onto the end of the array
      this.heap.push(item)
      this.size++
      // sift up
      this.siftUp()
    }

    return this.heap
  }

  siftDown() {
    // Write your code here.
    let parentIdx = 0
    let lChildIdx = 1
    let rChildIdx = 2

    let parent = this.heap[parentIdx]
    let lChild = this.heap[lChildIdx]
    let rChild = this.heap[rChildIdx]

    // while the parent is greater than any one of the childs
    while (parent > lChild || parent > rChild) {
      // if there's only 2 items
      if (this.heap.length === 2 && this.heap[0] > this.heap[1]) {
        const temp = this.heap[0]
        this.heap[0] = this.heap[1]
        this.heap[1] = temp
        return
      }
      // swap parent with left
      if (lChild < rChild) {
        this.heap[lChildIdx] = parent
        this.heap[parentIdx] = lChild

        // update parent idx to the left child
        parentIdx = lChildIdx
        // swap parent with right
      } else {
        this.heap[rChildIdx] = parent
        this.heap[parentIdx] = rChild

        // update parent idx to the right child
        parentIdx = rChildIdx
      }

      // update indices
      lChildIdx = parentIdx * 2 + 1
      rChildIdx = parentIdx * 2 + 2

      // update values
      parent = this.heap[parentIdx]
      lChild = this.heap[lChildIdx]
      rChild = this.heap[rChildIdx]
    }
  }

  siftUp() {
    let childIdx = this.heap.length - 1
    let child = this.heap[childIdx]
    let parentIdx = Math.floor((childIdx - 1) / 2)
    let parent = this.heap[parentIdx]

    // sift up
    while (child < parent) {
      // swap values
      const tmp = parent
      this.heap[parentIdx] = child
      this.heap[childIdx] = tmp

      // update positions
      childIdx = parentIdx
      parentIdx = Math.floor((childIdx - 1) / 2)
      child = this.heap[childIdx]
      parent = this.heap[parentIdx]
    }
  }

  peek() {
    // look at root
    return this.heap[0]
  }

  remove() {
    // save root, to return
    const root = this.heap[0]

    // copy the last item to the root
    this.heap[0] = this.heap[this.heap.length - 1]
    // remove the last item

    this.heap.pop()
    this.size--

    // sift down
    this.siftDown()

    return root
  }

  insert(value) {
    // push onto the end of the array, then sift up
    this.heap.push(value)
    this.size++
    this.siftUp()
  }
}
