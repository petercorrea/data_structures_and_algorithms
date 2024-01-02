import { assert } from "chai"
import { threeSum } from "./three_sum"

describe("Testing ", () => {
  it("Test 1", () => {
    const input = [-1, 0, 1, 2, -1, -4]
    const expected = [
      [-1, -1, 2],
      [-1, 0, 1]
    ]
    const actual = threeSum(input)
    assert.deepEqual(actual, expected)
  })

  it("Test 2", () => {
    const input = []
    const expected = []
    const actual = threeSum(input)
    assert.deepEqual(actual, expected)
  })

  it("Test 3", () => {
    const input = [0]
    const expected = []
    const actual = threeSum(input)
    assert.deepEqual(actual, expected)
  })
})
