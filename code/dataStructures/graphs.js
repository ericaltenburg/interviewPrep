// doesn't run but conceptually right, uses adj matrix

class Node {
    constructor (data) {
        this.data = data;
        this.children = [];
    }
}

class Graph {
    constructor () {
        this.nodes = [];
    }

    DFS (root) {
        if (!root) {
            return;
        }

        stack.push(node);
        while (!stack.isEmpty()) {
            node = stack.pop();
            if (visited[node] == false) {
                visited[node] = true;
                
                for (let i = 0; i < graphAdj[node].length; i++) {
                    if (graphAdj[node][i] === 1) {
                        stack.push(i);
                    }
                }
            }
        }
    }

    BFS (node) {
        visited[node] = true;
        queue.enqueue(node);
        while (!queue.isEmpty()) {
            let visiting = queue.dequeue();

            for (let i = 0; i < graphAdj[visiting].length; i++) {
                if ((graphAdj[visiting][i] === 1) && (visited[i] === false)) {
                    visited[i] = true;
                    queue.enqueue(i);
                }
            }
        }
    }
}

