//An easy problem
//Given a BINARY TREE find the total of the node depths
//To solve this problem we can recursively travel down the tree changin the current dept and keeping a running sum of all the depts

//A Depth First Approach
function nodeDepths(root) {
  const result = { nodeDepths: 0 };
  helperFunction(root, result, 0);
  return result.nodeDepths;
}

function helperFunction(node, result, currentDepth) {
  if (!node) return;
  result.nodeDepths += currentDepth;

  helperFunction(node.left, result, currentDepth + 1);
  helperFunction(node.right, result, currentDepth + 1);
}

//A Breadth First Approach
//Level order
//Attach a depth to each level and add each node(with attached dept) to a queue and cycle through the queue and keep a running sum of the totl depts
function breadthFirstNodeDepths(root) {
  const result = { nodeDepths: 0 };
  let currentDept = 0;
  const queue = [[root, currentDept]];

  while (queue.length) {
    const currentNode = queue.shift();
    result.nodeDepths += currentNode[1];
    currentDept++;
    if (currentNode[0].left)
      queue.push([currentNode[0].left, currentNode[1] + 1]);
    if (currentNode[0].right)
      queue.push([currentNode[0].right, currentNode[1] + 1]);
  }

  return result.nodeDepths;
}
