/*
Problem Statement:
    Design a time-based key-value data structure that can store multiple 
    values for the same key at different time stamps and retrieve the 
    key's value at a certain timestamp.
    
    Implement the TimeMap class:
    - TimeMap(): Initializes the object of the data structure.
   
    - void set(String key, String value, int timestamp): Stores the key key with the 
    value value at the given time timestamp.
    
    - String get(String key, int timestamp): Returns a value such that set was 
    called previously, with timestamp_prev <= timestamp. If there are multiple 
    such values, it returns the value associated with the largest timestamp_prev. 
    If there are no values, it returns "".

Clarifications and Assumptions:
    - Assume that every set operation will have a timestamp is that strictly increasing
    from the previous 

Test Case:
    Input:
        ["TimeMap", "set", "get", "get", "set", "get", "get"]
        [[], ["foo", "bar", 1], ["foo", 1], ["foo", 3], ["foo", "bar2", 4], ["foo", 4], ["foo", 5]]
    Output:
        [null, null, "bar", "bar", null, "bar2", "bar2"]


Notes:
    This is some sample text.

*/

// Solution #1 - O() time | O() space:
class Store {
  hash = {}

  constructor(ops, params) {
    for (const i in ops) {
      if (ops[i] === "set") {
        this.set(params[i])
      } else if (ops[i] === "get") {
        this.get(params[i])
      }
    }
  }

  get(arr) {
    const key = arr[0]
    const time = arr[1]
    const values = this.hash[key]

    // binary search value
    //   if no value is set
    if (!values) return values

    let l = 0
    let r = values.length - 1
    while (l <= r) {
      const m = Math.floor((l + r) / 2)
      // base case
      if (values[m][1] === time) {
        console.log(values[m][0])
        return values[m][0]
      }
      // general case
      if (values[m][1] > time) {
        r = m - 1
      } else {
        l = m + 1
      }
    }

    return -1
  }

  set(param) {
    if (!this.hash[param[0]]) {
      this.hash[param[0]] = []
    }
    this.hash[param[0]].push([param[1], param[2]])
  }
}

// Testing
const operations = ["TimeMap", "set", "set", "get", "get"]
const inputs = [
  [],
  ["foo", "bar", 1],
  ["foo", "bar2", 4],
  ["foo", 1],
  ["foo", 4]
]
console.log(new Store(operations, inputs))
