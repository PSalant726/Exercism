var ALPHABET = "abcdefghijklmnopqrstuvwxyz".split('');

var Cipher = function(key) {
  this.key = key ? this.validateKey(key) : "rhiannon";
  this.shiftArr = undefined;
};

Cipher.prototype.validateKey = function(key) {
  key.split('').forEach(char => {
    if (ALPHABET.indexOf(char) === -1) {
      throw new Error("Bad key");
    }
  });

  return key;
};

Cipher.prototype.getShiftArr = function() {
  return this.key.split('').map(letter => {
    return ALPHABET.indexOf(letter);
  });
};

Cipher.prototype.encode = function(message) {
  this.getShiftArr(function(shiftArr) {

  });
};

Cipher.prototype.decode = function(message) {

};

module.exports = Cipher;
