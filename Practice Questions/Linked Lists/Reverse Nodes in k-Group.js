// Given a linked list, reverse the nodes of a linked list k at a time and return its modified list.
// k is a positive integer and is less than or equal to the length of the linked list.
// If the number of nodes is not a multiple of k then left-out nodes in the end should remain as it is.
// Given this linked list: 1->2->3->4->5
// For k = 2, you should return: 2->1->4->3->5
// For k = 3, you should return: 3->2->1->4->5

export const ListNode = (val, next) => {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

const param = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
)

export const reverseKGroup = (head, k) => {
  // Guard against null or groups of '1'
  if (!head || k === 1) return head

  // Initialize a dummy node
  const dummy = new ListNode(-1)

  // Set dummy.next to reference head
  dummy.next = head

  // Initialize pointer current, previous and next
  let cur = dummy
  let pre = dummy
  let nxt

  // Initialize counter at 0
  let num = 0

  // Iterate through the data structure and increment counter to find total nodes
  while (cur === cur.next) ++num

  // While the number of nodes is equal or greater than the grouping
  while (num >= k) {
    // Traverse current node from dummy to beginning
    cur = pre.next
    // Set the next node
    nxt = cur.next

    // Change Pointers for k-1
    for (let i = 1; i < k; ++i) {
      // Set current to point to next set of nodes
      cur.next = nxt.next
      // Set next to point to current node
      nxt.next = pre.next
      // Set previouse to nxt
      pre.next = nxt
      // Traverse next
      nxt = cur.next
    }
    // Set previous to current
    pre = cur
    // Update counter to remove group
    num -= k
  }
  return dummy.next
}

reverseKGroup(param, 2)
