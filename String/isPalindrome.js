//Given a string return a boolena if the string is a palindrome
//To solve this problem use two pointers, left and right
//At any given point if array[left] !== array[right] return false
//Otherwise keep going until left is greater than right, at wich point we have checked all the potential pairs and have varified we have a palindrome

function isPalindrome(string) {
  let leftPointer = 0;
  let rightPointer = string.length - 1;
  while (leftPointer < rightPointer) {
    if (string[leftPointer] === string[rightPointer]) {
      leftPointer += 1;
      rightPointer -= 1;
    } else {
      return false;
    }
  }
  return true;
}
