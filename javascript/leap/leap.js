class Year {
  constructor(year) {
    this.value = year;
  }

  isLeap() {
    const isDivBy4 = this.value % 4 === 0;
    const isDivBy100 = this.value % 100 === 0;
    const isDivBy400 = this.value % 400 === 0;

    return isDivBy400 || (isDivBy4 && !isDivBy100);
  }
}

module.exports = Year;
