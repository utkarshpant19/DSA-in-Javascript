const nQueens = (n)=>{

    let chessboard = new Array(n);
    let result = [];

  for(let i=0; i<n; i++){
    chessboard[i] = new Array(n).fill('.');
  }

  let leftRow = new Array(n);
  let lowerDiagonal = new Array(2*n -1);
  let upperDiagonal = new Array(2*n -1);

    getNQueens(0, n, chessboard, result);
    return result;

}

const getNQueens = (col, n, chessboard, result)=>{

    if(col == n){

        result.push([...chessboard].map((row)=> row.join('')));
        return;
    }

    // We've a choice to put a Queen on every row

    for(let row =0; row<n; row++){

        if(isQueenSafe(chessboard, row, col, n)){
            chessboard[row][col] = 'Q';
            
            getNQueens(col+1, n, chessboard, result);
            chessboard[row][col] = '.';
        }
    }
}

const isQueenSafe = (chessboard, row, col, n)=>{


    // Checking each column before cell

    for(let i=col-1; i>=0; i--){
       if(chessboard[row][i] == 'Q'){
        return false;
       }
    }

    // Checking Top Diagonal

    for(i=row-1, j=col -1; i>=0 && j>=0; i--, j--){

        if(chessboard[i][j] == 'Q'){
            return false;
        }
    }

    // Checking for Bottom Left Diagonal

    for(let i=row+1,j=col-1; i<n && j>=0; i++, j--){
        if(chessboard[i][j] == 'Q'){
            return false;
        }
    }

    return true;

    
}

console.log(nQueens(4));