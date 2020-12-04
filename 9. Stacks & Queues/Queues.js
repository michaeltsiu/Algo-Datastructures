// Objective
//   - Define what a queue is
//     - First In First Out(FIFO)
//       - Think of a line, first person goes in, first person goes out
//       - Printing/Task processing
//   - Understand use cases for a queue
//   - Implement operations on a queue data structure

// Creating a queue with an array

let queue = [];
queue.unshift("FIRST");
queue.unshift("SECOND");
queue.unshift("THIRD");
queue.pop() // "FIRST"
queue.pop() // "SECOND"
queue.pop() // "THIRD"

// Queue Class
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }
  dequeue() {
    if (!this.first) {
      return null;
    }
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

let queue = new Queue();
queue.enqueue("FIRST");
queue.enqueue("SECOND");
queue.enqueue("THIRD");
queue.dequeue() // "FIRST"
queue.dequeue() // "SECOND"
queue.dequeue() // "THIRD"

// Big O of Queues
//   - Insertion: O(1)
//   - Removal: O(1)
//   - Searching: O(n)
//   - Access: O(n)