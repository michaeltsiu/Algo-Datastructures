// Visit every node one time
// Trees not ordered

/*
Breadth-first Search
 - Work across the tree in a row before moving down
 - Steps (Iteratively)
  1. Create a queue (this can be an array) and a variable to store the values of nodes visitied
  2. Place the root node in the queue
  3. Loop as long as there is anything in the queue
    - Dequeue a node from the queue and push the value of the node into the variable that stores the nodes
    - If there is a left property on the node dequeued - add it to the queue
    - If there is a right property on the node dequeued - add it to the queue
    - Return the node that stored all the values

Depth-first Search
  - Working downward in the tree like a column
  - Preorder/Postorder

*/

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  BFS() {
    let data = [],
        queue = [this.root];
    while(queue.length) {
      const node = queue.shift();
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }
  DFSPreOrder() { // preOrder
    let data = [];
    function traverse(node) {
      data.push(node.value)
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }
  DFSPostOrder() { //postOder
    let data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value)
    }
    traverse(this.root);
    return data;
  }
  DFSInOrder() { // inOrder
    let data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.value);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }
}

// QUEUE: []
// DATA: [10, 6, 15, 3, 8, 20]

//    10
//  6   15
// 3 8    20