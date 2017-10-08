class Bob {
  hey(text) {
    text = text.replace(/\n|\r|\t| /g, "");
    let hasLetters = text.match(/[A-Z]/);
    let isYell = text.toUpperCase() === text;

    if (hasLetters && isYell) {
      return "Whoa, chill out!";

    } else if (text.endsWith('?')) {
      return "Sure.";

    } else if (text === "") {
      return "Fine. Be that way!";

    } else {
      return "Whatever.";
    }
  }
}

module.exports = Bob;
