class SpaceAge {
  constructor(seconds) {
    this.seconds = seconds;
    this.earthYear = 31557600;
    this.yearMultipliers = {
      Mercury: 0.2408467,
      Venus: 0.61519726,
      Earth: 1,
      Mars: 1.8808158,
      Jupiter: 11.862615,
      Saturn: 29.447498,
      Uranus: 84.016846,
      Neptune: 164.79132
    };

    this.generateConversions();
  }

  generateConversions() {
    const planets = Object.keys(this.yearMultipliers);

    planets.forEach(planet => {
      this[`on${planet}`] = function() {
        const yearLength = this.yearMultipliers[planet] * this.earthYear;
        const age = this.seconds / yearLength;
        return Math.round(age * 100) / 100;
      };
    });
  }
}

module.exports = SpaceAge;
