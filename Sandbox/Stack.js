//Implement a stack with a LinkedList
//Stack needs to support push(to end) pop(from end) peek(end) length
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor() {
    this.tail = null;
  }

  setTail(value) {
    const newNode = new Node(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
  }

  push(value) {
    if (!this.tail) this.tail = new Node(value);
    else this.setTail(value);
  }

  pop() {
    if (!this.tail) return;
    const returnedNode = this.tail;

    this.tail = this.tail.prev;
    if (this.tail) this.tail.next = null;

    returnedNode.prev = null;
    return returnedNode.value;
  }

  logBackwards() {
    const array = [];
    let currentNode = this.tail;
    while (currentNode) {
      array.push(currentNode.value);
      currentNode = currentNode.prev;
    }
    return array;
  }
}

const stack = new LinkedList();
stack.push(4);
stack.push(10);
stack.push(34);
console.log(stack.pop());
console.log(stack.pop());
// console.log(stack.pop());
console.log(stack.tail);
