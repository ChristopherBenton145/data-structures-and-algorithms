class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class SinglyLinkedList {
  constructor(elements = []) {
    if (!Array.isArray(elements)) throw new Error(`Iterator value ${elements} is not an entry object`);
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let i = 0; i < elements.length; i++) this.append(elements[i]);
  }

  prepend(value) {
    this.head = new Node(value, this.head);
    this.length++;

    if (!this.tail) this.tail = this.head;
  }

  append(value) {
    (this.tail) ? this.tail.next = new Node(value) : this.tail = new Node(value);
    this.length++;

    if (this.tail.next) this.tail = this.tail.next;
    if (!this.head) this.head = this.tail;
  }

  insert(value, index) {
    if (index < 0) return this.prepend(value);
    if (index > this.length - 2) return this.append(value);
    let node = this.head;

    while (index--) node = node.next;

    node.next = new Node(value, node.next);
    this.length++;
  }

  removeFirst() {
    if (!this.head) return null;
    if (!this.head.next) this.tail = null;
    const head = this.head;
    this.head = this.head.next;
    this.length--;

    return head;
  }

  removeLast() {
    if (!this.head) return null;
    if (!this.head.next) return this.removeFirst();
    let node = this.head;

    while (node.next.next) node = node.next;

    const tail = this.tail;
    node.next = null;
    this.tail = node;
    this.length--;

    return tail;
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
    let previous = null;

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
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
}

export default SinglyLinkedList;
