const EARTH_YEAR = 31557600;
const YEAR_LENGTHS = {
  'mercury' : 0.2408467,
  'venus' : 0.61519726,
  'earth' : 0.2408467,
  'mars' : 1.8808158,
  'jupiter' : 11.862615,
  'saturn' : 29.447498,
  'uranus' : 84.016846,
  'neptune' : 164.79132
};

class SpaceAge {
  constructor(seconds) {
    this.seconds = seconds;
  }

  onMercury() {
    return this.getAge('mercury');
  }

  onVenus() {
    return this.getAge('venus');
  }

  onEarth() {
    return Math.round(this.seconds / EARTH_YEAR * 100) / 100;
  }

  onMars() {
    return this.getAge('mars');
  }

  onJupiter() {
    return this.getAge('jupiter');
  }

  onSaturn() {
    return this.getAge('saturn');
  }

  onUranus() {
    return this.getAge('uranus');
  }

  onNeptune() {
    return this.getAge('neptune');
  }

  getAge(planet) {
    let yearLength = YEAR_LENGTHS[planet] * EARTH_YEAR;
    let age = this.seconds / yearLength;
    return Math.round(age * 100) / 100;
  }
};

module.exports = SpaceAge;
