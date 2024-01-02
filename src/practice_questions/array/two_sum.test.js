import { assert } from "chai"
import { twoSum } from "./two_sum"

describe("Testing Two Sum", () => {
  it("Test 1", () => {
    const input = [1, 3, 5, 2]
    const input2 = 7
    const expected = ["2", "3"]
    const actual = twoSum(input, input2)
    assert.deepEqual(actual, expected)
  })

  it("Test 2", () => {
    const input = [1, 3, 5, 2]
    const input2 = 9
    const expected = false
    const actual = twoSum(input, input2)
    assert.deepEqual(actual, expected)
  })
})
