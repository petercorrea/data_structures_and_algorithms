function ListNode(val, next) {
	this.val = val === undefined ? 0 : val;
	this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

let list1 = new ListNode(-1, new ListNode(2, new ListNode(5)));
let list2 = new ListNode(1, new ListNode(3, new ListNode(4, new ListNode(6))));

var mergeTwoLists = function (l1, l2) {
	let dummy = new ListNode();
	let current = dummy;

	if (!l1) return l2;
	if (!l2) return l1;

	while (l1 && l2) {
		if (l1.val < l2.val) {
			current.next = l1;
			l1 = l1.next;
		} else {
			current.next = l2;
			l2 = l2.next;
		}

		current = current.next;
	}
	current.next = l1 === null ? l2 : l1;
	return dummy.next;
};

// mergeTwoLists(list1, list2)

var mergeTwoListsRecursive = function (l1, l2) {
	if (!l1 || !l2) return l1 ? l1 : l2;

	if (l1.val < l2.val) {
		l1.next = mergeTwoLists(l1.next, l2);
		return l1;
	}
	l2.next = mergeTwoLists(l1, l2.next);
	return l2;
};

// mergeTwoListsRecursive(list1, list2)

let array;
console.log(!array);
