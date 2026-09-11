# Project: Recursion - The Odin Project

This repository contains my solutions to the **Project: Recursion** curriculum from [The Odin Project](https://www.theodinproject.com/lessons/javascript-recursion).

The assignment practices recursion by implementing the Fibonacci sequence using iteration and recursion and merge sort. I also follow TDD and wrote my own Jest tests to verify the expected behavior of each function.

## Fibonacci

- fibs(n) returns the first n numbers in the Fibonacci sequence using iteration.

- fibsRec(n) returns the first n numbers in the Fibonacci sequence using recursion.

Examples:

- fibs(0); // []
- fibs(1); // [0]
- fibs(2); // [0, 1]
- fibs(8); // [0, 1, 1, 2, 3, 5, 8, 13]

## Merge Sort

- mergeSort(arr) returns a sorted array using recursive merge sort.

Examples:

- mergeSort([]); // []
- mergeSort([1]); // [1]
- mergeSort([3, 2, 1, 13, 8, 5, 0, 1]);
  // [0, 1, 1, 2, 3, 5, 8, 13]
