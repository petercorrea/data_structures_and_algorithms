export const ones = (param) => {
  let int = param
  let sum = 0

  while (int > 0) {
    sum += int & 1
    int >>= 1
  }

  return sum
}
