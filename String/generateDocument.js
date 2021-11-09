//Given 2 stings, return a boolean if the first string has the characters to create the second string
//Once again the solution is to use a object as memory

//Log the elements of the first string into the object starting at '1', if we encounter the string again, += 1
//Then scan the second string, if that element is not in the object return false
//If the object is in the string, -=1
//If we encounter an element in the object === 0, return false because this means we have no more f this character to give

function generateDocument(characters, document) {
  let characterDict = {};

  for (let i = 0; i < characters.length; i++) {
    if (characters[i] in characterDict) {
      characterDict[characters[i]] += 1;
    } else {
      characterDict[characters[i]] = 1;
    }
  }

  for (let i = 0; i < document.length; i++) {
    if (!(document[i] in characterDict) || characterDict[document[i]] === 0) {
      return false;
    }
    characterDict[document[i]] -= 1;
  }
  return true;
}
