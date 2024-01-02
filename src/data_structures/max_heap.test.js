import { assert } from "chai"
import { MaxHeap } from "../MaxHeap"

describe("Testing MaxHeap Data Structure", () => {
  it("Testing insert method", () => {
    const heap = new MaxHeap()
    heap.insert(5)
    heap.insert(4)
    heap.insert(3)
    heap.insert(2)
    heap.insert(1)
    heap.insert(7)
    heap.insert(6)

    assert.deepEqual(heap.heap[1], 7)
    assert.deepEqual(heap.heap[2], 4)
    assert.deepEqual(heap.heap[3], 6)
    assert.deepEqual(heap.heap[4], 2)
    assert.deepEqual(heap.heap[5], 1)
    assert.deepEqual(heap.heap[6], 3)
    assert.deepEqual(heap.heap[7], 5)
  })

  it("Testing pop method", () => {
    const heap = new MaxHeap()
    heap.insert(5)
    heap.insert(4)
    heap.insert(3)
    heap.insert(2)
    heap.insert(1)
    heap.insert(7)
    heap.insert(6)

    assert.deepEqual(heap.pop(), 7)
    assert.deepEqual(heap.pop(), 6)
    assert.deepEqual(heap.pop(), 5)
    assert.deepEqual(heap.pop(), 4)
    assert.deepEqual(heap.pop(), 3)
    assert.deepEqual(heap.pop(), 2)
    assert.deepEqual(heap.pop(), 1)
    assert.deepEqual(heap.pop(), null)
  })
})
