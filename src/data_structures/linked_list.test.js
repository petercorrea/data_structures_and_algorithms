import { LinkedList } from "./linked_list"

describe("Testing LinkedList Data Structure", () => {
  it("Testing append method", () => {
    // setup
    const linkedlist = new LinkedList()
    linkedlist.append(1)
    linkedlist.append(2)
    linkedlist.append(3)
    linkedlist.append(4)
    linkedlist.append(5)
    linkedlist.append(6)
    linkedlist.append(7)
    let current = linkedlist.head

    // validate append method
    expect(current.value).toEqual(1)
    current = current.next
    expect(current.value).toEqual(2)
    current = current.next
    expect(current.value).toEqual(3)
    current = current.next
    expect(current.value).toEqual(4)
    current = current.next
    expect(current.value).toEqual(5)
    current = current.next
    expect(current.value).toEqual(6)
    current = current.next
    expect(current.value).toEqual(7)

    // validate head and tail values
    expect(linkedlist.head.value).toEqual(1)
    expect(linkedlist.tail.value).toEqual(7)
  })

  it("Testing search method", () => {
    // setup
    const linkedlist = new LinkedList()
    linkedlist.append(1)
    linkedlist.append(2)
    linkedlist.append(3)
    linkedlist.append(4)
    linkedlist.append(5)
    linkedlist.append(6)
    linkedlist.append(7)

    // validate search method
    expect(linkedlist.search(4).value).toEqual(4)
  })

  it("Testing insert method", () => {
    // setup
    const linkedlist = new LinkedList()
    linkedlist.append(1)
    linkedlist.append(2)
    linkedlist.append(3)
    linkedlist.append(4)
    linkedlist.append(5)
    linkedlist.append(6)
    linkedlist.append(7)
    const current = linkedlist.search(6)
    const last = linkedlist.search(7)
    const insertedNode = linkedlist.insert(6.5, current.value)

    // validate insert method
    expect(insertedNode.value).toEqual(6.5)

    // validate pointers
    expect(current.next).toBe(insertedNode)
    expect(insertedNode.prev).toBe(current)
    expect(insertedNode.next).toBe(last)
    expect(last.prev).toBe(insertedNode)
  })

  it("Testing prepend method", () => {
    // setup
    const linkedlist = new LinkedList()
    linkedlist.append(1)
    linkedlist.append(2)

    // validate prepend method
    linkedlist.prepend(0)
    expect(linkedlist.head.value).toEqual(0)
    expect(linkedlist.tail.value).toEqual(2)
  })

  it("Testing delete method", () => {
    // setup
    const linkedlist = new LinkedList()
    linkedlist.append(1)
    linkedlist.append(2)
    linkedlist.append(3)
    linkedlist.append(4)
    linkedlist.append(5)
    linkedlist.append(6)
    linkedlist.append(7)

    // validate delete method
    // case: delete head
    linkedlist.delete(1)
    expect(linkedlist.head.value).toEqual(2)

    // case: delete tail
    linkedlist.delete(7)
    expect(linkedlist.tail.value).toEqual(6)

    // case: delete arbitrary node
    linkedlist.delete(4)
    expect(linkedlist.search(4)).toEqual(undefined)

    // validate pointers
    let current = linkedlist.search(3)
    expect(current.next.value).toEqual(5)
    current = linkedlist.search(5)
    expect(current.prev.value).toEqual(3)
  })

  it("Testing reverse method", () => {
    // setup
    const linkedlist = new LinkedList()
    linkedlist.append(1)
    linkedlist.append(2)
    linkedlist.append(3)
    linkedlist.append(4)
    linkedlist.append(5)
    linkedlist.append(6)
    linkedlist.append(7)

    // validate reverse method
    linkedlist.reverse()
    expect(linkedlist.tail.value).toEqual(1)
    expect(linkedlist.head.value).toEqual(7)

    // validate 'next' pointers
    let current = linkedlist.head
    expect(current.value).toEqual(7)
    current = current.next
    expect(current.value).toEqual(6)
    current = current.next
    expect(current.value).toEqual(5)
    current = current.next
    expect(current.value).toEqual(4)
    current = current.next
    expect(current.value).toEqual(3)
    current = current.next
    expect(current.value).toEqual(2)
    current = current.next
    expect(current.value).toEqual(1)

    // validate 'prev' pointers
    current = linkedlist.tail
    expect(current.value).toEqual(1)
    current = current.prev
    expect(current.value).toEqual(2)
    current = current.prev
    expect(current.value).toEqual(3)
    current = current.prev
    expect(current.value).toEqual(4)
    current = current.prev
    expect(current.value).toEqual(5)
    current = current.prev
    expect(current.value).toEqual(6)
    current = current.prev
    expect(current.value).toEqual(7)
  })
})
