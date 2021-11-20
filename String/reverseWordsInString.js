//Given a string reverse the words(including white spaces and special characters)

//To solve this probem we split the given string into an array where each index containes a character/special character/white space
//We then scan this characters array backwards and each time we encounter a white space we trigger a helper fucntion that will traverse the array from that point to a stop position adding those characters to our resulting string

//Remember that a string is a primitive so it will not be globally affected by helper functions like an object or array

function reverseWordsInString(string) {
  const characters = string.split('');

  let result = '';
  let stop = characters.length;

  for (let i = characters.length - 1; i >= -1; i--) {
    if (i < 0 || characters[i] === ' ') {
      const newChars = appenedCharacters(i + 1, stop, characters);
      result += newChars;
      stop = i;
    }
  }

  return result;
}

function appenedCharacters(start, stop, chars) {
  let currentString = '';

  for (let j = start; j < stop; j++) {
    currentString += chars[j];
  }
  if (start !== 0) currentString += ' ';

  return currentString;
}
