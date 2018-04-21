class Bob {
  hey(text) {
    const cleanText = text.replace(/[\n\r\t\s]/g, '');
    const hasLetters = cleanText.match(/[A-Z]/);
    const isYell = cleanText.toUpperCase() === cleanText;

    if (hasLetters && isYell) {
      return 'Whoa, chill out!';

    } else if (cleanText.endsWith('?')) {
      return 'Sure.';

    } else if (cleanText === '') {
      return 'Fine. Be that way!';
    }

    return 'Whatever.';
  }
}

module.exports = Bob;
