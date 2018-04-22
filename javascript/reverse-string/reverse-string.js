const reverseString = function(string) {
  let str = string;
  let retString = '';

  while (str.length) {
    const stringLen = str.length - 1;
    const lastLetter = str[stringLen];

    retString += lastLetter;
    str = str.slice(0, stringLen);
  }

  return retString;
};

module.exports = reverseString;
