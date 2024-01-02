// There are n cars going to the same destination along a one-lane road.
// The destination is target miles away.
// You are given two integer array position and speed, both of length n,
// where position[i] is the position of the ith car and speed[i] is the
// speed of the ith car(in miles per hour).
// A car can never pass another car ahead of it, but it can catch
// up to it and drive bumper to bumper at the same speed.The faster
// car will slow down to match the slower car's speed.
// The distance between these two cars is ignored
// (i.e., they are assumed to have the same position).
// A car fleet is some non-empty set of cars driving at the
// same position and same speed.Note that a single car is also a car fleet.
// If a car catches up to a car fleet right at the destination point,
// it will still be considered as one car fleet.
// Return the number of car fleets that will arrive at the destination.

// sort cars by position, compare times to find the limiting car...add each limiting car to stack. These represents fleets

const sortUp = (left, right) => {
  const array = []

  while (left.length && right.length) {
    if (left[0][0] < right[0][0]) {
      array.push(left.shift())
    } else {
      array.push(right.shift())
    }
  }

  return array.concat(left.slice()).concat(right.slice())
}

const mergeSort = (arr) => {
  if (arr.length === 1) {
    return arr
  }

  const middle = Math.floor(arr.length / 2)
  const left = arr.slice(0, middle)
  const right = arr.slice(middle)

  return sortUp(mergeSort(left), mergeSort(right))
}

export const carFleet = (target, positions, speeds) => {
  const stack = []
  let cars = []
  for (let i = 0; i < positions.length; i++) {
    cars.push([positions[i], speeds[i]])
  }

  // O(logn)
  cars = mergeSort(cars)
  stack.push(cars[cars.length - 1])
  for (let i = cars.length - 2; i >= 0; i--) {
    const car1 = stack[stack.length - 1]
    const car2 = cars[i]

    const time1 = (target - car1[0]) / car1[1]
    const time2 = (target - car2[0]) / car2[1]

    // if first car is faster
    if (time1 < time2) {
      stack.push(car2)
    }
  }

  return stack.length
}
