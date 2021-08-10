function ones(int) {
  let sum = 0

  while (int > 0) {
    sum += int & 1
    int >>= 1
  }

  return sum
}

console.log(ones(6))
