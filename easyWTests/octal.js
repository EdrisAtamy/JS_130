class Octal {
  constructor(string) {
    this.octalStr = string;
  }

  toDecimal() {
    if (!this.octalStr.split('').every(num => num.match(/[0-7]/))) return 0;
    let octalArr = this.octalStr.split('').map(num => Number(num)).reverse();

    return octalArr.reduce(function(decimal, currNum, pow) {
      return decimal + (currNum * (8**pow));
    }, 0);
  }
}

module.exports = Octal;