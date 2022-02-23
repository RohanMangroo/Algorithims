//Design a BT class

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    if (!this.root) return (this.root = new Node(value));
    const queue = [this.root];
    while (queue.length) {
      const currentRoot = queue.shift();
      if (!currentRoot.left) return (currentRoot.left = new Node(value));
      if (!currentRoot.right) return (currentRoot.right = new Node(value));
      queue.push(currentRoot.left);
      queue.push(currentRoot.right);
    }
  }

  log(currentNode = this.root, array = []) {
    if (!currentNode) return;

    this.log(currentNode.left, array);
    array.push(currentNode.value);
    this.log(currentNode.right, array);

    return array;
  }

  delete(value) {
    const toDelete = this.findNodeAndParent(value, this.root, null);
    const { nodeToDelete, parent } = toDelete;

    if (!nodeToDelete.left && !nodeToDelete.right) {
      if (nodeToDelete === parent.left) parent.left = null;
      else if (nodeToDelete === parent.right) parent.right = null;
    }

    return this.log();
  }

  findLeft;
  findNodeAndParent(value, nodeToDelete, parent) {
    if (!nodeToDelete) return null;
    if (nodeToDelete.value === value) return { nodeToDelete, parent };

    const leftChild = this.findNodeAndParent(
      value,
      nodeToDelete.left,
      nodeToDelete
    );
    const rightChild = this.findNodeAndParent(
      value,
      nodeToDelete.right,
      nodeToDelete
    );

    return leftChild || rightChild;
  }
}

const tree = new BinaryTree();
tree.insert(4);
tree.insert(10);
tree.insert(-12);
tree.insert(144);
tree.insert(123);
tree.insert(3);
tree.insert(67);
console.log(tree.delete(123));

/**================================================================================ */

// class BinaryTree {
//   constructor() {
//     this.root = null;
//   }

//   //Logging all nodes in Binary Tree going 'In Order'. Left Root Right. Using Recursion.
//   inOrderRecursion(node = this.root, array = []) {
//     if (!node) return;

//     this.inOrderRecursion(node.left, array);
//     array.push(node.value);
//     this.inOrderRecursion(node.right, array);

//     return array;
//   }
//   //==============================================================//

//   insert(node) {
//     if (!this.root) return (this.root = node);

//     const queue = [this.root];
//     let currentPos = 0;

//     while (currentPos <= queue.length) {
//       const currentNode = queue[currentPos];
//       const left = currentNode.left;
//       const right = currentNode.right;

//       if (!left) {
//         currentNode.left = node;
//         break;
//       }

//       if (!right) {
//         currentNode.right = node;
//         break;
//       }

//       queue.push(currentNode.left);
//       queue.push(currentNode.right);
//       currentPos++;
//     }
//   }

//   delete(node) {
//     const queue = [this.root];
//     const nodeParents = {};
//     let lastNode = null;
//     let currentPos = 0;

//     while (currentPos < queue.length) {
//       const currentNode = queue[currentPos];

//       if (currentNode.left) {
//         queue.push(currentNode.left);
//         nodeParents[currentNode.left.value] = {
//           direction: 'left',
//           parent: currentNode,
//         };
//       }
//       if (currentNode.right) {
//         queue.push(currentNode.right);
//         nodeParents[currentNode.right.value] = {
//           direction: 'right',
//           parent: currentNode,
//         };
//       }

//       currentPos++;
//       if (currentPos >= queue.length) {
//         lastNode = currentNode;
//         node.value = lastNode.value;
//         const direction = nodeParents[lastNode.value].direction;
//         const parent = nodeParents[lastNode.value].parent;

//         if (direction === 'left') parent.left = null;
//         else parent.right = null;
//       }
//     }
//   }
// }

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }

// const Tree = new BinaryTree();

// const nodeOne = new Node(1);
// const nodeTwo = new Node(2);
// const nodeThree = new Node(3);
// const nodeFour = new Node(4);
// const nodeFive = new Node(5);
// const nodeSix = new Node(6);
// const nodeSeven = new Node(7);

// Tree.insert(nodeOne);
// Tree.insert(nodeTwo);
// Tree.insert(nodeThree);
// Tree.insert(nodeFour);
// Tree.insert(nodeFive);
// Tree.insert(nodeSix);
// Tree.insert(nodeSeven);
// Tree.delete(nodeOne);
// console.log(Tree.inOrderRecursion(), 'line 77');

// // function inOrderIterative() {
// //   const stack = [
// //     { node: this.root, leftVisited: false, rightVisited: false },
// //   ];
// //   const array = [];

// //   while (stack.length) {
// //     const currentNode = stack[stack.length - 1];

// //     if (currentNode.leftVisited && currentNode.rightVisited) {
// //       stack.pop();
// //       continue;
// //     }

// //     const left = currentNode.node.left;
// //     const right = currentNode.node.right;

// //     //report node value

// //     if (!currentNode.leftVisited && left) {
// //       stack.push({
// //         node: currentNode.node.left,
// //         leftVisited: false,
// //         rightVisited: false,
// //       });
// //       currentNode.leftVisited = true;
// //       continue;
// //     }

// //     array.push(currentNode.node.value);

// //     if (!currentNode.rightVisited && right) {
// //       stack.push({
// //         node: currentNode.node.right,
// //         leftVisited: false,
// //         rightVisited: false,
// //       });
// //       currentNode.rightVisited = true;
// //       continue;
// //     }

// //     stack.pop();
// //   }
// //   return array;
// // }
