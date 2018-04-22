class PrimeFactors {
  for(num) {
    const primeFactorization = [];
    let currentNum = num;
    let currentFactor = 2;

    while (currentFactor <= currentNum) {
      if (currentNum % currentFactor === 0) {
        currentNum /= currentFactor;
        primeFactorization.push(currentFactor);

      } else {
        currentFactor++;
      }
    }

    return primeFactorization;
  }
}

module.exports = PrimeFactors;
