// Frequency Counter
  // Problem 1
    // Naive Solution
      // Time Complexity: O(n^2) (indexOf is a loop as well (nested loop))
      function same (arr1, arr2) {
        if (arr1.length !== arr2.length) return false

        for (let i = 0; i < arr1.length; i++) {
          let correctIndex = arr2.indexOf(arr1[i] ** 2);
          correctIndex !== undefined ? arr2.splice(correctIndex, 1) : false
        }
        return true
      }
    // Refactored
      // Time Complexity: O(n)
      function same (arr1, arr2) {
        if (arr1.length !== arr2.length) return false;

        let frequencyCounter1 = {};
        let frequencyCounter2 = {};
        for (let val of arr1) {
          frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
        }
        for (let val of arr2) {
          frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
        }
        for (let key in frequencyCounter1) {
          if (!(key ** 2 in frequencyCounter2)) {
            return false
          }
          if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return false
          }
        }
        return true
      }
  // Problem 2
    // Anagrams
      // Time Complexity: O(n)
      function validAnagram(str1, str2) {
        // if str1 and str2 length are different
        if (str1.length !== str2.length) {
          // return false
          return false;
        }
        // create obj for letters
        let letters = {};

        // iterate over str1
        for (let l of str1) {
          // letters key to be str1 value and key to be either 1 or +1
          letters[l] = (letters[l] || 0) + 1;
        }
        // iterate over str2
        for (let l of str2) {
          // if letters at current index isn't valid
          if (!letters[l]) {
            // return false
            return false
          }
          // decrement current index of letter
          letters[l]--
        }
        // return true
        return true
      }

// Multiple Pointers
  // Problem 1
    // Naive Solution
      // Time complexity: O(n^2), Space complexity: O(1)
      function sumZero(arr) {
        for (let i = 0; i < arr.length; i++) {
          for (let j = i+1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
              return [arr[i], arr[j]];
            }
          }
        }
      }
    // Refactored
      // Time complexity: O(n), Space complexity: O(1)
      function sumZero(arr) {
        let left = 0;
        let right = arr.length - 1;
        while (left < right) {
          let sum = arr[let] + arr[right];
          if (sum === 0) {
            return [arr[left], arr[right]];
          } else if (sum > 0) {
            right--;
          } else {
            left++;
          }
        }
      }
  // Problem 2
    // countUniqueValues
      // Time complexity: O(n)
      function countUniqueValues(arr) {
        // create variable to keep track of 1st count
        let i = 0;
        // iterate over the arr length at j starting at 1
        for (let j = 1; j < arr.length; j++) {
          // if arr at i isnt the same as arr j
          if (arr[i] !== arr[j]) {
            // increase i
            i++;
            // set arr i to be arr j
            arr[i] = arr[j]
          }
        }
        // return i + 1
        return i+1
      }

// Sliding Window
  // Problem 1
    // maxSubarraySum
      // Naive Solution
        // Time complexity: O(n^2)
        function maxSubarraySum(arr, num) {
          // if the arr length is less than num
          if (arr.length < num) {
            // return null
            return null
          }
          // create variable to hold max (-infinity)
          let max = -Infinity;
          // iterate over arr but subtract num + 1 to the length
          for (let i = 0; i < arr.length - num + 1; i++) {
            // create temp variable = 0
            let temp = 0;
            // iterate over nums length
            for (let j = 0; j < num; j++) {
              // set temp += arr at i+j
              temp += arr[i+j]
            }
            // set max to math.max max or temp
            max = Math.max(max, temp)
          }
          // return max
          return max
        }
      // Refactor
        // Time complexity: O(n)
        function maxSubarraySum(arr, num) {
          // create 2 variables to hold the max and temporary sum
          let maxSum = 0;
          let tempSum = 0;
          // if num is larger than array length return null
          if (arr.length < num) return null;
          // grabbing the first consecutive nums
          for (let i = 0; i < num; i++) {
            // maxSum adding all the arrs in num
            maxSum += arr[i];
          }
          // set the tempSum to be maxsum
          tempSum = maxSum;
          // iterate over the arr length
          for (let i = num; i < arr.length; i++) {
            // set tempsum to be tempSum beginning + tempSum end
            tempSum = tempSum - arr[i - num] + arr[i];
            // set maxSum to be the bigger number between maxSum and tempSum
            maxSum = Math.max(maxSum, tempSum);
          }
          // return maxSum
          return maxSum;
        }

// Divide and Conquer
  // Problem 1
    // Naive Solution
      // Time Complexity: O(n)
      function search(arr, val) {
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] == val) {
            return i;
          }
        }
        return -1;
      }
    // Refactor
      // Time Complexity: Log(n)
      function search(array, val) {
        let min = 0;
        let max = array.length - 1;
        while (min <= max) {
          let middle = Math.floor((min+max) / 2);
          let currentElement = array[middle];

          if (currentElement < val) {
            min = middle + 1;
          } else if (currentElement > val) {
            max = middle - 1;
          } else {
            return middle;
          }
        }
        return -1;
      }