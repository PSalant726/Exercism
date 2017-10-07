var Year = function(year) {
  this.value = year;
};

Year.prototype.isLeap = function() {
  var isDivBy4   = this.value % 4   === 0;
  var isDivBy100 = this.value % 100 === 0;
  var isDivBy400 = this.value % 400 === 0;

  return isDivBy400 || (isDivBy4 && !isDivBy100);
};

module.exports = Year;
