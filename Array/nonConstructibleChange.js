//Given an array of positive integers representing coins, return the minimum amount of change that you cannot create with the coins

// const coins = [8, 3, 7, 10, 2, 1];
// const coins = [5, 7, 1, 1, 2, 3, 22];
const coins = [1, 2, 5];

//In this problem we are sorting the given array so we can gain insight into how much change we can create. If after sorting, the first element isn't 1, we know we cannot make 1 change because if the array is sorted and there is no '1' every element after that will be greater than '1' and thus have no chance at creating 1 change

//To solve this question we check if our 'change +1' is GREATER THAN or EQUAL to the current element we are touching(array[i]) in the array.
//If it is then we are assured that we can make all change between 1 and change + array[i]
//If it is NOT then we return change + 1, because we cannot make it
//If we make it out of the loop that means we can make change from 1 to sum of all numbers in the array, thus the first change we cannot make is the change + 1

function nonConstructibleChange(array) {
  array.sort((a, b) => a - b);

  //We are trying to find the minimum number of change we cannot make. After sorting, if the first element is not 1, then we cannot make 1 because every element will be greater than 1 and thus cannot make 1
  if (array[0] !== 1) return 1;

  let change = 0;

  for (let i = 0; i < array.length; i++) {
    //If change + 1 is greater then the current element we know we can make it
    if (change + 1 >= array[i]) {
      change += array[i];
    } else {
      //If it's not greater than the current element we cannot make it, and we return change + 1
      return change + 1;
    }
  }
  //If we make it out of the loop then we can make change from 1 to the sum of all numbers in the array, thus the first change we cannot make if the sum of all numbers + 1
  return change + 1;
}

console.log(nonConstructibleChange(coins));
