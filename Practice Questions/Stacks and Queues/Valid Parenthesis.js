// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

const isOpen = (char) => char === "(" || char === "{" || char === "["

const isClose = (char) => char === ")" || char === "}" || char === "]"

const bracketType = (char) => {
  if (char === "(") return ")"
  if (char === "{") return "}"
  if (char === "[") return "]"
  return -1
}

export const validParenthesis = (str) => {
  const stack = []

  for (const i in str) {
    const char = str[i]
    if (isOpen(char)) {
      stack.push(char)
    } else if (isClose(char) && bracketType(stack[stack.length - 1]) === char) {
      stack.pop()
    } else {
      return false
    }
  }

  return stack.length === 0
}
