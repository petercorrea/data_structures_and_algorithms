import { MinHeap } from "./min_heap"

describe("Testing MinHeap Data Structure", () => {
  it("Testing peek method", () => {
    const heap = new MinHeap([1, 2, 3])
    heap.insert(4)
    heap.insert(5)
    heap.insert(6)
    heap.insert(7)

    const expected = heap.peek()
    expect(expected).toEqual(1)
  })

  it("Testing insert and remove", () => {
    const heap = new MinHeap([7, 6, 5])
    heap.insert(4)
    heap.insert(3)
    heap.insert(2)
    heap.insert(1)

    let expected = heap.remove()
    expect(expected).toEqual(1)

    expected = heap.remove()
    expect(expected).toEqual(2)
  })

  it("Testing insert and remove", () => {
    const heap = new MinHeap([7, 60, 51])
    heap.insert(42)
    heap.insert(3)
    heap.insert(22)
    heap.insert(1)

    let expected = heap.remove()
    expect(expected).toEqual(1)

    expected = heap.remove()
    expect(expected).toEqual(3)

    expected = heap.remove()
    expect(expected).toEqual(7)

    expected = heap.remove()
    expect(expected).toEqual(22)

    expected = heap.remove()
    expect(expected).toEqual(42)

    expected = heap.remove()
    expect(expected).toEqual(51)

    expected = heap.remove()
    expect(expected).toEqual(60)
  })

  it("Testing empty initialization", () => {
    const heap = new MinHeap([])
    expect(heap.heap).toEqual([])
  })

  it("Testing removing more than length", () => {
    const heap = new MinHeap([1, 2, 3])
    heap.remove()
    heap.remove()
    heap.remove()
    expect(heap.heap).toEqual([])
    heap.remove()
    expect(heap.heap).toEqual([])
  })
})
