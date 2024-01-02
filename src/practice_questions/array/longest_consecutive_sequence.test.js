import { assert } from "chai"
import { LCS } from "./longest_consecutive_sequence.js"

describe("Testing LCS", () => {
  it("Test 1", () => {
    const input = [100, 4, 200, 1, 3, 2]
    const expected = 4
    const actual = LCS(input)
    assert.deepEqual(actual, expected)
  })

  it("Test 2", () => {
    const input = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1]
    const expected = 9
    const actual = LCS(input)
    assert.deepEqual(actual, expected)
  })
})
