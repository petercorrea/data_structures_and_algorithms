class Node {
  constructor(value, left, right, parent) {
    this.value = value
    this.left = left
    this.right = right
    this.parent = parent
  }
}

const node6B = new Node(1, null, null)
const node5B = new Node(1, null, null)
const node4B = new Node(1, node6B, null)
const node3B = new Node(1, null, null)
const node2B = new Node(1, null, node5B)
const node1B = new Node(1, node3B, node4B)
const sampleBalancedTree = new Node(1, node1B, node2B)

const node9U = new Node(9, null, null)
const node6U = new Node(1, null, node9U)
const node5U = new Node(1, null, null)
const node4U = new Node(1, node6U, null)
const node3U = new Node(1, null, null)
const node2U = new Node(1, null, node5U)
const node1U = new Node(1, node3U, node4U)
const sampleUnbalancedTree = new Node(1, node1U, node2U)

const node9inOrder = new Node(9, null, null, null)
const node8inOrder = new Node(8, null, null, null)
const node7inOrder = new Node(7, null, null, null)
const node6inOrder = new Node(6, null, null, null)
const inOrderTree = new Node(5, null, null, null)
const node4inOrder = new Node(4, null, null, null)
const node3inOrder = new Node(3, null, null, null)
const node2inOrder = new Node(2, null, null, null)
const node1inOrder = new Node(1, null, null, null)

// In Order Graph
// 				  5
// 			 /			\
// 			2			8
//		   /   \	  /	  \
// 		  1		4	 6 	   9
// 				/	\
// 				3	7

node9inOrder.parent = node8inOrder
node8inOrder.parent = inOrderTree
node8inOrder.right = node9inOrder
node8inOrder.left = node6inOrder
node7inOrder.parent = node6inOrder
node1inOrder.parent = node2inOrder
node2inOrder.left = node1inOrder
node2inOrder.right = node4inOrder
node2inOrder.parent = inOrderTree
node3inOrder.parent = node4inOrder
node4inOrder.left = node3inOrder
node4inOrder.parent = node2inOrder
inOrderTree.left = node2inOrder
inOrderTree.right = node8inOrder
node6inOrder.right = node7inOrder
node6inOrder.parent = node8inOrder

// Tiny graph
const tinyTree = new Node(1, null, null, null)
const tiny2 = new Node(2, null, null, null)
const tiny3 = new Node(3, null, null, null)

tiny2.parent = tinyTree
tiny3.parent = tinyTree
tinyTree.left = tiny2
tinyTree.right = tiny3

// BST
const BSTree = new Node(5, null, null, null)
const BSTNode3 = new Node(3, null, null, null)
const BSTNode7 = new Node(7, null, null, null)
const BSTNode2 = new Node(2, null, null, null)
const BSTNode4 = new Node(4, null, null, null)
const BSTNode9 = new Node(9, null, null, null)

BSTree.left = BSTNode3
BSTree.right = BSTNode7

BSTNode3.left = BSTNode2
BSTNode3.right = BSTNode4

// BSTNode7.right = BSTNode9;

module.exports = {
  sampleBalancedTree,
  sampleUnbalancedTree,
  inOrderTree,
  tinyTree,
  BSTree,
}
