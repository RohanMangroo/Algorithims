//Given a string of letters return the run length encoding.
//Run length encoding is keeping count of the letters up until '9', or the next letter is different than the previous letter. At that point we'll log into our result the count with the current letter

//In my solution I begin my count at '1' and start scanning the string from the 1st index. There are 3 situations for logging into the result
//1)the letter I'm at !== the previous letter
//2)the count >= 9
//3)i've reached the end of the array

//Otherwise I just increase the count++

//The last situation is taken care of outside the loop

function runLengthEncoding(string) {
  let result = '';
  let count = 1;
  let currentLetter = string[0];

  for (let i = 1; i < string.length; i++) {
    if (string[i] !== string[i - 1] || count >= 9) {
      result += `${count}${currentLetter}`;
      count = 1;
      currentLetter = string[i];
    } else {
      count++;
    }
  }

  result += `${count}${currentLetter}`;
  return result;
}
