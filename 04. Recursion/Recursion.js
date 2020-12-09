function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}

sumRange(3)
// return 3 + sumRange(2)
            // return 2 + sumRange(1)
                        // return 1
// goes back and adds them all up
// 2 + 1 = 3 + 3 = 6

// iteratively
function factorial(num) {
  let total = 1;
  for (let i = num; i > 1; i--) {
    total *= i;
  }
  return total;
}

// recursively
function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num-1);
}
factorial(5);

// Helper Method Recursion
  // Example 1
    function outer(input) {
      let outerScopedVariable = [];
      function helper(helperInput) {
        // modify the outerScopedVariable
        helper(helperInput--);
      }
      helper(input);
      return outerScopedVariable;
    }
  // Example 2
    function collectOddValues(arr) {
      let result = [];
      function helper(helperInput) {
        if (helperInput.length === 0) return;
        if (helperInput[0] % 2 !== 0) result.push(helperInput[0]);
        helper(helperInput.slice(1));
      }
      helper(arr);
      return result;
    }
    collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9])

// Pure Recursion
  function collectOddValues(arr) {
    let newArr = [];
    if (arr.length === 0) return newArr;
    if (arr[0] % 2 !== 0) newArr.push(arr[0]);
    newArr = newArr.concat(collectOddValues(arr.slice(1)));
    return newArr;
  }
  collectOddValues([1, 2, 3, 4, 5])
  [1].concat(collectOddValues([2, 3, 4, 5])) // first pass
              [].concat(collectOddValues([3, 4, 5])) // second pass
                         [3].concat(collectOddValues([4, 5])) // third pass
                                      [].concat(collectOddValues([5]))
                                                  [5].concat(collectOddValues([]))
                                                              []
  // concats to [1, 3, 5]
  // For arrays, use methods like slice, spread operator, and concat that make copies of arrays so you do not mutate them
  // Strings are immutable so you will need to use methods like slice, substr, or substring to make copies of the strings
  // To make copies of objects, use Object.assign, or the spread operator