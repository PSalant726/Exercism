export default class Gigasecond {
  constructor(date) {
    this.startDate = date;
  }

  date() {
    const ret = new Date(this.startDate);
    const endDate = ret.getTime() + 1000000000000;
    ret.setTime(endDate);

    return ret;
  }
}
