class Series {
  constructor(string) {
    this.string = string;
  }
  
  slices(length) {
    if (length > this.string.length) {
      throw new Error('Specified length greater than string length');
    }
    let resultArr = new Array();
    let tempArr = this.string.split('').map(num => Number(num));
    
    for (let index = 0; index < this.string.length; index++) {
      if (length + index > this.string.length) break;
      resultArr.push(tempArr.slice(index, length + index));
    }
    
    return resultArr;
  }
}

module.exports = Series;