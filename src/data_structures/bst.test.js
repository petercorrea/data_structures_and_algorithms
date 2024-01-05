import { BST } from "./bst"

describe("Testing Binary Search Tree Data Structure", () => {
  it("Testing insert method", () => {
    // setup
    const bst = new BST(1)
    bst.insert(2)
    bst.insert(5)
    bst.insert(3)

    console.log(bst)
  })
})
