const EARTH_YEAR = 31557600;
const YEAR_MULTIPLIERS = {
  'Mercury' : 0.2408467,
  'Venus' : 0.61519726,
  'Earth' : 1,
  'Mars' : 1.8808158,
  'Jupiter' : 11.862615,
  'Saturn' : 29.447498,
  'Uranus' : 84.016846,
  'Neptune' : 164.79132
};

class SpaceAge {
  constructor(seconds) {
    this.seconds = seconds;
    this.generateConversions();
  }

  generateConversions() {
    for (let planet in YEAR_MULTIPLIERS) {
      if (YEAR_MULTIPLIERS.hasOwnProperty(planet)) {

        this['on' + planet] = function() {
          let yearLength = YEAR_MULTIPLIERS[planet] * EARTH_YEAR;
          let age = this.seconds / yearLength;

          return Math.round(age * 100) / 100;
        };
        
      }
    }
  }
}

module.exports = SpaceAge;
