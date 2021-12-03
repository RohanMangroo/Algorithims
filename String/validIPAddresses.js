//Using nested for loops we can move through the given string to find valid IP addresses

function validIPAddresses(string) {
  const result = [];

  for (let i = 0; i < Math.min(string.length, 4); i++) {
    const totalIPAddresses = ['', '', '', ''];

    totalIPAddresses[0] = string.slice(0, i);
    if (!checkValidity(totalIPAddresses[0])) continue;

    for (let j = i + 1; j < i + Math.min(string.length - i, 4); j++) {
      totalIPAddresses[1] = string.slice(i, j);
      if (!checkValidity(totalIPAddresses[1])) continue;

      for (let k = j + 1; k < j + Math.min(string.length - j, 4); k++) {
        totalIPAddresses[2] = string.slice(j, k);
        totalIPAddresses[3] = string.slice(k);

        if (
          checkValidity(totalIPAddresses[2]) &&
          checkValidity(totalIPAddresses[3])
        ) {
          result.push(totalIPAddresses.join('.'));
        }
      }
    }
  }

  return result;
}

function checkValidity(address) {
  const addressNum = parseInt(address);
  if (addressNum > 255) return false;
  return address.length === addressNum.toString().length;
}
