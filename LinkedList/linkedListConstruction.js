class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

// Feel free to add new properties and methods to the class.
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  setHead(node) {
    if (!this.head) {
      this.head = node;
      this.tail = node;
      return;
    }
    this.insertBefore(this.head, node);
  }

  setTail(node) {
    if (!this.tail) {
      this.setHead(node);
      return;
    }
    this.insertAfter(this.tail, node);
  }

  insertBefore(node, nodeToInsert) {
    this.remove(nodeToInsert);
    nodeToInsert.next = node;
    nodeToInsert.prev = node.prev;
    if (!nodeToInsert.prev) this.head = nodeToInsert;
    else nodeToInsert.prev.next = nodeToInsert;
    node.prev = nodeToInsert;
  }

  insertAfter(node, nodeToInsert) {
    this.remove(nodeToInsert);
    nodeToInsert.next = node.next;
    nodeToInsert.prev = node;
    if (!nodeToInsert.next) this.tail = nodeToInsert;
    else node.next.prev = nodeToInsert;

    node.next = nodeToInsert;
  }

  insertAtPosition(position, nodeToInsert) {
    if (position === 1) {
      this.setHead(nodeToInsert);
      return;
    }

    let count = 1;
    let currentNode = this.head;
    while (currentNode && count < position) {
      count++;
      currentNode = currentNode.next;
    }
    if (!currentNode) this.setTail(nodeToInsert);
    else this.insertBefore(currentNode, nodeToInsert);
  }

  removeNodesWithValue(value) {
    let currentNode = this.head;
    while (currentNode) {
      const nodeToRemove = currentNode;
      currentNode = currentNode.next;
      if (nodeToRemove.value === value) this.remove(nodeToRemove);
    }
  }

  remove(node) {
    if (node === this.head) this.head = this.head.next;
    if (node === this.tail) this.tail = this.tail.prev;
    this.removeNodePointers(node);
  }

  removeNodePointers(node) {
    if (node.prev) node.prev.next = node.next;
    if (node.next) node.next.prev = node.prev;
    node.next = null;
    node.prev = null;
  }

  containsNodeWithValue(value) {
    // return this.head;
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) return true;
      else currentNode = currentNode.next;
    }
    return false;
  }
}
