class GraphMinHeap {
  constructor() {
    // To make the math workout easier, we place null at index 0 and work off index 1.
    this.heap = [null]
  }

  insert(num, map) {
    // insert item as the last item
    this.heap.push(num)

    // sort the heap upwards
    // if there is more than one node [null, root]
    if (this.heap.length > 2) {
      // get the last idx
      let idx = this.heap.length - 1

      // while the child is less than the parent, swap and traverse up
      while (this.heap[idx].weight < this.heap[Math.floor(idx / 2)].weight) {
        if (idx >= 1) {
          // Object destructuring to swap values
          map.get(this.heap[idx].value).index = Math.floor(idx / 2)
          map.get(this.heap[Math.floor(idx / 2)].value).index = idx

          // increment idx

          ;[this.heap[Math.floor(idx / 2)], this.heap[idx]] = [
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

  remove(map) {
    // save head
    const smallest = this.heap[1]

    // sort the heap downward
    // if there is more than 1 node
    if (this.heap.length > 3) {
      // reset the head to the last node
      this.heap[1] = this.heap[this.heap.length - 1]
      map.get(this.heap[1].value).index = 1

      // console.log("head", 1, map.get(this.heap[1].value).index);
      // remove the last node
      this.heap.splice(this.heap.length - 1)

      // if theres only one child, sort them [null, val1, val2]
      if (this.heap.length === 3) {
        if (this.heap[1].weight > this.heap[2].weight) {
          [this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]]
          // SWAP INDICES
          map.get(this.heap[1].value).index = 1
          map.get(this.heap[2].value).index = 2

          // console.log("only 2", 1, map.get(this.heap[1].value).index);
          // console.log("only 2", 2, map.get(this.heap[2].value).index);
        }
        return smallest
      }

      // if there are two children, set formulas
      let i = 1
      let left = 2 * i
      let right = 2 * i + 1

      // console.log("ledt", this.heap);

      // while the root node is greater than either one of its children
      while (
        this.heap[i].weight >= this.heap[left].weight
        || this.heap[i].weight >= this.heap[right].weight
      ) {
        // if left node is the smallest child of the two, swap it
        if (this.heap[left].weight < this.heap[right].weight) {
          map.get(this.heap[i].value).index = left
          map.get(this.heap[left].value).index = i;
          [this.heap[i], this.heap[left]] = [this.heap[left], this.heap[i]]
          // SWAP INDICES
          // console.log("left");
          // console.log("check", i, map.get(this.heap[i].value).index);

          // increment idx
          i = 2 * i
        } else {
          // if right node is the smallest child
          map.get(this.heap[i].value).index = right

          map.get(this.heap[right].value).index = i;
          [this.heap[i], this.heap[right]] = [this.heap[right], this.heap[i]]
          // SWAP INDICES
          // console.log("right");
          // console.log("check", i, map.get(this.heap[i].value).index);

          // increment idx
          i = 2 * i + 1
        }

        // increment children idxs
        left = 2 * i
        right = 2 * i + 1

        // if we reached the bottom of the tree
        if (this.heap[left] === undefined || this.heap[right] === undefined) {
          break
        }
      }
      // [null, parent, child]
    } else if (this.heap.length === 3) {
      // remove the one node
      map.get(this.heap[2].value).index = 1
      this.heap.splice(1, 1)

      return smallest
      // [null, parent]
    } else if (this.heap.length < 3) {
      if (this.heap.length === 1) {
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

  peek() {
    if (this.heap.length === 1) {
      return null
    }
    return this.heap[1]
  }
}

module.exports = {
  GraphMinHeap,
}
