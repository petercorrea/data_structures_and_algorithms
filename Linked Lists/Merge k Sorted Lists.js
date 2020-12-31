// Input:
// [
//   1->4->5,
//   1->3->4,
//   2->6
// ]

// Output: 1->1->2->3->4->4->5->6

const { Node } = require("./LinkedList.js");

let list1 = [];
let list2 = [new Node(5, null, new Node(1, null, new Node(-1)))];
let list3 = [new Node(0, null, new Node(6, null, new Node(-2)))];
let list4 = [new Node(-3, null, new Node(9, null, new Node(3)))];

let params = [list1, list2, list3, list4];

var mergeKLists = function (lists) {
	// Initialize a container for values
	let result = [];

	// Gaurd against no lists
	if (lists.length == 0) {
		return null;
	}

	// Iterate through lists
	for (let idx in lists) {
		let singleList = lists[idx];

		// If list is neither empty or null
		if (singleList !== null && singleList.length !== 0) {
			result.push(singleList[0].value);
			let ref = singleList[0].next;
			while (ref !== null) {
				result.push(ref.value);
				ref = ref.next;
			}
		}
	}

	function compareNumbers(a, b) {
		if (a > b) {
			return 1;
		}

		if (b > a) {
			return -1;
		}

		return 0;
	}

	// Gaurd against no values
	if (result.length == 0) {
		return null;
	}

	// Sort the values
	result.sort(compareNumbers);

	// Initialize a node and make a reference to it
	let finalNode = new Node();
	let currentNode = finalNode;

	// Iterate the values in result
	for (idx in result) {
		// Add current idx as the value of the primary node
		currentNode.value = result[idx];

		// if the next idx within range is not undefined
		if (result[parseInt(idx) + 1] !== undefined) {
			// add empty node to node.next
			currentNode.next = new Node();
		}

		// traverse one node
		currentNode = currentNode.next;
	}
	return finalNode;
};

console.log(mergeKLists(params));
