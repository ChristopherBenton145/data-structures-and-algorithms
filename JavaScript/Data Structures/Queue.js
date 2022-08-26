class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class Queue {
  constructor(elements = []) {
    if (!Array.isArray(elements)) throw new Error(`Iterator value ${elements} is not an entry object`);
    this.head = undefined;
    this.tail = undefined;
    this.length = 0;

    for (let i = 0; i < elements.length; i++) this.enqueue(elements[i]);
  }

  peek() {
    return (this.head) ? this.head.value : undefined;
  }

  enqueue(value) {
    (this.tail) ? this.tail.next = new Node(value) : this.tail = new Node(value);
    this.length++;

    if (this.tail.next) this.tail = this.tail.next;
    if (!this.head) this.head = this.tail;
  }

  dequeue() {
    if (!this.head) return undefined;
    if (!this.head.next) this.tail = undefined;
    const element = this.head;
    this.head = this.head.next;
    this.length--;

    return element.value;
  }

  elementAt(index) {
    let node = this.head;

    while (index-- && node !== undefined) node = node.next;

    return (node) ? node.value : undefined;
  }

  forEach(_function) {
    let node = this.head;
    let index = 0;

    while (node !== undefined) {
      _function(node.value, index);
      node = node.next;
      index++;
    }
  }

  toArray() {
    const array = [];
    let node = this.head;

    while (node !== undefined) {
      array.push(node.value);
      node = node.next;
    }

    return array;
  }

  clear() {
    this.head = undefined;
    this.tail = undefined;
    this.length = 0;
  }
}

export default Queue;
