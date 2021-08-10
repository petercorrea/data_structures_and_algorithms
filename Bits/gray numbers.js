// Determine if two numbers differ by a single bit

function gray(int1, int2) {
  let xor = int1 ^ int2

  while (xor > 0) {
    if (xor % 2 == 1 && xor >> 1 > 0) {
      console.log("false")
      return false
    }

    xor >>= 1
  }

  console.log("true")
  return true
}

function gray2(int1, int2) {
  const xor = int1 ^ int2

  console.log((xor & (xor - 1)) == 0)
  return (xor & (xor - 1)) == 0
}

gray(8, 9)
gray2(8, 9)
