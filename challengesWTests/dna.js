class DNA {
  constructor(strand) {
    this.sequence = strand;
  }

  hammingDistance(compareStrand) {
    let shortest = this.getShortestStrand(this.sequence, compareStrand);
    let longest;

    if (shortest === this.sequence) longest = compareStrand;
    else longest = this.sequence;

    return shortest.split('').reduce(function(distance, currentNA, index) {
      if (currentNA !== longest[index]) {
        distance += 1;
        return distance;
      } else return distance;
    }, 0);
  }

  getShortestStrand(strand1, strand2) {
    return strand1.length > strand2.length ? strand2 : strand1;
  }
}

module.exports = DNA;