import { assert } from "chai"
import { trappedWater } from "./trapped_water"

describe("Testing Trapped Water", () => {
  it("Test 1", () => {
    const input = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
    const expected = 6
    const actual = trappedWater(input)
    assert.deepEqual(actual, expected)
  })

  it("Test 2", () => {
    const input = [4, 2, 0, 3, 2, 5]
    const expected = 9
    const actual = trappedWater(input)
    assert.deepEqual(actual, expected)
  })
})
