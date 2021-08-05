let board = {};
let k = 2;

let verticalWin = (player, xCoord) => {
    if (board[xCoord].length < k) {
        return false;
    }

    for (let i = board[xCoord].length-1; i >= k-1; i--) {
        let start = i;
        let end = start-(k-1);

        let isWin = true
        
        while (start >= end) {
            if (board[xCoord][start] !== player) {
                isWin = false;
            }

            start--;
        }

        if (isWin) {
            return isWin
        }
    }

    return false;
}

let move = (player, xCoord) => {
    if (board[xCoord]) {
        board[xCoord].push(player);
    } else {
        board[xCoord] = [player];
    }

    return verticalWin(player, xCoord) || horizontalWin(player, xCoord) || diagonalWin(player, xCoord);
};

console.log(move("R", 0));
console.log(board);
console.log(move("B", 0));
console.log(board);
console.log(move("R", 0));
console.log(board);
console.log(move("B", -3));
console.log(board);
console.log(move("R", 0));
console.log(board);