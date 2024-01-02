import { assert } from "chai"
import { eatBananas } from "./koko_eating_bananas"

describe("Testing Koko Eating Bananas", () => {
  it("Test 1", () => {
    const piles = [3, 6, 7, 11]
    const h = 8
    const expected = 4
    const actual = eatBananas(piles, h)
    assert.deepEqual(actual, expected)
  })

  it("Test 2", () => {
    const piles = [30, 11, 23, 4, 20]
    const h = 5
    const expected = 30
    const actual = eatBananas(piles, h)
    assert.deepEqual(actual, expected)
  })

  it("Test 3", () => {
    const piles = [30, 11, 23, 4, 20]
    const h = 6
    const expected = 23
    const actual = eatBananas(piles, h)
    assert.deepEqual(actual, expected)
  })
})
