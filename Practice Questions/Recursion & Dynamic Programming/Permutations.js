export const permutations = (str, prefix) => {
  if (str.length !== 0) {
    for (let i = 0; i < str.length; i++) {
      const rem = str.substring(0, i) + str.substring(i + 1)
      permutations(rem, prefix + str.charAt(i))
    }
  }
}
