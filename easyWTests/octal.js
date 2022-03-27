class Octal {
  constructor(string) {
    this.octal = string;
  }

  validOctal() {
    return this.octal.split('').every(char => char.match(/[0-7]/));
  }

  toDecimal() {
    if (!this.validOctal()) return 0;
    let numArr = this.octal.split('').map(number => Number(number));

    return numArr.reduce(function(acc, number, index) {
      acc += (number * (8**(numArr.length - (index + 1))));
      return acc;
    }, 0);
  }
}

module.exports = Octal;