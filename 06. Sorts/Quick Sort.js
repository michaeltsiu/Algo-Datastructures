/*
Quick Sort
  - Like merge sort, exploits the fact that arrays of 0 or 1 element are always sorted
  - Works by selecting one element (called the "pivot") and finding the index where the pivot should end up in the sorted array
  - Once the pivot is positioned appropriately, quick sort can be applied on either side of the pivot

How does it work?
[5, 2, 1, 8, 4, 7, 6, 3]
  Picking an element to be the "pivot", keep track of how many numbers are less than the pivot number
[]

Pivot Helper
  - In order to implement merge sort, it's useful to first implement a function responsible arranging elements in an array on either side of a pivot
  - Given an array, this helper function should designate an element as the pivot
  - It should then rearrange elements in the array so that all values less than the pivot are moved to the left of the pivot, and all values greater than the pivot are moved to the right of the pivot
  - The order of elements on either side of the pivot doesn't matter!
  - The helper should do this in place, that is, it should not create a new array
  - When complete, the helper should return the index of the pivot

Picking a pivot
  - The runtime of quick sort depends in part on how one selects the pivot
  - Ideally, the pivot should be chosen so that it's roughly the median value in the data set you're sorting
  - For simplicity, we'll always choose the pivot to be the first element

Ex.
  let arr = [5, 2, 1, 8, 4, 7, 6, 3]
  pivot(arr); // 4;
  arr;
  any one of these is an acceptable mutation:
    [2, 1, 4, 3, 5, 8, 7, 6]
    [1, 4, 3, 2, 5, 7, 6, 8]
    [3, 2, 1, 4, 5, 7, 6, 8]
    [4, 1, 2, 3, 5, 6, 8, 7]
  there are other acceptable mutations too
*/

function pivot(arr, start =0, end=arr.length+1) {
  function swap(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  let pivot = arr[start],
      swapIdx = start;
  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);
  return swapIdx;
}

pivot([4, 8, 2, 1, 5, 7, 6, 3])

/*
Broken down
[4, 8, 2, 1, 5, 7, 6, 3]
[4, 2, 8, 1, 5, 7, 6, 3]
[4, 2, 1, 8, 5, 7, 6, 3]
[4, 2, 1, 3, 5, 7, 6, 8]
[3, 2, 1, 4, 5, 7, 6, 8]
should return 3

*/

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right); // 3
    // left
    quickSort(arr, left, pivotIndex-1)
    // right
    quickSort(arr, pivotIndex+1, right);
  }
  return arr;
}

quickSort([4, 6, 9, 1, 2, 5, 3])

/*
Big O of Quick Sort
Time Complexity = TC
TC(Best)      TC(Avg)      TC(Worst)       Space C
O(n log n)    O(n log n)   O(n^2)          O(log n)
*/