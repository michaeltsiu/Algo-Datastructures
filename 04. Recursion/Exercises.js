// Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent. This function should mimic the functionality of Math.pow()
function power(base, exp) {
  // if the exponent is 0, it should return 1 no matter what
  if (exp === 0) return 1;
  // only decreasing the exponent, not num
  return base * power(base, exp - 1);
}

// Write a function factorial which accepts a number and returns the factorial of that number. A factorial is the product of an integer and all the integers below it;
function factorial(x) {
  if (x < 0) return 0;
  // basecase: if the num is 0, return 1
  if (x <= 1) return 1
  // altering the num until it hits 0
  return x * factorial(x-1);
}

// Write a function called productOfArray which takes in an array of numbers and returns the product of them all
function productOfArray(arr) {
  // basecase: if the length of the array is 0, return everything back up
  if (arr.length === 0) return 1;
  return arr[0] * productOfArray(arr.slice(1));
}

// Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function
function recursiveRange(x) {
  // basecase: if the num is 1, we want to return everything back up
  if (x === 1) return 1;
  // returning the num while adding all the recursive functions - 1
  return x + recursiveRange(x - 1)
}

// Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence. Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers
function fib(x) {
  if (x <= 2) return 1;
  return fib(x-1) + fib(x-2)
}

fib(4)
1 + 1 + 2 = 4 // 3
// fib(10) // 55
[1, 1, 2, 3, 5, 8, 13, 21, 34, 55]