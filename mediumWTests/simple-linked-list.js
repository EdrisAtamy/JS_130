class SimpleLinkedList {
  static fromArray(arr) {
    if (!Array.isArray(arr)) return new SimpleLinkedList();
    let newList = new SimpleLinkedList();
    [...arr].reverse().forEach(function(value) {
      newList.push(value);
    })
    return newList;
  }
  
  toArray() {
    if (this.isEmpty()) return [];
    let listArr = [];
    let tempEl = this.head();
    
    while (tempEl !== null) {
      listArr.push(tempEl.datum());
      tempEl = tempEl.next();
    }
    return listArr;
  }
  
  size() {
    let size = 0;
    let tempEl = this.head();
    
    while (tempEl) {
      size += 1;
      tempEl = tempEl.next();
    }
    return size;
  }
  
  isEmpty() { // returns TRUE if empty - FALSE if not
    return this.head() === undefined;
  }
  
  peek() { // returns the VALUE of the HEAD element
    return this.isEmpty() ? null : this.head().datum();
  }
  
  head() { // returns head ELEMENT
    return this.headEl;
  }
  
  push(value) {
    let newEl = new Element(value);
    if (this.headEl === undefined) {
      this.headEl = newEl;
    } else {
      newEl.nextEl = this.head();
      this.headEl = newEl;
    }
  }
  
  pop() { // removes the HEAD element
    let tempElDatum = this.headEl.datum();
    this.headEl = this.headEl.next();
    return tempElDatum;
  }
  
  reverse() { // reverses the LIST - not the array
    let tempList = new SimpleLinkedList();
    let tempEl = this.head();
    
    while (tempEl !== null) {
      tempList.push(tempEl.datum());
      tempEl = tempEl.next();
    }
    this.headEl = tempList.head();
    return this;
  }
}

class Element {
  constructor(value, nextVal = null) {
    this.data = value;
    this.nextEl = nextVal;
  }
  
  datum() {
    return this.data;
  }
  
  isTail() {
    return this.next() === null;
  }
  
  next() {
    return this.nextEl;
  }
}

module.exports = { SimpleLinkedList, Element };