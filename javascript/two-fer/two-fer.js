class TwoFer {
  twoFer(who) {
    const person = who || 'you';
    return `One for ${person}, one for me.`;
  }
}

module.exports = TwoFer;
