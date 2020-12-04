// Frequency Counter
  // Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
    // Solution must have O(n)
    // sameFrequency(182, 281) // true
    // sameFrequency(34, 14) // false
    // sameFrequency(3589578, 5879385) // true
    // sameFrequency(22, 222) // false
  function sameFrequency(num1, num2) {
    // convert num1 and num2 into strings
    let str1 = num1.toString();
    let str2 = num2.toString();
    // if str1 and str2 lengths are not the same
    if (str1.length !== str2.length) {
      // return false
      return false;
    }
    // create obj to hold numbers
    let container = {};
    // iterate over the str1 array
    for (let num of str1) {
      // set obj at str1 current index to be 1 or +1
      container[num] = (container[num] || 0) + 1;
    }
    // iterate over str2
    for (let num of str2) {
      // if obj at str2 doesnt exist
      if (container[num] === undefined) {
        // return false
        return false;
      }
        // decrement the obj at str2
        container[num]--;
    }
    // return true
    return true;
  }

  // Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in. You can solve this using the frequency counter pattern OR the multiple pointers pattern.
    // Solution must be O(n) for time/space
    // areThereDuplicates(1, 2, 3) // false
    // areThereDuplicates(1, 2, 2) // true
    // areThereDuplicates('a', 'b', 'c', 'a') // true
  // areThereDuplicates - Frequency Counter
  function areThereDuplicates(...args) {
    // create obj to hold character
    let obj = {};
    // iterate over the args
    for (let char of args) {
      // if obj at key is undefined
      if (obj[char] === undefined) {
        // set to 1
        obj[char] = 1
      }
      // else
      else {
        // return true
        return true;
      }
    }
    // return false
    return false;
  }
  // areThereDuplicates - Multiple Pointers
  function areThereDuplicates(...args) {
    args.sort((a, b) => a > b);
    let start = 0;
    let next = 1;
    while (next < args.length) {
      if (args[start] === args[next]) {
        return true;
      }
      start++;
      next++;
    }
    return false;
  }

// Multiple Pointers
  // Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matchces the average target.
  // Solution must be O(n)
    // averagePair([1, 2, 3], 2.5) // true
    // averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8) // true
    // averagePair([-1, 0, 3, 4, 5, 6], 4.1) // false
    // averagePair([], 4) // false
  function averagePair(array, target) {
    // create pointer1 set to 0 and pointer2 to 1
    let pointer1 = 0;
    let pointer2 = 1;
    // while pointer1 is less than array.length
    while (pointer1 < array.length) {
      // if array at pointer1 + array at pointer2 / 2 is target
      if ((array[pointer1] + array[pointer2])/2 === target) {
        // return true
        return true;
      }
      // increase pointer1
      pointer1++;
      // increase pointer2
      pointer2++;
    }
    // return false
    return false
  }

  // Write a function called isSubsquence which takes in two strings and checks whether the characters in the first string form a sentence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.
    // isSubsequence('hello', 'hello world'); // true
    // isSubsequence('sing', 'sting'); // true
    // isSubsequence('abc', 'abracadabra'); // true
    // isSubsequence('abc', 'acb'); // false
  // Solution must have O(n+m)
  function isSubsequence(str1, str2) {
    // if str1 and str2 lengths are 0
    if (str1.length === 0 && str2.length === 0) {
      // return true
      return true
    }
    // create a tracker to save str1 index
    let tracker = 0;
    // iterate over str2
    for (let char of str2) {
      // if char at str2 is str1 at tracker
      if (char === str1[tracker]) {
        // increment tracker
        tracker++;
      }
      // if the tracker is the same as str1 length
      if (str1.length === tracker) {
        // return true
        return true;
      }
    }
    // return false
    return false;
  }

// Sliding Window
  // Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function
  // Note that a subarray must consist of consecutive elements from the original array. In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.
    // maxSubarraySum([100, 200, 300, 400], 2) // 700
    // maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4) // 39
    // maxSubarraySum([-3, 4, 0, -2, 6, -1], 2) // 5
    // maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2) // 5
    // maxSubarraySum([2, 3], 3) // null
  function maxSubarraySum(array, num) {
    // create 2 variables to hold max and temp sum
    let max = 0;
    let temp = 0;
    // if num is larger than the array length
    if (num > array.length) {
      // return null
      return null;
    }
    // iterate over num to grab the first consecutive nums
    for (let i = 0; i < num; i++) {
      // max adding all arrs in num
      max += array[i];
    }
    // set tempsum to be max
    temp = max;
    // iterate over the arr length
    for (let i = num; i < array.length; i++) {
      // set tempsum to be tempsum - beginning of arr and end
      temp = temp - array[i-num] + array[i];
      // set maxsum to be max of temp and max
      max = Math.max(max, temp);
    }
    // return max
    return max;
  }

  // Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer
  // This function should return the minimal length of a contiguous subarray of which the sub is greater or equal to the integer passed to the function. If there isnt one, return 0 instead.
    // minSubArrayLen([2, 3, 1, 2, 4, 3], 7) // 2 -> because [4, 3] is the smallest subarray
    // minSubArrayLen([2, 1, 6, 5, 4], 9) // 2 -> because [5, 4] is the smallest subarray
    // minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52) // 1 because [62] is greater than 52
    // minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39) // 3
    // minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55) // 5
    // minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
    // minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95) // 0
  function minSubArrayLen(nums, sum) {
    let total = 0, start = 0, end = 0, minLen = Infinity;
    while (start < nums.length) {
      // if current window doesn't ad up to the given sum, then
      if (total < sum && end < num.length) {
        // move the window to the right
        total += nums[end];
        end++;
      }
      // if current window adds up to at least the sum given then
      else if (total >= sum) {
        // we can shrink the window
        minLen = Math.min(minLen, end-start);
        total -= nums[start];
        start++;
      }
      // current total less than required total but we reach the end, need this or else we'll be in an infinite loop
      else {
        break;
      }
    }
    return minLen === Infinity ? 0 : minLen;
  }

  // Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters
    // findLongestSubstring('') // 0
    // findLongestSubstring('rithmschool') // 7
    // findLongestSubstring('thisisawesome') // 6
    // findLongestSubstring('thecatinthehat') // 7
    // findLongestSubstring('bbbbbb') // 1
    // findLongestSubstring('longestsubstring') // 8
    // findLongestSubstring('thisishowwedoit') // 6
    function findLongestSubstring(str) {
      // if str length is 0
      if (str.length == 0) {
        // return 0
        return 0;
      }
      // create an variable to hold the current and longest string
      let current = '', longest = '';
      // iterate over the str
      for (let i = 0; i < str.length; i++) {
        // create a letter variable to keep track of the current value
        let letter = str[i];
        // create an index variable to see if current has the current value in the string
        let index = current.indexOf(letter)
        // if index is greater than -1
        if (index > -1) {
          // if longest length is smaller than current length
          if (longest.length < current.length) {
            // set longest to current
            longest = current;
          }
          // set current to be current slice the index + 1 and add letter to the end
          current = current.slice(index + 1) + letter;
        } else {
          // else add letter to current
          current += letter;
        }
      }
      // if longest's length is bigger than current
      if (longest.length > current.length) {
        // return longest's length
        return longest.length;
      }
      // return current's length
      return current.length;
    }