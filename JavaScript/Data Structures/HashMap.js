class HashMap {
  constructor(elements = []) {
    if (!Array.isArray(elements)) throw new Error(`Iterator value ${elements} is not an entry object`);
    this.elements = {};
    this.length = 0;

    for (let i = 0; i < elements.length; i++) {
      if (!Array.isArray(elements[i])) throw new Error(`Iterator value ${elements[i]} is not an entry object`);
      this.set(elements[i][0], elements[i][1]);
    }
  }

  set(key, value) {
    if (!this.has(key)) this.length++;
    this.elements[key] = value;
  }

  get(key) {
    return this.elements[key];
  }

  has(key) {
    return (this.elements[key]) ? true : false;
  }

  delete(key) {
    if (!this.has(key)) return false;
    delete this.elements[key];
    this.length--;

    return true;
  }

  forEach(_function) {
    for (const key in this.elements) _function(this.elements[key], key);
  }

  clear() {
    this.elements = {};
    this.length = 0;
  }
}

export default HashMap;
