// Given a target number (imagine a very large number) and a list containing potential slices of the target
// find the minimum number of slices of the target number, whose resulting slices are all
// found in the potential slices list.

export const numbersInPi = (pi, numbers) => {
  const numbersTable = {}
  for (const num of numbers) {
    numbersTable[num] = true
  }

  const minSpaces = getMinSpaces(pi, numbersTable, 0)
  return minSpaces === Infinity ? -1 : minSpaces
}

const getMinSpaces = (pi, table, idx, cache = {}) => {
  if (idx === pi.length) return -1
  if (idx in cache) return cache[idx]

  let minSpaces = Infinity
  for (let i = idx; i < pi.length; i++) {
    const prefix = pi.slice(idx, i + 1)
    if (prefix in table) {
      const minSpacesInSuffix = getMinSpaces(pi, table, cache, i + 1)
      minSpaces = Math.min(minSpaces, minSpacesInSuffix + 1)
    }
  }

  cache[idx] = minSpaces
  return cache[idx]
}

// Sample Input
// const pi = "3141592653589793238462643383279"
// const slices = [
//   "314159265358979323846",
//   "26433",
//   "8",
//   "3279",
//   "314159265",
//   "35897932384626433832",
//   "79"
// ]
