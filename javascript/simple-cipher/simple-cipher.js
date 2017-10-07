var ALPHABET = "abcdefghijklmnopqrstuvwxyz".split('');

class Cipher {
  constructor(key) {
    this.key = key ? this.validateKey(key) : this.generateKey();
  };

  validateKey(key) {
    key.split('').forEach(char => {
      if (ALPHABET.indexOf(char) === -1) {
        throw new Error("Bad key");
      }
    });

    return key;
  };

  generateKey() {
    var key = "";

    for (var i = 0; i < 100; i++) {
      var randomIdx = Math.floor(Math.random() * ALPHABET.length);
      key += ALPHABET[randomIdx];
    }

    return key;
  }

  encode(message) {
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

  decode(message) {
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
}

module.exports = Cipher;
