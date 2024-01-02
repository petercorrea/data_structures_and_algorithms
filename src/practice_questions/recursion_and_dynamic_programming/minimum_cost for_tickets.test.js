import { assert } from "chai"
import { minCosts } from "../Minimum Cost for Tickets"

describe("Testing Minimum Cost for Tickets", () => {
  it("Test 1", () => {
    const days = [1, 4, 6, 7, 8, 20]
    const costs = [2, 7, 15]
    const expected = 11
    const actual = minCosts(days, costs)
    assert.deepEqual(actual, expected)
  })

  it("Test 2", () => {
    const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 30, 31]
    const costs = [2, 7, 15]
    const expected = 17
    const actual = minCosts(days, costs)
    assert.deepEqual(actual, expected)
  })
})
