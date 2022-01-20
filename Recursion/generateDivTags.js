function generateDivTags(numberOfTags) {
  return helperFunction([], '', numberOfTags, numberOfTags);
}

function helperFunction(result, currentString, opening, closing) {
  if (!closing) return result.push(currentString);
  let newString = currentString;

  if (opening) {
    newString = currentString + '<div>';
    helperFunction(result, newString, opening - 1, closing);
  }

  if (opening < closing) {
    newString = currentString + '</div>';
    helperFunction(result, newString, opening, closing - 1);
  }

  return result;
}
