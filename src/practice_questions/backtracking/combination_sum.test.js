import { assert } from "chai"
import { combinationSum, combinationSumRecursion } from "./combination_sum"

describe("Testing Combination Sum", () => {
  it("Test 1", () => {
    const candidates = [2, 3, 6, 7]
    const target = 7
    const expected = [[7], [2, 2, 3]]
    const actual = combinationSumRecursion(candidates, target)
    assert.deepEqual(actual, expected)
  })

  it("Test 2", () => {
    const candidates = [2, 3, 5]
    const target = 8
    const expected = [
      [3, 5],
      [2, 3, 3],
      [2, 2, 2, 2]
    ]
    const actual = combinationSumRecursion(candidates, target)
    assert.deepEqual(actual, expected)
  })

  it("Test 3", () => {
    const candidates = [2]
    const target = 1
    const expected = []
    const actual = combinationSumRecursion(candidates, target)
    assert.deepEqual(actual, expected)
  })

  it("Test 4", () => {
    const candidates = [2, 3, 6, 7]
    const target = 7
    const expected = [[2, 2, 3], [7]]
    const actual = combinationSum(candidates, target)
    assert.deepEqual(actual, expected)
  })

  it("Test 5", () => {
    const candidates = [2, 3, 5]
    const target = 8
    const expected = [
      [2, 2, 2, 2],
      [2, 3, 3],
      [3, 5]
    ]
    const actual = combinationSum(candidates, target)
    assert.deepEqual(actual, expected)
  })

  it("Test 6", () => {
    const candidates = [2]
    const target = 1
    const expected = []
    const actual = combinationSum(candidates, target)
    assert.deepEqual(actual, expected)
  })
})
