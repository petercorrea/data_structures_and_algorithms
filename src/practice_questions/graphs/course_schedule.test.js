import { assert } from "chai"
import { canFinish } from "../Course Schedule"

describe("Testing Course Schedule", () => {
  it("Test 1", () => {
    const numCourses = 2
    const prerequisites = [[1, 0]]
    const expected = true
    const actual = canFinish(numCourses, prerequisites)
    assert.deepEqual(actual, expected)
  })

  it("Test 2", () => {
    const numCourses = 2
    const prerequisites = [[1, 0], [0, 1]]
    const expected = false
    const actual = canFinish(numCourses, prerequisites)
    assert.deepEqual(actual, expected)
  })

  it("Test 3", () => {
    const numCourses = 3
    const prerequisites = [[0, 2], [1, 2], [2, 0]]
    const expected = false
    const actual = canFinish(numCourses, prerequisites)
    assert.deepEqual(actual, expected)
  })
})
