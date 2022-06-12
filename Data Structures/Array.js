// A static array is an index, ordered, fixed length data structure. Similar to a list in real life.
// All arrays begin at index 0. Thus, an array with 10 items will have indices 0-9.
// In memory, the array is written in continuous blocks of memory, which means fast search.
// Dynamic arrays are just like static arrays, except they can be resized.

// Static Array Time complexity:
// lookup by index - O(1)
// search - O(n)

// Dynamic Array Time complexity:
// lookup by index - O(1)
// search - O(n)
// appending - O(1)
// insert - O(n) due to shifting and copying
// delete - O(n) due to shifting and copying

// pseudocode:
// In JavaScript an Array is a first class object with it's own properties and efficient methods,
// thus reimplementing it is not necessary in most (really any) real world cases.
// However we'll implement the operations above for learning purposes.

// We'll name it to CustomArray to avoid name collisions with the built in Array object

export class CustomArray {
  data

  constructor(values) {
    this.data = [...values]
  }

  // lookup
  loopUp(idx) {
    return this.data[idx]
  }

  // find
  search(value) {
    for (const idx in this.data) {
      if (this.data[idx] === value) {
        return idx
      }
    }

    return false
  }

  // append
  append(value) {
    const newArray = new Array(this.data.length + 1)

    for (const idx in this.data) {
      newArray[idx] = this.data[idx]
    }

    newArray[newArray.length - 1] = value
    this.data = newArray
    return this.data
  }

  // insert
  insert(value, idx) {
    // edge case for idx 0
    if (idx === 0) {
      const newArray = new Array(this.data.length + 1)
      newArray[0] = value

      for (let i = 0; i < this.data.length; i++) {
        newArray[i + 1] = this.data[i]
      }

      this.data = newArray
      return this.data
    }

    // edge case when idx > last index
    if (idx > this.data.length - 1) {
      const newArray = new Array(idx + 1)

      for (let i = 0; i < this.data.length; i++) {
        newArray[i] = this.data[i]
      }

      for (let i = this.data.length; i <= idx; i++) {
        newArray[i] = null
      }

      newArray[newArray.length - 1] = value
      this.data = newArray
      return this.data
    }

    // general case
    const newArray = new Array(this.data.length + 1)
    const leftSide = new Array(idx)
    const rightSide = new Array(this.data.length - idx)

    for (let i = 0; i <= leftSide.length; i++) {
      newArray[i] = leftSide[i]
    }

    newArray[idx] = value

    for (let i = idx + 1; i <= rightSide.length; i++) {
      newArray[i] = rightSide[i]
    }

    this.data = newArray
    return this.data
  }

  // delete
  delete(idx) {
    if (idx > this.data.length - 1) return false

    const newArray = new Array(this.data.length - 1)
    for (let i = 0; i < idx; i++) {
      newArray[i] = this.data[i]
    }

    for (let i = idx; i < newArray.length; i++) {
      newArray[i] = this.data[i + 1]
    }

    this.data = newArray
    return this.data
  }
}

const MyArray = new CustomArray([1, 2, 3, 4])

console.log(MyArray.data)
console.log(MyArray.loopUp(3))
console.log(MyArray.append(5))
console.log(MyArray.search(5))
console.log(MyArray.insert(6, 5))
console.log(MyArray.insert(0, 0))
console.log(MyArray.insert(10, 10))
console.log(MyArray.delete(7))
console.log(MyArray.delete(7))
console.log(MyArray.delete(7))
