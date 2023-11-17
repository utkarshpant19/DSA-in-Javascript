const sudokuSolver = (board)=>{

    solve(board);
    console.log(board);

}

const solve = (board)=>{

    // We've to find an empty cell to fill number from 0 to 9

    for(let row =0; row<board.length; row++){

        for(let col=0; col<board[0].length; col++){

            if(board[row][col] == '.'){
                for(let c= '0'; c<='9'; c++){

                    if(isValid(board, row, col, c)){
    
                        board[row][col] = c;
                        if(solve(board)){
                            return true;
                        }
                        else{
                            board[row][col] = '.';
                        }
                    }
                }
                // It means we've chosen some number wrong earlier
                return false;
            }

           
        }
    }
    return true;
}

const isValid = (board, row, col, c)=>{

    // To determine whether it is valid to put char c in the cell,
    // We've to check

    //1) It should not be anywhere in the same row
    //2) It should not be anywhere in the same column
    //3) It should not be anywhere in the same box

    for(let i=0; i<board.length; i++){

        // Checking row
        if(board[row][i] == c){
            return false;
        }

        // Checking Column

        if(board[i][col] == c){
            return false;
        }

        const ro = Math.floor(row/3) *3 + Math.floor(i/3);
        const co = Math.floor(col/3) * 3 + i%3;

        if(board[ro][co] == c){
            return false;
        }
    }

    return true;



}

const board = [
["5","3",".",".","7",".",".",".","."],
["6",".",".","1","9","5",".",".","."],
[".","9","8",".",".",".",".","6","."],
["8",".",".",".","6",".",".",".","3"],
["4",".",".","8",".","3",".",".","1"],
["7",".",".",".","2",".",".",".","6"],
[".","6",".",".",".",".","2","8","."],
[".",".",".","4","1","9",".",".","5"],
[".",".",".",".","8",".",".","7","9"]
]

sudokuSolver(board);