function rotate(int, size) {
  console.log("int", int.toString(2))
  let right
  let left
  let result

  right = int >> size
  left = int << (32 - size)
  result = left | right

  console.log("left", left.toString(2))
  console.log("right", right.toString(2))
  console.log("result", result.toString(2))
}

rotate(9, 2)

// 00000000 00000000 00000000 00011010

// 26 =     00000000 00000000 00000000 00011010
// right =  00000000 00000000 00000000 00000110
// left =   10000000 00000000 00000000 00000000
// result = 10000000 00000000 00000000 00000110

// minus 1
// 10000000 00000000 00000000 00000101

// invert
// 01111111 11111111 11111111 11111010
