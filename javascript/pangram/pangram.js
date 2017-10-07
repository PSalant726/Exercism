class Pangram {
  constructor(text) {
    this.text = text.toLowerCase().split("");
    this.alphabet = 'abcdefghijklmnopqrstuvwxyz'.split("");
  }

  isPangram() {
    this.text.forEach(letter => {
      var letterIdx = this.alphabet.indexOf(letter);

      if (letterIdx >= 0) {
        this.alphabet.splice(letterIdx, 1);
      }

      if (this.alphabet.length === 0) {
        return true;
      }
    });

    return this.alphabet.length === 0;
  }
};

module.exports = Pangram;
