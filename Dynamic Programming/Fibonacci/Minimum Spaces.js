// Given a target number (imagine a very large number) and a list containing potential slices of the target
// find the minimum number of slices of the target number, whose resulting slices are all
// found in the potential slices list.

function numbersInPi(pi, numbers) {
	const numbersTable = {};
	for (let num of numbers) {
		numbersTable[num] = true;
	}

	let minSpaces = getMinSpaces(pi, numbersTable, (cache = {}), 0);
	return minSpaces == Infinity ? -1 : minSpaces;
}

function getMinSpaces(pi, table, cache, idx) {
	if (idx === pi.length) return -1;
	if (idx in cache) return cache[idx];

	let minSpaces = Infinity;
	for (let i = idx; i < pi.length; i++) {
		let prefix = pi.slice(idx, i + 1);
		if (prefix in table) {
			let minSpacesInSuffix = getMinSpaces(pi, table, cache, i + 1);
			minSpaces = Math.min(minSpaces, minSpacesInSuffix + 1);
		}
	}

	cache[idx] = minSpaces;
	return cache[idx];
}

let pi = "3141592653589793238462643383279";
let slices = [
	"314159265358979323846",
	"26433",
	"8",
	"3279",
	"314159265",
	"35897932384626433832",
	"79",
];

console.log(numbersInPi(pi, slices));
