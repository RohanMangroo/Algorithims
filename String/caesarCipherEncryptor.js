//Give a string of letters return a new string that implements a shift based on a given key value
//To solve this problem I used asscii conversion
//String[i].charCodeAt() takes a letter and returns it's coresponding ascii number
//String.fromCharCode(num) takes a number and returns the coresponding ascii element

//Using modulos will account for the wrapping around if the key is larger than the numbers of letters in alphabet

function caesarCipherEncryptor(string, key) {
  // console.log('z'.charCodeAt());
  // console.log(String.fromCharCode(97))
  let result = '';
  const modifiedKey = key % 26;
  for (let i = 0; i < string.length; i++) {
    let code = string[i].charCodeAt() + modifiedKey;
    if (code > 122) {
      code = code - 26;
    }
    const newLetter = String.fromCharCode(code);
    result += newLetter;
  }

  return result;
}
