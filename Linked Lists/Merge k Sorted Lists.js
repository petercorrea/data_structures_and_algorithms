// Input:
// [
//   1->4->5,
//   1->3->4,
//   2->6
// ]

// Output: 1->1->2->3->4->4->5->6

// Definition for singly-linked list.
function ListNode(val, next) {
	this.val = val === undefined ? 0 : val;
	this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

let list1 = new ListNode();
let list2 = new ListNode(
	0,
	new ListNode(-1, new ListNode(1, new ListNode(10)))
);
let list3 = new ListNode(4, new ListNode(7));
let list4 = [];

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
			result.push(singleList.val);
			let ref = singleList.next;
			while (ref !== null) {
				result.push(ref.val);
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
	let finalNode = new ListNode();
	let currentNode = finalNode;

	// Iterate the values in result
	for (idx in result) {
		// Add current idx as the value of the primary node
		currentNode.val = result[idx];

		// if the next idx within range is not undefined
		if (result[parseInt(idx) + 1] !== undefined) {
			// add empty node to node.next
			currentNode.next = new ListNode();
		}

		// traverse one node
		currentNode = currentNode.next;
	}
	return finalNode;
};

mergeKLists(params);
