/* eslint-disable implicit-arrow-linebreak */
// Evaluate the value of an arithmetic expression in Reverse Polish Notation.
// Valid operators are +, -, *, and /. Each operand may be an integer or another expression.
// Note that division between two integers should truncate toward zero.
// It is guaranteed that the given RPN expression is always valid. That means the
// expression would always evaluate to a computation, and there will not be any division
// by zero operation.

// Reverse Polish Notation:
// (2 + 3) -> (2 3 +)

const isOperand = (char) =>
  char === "+" || char === "-" || char === "*" || char === "/"

export const RPN = (arr) => {
  let computation

  for (let i = 0; i < arr.length; i++) {
    const operand = arr[i]
    if (isOperand(operand)) {
      const l = parseInt(arr[i - 2], 10)
      const r = parseInt(arr[i - 1], 10)

      switch (operand) {
        case "+":
          computation = l + r
          break
        case "-":
          computation = l - r
          break
        case "*":
          computation = l * r
          break
        case "/":
          // eslint-disable-next-line no-case-declarations
          let result = l / r

          // We need to round towards 0...JavaScript won't do that for negative numbers, thus ceil
          if (result > 0) {
            result = Math.floor(l / r)
          } else if (result < 0) {
            result = Math.ceil(l / r)
          }

          computation = result
          break
        default:
          return false
      }
      const leftSide = arr.slice(0, i - 2)
      leftSide.push(computation)
      const rightSide = arr.slice(parseInt(i, 10) + 1)
      arr = leftSide.concat(rightSide)
      // this gets immediately incremented to 1...not the intention
      // but acceptable for these use cases as the first item should never be of importance to us
      // a while loop could resolve provide more nuanced control
      i = 0
    }
  }

  return arr[0]
}
