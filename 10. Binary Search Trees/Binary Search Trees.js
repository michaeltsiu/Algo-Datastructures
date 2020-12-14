/*
What is a tree?
  - A data structure that consists of nodes in a parent/child relationship
  - Lists: linear
  - Trees: nonlinear

Kinds of trees
  - Tree
  - Binary Tree
    - At most 2 children
    - Binary Search Tree
      - Kept in an order
      - Left child is smaller than parent
      - Right child is larger than parent
*/

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while(true) {
        if (value === current.value) return `${current.value} is a duplicate`;
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          }
          current = current.left
        } else {
          if (current.right === null) {
            current.right = newNode;
            return this;
          }
          current = current.right;
        }
      }
    }
  }
  contains(value) {
    if (this.root === null)  return false;
    let current = this.root,
        found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }
  BFS() {
    let data = [], queue = [this.root];
    while (queue.length) {
      let node = queue.shift();
      data.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }
  DFSPreOrder() { // preOrder
    let data = [];
    let traverse = (node) => {
      data.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }
  DFSPostOrder() { //postOder
    let data = [];
    let traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.val);
    }
    traverse(this.root);
    return data;
  }
  DFSInOrder() { // inOrder
    let data = [];
    let traverse = (node) => {
      if (node.left) traverse(node.left);
      data.push(node.val);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }
}

//      10
//    6   15
//  3  8    20

let tree = new BinarySearchTree;
tree.insert(10)
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8)
tree.insert(20);

// Big O of BST
// - Insertion: O(log n)
// - Searching: O(log n)
// (not guaranteed)