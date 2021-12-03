//Given an aray of strings, find the minimum number of letters it takes to create all the words

//To solve this problem we will use memory to track and compare fequencies of letters
//Using two objects, one global and one local(to the current word) we can track how many times we have seen letters and if we should update our length of total words

function minimumCharactersForWords(words) {
  const totalLetters = {};
  for (let i = 0; i < words.length; i++) {
    const currentWord = words[i];
    countLetters(currentWord, {}, totalLetters);
  }

  const minCharacters = [];
  for (let key in totalLetters) {
    const currentCharacter = totalLetters[key];
    currentCharacter.forEach((char) => minCharacters.push(char));
  }

  return minCharacters;
}

function countLetters(currentWord, currentLetters, totalLetters) {
  for (let j = 0; j < currentWord.length; j++) {
    const letter = currentWord[j];

    if (!(letter in totalLetters) && !(letter in currentLetters)) {
      currentLetters[letter] = [letter];
      totalLetters[letter] = [letter];
    } else if (letter in currentLetters) {
      currentLetters[letter].push(letter);
      compareLengths(currentLetters, totalLetters, letter);
    } else if (letter in totalLetters) {
      currentLetters[letter] = [letter];
    }
  }
}

function compareLengths(currentLetters, totalLetters, letter) {
  const currentLength = currentLetters[letter].length;
  const totalLength = totalLetters[letter].length;

  if (currentLength > totalLength) {
    totalLetters[letter].push(letter);
  }
}
