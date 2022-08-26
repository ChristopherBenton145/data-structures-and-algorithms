class HashSet {
  constructor(elements = []) {
    if (!Array.isArray(elements)) throw new Error(`Iterator value ${elements} is not an entry object`);
    this.elements = {};
    this.length = 0;

    for (let i = 0; i < elements.length; i++) this.add(elements[i], elements[i]);
  }

  add(value) {
    if (!this.has(value)) this.length++;
    this.elements[value] = value;
  }

  has(value) {
    return (this.elements[value]) ? true : false;
  }

  delete(value) {
    if (!this.has(value)) return false;
    delete this.elements[value];
    this.length--;

    return true;
  }

  forEach(_function) {
    for (const value in this.elements) _function(this.elements[value]);
  }

  clear() {
    this.elements = {};
    this.length = 0;
  }
}

export default HashSet;
