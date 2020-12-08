/*
Merge Sort
  - It's a combination of two things - merging and sorting
  - Exploits the fact that arrats of 0 or 1 element are always sorted
  - Works by decomposing an array into smaller arrays of 0 or 1 elements, then building up a newly sorted array

How does it work?
      [8, 3, 5, 4, 7, 6, 1, 2]
    [8, 3, 5, 4]    [7, 6, 1, 2]
  [8, 3]  [5, 4]    [7, 6]  [1, 2]
[8] [3]   [5] [4]  [7] [6]   [1] [2]
  [3, 8]  [4, 5]    [6, 7]  [1, 2]
    [3, 4, 5, 8]    [1, 2, 6, 7]
      [1, 2, 3, 4, 5, 6, 7, 8]
*/

// Merge 2 arrays that are sorted already
function merge(arr1, arr2) {
  let results = [],
      i = 0,
      j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] >= arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j])
    j++;
  }
  return results;
}

// merge([1, 10, 50], [2, 14, 99, 100])
// [1, 10, 50] [ 2, 14, 99, 100]
// [1, 2, 10, 14, 50, 99, 100]

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length/2),
      left = mergeSort(arr.slice(0, mid)),
      right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

mergeSort([10, 24, 76, 73, 72, 1, 9])

/*
Big O of mergeSort

Time Complexity: O(n log n) always best
Space Complexity: O(n)
*/
