class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class Stack {
  constructor(elements = []) {
    if (!Array.isArray(elements)) throw new Error(`Iterator value ${elements} is not an entry object`);
    this.head = null;
    this.length = 0;

    for (let i = 0; i < elements.length; i++) this.push(elements[i]);
  }

  peek() {
    return (this.head) ? this.head.value : null;
  }

  push(value) {
    this.head = new Node(value, this.head);
    this.length++;
  }

  pop() {
    if (!this.length) return null;
    const element = this.head;
    this.head = this.head.next;
    this.length--;

    return element.value;
  }

  elementAt(index) {
    let node = this.head;

    while (index-- && node !== null) node = node.next;

    return (node) ? node.value : null;
  }

  forEach(_function) {
    const array = this.toArray();

    for (let i = 0; i < array.length; i++) _function(array[i], i);
  }

  toArray() {
    const array = [];
    let node = this.head;

    while (node !== null) {
      array.push(node.value);
      node = node.next;
    }

    return array.reverse();
  }

  clear() {
    this.head = null;
    this.length = 0;
  }
}

export default Stack;
