// find the sum, without using arithmetic operations

export const sum = (a, b) => {
  if (b === 0) return a

  const partialSum = a ^ b
  const carry = (a & b) << 1

  return sum(partialSum, carry)
}

console.log(sum(3, -5))
