class LinkedList {
  // construct new linked list
  constructor(data = null) {
    this.head = new Node(data);
    this.size = 0; 
  }

  // This method returns the number of nodes present in the linked list.
  size() {
    let count = 0; 
    let node = this.head;
    while (node) {
        count++;
        node = node.next
    }
    return count;
  }

  // This method empties out the list.
  clear() {
    this.head = null;
  }

  // This method returns the last node of the linked list.
  getLast() {
    let lastNode = this.head;
    if (lastNode)
      while (lastNode.next)
        lastNode = lastNode.next
    return lastNode
  }

  // Add new item to the list
  add(data) {
    let node = new Node(data); 
    let curr = this.head; 
    if (curr) 
      while (curr.next) 
        curr = curr.next; 
    curr.next = node; 
    this.size++;
  }

  // Add new item to the list
  insert(data, index) { 
    if ((index > 0 && index > this.size) || index < 0) 
        return false; 
    else { 
      let node = new Node(data); 
      let curr = this.head;
      let prev; 
  
      if (index == 0) { 
        node.next = this.head; 
        this.head = node; 
      } else { 
        curr = this.head; 
        let count = 0; 
        while (count < index) { 
          count++; 
          prev = curr; 
          curr = curr.next; 
      }   
      node.next = curr; 
      prev.next = node; 
      } 
      this.size++; 
    } 
  } 

  // Method to remove the i-th item
  remove(index) { 
    if ((index > 0 && index > this.size) || index < 0) 
      return -1; 
    else { 
      let curr, prev, count = 0; 
      curr = this.head; 
      prev = curr; 
      if (index === 0) { 
        this.head = curr.next; 
      } else { 
        while (count < index) { 
          count++; 
          prev = curr; 
          curr = curr.next; 
        } 
        prev.next = curr.next; 
      } 
      this.size--; 
      return curr.data; 
    } 
  } 

  // This method returns the first node of the linked list.
  getFirst() {
    return this.head;
  }

  // print list
  print () {
    this.head.print();
  }
  // reverse list
  reverse() {
    let prev = null;
    let curr = this.head;
    let next = null;

    while (curr){
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
  }

  circular() {
    let slow = this.head;
    let fast = this.head;

    while(true){
      //  Iterating the slow once
      if(slow.next)
        slow = slow.next;
      else
        return false;

      // Iterating the fast twice
      if(fast.next)
        fast = fast.next;
      else
        return false;
      if(fast.next)
        fast = fast.next;
      else
        return false;

      if(slow == fast)
        return true;
    }
  }
}

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;               
  }  
  print() {
    process.stdout.write( `${this.data} => `);
    this.next ? this.next.print() : console.log( `null`);
  }
}

let list = new LinkedList(2); // index 0
list.add(5); // index 1
list.add(-10); // index 2
list.insert(7,2); // new index 2
list.add(3); // index4

list.print();
list.reverse();
list.print();
