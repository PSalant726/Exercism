class Gigasecond {
  constructor(date) {
    this.startDate = date;
  }

  date() {
    let ret = new Date(this.startDate);
    let endDate = ret.getTime() + 1000000000000;
    ret.setTime(endDate);

    return ret;
  }
}

module.exports = Gigasecond;
