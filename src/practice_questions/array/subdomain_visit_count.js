// A website domain "discuss.leetcode.com" consists of various subdomains.
// At the top level, we have "com", at the next level, we have "leetcode.com"
// and at the lowest level, "discuss.leetcode.com".When we visit a domain like
// "discuss.leetcode.com", we will also visit the parent domains "leetcode.com"
// and "com" implicitly.

// A count - paired domain is a domain that has one of the two formats "rep d1.d2.d3"
// or "rep d1.d2" where rep is the number of visits to the domain and d1.d2.d3 is the domain itself.

// For example, "9001 discuss.leetcode.com" is a count - paired domain that indicates that discuss.
//     leetcode.com was visited 9001 times.
// Given an array of count - paired domains cpdomains, return an array of the count - paired domains
// of each subdomain in the input.You may return the answer in any order.

export const count = (arr) => {
  const hash = {}

  // for each string
  for (let i = 0; i < arr.length; i++) {
    const string = arr[i]
    const count = parseInt(string.match(/[0-9]/g).join(""), 10)
    const domains = string.match(/[a-z]+/g)

    for (let i = domains.length - 1; i >= 0; i--) {
      let key = ""
      for (let j = i; j < domains.length; j++) {
        if (key === "") {
          key += `${domains[j]}`
        } else {
          key = `${key}.${domains[j]}`
        }
      }
      if (hash[key]) {
        hash[key] += count
      } else {
        hash[key] = count
      }
    }
  }

  const entries = Object.entries(hash)
  const result = []

  for (const entry of entries) {
    result.push(`${entry[1]} ${entry[0]}`)
  }

  return result
}
