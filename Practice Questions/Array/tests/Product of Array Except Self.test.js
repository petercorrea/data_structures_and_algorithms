import { assert } from "chai"
import { product } from "../Product of Array Except Self"

describe("Testing Product Except Self...", () => {
  it("Test 1 - valid", () => {
    const input = [1, 2, 3, 4]
    const expected = [24, 12, 8, 6]
    const actual = product(input)
    assert.deepEqual(actual, expected)
  })

  it("Test 2 - valid", () => {
    const input = [-1, 1, 0, -3, 3]
    const expected = [0, 0, 9, 0, 0]
    const actual = product(input)
    assert.deepEqual(actual, expected)
  })
})
