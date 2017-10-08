class Bob {
  hey(text) {
    text = text.replace(/\n|\r|\t| /g, "");
    let hasLetters = text.match(/[A-z]/);
    let isYell = text.toUpperCase() === text;
    let isQuestion = text.slice(-1) === '?';
    let isEmpty = text === "";

    if (hasLetters && isYell) {
      return "Whoa, chill out!";

    } else if (isQuestion) {
      return "Sure.";

    } else if (isEmpty) {
      return "Fine. Be that way!";

    } else {
      return "Whatever.";
    }
  }
}

module.exports = Bob;
