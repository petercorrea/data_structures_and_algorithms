const howSum = (target, arr, memo = {}) => {
  if (target in memo) return memo[target]
  if (target === 0) return []
  if (target < 0) return null

  let smallest = null

  for (const e of arr) {
    if (howSum(target - e, arr, memo) !== null) {
      // returns []
      let result = howSum(target - e, arr, memo)

      // [e]
      // result.push(e);
      result = [...result, e]

      // memo[target] = result;

      if (smallest === null || result.length < smallest.length) {
        // smallest is now a reference to [e]
        smallest = result
      }

      // return result;
    }

    console.log(memo)
  }

  // this key now references [e]
  memo[target] = smallest
  return smallest
}

console.log(howSum(6, [2, 4]))
