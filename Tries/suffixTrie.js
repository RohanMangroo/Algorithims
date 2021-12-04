//To construct a sufix trie use nested objects that act as nodes

class SuffixTrie {
  constructor(string) {
    this.root = {};
    this.endSymbol = '*';
    this.populateSuffixTrieFrom(string);
  }

  populateSuffixTrieFrom(string) {
    for (let i = 0; i < string.length; i++) {
      let currentLetter = string[i];

      if (!(currentLetter in this.root)) this.root[currentLetter] = {};

      let currentNode = this.root[currentLetter];

      for (let j = i + 1; j < string.length; j++) {
        currentLetter = string[j];
        if (!(currentLetter in currentNode)) currentNode[currentLetter] = {};
        currentNode = currentNode[currentLetter];
      }
      currentNode[this.endSymbol] = true;
    }
  }

  contains(string) {
    let currentNode = this.root;

    for (let i = 0; i < string.length; i++) {
      const currentLetter = string[i];
      if (currentLetter in currentNode)
        currentNode = currentNode[currentLetter];
    }

    return this.endSymbol in currentNode;
  }
}
