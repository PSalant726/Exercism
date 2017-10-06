var DnaTranscriber = function() {};
var rnaPairs = {
  "A" : "U",
  "C" : "G",
  "G" : "C",
  "T" : "A"
};

DnaTranscriber.prototype.toRna = function(dnaSequence) {
  var rnaSequence = "";

  dnaSequence.split("").forEach(nucleotide => {
    var pair = rnaPairs[nucleotide];

    if (pair) {
      rnaSequence += pair;

    } else {
      throw new Error("Invalid input");
    }
  });

  return rnaSequence;
};

module.exports = DnaTranscriber;
