class Node {
  constructor(value, next, previous) {
    this.value = value;
    this.next = next;
    this.previous = previous;
  }
}

class DoublyLinkedList {
  constructor(elements = []) {
    if (!Array.isArray(elements)) throw new Error(`Iterator value ${elements} is not an entry object`);
    this.head = undefined;
    this.tail = undefined;
    this.length = 0;

    for (let i = 0; i < elements.length; i++) this.append(elements[i]);
  }

  prepend(value) {
    this.head = new Node(value, this.head);
    this.length++;
    
    if (this.head.next) this.head.next.previous = this.head;
    if (!this.tail) this.tail = this.head;
  }

  append(value) {
    this.tail = new Node(value, undefined, this.tail);
    this.length++;

    if (this.tail.previous) this.tail.previous.next = this.tail;
    if (!this.head) this.head = this.tail;
  }

  insert(value, index) {
    if (index < 0) return this.prepend(value);
    if (index > this.length - 2) return this.append(value);
    let node = this.head;

    while (index--) node = node.next;

    node.next.previous = new Node(value, node.next, node);
    node.next = node.next.previous;
    this.length++;
  }

  removeFirst() {
    if (!this.head) return undefined;
    (!this.head.next) ? this.tail = undefined : this.head.next.previous = undefined;
    const node = this.head;
    this.head = this.head.next;
    this.length--;

    return node;
  }

  removeLast() {
    if (!this.tail) return undefined;
    (!this.tail.previous) ? this.head = undefined : this.tail.previous.next = undefined;
    const node = this.tail;
    this.tail = this.tail.previous;
    this.length--;

    return node;
  }

  remove(index = 0) {
    if (index < 1) return this.removeFirst();
    if (index > this.length - 2) return this.removeLast();
    let node = this.head;

    while (index-- && index > 0) node = node.next;

    const node2 = node.next;
    node.next = node.next.next;
    this.length--;

    return node2;
  }

  reverse() {
    let node = this.head;
    let previous = undefined;

    while (node) {
      const next = node.next;
      node.next = previous;
      previous = node;
      node = next;
    }

    this.tail = this.head;
    return this.head = previous;
  }

  toArray() {
    const array = [];
    let node = this.head;

    while (node) {
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

export default DoublyLinkedList;
