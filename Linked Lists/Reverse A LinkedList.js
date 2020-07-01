// Definition for singly-linked list.
function ListNode(val, next) {
	this.val = val === undefined ? 0 : val;
	this.next = next === undefined ? null : next;
}

// Input: 1->2->3->4->5->NULL
// Output: 5->4->3->2->1->NULL

let param = new ListNode(
	1,
	new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
);

// ITERATIVE SOLUTION
var reverseList = function (head) {
	// Initialize pointers
	let prev = null;
	let curr = head;
	let next = null;

	while (curr !== null) {
		// Pointer manipulation
		next = curr.next;
		curr.next = prev;
		prev = curr;
		curr = next;
	}

	return prev;
};
// reverseList(param)

// RECURSIVE SOLUTION
var reverseListRecursive = function (head) {
	const reverseLL = (head) => {
		// Guard against an empty call or the last node
		if (head === null || head.next === null) return head;

		// This will return the last node, we'll save a reference to it
		const reversed = reverseLL(head.next);

		// Pointer manipulation
		// Make the next node point back to head (circular reference)
		head.next.next = head;
		// remove revcircular referense; create the reversal
		head.next = null;

		// Return the reference to the last node all the way up
		return reversed;
	};
	return reverseLL(head);
};
// reverseListRecursive(param)
