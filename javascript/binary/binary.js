class Binary {
  constructor(binString) {
    this.binString = binString;
  }

  toDecimal() {
    let binArr = this.binString.split('');
    let retNum = 0;

    for (var i = 0; i < binArr.length; i++) {
      var binNum = parseInt(binArr[binArr.length - 1 - i]);

      if (isNaN(binNum)) {
        retNum = 0;
        return 0;

      } else {
        retNum += (binNum * (2 ** i));
      }
    }

    return retNum;
  }
}

module.exports = Binary;
