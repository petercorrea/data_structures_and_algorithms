const textFromInternet =
	"In computer science, mathematics, management science, economics and bioinformatics, dynamic programming.";

const LINE_LENGTH = 40;
function calcBadness(line) {
	const diff = LINE_LENGTH - line.length;
	if (diff >= 0) {
		return Math.pow(LINE_LENGTH - line.length, 2);
	}
	return Number.MAX_VALUE;
}

function dp(text) {
	const words = text.split(" ");
	const memo = [];
	memo[words.length] = [0, 0];

	// Work backwards
	for (let i = words.length - 1; i >= 0; i--) {
		// i is the proceding index
		let best = [Number.MAX_VALUE, i + 1];

		// Work forwards, j is the proceding index
		for (let j = i + 1; j <= words.length; j++) {
			const totalScore =
				calcBadness(words.slice(i, j).join(" ")) + memo[j][0];
			// console.log(`${totalScore} = ${words.slice(i, j).join(' ')} + ${words[j]}`)

			if (totalScore > 13000) {
				break;
			}
			if (totalScore < best[0]) {
				best = [totalScore, j];
			}
		}
		memo[i] = best;
		// console.log(memo)
	}

	//   console.log(memo)
	let pointer = 0;
	const results = [];

	while (pointer < words.length) {
		const line = words.slice(pointer, memo[pointer][1]).join(" ");
		results.push(line);
		[_, pointer] = memo[pointer];
	}
	return results;
}

// console.log(dp(textFromInternet).join('\n'));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
const edgesExample = [
	[1, 4, 3],
	[1, 3, 6],
	[2, 1, 3],
	[3, 4, 2],
	[4, 3, 1],
	[4, 2, 1],
	[5, 2, 4],
	[5, 4, 2],
];

function dp(start, edges) {
	const memo = {};
	let targetVertexCount = 0;
	// Set the basic case.
	memo[start] = [0];
	edges.forEach((d) => {
		if (!memo[d[0]]) {
			memo[d[0]] = [Number.MAX_VALUE];
			targetVertexCount++;
		}
	});

	while (targetVertexCount--) {
		edges.forEach((edge) => {
			if (memo[edge[0]][0] + edge[2] < memo[edge[1]][0]) {
				// Set the new distance and parent vertex
				memo[edge[1]] = [memo[edge[0]][0] + edge[2], edge[0]];
			}
		});
	}

	return memo;
}

console.log(dp(2, edgesExample));
