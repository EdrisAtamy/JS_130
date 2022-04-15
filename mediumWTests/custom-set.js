class CustomSet {
  constructor(arr = []) {
    this.set = arr;
  }
  
  isEmpty() {
    return this.set.length === 0;
  }
  
  contains(value) {
    return this.set.includes(value);
  }
  
  isSubset(otherSet) {
    return this.set.every(function(element) {
      return otherSet.contains(element);
    })
  }
  
  isDisjoint(otherSet) {
    return this.set.every(function(element) {
      return !otherSet.contains(element);
    })
  }
  
  isSame(otherSet) {
    if (this.set.length !== otherSet.set.length) return false;
    return this.isSubset(otherSet);
  }
  
  add(value) {
    if (!this.contains(value)) this.set.push(value);
    return this;
  }
  
  intersection(otherSet) {
    let shared = [];
    
    this.set.forEach(function(element) {
      if (otherSet.contains(element)) shared.push(element);
    })
    
    return new CustomSet(shared);
  }
  
  difference(otherSet) {
    let notShared = [];
    let shared = this.intersection(otherSet);
    
    this.set.forEach(function(element) {
      if (!shared.contains(element)) notShared.push(element);
    })
    
    return new CustomSet(notShared);
  }
  
  union(otherSet) {
    let unionSet = new CustomSet(this.set);
    otherSet.set.forEach(function(element) {
      unionSet.add(element);
    })
    
    return unionSet;
  }
}

module.exports = CustomSet;