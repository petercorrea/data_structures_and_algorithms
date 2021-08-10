function catalan(n, memo = { 0: 1, 1: 1, }) {
  if (n == 0 || n == 1) {
    return memo[0]
  }

  if (memo[n]) {
    return memo[n]
  }

  memo[n] = 0
  for (let i = 0; i < n; i++) {
    memo[n] += catalan(i, memo) * catalan(n - 1 - i, memo)
  }

  return memo[n]
}

console.log(catalan(5))
