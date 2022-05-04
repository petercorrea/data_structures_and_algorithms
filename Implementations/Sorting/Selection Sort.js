// T(C) = n^2

export const selectionSort = (array) => {
  const arr = [...array]
  for (let i = 0; i < arr.length; i++) {
    let min = i
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j
      }
    }

    // If a new min has been found
    if (min !== i) {
      const tmp = arr[i]
      arr[i] = arr[min]
      arr[min] = tmp
    }
  }
  return arr
}

const arr = [12, 5, 3, 7, 5, -2]
console.log(selectionSort(arr))
