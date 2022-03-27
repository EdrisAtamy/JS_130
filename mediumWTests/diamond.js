class Diamond {
  static alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  static makeDiamond(letter) {
    let diamond = new Array((Diamond.alphabet.indexOf(letter) + 1) * 2);
    
    return diamond.join('\n');
  }
  
  static makeRow(letter) {
    
  }
}

Diamond.makeDiamond('E');

module.exports = Diamond;