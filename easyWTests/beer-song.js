class BeerSong {
  static lyrics() {
    return this.verses(99, 0);
  }
  
  static verse(num) {
    switch(num) {
      case 0: 
        return `No more bottles of beer on the wall, no more bottles of beer.\n` +
        `Go to the store and buy some more, 99 bottles of beer on the wall.\n`;
      case 1: 
        return `1 bottle of beer on the wall, 1 bottle of beer.\n` +
        `Take it down and pass it around, no more bottles of beer on the wall.\n`;
      case 2:
        return `2 bottles of beer on the wall, 2 bottles of beer.\n` +
        `Take one down and pass it around, 1 bottle of beer on the wall.\n`;
      default:
        return `${num} bottles of beer on the wall, ${num} bottles of beer.\n` +
        `Take one down and pass it around, ${num - 1} bottles of beer on the wall.\n`;
      
    }
  }

  static verses(from, to) {
    let result = [];
    
    while (from >= to) {
      result.push(this.verse(from));
      from--;
    }
    
    return result.join('\n');
  }
}

console.log(BeerSong.verses(99, 98));

module.exports = BeerSong;