import { assert } from "chai"
import { carFleet } from "./car_fleet"

describe("Testing Car Fleet", () => {
  it("Test 1", () => {
    const target = 12
    const positions = [10, 8, 0, 5, 3]
    const speeds = [2, 4, 1, 1, 3]
    const expected = 3
    const actual = carFleet(target, positions, speeds)
    assert.deepEqual(actual, expected)
  })

  it("Test 2", () => {
    const target = 10
    const positions = [3]
    const speeds = [3]
    const expected = 1
    const actual = carFleet(target, positions, speeds)
    assert.deepEqual(actual, expected)
  })

  it("Test 3", () => {
    const target = 100
    const positions = [0, 2, 4]
    const speeds = [4, 2, 1]
    const expected = 1
    const actual = carFleet(target, positions, speeds)
    assert.deepEqual(actual, expected)
  })
})
