// O(1) space
  function sum(arr) {
    // one number
    let total = 0;
    // let i = 0 is another number
    for (let i = 0; i < arr.length; i++) {
      total += arr[i];
    }
    // single number
    return total;
  }

// O(n) space
  function double(arr) {
    // length of array is empty
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      // as the loop goes on, the newArr becomes bigger
      newArr.push(2*arr[i]);
    }
    // long arr
    return newArr;
  }