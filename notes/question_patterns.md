# Question Patterns \hfill \today

## Sliding Window
- How to spot:
    - Problem input is linear DS (linked list, array, or string)
    - Asked to find the longest/shortest substring, subarray, or a desired value
- Common problems:
    - Maximum sum subarray of size "k" 
    - Longest substring with 'K' distinct characters
    - String anagrams

## Two Pointers/Iterators
- How to spot:
    - Dealing with sorted arrays or linked lists and need to find elements that fulfill conditions
    - Set of elements in array is a pair, triplet, or subarray
- Common problems:
    - Squaring a sorted array
    - Triplets that sum to zero
    - Comparing strings that contain backspaces

## Fast and Slow Pointers
- Hare and Tortoise algorithm
- Faster one and slow one are bound to meet once they are in cyclic loop
- How to spot:
    - Problem deals with loop in linked list or array
    - When need to know position of a certain element or the overall length of list
- When to use over two pointer method:
    - When you can't move backwards (singly linked list)
    - When a linked list has a palindrome
- Common problems:
    - Linked list cycle
    - Palindrome linked list
    - Cycle in circular array

## Merge Intervals
- How to spot:
    - "Overlapping intervals"
    - Asked to produce a list with only mutually exclusive intervals
- Common problems:
    - Intervals intersection
    - Maximum CPU load

## Cyclic Sort
- How to spot:
    - Problems involving a sorted array with numbers in a given range
    - Find the missing/duplicated/smallest number in a sorted/rotated array
- Common problems:
    - Find the missing number
    - Find the smallest missing positive number

## In-place reversal of linked list
- How to spot:
    - Asked to reverse a linked list without using extra memory
- Common problems:
    - Reverse a sub-list
    - Reverse every K-element Sub-list

## Tree BFS
- How to spot:
    - Asked to traverse a tree in a level-by-level fashion
- Common problems:
    - Binary tree level order traversal
    - Zigzag traversal

## Tree DFS
- How to spot:
    - Asked to traverse tree with in-order, preorder, or postorder DFS
    - Problem requires searching for something where the node is closer to a leaf
- Common problems:
    - Sum of path numbers
    - All paths for a sum

## Two heaps
- How to spot:
    - Priority queue, scheduling
    - Problem states need to find the smallest/largest/median element of a set
    - Sometimes useful in problems with binary tree
- Common problems:
    - find the median of a number stream

## Subsets
- Description:
    - Given a set `[1, 5, 3]`
    1. Start with empty set: `[[]]`
    2. Add first number `1` to all the existing subsets to create new subsets: `[[], [1]]`
    3. Add the second number `5` to all the existing subsets `[[], [1], [5], [1, 5]]`
    4. Add the third number `3` to all the existing subsets `[[], [1], [5], [1, 5], [3], [1, 3], [5, 3], [1, 5, 3]]`
- How to spot:
    - When you need to find permutations and combinations of a given set
- Common problems:
    - Subsets with duplicates
    - String permutations by changing case

## Modified Binary Search
- Description:
    1. First, find the middle of start and end. An easy way to find the middle would be: `middle = (start + end) / 2`. But this has a good chance of producing an integer overflow so it’s recommended that you represent the middle as: `middle = start + (end — start) / 2`
    2. If the key is equal to the number at index middle then return middle
    3. If `key` isn’t equal to the index middle:
    4. Check if `key < arr[middle]`. If it is reduce your search to `end = middle — 1`
    5. Check if `key > arr[middle]`. If it is reduce your search to `end = middle + 1`
- How to spot:
    - Need to find something in sorted array
- Common problems:
    - Order-agnostic binary search
    - Search in a sorted infinite array

## Top K elements
- "Top/smallest/frequent K elements"
- No need to track because heap will keep track of it
- How to spot:
    - Asked to find the top/smallest/frequent K elements in a set
    - Asked to sort an arary to find an exact element
- Common problems:
    - Top K numbers
    - Top K frequent numbers

## K-way merge
- Description:
    - Used to merge lists in sorted order
    1. Insert the first element of each array in a Min Heap.
    2. After this, take out the smallest (top) element from the heap and add it to the merged list.
    3. After removing the smallest element from the heap, insert the next element of the same list into the heap.
    4. Repeat steps 2 and 3 to populate the merged list in sorted order.
- How to find:
    - Problem features sorted arrays, lists, or a matrix
    - Asks you to merge sorted lists, find the smallest element in a sorted list
- Common problems:
    - Merge K sorted lists
    - K pairs with largest sums

## Topological sort
- If event ‘B’ is dependent on event ‘A’, ‘A’ comes before ‘B’ in topological ordering
- How to spot:
    - Problem deals with graphs that have no directed cycles
    - Asked to update all objects in a sorted order
    - Have a class of objects that follow a particular order
- Common problems:
    - Task scheduling
    - Minimum height of a tree
    