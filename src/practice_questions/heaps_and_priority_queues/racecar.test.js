import { assert } from "chai"
import { racecar } from "./racecar.js"

describe("Testing racecar", () => {
  it("AA", () => {
    const input = 3
    const expected = 2
    const actual = racecar(input)
    assert.deepEqual(actual, expected)
  })

  it("AAARA", () => {
    const input = 6
    const expected = 5
    const actual = racecar(input)
    assert.deepEqual(actual, expected)
  })
})
