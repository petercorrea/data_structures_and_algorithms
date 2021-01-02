let arr1 = [1, 2, 3, 4];
let arr2 = [5, 6, 7, 8];
let arr3 = [9, 10, 11, 12];
let multi = [1, 2, 3, [4, 5, [6, 7, [8, 9, 0]]]];
let myName = "Peter";

// Changes original array
// .copyWithin,
arr3.shift(); // returns the first element
arr3.pop(); // returns the last element
arr3.push(7); // return new length
arr3.unshift(10); // return new length
arr3.fill(0, 1, 3); //value, startIdx, ExclusiveEndIdx
arr2.splice(1, 2, ["Feb", "Dec"]); // startIdx, deleteCount, insertAtStartIdx
arr2.reverse();
arr2.sort();

// Returns new array
// .flatMap
let concat = arr1.concat(arr2);
let filter = concat.filter((x) => x % 2 == 0);
let flat = multi.flat(3); // how many sublevels should be flatten
let map = arr1.map((x) => x * 2);
let slice = arr3.slice(1, 3); // startIdx, exclusiveEndIdx
let from = Array.from(myName);
let of = Array.of("blah", 2, true);

// Returns Boolean
let every = arr1.every((x) => typeof x == "number");
let includes = arr1.includes(3);
let some = arr3.some((x) => typeof x == "number");

// Returns Element/Index/String/Accumalator
// .reduceRight, .toLocaleString, .toString
let e = arr1.find((x) => x == 2);
let i = arr1.findIndex((x) => x == 2); // takes a testing function
let idx = arr1.indexOf(2); // takes a value to strictly comapre
let last = arr1.lastIndexOf(2);
let join = arr3.join(" "); // delimiter
let accum = arr3.reduce(
	(prevVal, currentVal, currentIdx) => prevVal + currentVal
);

// Returns undefined, doesnt not mutate original array
arr1.forEach((x) => x * 2);

// Return Iterator
// .entries, .keys, .values
