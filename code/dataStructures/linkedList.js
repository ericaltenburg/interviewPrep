const util = require('util');

class Node {
    constructor (data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor () {
        this.head = null;
    }

    insertAtBeginning (data) {
        let newNode = new Node(data);

        newNode.next = this.head;

        this.head = newNode;

        return this.head;
    }

    insertAtEnd (data) {
        if (!this.head) {
            this.head = new Node(data);
            return this.head;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }

        let newNode = new Node(data);
        curr.next = newNode;
        return curr.next;
    }

    insertAt (data, index) {
        if (!this.head) {
            this.head = new Node(data);
            return this.head;
        }

        let curr = this.head;

        for (let i = 0; i < index - 1 && curr.next; i++) {
            curr = curr.next;
        }

        curr.next = new Node(data, curr.next);

        return curr.next;

    }

    deleteList () {
        this.head = null;
    }
}

let myList = new LinkedList();

myList.insertAtBeginning(2);
myList.insertAtBeginning(1);
myList.insertAtEnd(4);
myList.insertAt(3, 2);

console.log(JSON.stringify(myList, null, 4));
myList.deleteList();
console.log(JSON.stringify(myList, null, 4));