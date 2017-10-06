//
// This is only a SKELETON file for the "Leap" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Year = function(input) {
  this.value = input;
};

Year.prototype.isLeap = function() {
  var isDivBy4   = this.value % 4 === 0;
  var isDivBy100 = this.value % 100 === 0;
  var isDivBy400 = this.value % 400 === 0;

  if (isDivBy400 || (isDivBy4 && !isDivBy100)) {
    return true;
  }

  return false;
};

module.exports = Year;
