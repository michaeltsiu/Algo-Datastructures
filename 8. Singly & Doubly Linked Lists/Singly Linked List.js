// Objectives
//   - Define what a singly linked list is
//     - A data structure that contains a head, tail and length property
//     - Linked lists consist of nodes and each node has a value and a pointer to another node or null
//   - Compare and contrast linked lists with arrays

// Comparisons with arrays
//   Lists
//     - Dont have indexes!
//     - Connected via nodes with a next pointer
//     - Random acces is not allowed
//   Arrays
//     - Indexed in order!
//     - Insertion and deletion can be expensive
//     - Can quickly be accessed at a specific index

// Singly Linked list
//   Ex. 4 next-> 6 next-> 8 next-> 2 -> null
//     - head: 4
//     - length: 4
//     - tail: 2
//   Setting up Class with Singly Linked Lists
// Ex.
class Node {
      constructor(val) {
        this.val = val;
        this.next = null;
      }
    }

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) { // add to the end
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  shift() {
    if (!this.head) {
      return undefined;
    }
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
}