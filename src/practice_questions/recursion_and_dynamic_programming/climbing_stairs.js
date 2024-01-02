// You are climbing a staircase. It takes n steps to reach the top.
// Each time you can either climb 1 or 2 steps.
// In how many distinct ways can you climb to the top?
export const climbStairsRecursion = (target) => {
  const recurse = (target, steps = 0, cache = {}, index = 0) => {
    if (cache[`${steps}-${index}`]) return cache[`${steps}-${index}`]

    if (steps === target) return 1
    if (steps > target) return 0

    cache[`${steps}-${index}`] = recurse(target, steps + 1, cache, index + 1)
      + recurse(target, steps + 2, cache, index + 1)
    return cache[`${steps}-${index}`]
  }

  return recurse(target)
}

// Bottom-up
export const climbStairsDP = (target) => {
  let prevStep = 1
  let currentStep = 1

  for (let i = 2; i <= target; i++) {
    const temp = currentStep + prevStep
    prevStep = currentStep
    currentStep = temp
  }

  return currentStep
}
