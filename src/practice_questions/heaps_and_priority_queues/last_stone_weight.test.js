import { assert } from "chai"
import { lastWeight } from "../Last Stone Weight.js"

describe("Testing Last Stone Weight", () => {
  it("Test 1", () => {
    const input = [2, 7, 4, 1, 8, 1]
    const expected = 1
    const actual = lastWeight(input)
    assert.deepEqual(actual, expected)
  })

  it("Test 2", () => {
    const input = [1]
    const expected = 1
    const actual = lastWeight(input)
    assert.deepEqual(actual, expected)
  })
})
