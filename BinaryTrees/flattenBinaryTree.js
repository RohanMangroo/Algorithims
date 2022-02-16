class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function flattenBinaryTree(root) {
  const { head, tail } = flatten(root);
  return head;
}

function flatten(node) {
  if (!node) return null;

  const leftChild = flatten(node.left);
  if (leftChild) {
    node.left = leftChild.tail;
    leftChild.tail.right = node;
  }

  const rightChild = flatten(node.right);
  if (rightChild) {
    rightChild.head.left = node;
    node.right = rightChild.head;
  }

  if (!leftChild && !rightChild) return { head: node, tail: node };
  const head = leftChild ? leftChild.head : node;
  const tail = rightChild ? rightChild.tail : node;
  return { head, tail };
}
