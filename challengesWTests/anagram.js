class Anagram {
  constructor(word) {
    this.anagram = word.toLowerCase();
  }
  
  match(list) {
    return list.filter(function(word) {
      word = word.toLowerCase();
      if (word.length !== this.anagram.length || word === this.anagram) return false;
      if (word.split('').sort().join() === this.anagram.split('').sort().join()) {
        return true;
      }
    }, this);
  }
}

module.exports = Anagram;