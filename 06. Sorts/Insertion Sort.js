// Insertion Sort
  // Builds up the sort by gradually creating a larger left half which is always sorted

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j+1] = arr[j];
    }
    arr[j+1] = currentVal;
  }
  return arr;
}

insertionSort([2, 1, 9, 76, 4]);

// Big O
  // basically O(n^2) unless theres one left to change