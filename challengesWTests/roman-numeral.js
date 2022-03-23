class RomanNumeral {
  static ROMAN_NUMERALS = {
     M: 1000,
    CM: 900,
     D: 500,
    CD: 400,
     C: 100,
    XC: 90,
     L: 50,
    XL: 40,
     X: 10,
    IX: 9,
     V: 5,
    IV: 4,
     I: 1
  }

  constructor(number) {
    this.number = number;
  }

  toRoman() {
    let romanVersion = '';
    let toConvert = this.number;

    Object.keys(RomanNumeral.ROMAN_NUMERALS).forEach(numeral => {
      let value = RomanNumeral.ROMAN_NUMERALS[numeral];
      let multiplier = Math.floor(toConvert / value);
      let remainder = toConvert % value;

      if (multiplier > 0) {
        romanVersion += (numeral.repeat(multiplier));
      }

      toConvert = remainder;
    });

    return romanVersion;
  }
}

module.exports = RomanNumeral;