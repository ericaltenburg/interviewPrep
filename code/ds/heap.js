// parent node is always less than the child nodes
// can represent in arrays: 
// at i, it's childrens indeces in the array would be 2*i+1 and 2*i+2 

class MinHeap {
    constructor() {
        this.heap = [null];
    }

    getMin() {
        return this.heap[1];
    }

    insert (node) {
        // Inserting the new node at the end of the heap array
        this.heap.push(node);


        // Finding the correct position for the new node
        if (this.heap.length > 1) {
            let curr = this.heap.length-1;

            // Traversing up the parent node until the current node (curr) is greater than the parent (curr/2)
            while (curr > 1 && this.heap[Math.floor(curr/2)] > this.heap[curr]) {
                [this.heap[Math.floor(curr/2)], this.heap[curr]] = [this.heap[curr], this.heap[Math.floor(curr/2)]];
                curr = Math.floor(curr/2);
            }
        }
    }

    remove() {
        // Smallest element is at the index 1 in the heap array
        let smallest = this.heap[1];

        // When there are more than 2 elements in the array, we put the right most element
        // at the first position and start comparing nodes with the child nodes
        if (this.heap.length > 2) {
            this.heap[1] = this.heap[this.heap.length-1];
            this.heap.splice(this.heap.length-1);

            if (this.heap.length === 3) {
                if (this.heap[1] > this.heap[2]) {
                    [this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]];
                }
                return smallest;
            }

            let curr = 1;
            let leftChildIndex = curr*2;
            let rightChildIndex = curr*2+1;
            
            while (this.heap[leftChildIndex] && this.heap[rightChildIndex] && (this.heap[curr] > this.heap[leftChildIndex] || this.heap[curr] > this.heap[rightChildIndex])) {
                if (this.heap[leftChildIndex] < this.heap[rightChildIndex]) {
                    [this.heap[curr], this.heap[leftChildIndex]] = [this.heap[leftChildIndex], this.heap[curr]];
                    curr = leftChildIndex;
                } else {
                    [this.heap[curr], this.heap[rightChildIndex]] = [this.heap[rightChildIndex], this.heap[curr]];
                    curr = rightChildIndex;
                }

                leftChildIndex = curr*2;
                rightChildIndex = curr*2+1;
            }

            if (this.heap[rightChildIndex] === undefined && this.heap[leftChildIndex] < this.heap[curr]) {
                [this.heap[curr], this.heap[leftChildIndex]] = [this.heap[leftChildIndex], this.heap[curr]];
            } else if (this.heap.length === 2) {
                this.heap.splice(1,1);
            } else {
                return null;
            }

            return smallest;
        }

    }
}

let myMinHeap = new MinHeap();
myMinHeap.insert(10);
myMinHeap.insert(57);
myMinHeap.insert(45);
myMinHeap.insert(38);
myMinHeap.insert(32);
myMinHeap.insert(36);
myMinHeap.insert(23);

console.log(JSON.stringify(myMinHeap, null, 4));

myMinHeap.remove();

console.log(JSON.stringify(myMinHeap, null, 4));