// Node class to represent each node in the linked list
class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

// LinkedList class to represent the full list
class LinkedList {
  constructor() {
    this.headNode = null;
    this.tailNode = null;
    this.length = 0;
  }

  // Add a new node to the end of the list
  append(value) {
    const newNode = new Node(value);

    if (!this.headNode) {
      this.headNode = newNode;
      this.tailNode = newNode;
    } else {
      this.tailNode.nextNode = newNode;
      this.tailNode = newNode;
    }

    this.length++;
  }

  // Add a new node to the start of the list
  prepend(value) {
    const newNode = new Node(value, this.headNode);
    this.headNode = newNode;

    if (!this.tailNode) {
      this.tailNode = newNode;
    }

    this.length++;
  }

  // Return the total number of nodes in the list
  size() {
    return this.length;
  }

  // Return the first node in the list
  head() {
    return this.headNode;
  }

  // Return the last node in the list
  tail() {
    return this.tailNode;
  }

  // Return the node at the given index
  at(index) {
    if (index < 0 || index >= this.length) return null;

    let currentNode = this.headNode;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.nextNode;
    }

    return currentNode;
  }

  // Remove the last element from the list
  pop() {
    if (!this.headNode) return null;

    let currentNode = this.headNode;
    let previousNode = null;

    while (currentNode.nextNode) {
      previousNode = currentNode;
      currentNode = currentNode.nextNode;
    }

    if (previousNode) {
      previousNode.nextNode = null;
      this.tailNode = previousNode;
    } else {
      this.headNode = null;
      this.tailNode = null;
    }

    this.length--;
    return currentNode.value;
  }

  // Check if the list contains a value
  contains(value) {
    let currentNode = this.headNode;

    while (currentNode) {
      if (currentNode.value === value) return true;
      currentNode = currentNode.nextNode;
    }

    return false;
  }

  // Find the index of a node containing value
  find(value) {
    let currentNode = this.headNode;
    let index = 0;

    while (currentNode) {
      if (currentNode.value === value) return index;
      currentNode = currentNode.nextNode;
      index++;
    }

    return null;
  }

  // Represent the list as a string
  toString() {
    let result = '';
    let currentNode = this.headNode;

    while (currentNode) {
      result += `( ${currentNode.value} ) -> `;
      currentNode = currentNode.nextNode;
    }

    result += 'null';
    return result;
  }

  // Extra credit: Insert at a specific index
  insertAt(value, index) {
    if (index < 0 || index > this.length) return false;

    if (index === 0) {
      this.prepend(value);
      return true;
    }

    if (index === this.length) {
      this.append(value);
      return true;
    }

    const newNode = new Node(value);
    const previousNode = this.at(index - 1);
    newNode.nextNode = previousNode.nextNode;
    previousNode.nextNode = newNode;

    this.length++;
    return true;
  }

  // Extra credit: Remove at a specific index
  removeAt(index) {
    if (index < 0 || index >= this.length) return null;

    if (index === 0) {
      const removedValue = this.headNode.value;
      this.headNode = this.headNode.nextNode;
      if (!this.headNode) this.tailNode = null;
      this.length--;
      return removedValue;
    }

    const previousNode = this.at(index - 1);
    const removedValue = previousNode.nextNode.value;
    previousNode.nextNode = previousNode.nextNode.nextNode;

    if (index === this.length - 1) {
      this.tailNode = previousNode;
    }

    this.length--;
    return removedValue;
  }
}

// Export the LinkedList class
module.exports = LinkedList;
