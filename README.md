# Data Structures and Algorithms

## 🚧  About

This repo is still being actively developed and parts may be in progress.

A collection of data structures, algorithms, and interviewing questions.

## 💻 Content

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

## 🔨 Scripts

#### Install Dev Dependencies

```shell
npm i
```

#### Test

```shell
npm test
```

#### Spell Check

This script will find all incorrect spellings and **whitelist** them.

Manually review the words in cspell.txt. If the word is indeed correct leave it in the list, otherwise correct it in the codebase and remove it from the list.

```shell
npm run spell-check
```

#### Clean

This script will lint, pretty, spell check and test code without being part of the pre-commit hook.

```shell
npm run clean
```

#### Pre Commit Hook

The Pre-commit hook will lint, pretty, spell check and test code.
