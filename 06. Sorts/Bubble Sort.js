// ES5
function swap (arr, idx1, idx2) {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

// ES2015
const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

// ES5
function bubbleSort(arr) {
  for (var i = arr.length; i > 0; i--) {
    for (var j = 0; j < i - 1; j++) {
      // SWAP!
      var temp = arr[j];
      arr[j] = arr[j+1];
      arr[j+1] = temp;
    }
  }
  return arr;
}

// ES6
function bubbleSort(arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j+1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}

// Optimized with no swaps
function bubbleSort(arr) {
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      // SWAP!
      let temp = arr[j];
      arr[j] = arr[j+1];
      arr[j+1] = temp;
      noSwaps = false;
    }
    if (noSwaps) break;
  }
  return arr;
}

bubbleSort([37, 45, 29, 8]);
// [37, 45, 29, 8]
// [37, 29, 8, 45]
// [29, 8, 37, 45]
// [8, 29, 37, 45]

/*
Big O complexity of bubble sort
  O(n^2)
*/