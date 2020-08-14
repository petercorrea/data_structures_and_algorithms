// Implement a routine that takes an n X m Boolean array A together with an entry (x, y) and flips the color of the region associated with (x, y).
let image = [
	[1, 1, 1],
	[1, 1, 0],
	[1, 0, 1],
];

function flipColor(image, x, y) {
	let directions = [
		[0, 1],
		[1, 0],
		[0, -1],
		[-1, 0],
	];

	let color = image[x][y];
	let queue = [];

	// flip color
	image[x][y] = Number(!color);
	// add to queue
	queue.push([x, y]);

	let current, neighbor;

	while (queue.length) {
		current = queue.shift();

		for (const direction of directions) {
			neighbor = [current[0] + direction[0], current[1] + direction[1]];

			// if within bounds and color matches
			if (isFeasible(image, neighbor, color)) {
				// flip the color
				image[neighbor[0]][neighbor[1]] = Number(!color);
				// queue neighbors
				queue.push([neighbor[0], neighbor[1]]);
			}
		}
	}
	return image;
}

function isFeasible(image, indices, color) {
	let x = indices[0],
		y = indices[1];
	return (
		x >= 0 &&
		x < image.length &&
		y >= 0 &&
		y < image[x].length &&
		image[x][y] == color
	);
}

console.log(flipColor(image, 1, 1));
