function interweavingStrings(one, two, three) {
  return helperFunction(one, two, three, 0, 0, 0);
}

function helperFunction(one, two, three, pointerOne, pointerTwo, pointerThree) {
  if (
    pointerOne + pointerTwo === three.length &&
    pointerOne >= one.length &&
    pointerTwo >= two.length
  )
    return true;

  const currentLetter = three[pointerThree];
  const letterOne = pointerOne > one.length - 1 ? null : one[pointerOne];
  const letterTwo = pointerTwo > two.length - 1 ? null : two[pointerTwo];

  let checkLetterOne = false;
  let checkLetterTwo = false;

  if (currentLetter === letterOne)
    checkLetterOne = helperFunction(
      one,
      two,
      three,
      pointerOne + 1,
      pointerTwo,
      pointerThree + 1
    );
  if (currentLetter === letterTwo)
    checkLetterTwo = helperFunction(
      one,
      two,
      three,
      pointerOne,
      pointerTwo + 1,
      pointerThree + 1
    );

  return checkLetterOne || checkLetterTwo;
}
