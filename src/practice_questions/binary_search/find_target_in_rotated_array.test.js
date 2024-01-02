import { assert } from "chai"
import { findTarget } from "./find_target_in_rotated_array"

describe("Testing Find Target In Rotated Array", () => {
  it("Test 1", () => {
    const nums = [4, 5, 6, 7, 0, 1, 2]
    const target = 0
    const expected = 4
    const actual = findTarget(nums, target)
    assert.deepEqual(actual, expected)
  })

  it("Test 2", () => {
    const nums = [4, 5, 6, 7, 0, 1, 2]
    const target = 3
    const expected = -1
    const actual = findTarget(nums, target)
    assert.deepEqual(actual, expected)
  })

  it("Test 3", () => {
    const nums = [1]
    const target = 0
    const expected = -1
    const actual = findTarget(nums, target)
    assert.deepEqual(actual, expected)
  })

  it("Test 4", () => {
    const nums = [1, 3, 5]
    const target = 5
    const expected = 2
    const actual = findTarget(nums, target)
    assert.deepEqual(actual, expected)
  })
})
