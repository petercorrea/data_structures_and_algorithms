// Single Source Shortest Path
// Iterate each edge (v-1) times
// TC: best: E*(V-1) -> n^2 worst: E*(n(n-1)/2) -> n^3
// Will fail if there exists a negative weight cycle, but
// we can detect this cycle (v-1)+1 times and if the weight continues to change, we cant solve it.
