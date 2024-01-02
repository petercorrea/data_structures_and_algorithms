import { assert } from "chai"
import { mostWater } from "./container_with_most_water"

describe("Testing Container with Most Water", () => {
  it("Test 1", () => {
    const input = [1, 8, 6, 2, 5, 4, 8, 3, 7]
    const expected = 49
    const actual = mostWater(input)
    assert.deepEqual(actual, expected)
  })

  it("Test 2", () => {
    const input = [1, 1]
    const expected = 1
    const actual = mostWater(input)
    assert.deepEqual(actual, expected)
  })
})
