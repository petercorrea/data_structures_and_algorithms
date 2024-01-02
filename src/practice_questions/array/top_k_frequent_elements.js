// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.
// Your algorithm's time complexity must be better than O(n log n), where n is the array's size.

// Solution: create a hashmap where the keys represent frequency counts. The hashmap will
// have as many keys as the number of items in the array. Perform the frequency count on the array of items and return
// the k last (key,value) pairs in the map.

// O(n)
export const topK = (nums, k) => {
  const kHash = {}
  const frequencyHash = {}

  // dont need key of 0 frequencies
  for (let i = 1; i <= nums.length; i++) {
    kHash[i] = []
  }

  // count frequencies (value, frequency)
  for (const i in nums) {
    if (frequencyHash[nums[i]]) {
      frequencyHash[nums[i]] += 1
    } else {
      frequencyHash[nums[i]] = 1
    }
  }

  // hash by frequency
  let entries = Object.entries(frequencyHash)

  for (const i in entries) {
    const value = entries[i][0]
    const frequency = entries[i][1]
    kHash[frequency].push(Number.parseInt(value, 10))
  }

  // remove frequencies of 0
  entries = Object.entries(kHash)
  for (const i in entries) {
    if (entries[i][1] === []) {
      delete kHash[entries[i][0]]
    }
  }

  // return k top frequent elements
  const values = []
  entries = Object.entries(kHash)
  for (let i = 0; i < entries.length; i++) {
    values.push(...entries[i][1])
  }

  const result = []
  for (let i = values.length - 1; i >= values.length - k; i--) {
    result.push(values[i])
  }
  return result
}
