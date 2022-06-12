// Given an array of integers temperatures represents the daily temperatures,
// return an array answer such that answer[i] is the number of days you have to
// wait after the ith day to get a warmer temperature.If there is no future day
// for which this is possible, keep answer[i] == 0 instead.

// Stack decreasing temps, pop them off when we find a higher one...maintain state as tuples

export const dailyTemps = (temps) => {
  const stack = [[0, temps[0]]]
  const result = new Array(temps.length).fill(0)

  for (let i = 1; i < temps.length; i++) {
    const temp = temps[i]
    while (stack.length > 0 && temp > stack[stack.length - 1][1]) {
      const tuple = stack.pop()
      result[tuple[0]] = i - tuple[0]
    }
    stack.push([i, temp])
  }

  return result
}
