# Recursion

## Fibonacci
- e.g. `node fibonacci n` returns a list containing the first `n` Fibonacci numbers

## Merge Sort
- e.g. `node merge-sort 1,7,2,6,4,8,9,3,5` returns the sorted list using the merge sort algorithm `1,2,3,4,5,6,7,8,9`
- The recurrence relationship for merge sort is $\ T(n) = 2T(\frac{n}{2}) + cn$
    - We have constant work of $\ cn $ per level, with $\ log(n) $, for a total runtime of $\ n \cdot log(n) $
