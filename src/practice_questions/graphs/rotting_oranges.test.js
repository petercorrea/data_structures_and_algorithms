import { assert } from "chai"
import { oranges } from "./rotting_oranges"

describe("Testing Rotting Oranges", () => {
  it("Test 1", () => {
    const input = [
      [2, 1, 1],
      [1, 1, 0],
      [0, 1, 1]
    ]
    const expected = 4
    const actual = oranges(input)
    assert.deepEqual(actual, expected)
  })

  it("Test 2", () => {
    const input = [
      [2, 1, 1],
      [0, 1, 1],
      [1, 0, 1]
    ]
    const expected = -1
    const actual = oranges(input)
    assert.deepEqual(actual, expected)
  })

  it("Test 3", () => {
    const input = [[0, 2]]
    const expected = 0
    const actual = oranges(input)
    assert.deepEqual(actual, expected)
  })

  it("Test 4", () => {
    const input = [[1]]
    const expected = -1
    const actual = oranges(input)
    assert.deepEqual(actual, expected)
  })

  it("Test 5", () => {
    const input = [[0]]
    const expected = 0
    const actual = oranges(input)
    assert.deepEqual(actual, expected)
  })

  it("Test 6", () => {
    const input = [
      [2, 1, 1],
      [1, 1, 1],
      [0, 1, 2]
    ]
    const expected = 2
    const actual = oranges(input)
    assert.deepEqual(actual, expected)
  })

  it("Test 7", () => {
    const input = [[2, 2, 2, 1, 1]]
    const expected = 2
    const actual = oranges(input)
    assert.deepEqual(actual, expected)
  })
})
