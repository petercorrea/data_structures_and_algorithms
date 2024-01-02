import { assert } from "chai"
import { wallsAndGates } from "./walls_and_gates"

describe("Testing Walls and Gates", () => {
  it("Test 1", () => {
    const input = [
      [2147483647, -1, 0, 2147483647],
      [2147483647, 2147483647, 2147483647, -1],
      [2147483647, -1, 2147483647, -1],
      [0, -1, 2147483647, 2147483647]
    ]
    const expected = [
      [3, -1, 0, 1],
      [2, 2, 1, -1],
      [1, -1, 2, -1],
      [0, -1, 3, 4]
    ]
    const actual = wallsAndGates(input)
    assert.deepEqual(actual, expected)
  })

  it("Test 2", () => {
    const input = [
      [0, -1],
      [2147483647, 2147483647]
    ]
    const expected = [
      [0, -1],
      [1, 2]
    ]
    const actual = wallsAndGates(input)
    assert.deepEqual(actual, expected)
  })
})
