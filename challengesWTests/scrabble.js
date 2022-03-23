class Scrabble {
  static LETTER_VALUES = {
    'AEIOULNRST': 1,
    'DG': 2,
    'BCMP': 3,
    'FHVWY': 4,
    'K': 5,
    'JX': 8,
    'QZ': 10
  }

  constructor(word) {
    this.word = word;
  }

  score() {
    if (!(this.word)) return 0;
    let score = 0;

    for (let letter of this.word) {
      for (let key in Scrabble.LETTER_VALUES) {
        if (key.includes(letter.toUpperCase())) {
          score += Scrabble.LETTER_VALUES[key];
        }
      }
    }
    return score;
  }

  static score(word) {
    return new Scrabble(word).score();
  }
}

module.exports = Scrabble;