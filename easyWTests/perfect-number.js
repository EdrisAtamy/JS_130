class PerfectNumber {
  static classify(number) {
    if (number < 0) throw new Error('negative raises error');
    let multiples = new Array();
    
    for (let multiple = 0; multiple < number; multiple++) {
      if (number % multiple === 0) multiples.push(multiple);
    }
    
    multiples = multiples.reduce((acc, num) => acc + num);
    
    if (multiples > number) return 'abundant';
    else if (multiples < number) return 'deficient';
    else if (multiples === number) return 'perfect';
  }
}

module.exports = PerfectNumber;