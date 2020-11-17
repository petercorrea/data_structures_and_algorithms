const trappedWater = function(arr: number[]) {
	
	let left_shadow_max = 0
	let left_shadow_total = 0
	let right_shadow_max = 0
	let right_shadow_total = 0
	let total_stones = 0;

	// find actual area
	for (let i=0; i<arr.length; i++) {
		total_stones += arr[i]
	}

	// find left shadow
	for (let i=0; i<arr.length; i++) {
		left_shadow_max = Math.max(left_shadow_max, arr[i])
		left_shadow_total += Math.max(arr[i], left_shadow_max)
	}

	// find right shadow
	for (let i=arr.length-1; i>=0; i--) {
		right_shadow_max = Math.max(right_shadow_max, arr[i])
		right_shadow_total += Math.max(arr[i], right_shadow_max)
	}

	let total_area = Math.max(left_shadow_max * arr.length)
	let left_diff = total_area - left_shadow_total
	let right_diff = total_area - right_shadow_total
	let total_diff = left_diff + right_diff
	
	return total_area - total_diff - total_stones
}

let test_input = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]

console.log(trappedWater(test_input))