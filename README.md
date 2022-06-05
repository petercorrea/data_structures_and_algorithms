# Data Structures and Algorithms

A collection of data structures, algorithms, and interviewing questions.

## Overview of Content

- Data Structures
  - Arrays, LinkedLists
  - Stacks, Queues
  - Heaps
  - Binary Search Trees, AVL Trees
  - Directed & Undirected Graphs

- Sorting Algorithms
  - Merge Sort
  - Quick Sort
  - Selection Sort

- Graph Algorithms
  - Dijkstra

- Practice Questions

## Scripts

### Install Dev Dependencies

```shell
npm i
```

### Test

```shell
npm test
```

### Spell Check

This script will find all incorrect spellings and **whitelist** them. Manually review the words in cspell.txt. If the word is indeed correct leave them in the list, otherwise correct them in the codebase and remove from the list.

```shell
npm run spell-check
```

#### Pre Commit Hook

The Pre-commit hook will lint, pretty, spell check and test code.
