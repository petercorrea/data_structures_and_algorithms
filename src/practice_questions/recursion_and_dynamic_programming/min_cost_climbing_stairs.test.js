import { assert } from "chai"
import {
  minCostDP,
  minCostIterative,
  minCostRecursion
} from "./min_cost_climbing_stairs"

describe("Testing Min Cost Climbing Stairs", () => {
  it("Test 1 - Recursion", () => {
    const input = [10, 15, 20]
    const expected = 15
    const actual = minCostRecursion(input)
    assert.deepEqual(actual, expected)
  })

  it("Test 2 - Recursion", () => {
    const input = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]
    const expected = 6
    const actual = minCostRecursion(input)
    assert.deepEqual(actual, expected)
  })

  it("Test 3 - DP", () => {
    const input = [10, 15, 20]
    const expected = 15
    const actual = minCostDP(input)
    assert.deepEqual(actual, expected)
  })

  it("Test 4 - DP", () => {
    const input = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]
    const expected = 6
    const actual = minCostDP(input)
    assert.deepEqual(actual, expected)
  })

  it("Test 5 - DP Iterative", () => {
    const input = [10, 15, 20]
    const expected = 15
    const actual = minCostIterative(input)
    assert.deepEqual(actual, expected)
  })

  it("Test 6 - DP Iterative", () => {
    const input = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]
    const expected = 6
    const actual = minCostIterative(input)
    assert.deepEqual(actual, expected)
  })
})
