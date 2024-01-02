// Your car starts at position 0 and speed +1 on an infinite number line. Your car can go into negative positions. Your car drives automatically according to a sequence of instructions 'A' (accelerate) and 'R' (reverse):
// When you get an instruction 'A', your car does the following:
// position += speed
// speed *= 2
// When you get an instruction 'R', your car does the following:
// If your speed is positive then speed = -1
// otherwise speed = 1
// Your position stays the same.
// For example, after commands "AAR", your car goes to positions 0 --> 1 --> 3 --> 3, and your speed goes to 1 --> 2 --> 4 --> -1.
// Given a target position target, return the length of the shortest sequence of instructions to get there.

export const racecar = (target) => {
  const queue = [{ x: 0, speed: 1, steps: 0 }]
  const visited = new Set(["0,1"])

  while (queue.length > 0) {
    const { x, speed, steps } = queue.shift()

    // base
    if (x === target) {
      return steps
    }

    // Generate the next states: A & R
    const nextStates = [
      { x: x + speed, speed: speed * 2, steps: steps + 1 },
      { x, speed: speed > 0 ? -1 : 1, steps: steps + 1 }
    ]

    // Loop through the next states
    for (const { x, speed, steps } of nextStates) {
      const key = `${x},${speed}`

      // Only consider the new state if it's within a 'reasonable' bound and hasn't been visited
      // a trade-off between state space size and computation time.
      if (x > 0 && x < target * 2 && !visited.has(key)) {
        // Add the new state to the queue, and mark as visited
        queue.push({ x, speed, steps })
        visited.add(key)
      }
    }
  }

  // this shouldn't happen
  return -1
}
