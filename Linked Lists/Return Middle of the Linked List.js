/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
	let sum = 0;
	let map = new Map();

	while (head) {
		sum += 1;
		map.set(sum, head);
		head = head.next;
	}
	// Return the middle, if of even length return the node to the right
	let position = sum % 2 == 0 ? sum / 2 + 1 : (sum + 1) / 2;

	return map.get(position);
};
