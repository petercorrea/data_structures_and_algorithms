// left child: i * 2
// right child: i * 2 + 1
// parent: i / 2

let MinHeap = function () {
	// To make the math workout easier, we place null at index 0 and work off index 1.
	let heap = [null];

	this.insert = function (num) {
		// insert item as the last item
		heap.push(num);

		// sort the heap if there is more than two items [null, root]
		if (heap.length > 2) {
			// get last idx which is the item we just pushed
			let idx = heap.length - 1;

			// while the child is less than the parent
			while (heap[idx] < heap[Math.floor(idx / 2)]) {
				// if we are not on the root node
				if (idx >= 1) {
					// Object destrucrting to swap values
					[heap[Math.floor(idx / 2)], heap[idx]] = [
						heap[idx],
						heap[Math.floor(idx / 2)],
					];
					// if the parent is not the root node
					if (Math.floor(idx / 2) > 1) {
						// move up to the parent idx
						idx = Math.floor(idx / 2);
					} else {
						break;
					}
				}
			}
		}
	};

	this.remove = function () {
		// always remove the top node
		let smallest = heap[1];

		// resort the heap
		if (heap.length > 2) {
			// set the last node as the first
			heap[1] = heap[heap.length - 1];
			// remove the last node since it was moved to the first
			heap.splice(heap.length - 1);

			// if there are only two nodes, sort them [null, val1, val2]
			if (heap.length == 3) {
				if (heap[1] > heap[2]) {
					[heap[1], heap[2]] = [heap[2], heap[1]];
				}
				return smallest;
			}

			// if there are more than two nodes
			// set formulas to find children
			let i = 1;
			let left = 2 * i;
			let right = 2 * i + 1;

			// while the root node is greater than its children
			while (heap[i] >= heap[left] || heap[i] >= heap[right]) {
				// if the parent is greater than the left child
				if (heap[left] < heap[right]) {
					// swap the nodes
					[heap[i], heap[left]] = [heap[left], heap[i]];
					i = 2 * i;
				} else {
					// if the parent is greater than the right child, swap
					[heap[i], heap[right]] = [heap[right], heap[i]];
					i = 2 * i + 1;
				}

				// increment idxs
				left = 2 * i;
				right = 2 * i + 1;
				// if we are at the bottom of the tree
				if (heap[left] == undefined || heap[right] == undefined) {
					break;
				}
			}
			// if theres only one element in the tree [null, parent]
		} else if (heap.length == 2) {
			// remove last element
			heap.splice(1, 1);
		} else {
			// if there were 0 elements to begin with
			return null;
		}
		return smallest;
	};

	this.sort = function () {
		// T(C) = nlogn
		// to create a sorted array
		let result = new Array();
		while (heap.length > 1) {
			result.push(this.remove());
		}
		return result;
	};
};

let someMinHeap = new MinHeap();
someMinHeap.insert(20);
someMinHeap.insert(10);
someMinHeap.insert(1);
someMinHeap.insert(22);
console.log(someMinHeap.remove());
