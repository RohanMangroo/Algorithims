//Given a string return the index of the first non repeating character

//To solve this problem use an object as memory
//Scan the given array and if that character is not in the object set it equal to '1' in the object
//If the element is in the object subtract '1';

//Now scan the array once more and return the first element in the coresponding object that is equal to 1

function firstNonRepeatingCharacter(string) {
  const memory = {};

  for (let i = 0; i < string.length; i++) {
    if (string[i] in memory) memory[string[i]]--;
    else memory[string[i]] = 1;
  }

  for (let i = 0; i < string.length; i++) {
    if (memory[string[i]] === 1) return i;
  }

  return -1;
}
