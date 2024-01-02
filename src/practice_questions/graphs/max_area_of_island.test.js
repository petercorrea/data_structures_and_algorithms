import { assert } from "chai"
import { maxArea } from "../Max Area of Island"

describe("Testing ", () => {
  it("Test 1", () => {
    const input = [
      [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
      [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
      [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]
    ]
    const expected = 6
    const actual = maxArea(input)
    assert.deepEqual(actual, expected)
  })

  it("Test 2", () => {
    const input = [[0, 0, 0, 0, 0, 0, 0, 0]]
    const expected = 0
    const actual = maxArea(input)
    assert.deepEqual(actual, expected)
  })
})
