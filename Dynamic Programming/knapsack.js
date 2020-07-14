// Problem Statement:
// You have a set of items. Each item has a corresponding weight;W and profit;P.
// Build a knapsack of items that holds
// 		-the greatest sum of values
// 		-without surpassing max capacity C.

// Items
let profits = [1, 6, 10, 16];
let weights = [1, 2, 3, 5];

// Brute Force Method
// By using recursion, we can try all possible combinations by making two calls, one with and one without the corresponding item
// and then using Math.max() on the way up to choose the combination with the highest value.

// ex. items = [a, b, c, d]
//
// 		a:    	   				a												null
//				    _________________________						_________________________
// 					|						|						|						|
// 		b:    		ab						a						b						null
// 				____________ 			_____________ 			_____________ 			_____________
// 			   |			|			|			|			|			|			|			|
// 		c: 	  abc			ab			ac			a			bc			b			c			null
//			_______ 	  _______    _______ 	  _______ 	 _______ 	  _______ 	  _______      _______
// 			|	  | 	  | 	|	 |	   |	  |		|	 |	   |	  |	    |	  |	    |	   |	 |
// 		d: abcd  abc	 abd 	ab 	acd    ac 	 ad 	a	bcd    bc 	 bd 	b 	  cd 	c  	   d 	null

function solveBruteForce(profitsArr, weightsArr, capacity) {
	function bruteForce(profitsArr, weightsArr, capacity, currentIdx) {
		// Base cases: if capacity is less than 0, or out of bounds idx
		if (capacity <= 0 || currentIdx >= weights.length) return 0;

		// Recursive call including the element at currentIdx and with updated remaining weight
		let profit1 = 0;
		if (weights[currentIdx] <= capacity) {
			profit1 =
				profits[currentIdx] +
				bruteForce(
					profitsArr,
					weightsArr,
					capacity - weights[currentIdx],
					currentIdx + 1
				);
		}

		// Recursive call without element at currentIdx
		let profit2 = bruteForce(
			profitsArr,
			weightsArr,
			capacity,
			currentIdx + 1
		);

		return Math.max(profit1, profit2);
	}

	return bruteForce(profitsArr, weightsArr, capacity, 0);
}

// Brute force call
console.log(
	`Total knapsack profit (brute force): ${solveBruteForce(
		profits,
		weights,
		7
	)}`
);

// Memoization (Top-Down approach) is used to tackle overlapping subproblems
