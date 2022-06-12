import { assert } from "chai"
import { containsDuplicate } from "../Contains Duplicate"

describe("Testing Contains Duplicate", () => {
  it("Test 1 - has duplicate", () => {
    const input = [1, 2, 3, 4, 3]
    const expected = true
    const actual = containsDuplicate(input)
    assert.deepEqual(actual, expected)
  })

  it("Test 2 - does not have duplicate", () => {
    const input = [1, 2, 3, 4]
    const expected = false
    const actual = containsDuplicate(input)
    assert.deepEqual(actual, expected)
  })
})
