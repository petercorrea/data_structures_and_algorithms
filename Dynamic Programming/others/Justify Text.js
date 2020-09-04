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
