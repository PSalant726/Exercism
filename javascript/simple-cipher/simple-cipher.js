var ALPHABET = "abcdefghijklmnopqrstuvwxyz".split('');

var Cipher = function(key) {
  this.key = key ? this.validateKey(key) : "rhiannonteellococo";
};

Cipher.prototype.validateKey = function(key) {
  key.split('').forEach(char => {
    if (ALPHABET.indexOf(char) === -1) {
      throw new Error("Bad key");
    }
  });

  return key;
};

Cipher.prototype.encode = function(message) {
  var letters = message.split('');
  var encodedMessage = "";

  letters.forEach((letter, idx) => {
    var letterIdx = ALPHABET.indexOf(letter);
    var shiftIdx = ALPHABET.indexOf(this.key[idx]);
    var encodedIdx = letterIdx + shiftIdx;

    if (encodedIdx >= ALPHABET.length) {
      encodedIdx -= ALPHABET.length;
    }

    encodedMessage += ALPHABET[encodedIdx];
  });

  return encodedMessage;
};

Cipher.prototype.decode = function(message) {
  var letters = message.split('');
  var decodedMessage = "";

  letters.forEach((letter, idx) => {
    var letterIdx = ALPHABET.indexOf(letter);
    var shiftIdx = ALPHABET.indexOf(this.key[idx]);
    var decodedIdx = letterIdx - shiftIdx;

    if (decodedIdx < 0) {
      decodedIdx += ALPHABET.length;
    }

    decodedMessage += ALPHABET[decodedIdx];
  });

  return decodedMessage;
};

module.exports = Cipher;
