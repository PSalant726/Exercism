class DnaTranscriber {
  constructor() {
    this.rnaPairs = { A: 'U', C: 'G', G: 'C', T: 'A' };
  }

  toRna(dnaSequence) {
    let rnaSequence = '';

    dnaSequence.split('').forEach(nucleotide => {
      const pair = this.rnaPairs[nucleotide];

      if (pair) {
        rnaSequence += pair;

      } else {
        throw new Error('Invalid input');
      }
    });

    return rnaSequence;
  }
}

module.exports = DnaTranscriber;
