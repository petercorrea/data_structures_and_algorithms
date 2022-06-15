import { assert } from "chai"
import { medianOfTwoSortedArrays } from "../Median of two sorted arrays"

describe("Testing ", () => {
  it("Test 1", () => {
    const input = [1, 3]
    const input2 = [2]
    const expected = 2
    const actual = medianOfTwoSortedArrays(input, input2)
    assert.deepEqual(actual, expected)
  })

  it("Test 2", () => {
    const input = [1, 2]
    const input2 = [3, 4]
    const expected = 2.5
    const actual = medianOfTwoSortedArrays(input, input2)
    assert.deepEqual(actual, expected)
  })
})
