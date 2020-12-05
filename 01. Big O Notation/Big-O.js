
// O(n)
  function addUpTo(n) {
    let total = 0; // one assignment
    // n number of operations, lots of operations going on
    for (let i = 1; i <= n; i++) {
      total += i;
    }
    return total;
  }

  // two for loops, but still O(n)
  function countUpAndDown(n) {
    console.log("Going Up!");
    for (let i = 0; i < n; i++) {
      console.log(i);
    }
    console.log("At the top!\nGoing down...");
    for (let j = n-1; j >= 0; j--) {
      console.log(j);
    }
    console.log("Back down. Bye!")
  }

// O(1)
  function addUpTo(n) {
    // 3 operations happening (multiplication, addition, division in that order)
    return n * (n + 1) / 2;
  }

  // tricky question regarding constant is
  function logAtMost5(n) {
    // after 5, no matter how large n is, it will stay at most 5
    for (let i = 1; i <= Math.min(5, n); i++) {
      console.log(i);
    }
  }

// O(n^2)
  function printAllPairs(n) {
    // nested loop means it is quadratic
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        console.log(i, j)
      }
    }
  }