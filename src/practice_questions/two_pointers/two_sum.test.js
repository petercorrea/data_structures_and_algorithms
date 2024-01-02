import { assert } from "chai"
import { twoSum } from "./two_sum"

describe("Testing Two Sum", () => {
  it("Test 1", () => {
    const nums = [2, 7, 11, 15]
    const target = 9
    const expected = [1, 2]
    const actual = twoSum(nums, target)
    assert.deepEqual(actual, expected)
  })

  it("Test 2", () => {
    const nums = [2, 3, 4]
    const target = 6
    const expected = [1, 3]
    const actual = twoSum(nums, target)
    assert.deepEqual(actual, expected)
  })

  it("Test 3", () => {
    const nums = [-1, 0]
    const target = -1
    const expected = [1, 2]
    const actual = twoSum(nums, target)
    assert.deepEqual(actual, expected)
  })
})
