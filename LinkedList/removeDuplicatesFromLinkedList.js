//Remove duplicates from a linked list
//Scan the array, grab the currentNode, check if the currentNode's value is equal the currentNode.next value if it is, then currentNode.next will point to currentNode.next.next

//Must be carful and check if there is a currentNode.next, otherwise you will run into  a null problem

class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeDuplicatesFromLinkedList(linkedList) {
  let currentNode = linkedList;
  while (currentNode) {
    while (currentNode.next && currentNode.value === currentNode.next.value) {
      currentNode.next = currentNode.next.next;
    }
    currentNode = currentNode.next;
  }
  return linkedList;
}
