//Given a linked list and an interger k, remove the kth node from the end

//To solve this problem we will use pointers
//Travserse the linked list starting from the head, go 'k' nodes
//Then Once we have reached k nodes start another pointer at the head of the list, now move both pointers at once until the fron pointer cannot go any more, at that point your secondPointer will be directly to the right of the node we need to remove
//So simply do secondNode.next = secondNod.next.next

class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeKthNodeFromEnd(head, k) {
  let currentPos = head;
  let count = 0;
  while (currentPos && count < k) {
    currentPos = currentPos.next;
    count++;
  }

  if (currentPos === null) {
    head.value = head.next.value;
    head.next = head.next.next;
    return;
  }

  let secondPos = head;
  while (currentPos.next) {
    currentPos = currentPos.next;
    secondPos = secondPos.next;
  }

  secondPos.next = secondPos.next.next;
}
