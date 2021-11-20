//Give an array of strings return a 2d array grouping the anagrams
//To solve this problem we will scan the given array of strings and at each string we wil sort it
//The check our obj to see if the SORTED version of the string is in there
//If it is we place the ORIGINAL word inside the value(which is an array)
//The keys in this object will be the SORTED versions of the words, this will assist us in grouping the anagrams

function groupAnagrams(words) {
  const result = [];
  const objOfAnagrams = {};

  for (let i = 0; i < words.length; i++) {
    const originalWord = words[i];
    const currentSortedWord = originalWord.split('').sort().join('');

    if (currentSortedWord in objOfAnagrams)
      objOfAnagrams[currentSortedWord].push(originalWord);
    else objOfAnagrams[currentSortedWord] = [originalWord];
  }

  for (let key of Object.keys(objOfAnagrams)) {
    result.push(objOfAnagrams[key]);
  }

  return result;
}
