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
var deleteDuplicates = function (head) {
	let current = head;

	while (current) {
		//        not the last node AND the next node is a dup....skip over the next node
		if (current.next !== null && current.val == current.next.val) {
			current.next = current.next.next;
		} else {
			//           else traverse
			current = current.next;
		}
	}

	return head;
};
