//Given string representing a mnemonic, return all the possiable strings represented by the mnemonic

//To solve this problem we must scan through the given string, identify what array of elements is represented by that character and then recursively call to the next element in the given

/*
The given string('1905') is represented by these arrays(according to the alphabet object)
 i   i            i   i
[1] [w, x, y, z] [0] [j, k, l]

The 'i' positions represent the calls
*/

function phoneNumberMnemonics(phoneNumber) {
  const result = [];
  const alphabet = {
    0: [`0`],
    1: [`1`],
    2: [`a`, `b`, `c`],
    3: [`d`, `e`, `f`],
    4: [`g`, `h`, `i`],
    5: [`j`, `k`, `l`],
    6: [`m`, `n`, `o`],
    7: [`p`, `q`, `r`, `s`],
    8: [`t`, `u`, `v`],
    9: [`w`, `x`, `y`, `z`],
  };

  helperFunction(phoneNumber, result, alphabet, '', 0);
  return result;
}

function helperFunction(phoneNumber, result, alphabet, currentString, index) {
  if (currentString.length === phoneNumber.length) {
    result.push(currentString);
    return;
  }

  const currentArray = alphabet[phoneNumber[index]];

  for (let i = 0; i < currentArray.length; i++) {
    const newString = currentString + currentArray[i];
    helperFunction(phoneNumber, result, alphabet, newString, index + 1);
  }
}
