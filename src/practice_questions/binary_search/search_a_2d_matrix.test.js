import { assert } from "chai"
import { search2D } from "./search_a_2d_matrix"

describe("Testing Search a 2D Matrix", () => {
  it("Test 1", () => {
    const mx = [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60]
    ]
    const target = 3
    const expected = true
    const actual = search2D(mx, target)
    assert.deepEqual(actual, expected)
  })

  it("Test 2", () => {
    const mx = [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60]
    ]
    const target = 13
    const expected = false
    const actual = search2D(mx, target)
    assert.deepEqual(actual, expected)
  })
})
