import { assert } from "chai"
import { kthLargest } from "../Kth Largest Element In A Stream"

describe("Testing Kth Largest Element In A Stream", () => {
  it("Test 1", () => {
    const ops = ["KthLargest", "add", "add", "add", "add", "add"]
    const vars = [[3, [4, 5, 8, 2]], [3], [5], [10], [9], [4]]
    const expected = [null, 4, 5, 5, 8, 8]
    const actual = kthLargest(ops, vars)
    assert.deepEqual(actual, expected)
  })
})
