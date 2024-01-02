import { MinHeap } from "../../data_structures/minheap"

// Design a class to find the kth largest element in a stream.
// Note that it is the kth largest element in the sorted order,
// not the kth distinct element.

// Implement KthLargest class:
// KthLargest(int k, int[] nums) Initializes the object with
// the integer k and the stream of integers nums.
// int add(int val) Appends the integer val to the stream and
// returns the element representing the kth largest element in the stream.
// It is guaranteed that there will be at least k elements in the array when you search for the kth element.

export const kthLargest = (ops, vars) => {
  const heap = new MinHeap()
  const k = vars[0][0]
  const startValues = vars[0][1]
  vars.shift()
  const values = vars.flat()
  const result = [null]

  // instantiate heap with k and startValues
  for (const v of startValues) {
    if (heap.size < k) {
      heap.insert(v)
    } else if (heap[1] < v) {
      heap.pop()
      heap.insert(v)
    }
  }

  // iterate through values
  // if size < k -> add
  // if size = k:
  //    if heap[1] > num: continue
  //    if heap[1] < num: pop, insert new value
  for (const v of values) {
    if (heap.size < k) {
      heap.insert(v)
    } else if (heap.heap[1] < v) {
      heap.pop()
      heap.insert(v)
    }

    if (heap.size === k) {
      result.push(heap.heap[1])
    }
  }

  return result
}
