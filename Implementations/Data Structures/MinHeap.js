// left child: i * 2
// right child: i * 2 + 1
// parent: i / 2

// MinHeap are represented as complete trees. We can represent this more efficiently as an array

class MinHeap {
  constructor() {
    // To make the math workout easier, we place null at index 0 and work off index 1.
    this.heap = [null]
  }

  insert(num) {
    // insert item as the last item
    this.heap.push(num)

    // sort the heap upwards
    // if there is more than one node [null, root]
    if (this.heap.length > 2) {
      // get the last idx
      let idx = this.heap.length - 1

      // while the child is less than the parent, swap and traverse up
      while (this.heap[idx] < this.heap[Math.floor(idx / 2)]) {
        if (idx >= 1) {
          // Object destructuring to swap values
          [this.heap[Math.floor(idx / 2)], this.heap[idx]] = [
            this.heap[idx],
            this.heap[Math.floor(idx / 2)]
          ]
          // if the parent is not the root node, keep traversing
          if (Math.floor(idx / 2) > 1) {
            // move up to the parent idx
            idx = Math.floor(idx / 2)
          } else {
            break
          }
        }
      }
    }
  }

  remove() {
    // save head
    const smallest = this.heap[1]

    // sort the heap downward
    // if there is more than 1 node
    if (this.heap.length > 3) {
      // reset the head to the last node
      this.heap[1] = this.heap[this.heap.length - 1]
      // remove the last node
      this.heap.splice(this.heap.length - 1)

      // if theres only one child, sort them [null, val1, val2]
      if (this.heap.length == 3) {
        if (this.heap[1] > this.heap[2]) {
          [this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]]
        }
        return smallest
      }

      // if there are two children, set formulas
      let i = 1
      let left = 2 * i
      let right = 2 * i + 1

      // while the root node is greater than either one of its children
      while (
        this.heap[i] >= this.heap[left]
				|| this.heap[i] >= this.heap[right]
      ) {
        // if left node is the smallest child of the two, swap it
        if (this.heap[left] < this.heap[right]) {
          [this.heap[i], this.heap[left]] = [
            this.heap[left],
            this.heap[i]
          ]
          // increment idx
          i = 2 * i
        } else {
          // if right node is the smallest child
          [this.heap[i], this.heap[right]] = [
            this.heap[right],
            this.heap[i]
          ]
          // increment idx
          i = 2 * i + 1
        }

        // increment children idxs
        left = 2 * i
        right = 2 * i + 1

        // if we reached the bottom of the tree
        if (
          this.heap[left] == undefined
					|| this.heap[right] == undefined
        ) {
          break
        }
      }
      // if theres only one element in the tree [null, parent]
    } else if (this.heap.length == 3) {
      // remove the one node
      this.heap.splice(1, 1)
      return smallest
    } else if (this.heap.length < 3) {
      // if there were 0 elements to begin with
      if (this.heap.length == 1) {
        return null
      }
      this.heap.splice(1)
      return smallest
    }

    // return the head
    return smallest
  }

  sort() {
    // T(C) = nlogn
    // to create a sorted array
    const result = new Array()
    while (this.heap.length > 1) {
      result.push(this.remove())
    }
    return result
  }
}

module.exports = {
  MinHeap,
}

const someMinHeap = new MinHeap()
someMinHeap.insert(20)
someMinHeap.insert(10)
someMinHeap.insert(1)
someMinHeap.insert(22)
console.log(someMinHeap.remove())
