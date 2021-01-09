// Problem Statement:
// In the classic problem of the Towers of Hanoi, you have 3 towers and N disks
// of different sizes which can slide onto any tower.The puzzle starts with
// disks sorted in ascending order of size from top to bottom
// (i.e., each disk sits on top of an even larger one).You have the
// following constraints:
// 		(1) Only one disk can be moved at a time.
// 		(2) A disk is slid off the top of one tower onto another tower.
// 		(3) A disk cannot be placed on top of a smaller disk.
// 		Write a program to move the disks from the first tower to the last using Stacks.

// Clarifing Questions:
//

// Assume:
//

// Sample Input and Output:
//

// Proposed Solution:

class Towers {
	constructor(n) {
		this.totalDisks = n;
		this.towers = [[], [], []];
		this.createDisks(n);
	}

	createDisks(n) {
		for (let i = n; i > 0; i--) {
			this.towers[0].push(i);
		}
	}

	moveDisk(source, intermediate, destination) {
		let disk = this.towers[source].pop();
		this.towers[destination].push(disk);
	}

	moveTower(source, intermediate, destination, disks = this.totalDisks) {
		if (disks == 1) {
			this.moveDisk(source, intermediate, destination);
			return;
		}
		this.moveTower(source, destination, intermediate, disks - 1);
		this.moveDisk(source, intermediate, destination);
		this.moveTower(intermediate, source, destination, disks - 1);
		return;
	}

	print() {
		console.log(this.towers);
	}
}

// Test:
// result
let tower = new Towers(3);

tower.moveTower(0, 1, 2);
tower.print();

// Notes after implementing:
