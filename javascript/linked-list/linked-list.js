class LinkedListNode {
  constructor(value, parent, child) {
    this.value = value;
    this.parent = parent;
    this.child = child;
  }
}

class LinkedList {
  constructor() {
    this.nodes = [];
  }

  push(value) {
    const lastNode = this.nodes[this.nodes.length - 1];
    let newNode;

    if (lastNode) {
      newNode = new LinkedListNode(value, lastNode);
      lastNode.child = newNode;

    } else {
      newNode = new LinkedListNode(value);
    }

    this.nodes[this.nodes.length] = newNode;
  }

  pop() {
    if (this.nodes.length > 1) {
      this.nodes[this.nodes.length - 2].child = undefined;
    }

    if (this.nodes.length) {
      const value = this.nodes[this.nodes.length - 1].value;

      this.nodes = this.nodes.slice(0, -1);

      return value;
    }

    return new Error("Linked list is empty");
  }

  shift() {
    if (this.nodes.length) {
      const firstNode = this.nodes[0];
      const value = firstNode.value;

      this.nodes = this.nodes.slice(1);
      firstNode.parent = undefined;

      return value;
    }

    return new Error("Linked list is empty");
  }

  unshift(value) {
    const firstNode = this.nodes[0];
    const newNode = new LinkedListNode(value, undefined, firstNode);
    const unshiftedNodes = [newNode];

    if (firstNode) {
      firstNode.parent = newNode;
      this.nodes.forEach(existingNode => {
        unshiftedNodes[unshiftedNodes.length] = existingNode;
      });
    }

    this.nodes = unshiftedNodes;
  }

  count() {
    return this.nodes.length;
  }

  delete(value) {
    for (let i = 0; i < this.nodes.length; i++) {
      const node = this.nodes[i];

      if (node.value === value) {
        this.nodes = this.nodes
          .slice(0, i)
          .concat(this.nodes.slice(i + 1));

        return;
      }
    }

    return new Error(`${value} does not exist in the linked list`);
  }
}

module.exports = LinkedList;
