//Validate if 3 nodes belong to the same path

//To do so we will use two pointers moving at the same time
//The second node is supposed to be the middle node so we will start a pointer at the first and third node
//Move them down at the same time, if we ever encounter the second node, whcih ever node encountered the second node(first or third) that is the ancestor, now we need to look for the decendant whcih should be the opposite node

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function validateThreeNodes(nodeOne, nodeTwo, nodeThree) {
  let i = nodeOne;
  let j = nodeThree;

  while (i !== nodeTwo && j !== nodeTwo) {
    if (i === j) return false;

    if (i) i = i.value > nodeTwo.value ? i.left : i.right;
    if (j) j = j.value > nodeTwo.value ? j.left : j.right;
  }

  const isValid =
    i === nodeTwo
      ? findDecendant(nodeTwo, nodeThree)
      : findDecendant(nodeTwo, nodeOne);

  return isValid;
}

function findDecendant(node, potentialDecendant) {
  while (node) {
    if (node.value === potentialDecendant.value) return true;
    node = node.value > potentialDecendant.value ? node.left : node.right;
  }

  return false;
}
