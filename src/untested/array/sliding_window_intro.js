export const findAveragesOfSubarrays = (K, arr) => {
  const result = []
  let windowSum = 0.0
  let windowStart = 0

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd] // add the next element

    // slide the window, we don't need to slide if we've not hit the required window size of 'k'
    if (windowEnd >= K - 1) {
      result.push(windowSum / K) // calculate the average
      windowSum -= arr[windowStart] // subtract the element going out
      windowStart += 1 // slide the window ahead
    }
  }

  return result
}
