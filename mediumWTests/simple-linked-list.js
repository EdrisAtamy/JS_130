class SimpleLinkedList {
  static fromArray(arr) { // creates a new list
    arr = arr || [];
    
    let list = new SimpleLinkedList();
    [...arr].reverse().forEach(element => list.push(element));
    
    return list;
  }
  
  toArray() { // convert the list to an array
    let arr = [];
    
    let currEl = this.head();
    while (currEl !== null) {
      arr.push(currEl.datum());
      currEl = currEl.next();
    }
    
    return arr;
  }
  
  push(value) { // adds argument to list
    let newEl = new Element(value, this.head());
    this.headEl = newEl;
  }
  
  pop() { // removes HEAD of list
    let tempHead = this.head();
    this.headEl = this.headEl.nextEl;
    return tempHead.datum();
  }
  
  peek() { // returns the datum of the HEAD element
    return this.headEl ? this.headEl.datum() : null;
  }
  
  head() { // returns the HEAD element object from the list
    return this.headEl || null;
  }
  
  size() { // return the size of the list
    return this.toArray().length;
  }
  
  isEmpty() { // returns bool value of whether list is empty or not
    return this.toArray().length > 0 ? false : true;
  }
  
  reverse() { // reverse the list
    let tempList = new SimpleLinkedList();
    let currEl = this.head();
    
    while (currEl !== null) {
      tempList.push(currEl.datum());
      currEl = currEl.next();
    }
    
    return tempList;
  }
}

class Element {
  constructor(data, elementObj = null) { // create a new element object
    this.data = data;
    this.nextEl = elementObj;
  }
  
  datum() { // return the current value of the element instance
    return this.data;
  }
  
  isTail() { // returns bool value of whether the element is the last in list
    return this.nextEl === null;
  }
  
  next() { // returns null if the element is tail, else return the next element
    return this.nextEl;
  }
}

module.exports = { SimpleLinkedList, Element };