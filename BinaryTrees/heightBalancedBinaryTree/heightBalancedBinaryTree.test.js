const {
  heightBalancedBinaryTree,
  helperFunction,
} = require('./heightBalancedBinaryTree');

describe('test file is working', () => {
  let root1;

  class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  root1 = new BinaryTree(10);
  root1.left = new BinaryTree(12);
  root1.right = new BinaryTree(31);

  test('balanced', () => {
    const result = heightBalancedBinaryTree(root1);
    expect(result.isBalanced).toBe(true);
  });

  test('unbalanced', () => {
    let currentNode = root1.right;
    for (let i = 0; i < 2; i++) {
      currentNode.right = new BinaryTree(i);
      currentNode = currentNode.right;
    }
    const result = heightBalancedBinaryTree(root1);
    expect(result.isBalanced).toBe(false);
  });

  test('balanced again', () => {
    root1.right.left = new BinaryTree(17);
    root1.left.left = new BinaryTree(19);

    const result = heightBalancedBinaryTree(root1);
    expect(result.isBalanced).toBe(true);
  });
});
