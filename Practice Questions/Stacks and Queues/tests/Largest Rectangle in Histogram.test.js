import { assert } from "chai"
import { largestRect } from "../Largest Rectangle in Histogram"

describe("Testing Largest Rectangle in Histogram", () => {
  it("Test 1", () => {
    const input = [2, 1, 5, 6, 2, 3]
    const expected = 10
    const actual = largestRect(input)
    assert.deepEqual(actual, expected)
  })

  it("Test 2", () => {
    const input = [2, 4]
    const expected = 4
    const actual = largestRect(input)
    assert.deepEqual(actual, expected)
  })

  it("Test 3", () => {
    const input = [2, 0, 2]
    const expected = 2
    const actual = largestRect(input)
    assert.deepEqual(actual, expected)
  })

  it("Test 4", () => {
    const input = [2, 1, 2]
    const expected = 3
    const actual = largestRect(input)
    assert.deepEqual(actual, expected)
  })
})
