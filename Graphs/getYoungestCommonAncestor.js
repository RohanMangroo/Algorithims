//Given a two nodes in a graph and the common ancestor of both, return the YOUNGEST common ancestor. Each node has a pointer to it's direct ancestor

//To solve this problem we bring each node to the same level and THEN trverse upwars until we overlap nodes

class AncestralTree {
  constructor(name) {
    this.name = name;
    this.ancestor = null;
  }
}

function getYoungestCommonAncestor(topAncestor, descendantOne, descendantTwo) {
  const nodeOneDepth = findDepth(descendantOne, topAncestor);
  const nodeTwoDepth = findDepth(descendantTwo, topAncestor);
  const depthDifference = Math.abs(nodeOneDepth - nodeTwoDepth);

  let lowerNode = nodeOneDepth > nodeTwoDepth ? descendantOne : descendantTwo;
  let higherNode = nodeOneDepth <= nodeTwoDepth ? descendantOne : descendantTwo;

  let count = depthDifference;
  while (count > 0) {
    lowerNode = lowerNode.ancestor;
    count--;
  }

  while (lowerNode !== higherNode) {
    lowerNode = lowerNode.ancestor;
    higherNode = higherNode.ancestor;
  }

  return lowerNode;
}

function findDepth(node, root) {
  let currentNode = node;
  let count = 0;
  while (currentNode !== root) {
    currentNode = currentNode.ancestor;
    count++;
  }

  return count;
}
