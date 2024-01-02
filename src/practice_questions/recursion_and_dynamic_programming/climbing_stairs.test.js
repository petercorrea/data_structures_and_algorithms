import { assert } from "chai"
import { climbStairsDP, climbStairsRecursion } from "./climbing_stairs"

describe("Testing Climbing Stairs", () => {
  it("Test 1 - Recursion", () => {
    const input = 2
    const expected = 2
    const actual = climbStairsRecursion(input)
    assert.deepEqual(actual, expected)
  })

  it("Test 2 - Recursion", () => {
    const input = 3
    const expected = 3
    const actual = climbStairsRecursion(input)
    assert.deepEqual(actual, expected)
  })

  it("Test 3 - Recursion", () => {
    const input = 45
    const expected = 1836311903
    const actual = climbStairsRecursion(input)
    assert.deepEqual(actual, expected)
  })

  it("Test 4 - DP", () => {
    const input = 2
    const expected = 2
    const actual = climbStairsDP(input)
    assert.deepEqual(actual, expected)
  })

  it("Test 5 - DP", () => {
    const input = 3
    const expected = 3
    const actual = climbStairsDP(input)
    assert.deepEqual(actual, expected)
  })

  it("Test 6 - DP", () => {
    const input = 45
    const expected = 1836311903
    const actual = climbStairsDP(input)
    assert.deepEqual(actual, expected)
  })
})
