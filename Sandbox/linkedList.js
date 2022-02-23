class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertAtPosition(value, position, k) {
    const node = new Node(value);
    let currentNode = this.head;
    let previousNode = null;
    let count = k - 1;

    while (count) {
      previousNode = currentNode;
      currentNode = currentNode.next;
      count--;
    }

    if (position === 'after') {
      node.next = currentNode.next;
      currentNode.next = node;
      if (currentNode === this.tail) this.tail = node;
    } else if (position === 'before') {
      node.next = currentNode;
      if (currentNode === this.head) this.head = node;
      else previousNode.next = node;
    }
  }

  insertAtHead(value) {
    const node = new Node(value);

    if (!this.head && !this.tail) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
  }

  insertAtTail(value) {
    const node = new Node(value);
    if (!this.head && !this.tail) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }

  log() {
    const array = [];
    let currentNode = this.head;
    while (currentNode) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return array;
  }
}

const newList = new LinkedList();
newList.insertAtHead(10);
newList.insertAtHead(1);
newList.insertAtTail(34);
newList.insertAtTail(104);
newList.insertAtTail(-4);
newList.insertAtHead(101);
newList.insertAtPosition(13, 'before', 4);
newList.insertAtPosition(21, 'after', 7);
newList.insertAtPosition(21, 'before', 1);
console.log(newList.log());
console.log(newList.head.value, newList.tail.value);
