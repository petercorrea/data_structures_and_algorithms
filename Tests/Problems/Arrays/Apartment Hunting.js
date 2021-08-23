import { expect, assert } from "chai"
import apartmentHunting from "../../../Arrays/Apartment Hunting.js"

const blocks = [
  { gym: false, school: true, store: false, },
  { gym: true, school: false, store: false, },
  { gym: true, school: true, store: false, },
  { gym: false, school: true, store: false, },
  { gym: false, school: true, store: true, }
]
const reqs = ["gym", "school", "store"]

describe("Testing Apartment Hunting solution", () => {
  it("sample inputs work", () => {
    const actual = apartmentHunting(blocks, reqs)
    const expected = 3
    assert.equal(actual, expected)
  })
})
