//Given a string find the longest palindromic substring
//The key to solving this problem is knowing that a palindrome has a center(either single or double)
//Scan through the array and assume every element ww touch is a center, extablish left and right positions and expand outward
//Make sure to check for both single and double centers

function longestPalindromicSubstring(string) {
  if (string.length <= 1) return string;
  const result = {
    longestPalindrome: '',
    maxLength: 0,
  };

  for (let i = 0; i < string.length - 1; i++) {
    findPalindrome(i - 1, i + 1, string, result);
    if (string[i] === string[i + 1])
      findPalindrome(i - 1, i + 2, string, result);
  }

  return result.longestPalindrome;
}

function findPalindrome(left, right, string, result) {
  while (left >= 0 && right < string.length && string[left] === string[right]) {
    left--;
    right++;
  }
  const currentLength = right - left - 1;
  if (currentLength > result.maxLength) {
    result.maxLength = currentLength;
    result.longestPalindrome = string.slice(left + 1, right);
  }
}
