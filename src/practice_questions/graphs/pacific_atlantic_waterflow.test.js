import { assert } from "chai"
import { pacificAtlantic } from "./pacific_atlantic_waterflow"

describe("Testing Pacific Atlantic Waterflow", () => {
  it("Test 1", () => {
    const input = [
      [1, 2, 2, 3, 5],
      [3, 2, 3, 4, 4],
      [2, 4, 5, 3, 1],
      [6, 7, 1, 4, 5],
      [5, 1, 1, 2, 4]
    ]
    const expected = [
      [0, 4],
      [1, 3],
      [1, 4],
      [2, 2],
      [3, 0],
      [3, 1],
      [4, 0]
    ]
    const actual = pacificAtlantic(input)
    assert.deepEqual(actual, expected)
  })

  it("Test 2", () => {
    const input = [
      [2, 1],
      [1, 2]
    ]
    const expected = [
      [0, 0],
      [0, 1],
      [1, 0],
      [1, 1]
    ]
    const actual = pacificAtlantic(input)
    assert.deepEqual(actual, expected)
  })

  it("Test 3", () => {
    const input = [
      [1, 2, 3],
      [8, 9, 4],
      [7, 6, 5]
    ]
    const expected = [
      [0, 2],
      [1, 0],
      [1, 1],
      [1, 2],
      [2, 0],
      [2, 1],
      [2, 2]
    ]
    const actual = pacificAtlantic(input)
    assert.deepEqual(actual, expected)
  })
})
