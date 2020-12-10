/*
Exercise 1: Singly Linked List push
  - Implement push for the SinglyLinkedList class
  - This function should take in a value and add a node to the end of the SinglyLinkedList. it should return the SinglyLinkedList.

Exercise 2: Singly Linked List pop
  - Implement pop for the SinglyLinkedList class
  - This function should remove a node at the end of the SinglyLinkedList. It should return the node removed.
*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor(val) {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  // Exercise 1
  push(val) {
    //create a new node variable that takes in val
    let newNode = new Node(val);
    // if head isn't present
    if (!head) {
      // set head to be the new node
      this.head = newNode;
      // set tail to be the head
      this.tail = this.head;
    }
    // else
    else {
      // set the next tail to be the new node
      this.tail.next = newNode;
      // set the tail to be the new node
      this.tail = newNode;
    }
    // increase the length
    this.length++;
    // return this
    return this;
  }
  // Exercise 2
  pop() {
    // if head isnt present, return undefined
    if (!this.head) return undefined
    // create a current variable set to the head
    let current = this.head;
    // create a new tail variable set to current
    let newTail = current;
    // while current has a next
    while (current.next) {
      // set new tail to be current
      newTail = current;
      // set current to be the next
      current = current.next;
    }
    // set the tail to be new tail
    this.tail = newTail;
    // set the next tail to be null
    this.tail.next = null;
    // decrement the length
    this.length--;
    // if the length is 0
    if (this.length === 0) {
      // set the head to be null
      this.head = null;
      // set the tail to be null
      this.tail = null;
    }
    // return current
    return current;
  }
}