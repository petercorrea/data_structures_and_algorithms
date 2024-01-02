import { assert } from "chai"
import { decode, encode } from "./encode_and_decode_strings"

describe("Testing Encode and Decode String", () => {
  it("Test 1", () => {
    const input = ["lint", "code", "love", "you"]
    const expected = ["lint", "code", "love", "you"]
    let actual = encode(input)
    actual = decode(actual)
    assert.deepEqual(actual, expected)
  })
})
