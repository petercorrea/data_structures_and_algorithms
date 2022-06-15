import { assert } from "chai"
import { searchMin } from "../Find Minimum in Rotated Sorted Array"

describe("Testing Find Target In Rotated Array", () => {
  it("Test 1", () => {
    const input = [3, 4, 5, 1, 2]
    const expected = 1
    const actual = searchMin(input)
    assert.deepEqual(actual, expected)
  })

  it("Test 2", () => {
    const input = [4, 5, 6, 7, 0, 1, 2]
    const expected = 0
    const actual = searchMin(input)
    assert.deepEqual(actual, expected)
  })

  it("Test 3", () => {
    const input = [11, 13, 15, 17]
    const expected = 11
    const actual = searchMin(input)
    assert.deepEqual(actual, expected)
  })

  it("Test 4", () => {
    const input = [2, 1]
    const expected = 1
    const actual = searchMin(input)
    assert.deepEqual(actual, expected)
  })
})
