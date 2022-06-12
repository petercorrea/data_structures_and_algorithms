import { assert } from "chai"
import { topK } from "../Top K Frequent Elements"

describe("Testing Top K Frequent Elements", () => {
  it("Test 1 - valid", () => {
    const nums = [1, 1, 1, 2, 2, 3]
    const k = 2
    const expected = [1, 2]
    const actual = topK(nums, k)
    assert.deepEqual(actual, expected)
  })

  it("Test 2 - valid", () => {
    const nums = [1, 2]
    const k = 2
    const expected = [2, 1]
    const actual = topK(nums, k)
    assert.deepEqual(actual, expected)
  })

  it("Test 3 - valid", () => {
    const nums = [1]
    const k = 1
    const expected = [1]
    const actual = topK(nums, k)
    assert.deepEqual(actual, expected)
  })
})
