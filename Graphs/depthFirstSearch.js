//Traverse a graph in the DEPTH FIRST MANNER manner
//Depth first search involves going down into the depth of the structure rather than across, such as in Breadth First Search

//There are two ways to do DEPTH FIRST SEARCH, recursive and iterative
//In the recursive approach we visit a node and then recursivly call the same function on that visited node's children
//In the non-recursive approach we visit a node and then drop all of it's children into a stack and then pop from that stack to find the next node we will visit

//In the recursive approach the Time complexicity will be O(d), where 'd' is the depth of the tree/graph
//In the non-recursive approach the Time complexicity is(I think) O(n), where 'n' is the number of nodes in the tree/graph

function depthFirstSearch(array) {
  if (!this) {
    return;
  }
  //We push the current node to our result array
  array.push(this.name);
  //Here we are recursivily calling depthFirstSearch on the children of the current node we are at
  for (let i = 0; i < this.children.length; i++) {
    this.children[i].depthFirstSearch(array);
  }
  return array;
}

function depthFirstSearchIterative(array) {
  //In the non-recursive approach we use a stack to determine which node we visit next
  const stack = [this];

  while (stack.length) {
    //Here we pop a node from the stack
    const currentNode = stack.pop();
    array.push(currentNode.name);
    //I'm cycling through the children of the currentNode if reverse so as to mimic the order that a recursive DFS would produce
    for (let i = currentNode.children.length - 1; i >= 0; i--) {
      stack.push(currentNode.children[i]);
    }
  }

  return array;
}
