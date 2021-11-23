//To solve this problem we will use pointers

//Establish two pointers, one on the head of each list

//We will also have a carryOver variable becuase the sum of 2 single digit numbers can exceed 9

//We will ad all 3, pointerOne, pointerTwo and carryOver

//If the sum is greater than 9 we will have to find the carryOver and the value we will use to create the resulting node

//To get carryOver it's...currentNum / 10
//To get created node value it's...currentNum % 10

class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function sumOfLinkedLists(linkedListOne, linkedListTwo) {
  let nodeOne = linkedListOne;
  let nodeTwo = linkedListTwo;
  let carryOver = 0;
  let dummyHead = new LinkedList(0);
  const head = dummyHead;

  while (nodeOne || nodeTwo || carryOver > 0) {
    const numOne = nodeOne ? nodeOne.value : 0;
    const numTwo = nodeTwo ? nodeTwo.value : 0;

    const currentNum = numOne + numTwo + carryOver;
    const newNodeValue = currentNum % 10;
    carryOver = Math.floor(currentNum / 10);
    dummyHead.next = new LinkedList(newNodeValue);
    dummyHead = dummyHead.next;

    nodeOne = nodeOne ? nodeOne.next : null;
    nodeTwo = nodeTwo ? nodeTwo.next : null;
  }
  return head.next;
}
