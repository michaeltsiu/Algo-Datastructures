// Objectives
//   - What is a stack
//     - Last in First Out (LIFO)
//       - Stack of books, have to take off from top
//   - Understand use cases for a stack
//     - Managing function invocations
//     - Undo/Redo
//     - Routing (the history object) is treated like a stack!
//   - Implement a stack

// Creating a Stack with an Array
  let stack = [];
  stack.push("google");
  stack.push("instagram");
  stack.push("youtube");
  stack.pop() // "youtube"
  stack.pop() // "instagram"
  stack.push("amazon")
  stack.pop() // "amazon"

// adding & removing from the beginning is memory intensive
  let stack = [];
  stack.unshift("create new file");
  stack.unshift("resized file");
  stack.unshift("cloned out wrinkle");
  stack.shift() // "cloned out wrinkle"
  stack.shift() // "resized file"
  stack.shift() // "created new file"

// Ex.
  let stack = new Stack();
  stack.push("FIRST");
  stack.push("SECOND");
  stack.push("THIRD");
  stack.pop(); // "THIRD"
  stack.pop(); // "SECOND"

// Stack Class
class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }
  pop() {
    if (!this.first) return null;
    let temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

  // Big O of Stacks
  //   - Insertion: O(1)
  //   - Removal: O(1)
  //   - Searching: O(n)
  //   - Access: O(n)