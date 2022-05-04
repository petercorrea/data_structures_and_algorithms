// Problem Statement
// Given a list of competition matches, and a list of results, find the team
// with the highest total score.
// A "1" in the results lists indicates the first team won,
// a "0" indicates the second team won. Each win gets awarded 3 points.

// Sample Input
//
//   "competitions": [["HTML", "C#"], ["C#", "Python"], ["Python", "HTML"]],
//   "results": [0, 0, 1]
//

// Sample Output
// "Python"

export default (competitions, results) => {
  // O(n) time | O(k) space
  // where n is the # of competitions; k the # of teams
  const map = new Map()
  const max = ["team", 0]

  for (let i = 0; i < competitions.length; i++) {
    if (results[i] === 0) {
      map.set(competitions[i][1], map.get(competitions[i][1]) + 3 || 3)
    } else if (results[i] === 1) {
      map.set(competitions[i][0], map.get(competitions[i][0]) + 3 || 3)
    }
  }

  for (const [team, score] of map) {
    if (score > max[1]) {
      max[0] = team
      max[1] = score
    }
  }

  return max[0]
}
