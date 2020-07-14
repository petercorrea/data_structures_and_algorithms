// find the sum, without using arithmetic operations

function sum(a, b) {
	if (b == 0) return a;

	let partialSum = a ^ b;
	let carry = (a & b) << 1;

	return sum(partialSum, carry);
}

console.log(sum(3, -5));
