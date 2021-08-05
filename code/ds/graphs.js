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




const fill = (arr, i, j) => {
    const maxI = arr.length;
    const maxJ = arr[0].length;
    
    arr[i][j] = "0";
    
    if (i > 0 && arr[i-1][j] == "1") {
        arr[i-1][j] = "0";
        fill(arr, i - 1, j);
    }
    if (i < maxI - 1 && arr[i+1][j] == "1") {
        arr[i+1][j] = "0";
        fill(arr, i + 1, j);
    }
    if (j > 0 && arr[i][j-1] == "1") {
        arr[i][j-1] = "0";
        fill(arr, i, j - 1);
    }
    if (j < maxJ - 1 && arr[i][j+1] == "1") {
        arr[i][j+1] = "0";
        fill(arr, i, j + 1);
    }
}

var numIslands = function(grid) {
    let count = 0;
    
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] == "1") {
                fill(grid, i, j);
                count++;
            }
        }
    }
    
    return count;
};

// def traverse(matrix):
//   rows, cols = len(matrix), len(matrix[0])
//   visited = set()
//   directions = ((0, 1), (0, -1), (1, 0), (-1, 0))
//   def dfs(i, j):
//     if (i, j) in visited:
//       return
//     visited.add((i, j))
//     # Traverse neighbors
//     for direction in directions:
//       next_i, next_j = i + direction[0], j + direction[1]
//       if 0 <= next_i < rows and 0 <= next_j < cols: # Check boundary
//         # Add any other checking here ^
//         dfs(next_i, next_j)
//   for i in range(rows):
//     for j in range(cols):
//       dfs(i, j)




// - Graphs - dfs or bfs
// - K closest is just max or min heap

// splice() changes the original array whereas slice() doesn't but both of them returns array object.

// See the examples below:

// var array=[1,2,3,4,5];
// console.log(array.splice(2));
// This will return [3,4,5]. The original array is affected resulting in array being [1,2].

// var array=[1,2,3,4,5]
// console.log(array.slice(2));
// This will return [3,4,5]. The original array is NOT affected with resulting in array being [1,2,3,4,5].

// array.filter((value, index, arr) => {index %2 === 0}) gives only the even indices

// for (key in object) {
//     // code block to be executed
//   }

// for (variable in array) {
//     code
//   }

// Below is simple fiddle which confirms this:

// DP
// breaking-down into subroutines;
// store/memorize subroutines;
// reuse subroutine results.