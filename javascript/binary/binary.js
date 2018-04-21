export default class Binary {
  constructor(binString) {
    this.binString = (/^[01]+$/).test(binString) ? binString : '0';
  }

  toDecimal() {
    return this.binString
      .split('')
      .reverse()
      .map((el, idx) => { return el * (idx ** 2); })
      .reduce((a, b) => { return a + b; });
  }
}
