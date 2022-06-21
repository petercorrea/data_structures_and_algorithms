import { assert } from "chai"
import { permutations } from "../Permutations"

describe("Testing Permutations", () => {
  it("Test 1", () => {
    const input = [1, 2, 3]
    const expected = [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]
    const actual = permutations(input)
    assert.deepEqual(actual, expected)
  })

  it("Test 2", () => {
    const input = [0, 1]
    const expected = [[0, 1], [1, 0]]
    const actual = permutations(input)
    assert.deepEqual(actual, expected)
  })

  it("Test 3", () => {
    const input = [1]
    const expected = [[1]]
    const actual = permutations(input)
    assert.deepEqual(actual, expected)
  })
})
