import { assert } from "chai"
import { findTarget } from "./find_target"

describe("Testing Find Target", () => {
  it("Test 1", () => {
    const nums = [-1, 0, 3, 5, 9, 12]
    const target = 9
    const expected = 4
    const actual = findTarget(nums, target)
    assert.deepEqual(actual, expected)
  })

  it("Test 2", () => {
    const nums = [-1, 0, 3, 5, 9, 12]
    const target = 2
    const expected = -1
    const actual = findTarget(nums, target)
    assert.deepEqual(actual, expected)
  })

  it("Test 3", () => {
    const nums = [5]
    const target = 5
    const expected = 0
    const actual = findTarget(nums, target)
    assert.deepEqual(actual, expected)
  })

  it("Test 4", () => {
    const nums = [2, 5]
    const target = 5
    const expected = 1
    const actual = findTarget(nums, target)
    assert.deepEqual(actual, expected)
  })
})
