//Breadth First Search is a graph traversal algorithm that works it's way through a grap level by level
//We use a queue structure to continually add the children of each node and 'pop' a node from the beginning of the queue to visit
//The below algorithm is supposed to be part of a class

function breadthFirstSearch(array) {
  const queue = [this];
  while (queue.length) {
    const currentNode = queue.shift();
    array.push(currentNode.name);
    for (let i = 0; i < currentNode.children.length; i++) {
      queue.push(currentNode.children[i]);
    }
  }
  return array;
}
