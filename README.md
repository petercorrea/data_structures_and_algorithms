# Data Structures and Algorithms

## About

A collection of data structures, algorithms, and interviewing questions. 

## 🚧 Maintenance Status

This repo started out simply as a private collection of notes. However work has gone underway to make it more acceptable for public educational use.

That being said, this repo is currently being worked on to improve comments, explanations, edge cases, tests and overall code quality. So, please excuse the mess while I tidy up. Once this is in satisfactory condition, this maintenance status will be updated.

## 💻 Content

- Data Structures
  - Arrays
  - LinkedLists
  - Stacks
  - Queues
  - Heaps
  - Binary Search Trees
  - AVL Trees
  - Graphs

- Algorithms
  - Sorting
  - Graphs

- System Design Questions

- Practice Questions
  - Strings
  - Arrays
  - LinkedLists
  - Stacks
  - Queues
  - Two Pointers
  - Sliding Window
  - Heaps
  - Recursion
  - Greedy
  - Dynamic Programming
  - Binary Search Trees
  - AVL Trees
  - Directed & Undirected Graphs
  - Bit Operations

## 🔨 Scripts

#### Install Dev Dependencies

```
npm i
```

#### Test

```
npm test
```

#### Spell Check

This script will find all incorrect spellings and **whitelist** them.

Manually review the words in cspell.txt. If the word is indeed correct leave it in the list, otherwise correct it in the codebase and remove it from the list.

```
npm run spell-check
```

#### Clean

This script will lint, format, spell check and test code without being part of the pre-commit hook.

```
npm run clean
```

### Pre Commit Hooks

The Pre-commit hook will lint, format, spell check and test code.
