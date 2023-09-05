
const matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]];

const setMatrixZeroes = (matrix)=>{

     // Make a rowTracker which will keep track of 0's in row
    // Make a column Tracker which will keep track of 0's in column

    let rowTracker = [];
    let colTracker = [];

    for(let i=0; i<matrix.length; i++){
        rowTracker[i] = false;
    }
    for(let i=0; i<matrix[0].length; i++){
        colTracker[i] = false;
    }

    for(let i =0; i<matrix.length; i++){

        for(let j=0; j<matrix[0].length; j++){

            if(matrix[i][j] == 0){
                rowTracker[i] = true;
                colTracker[j] = true;
            }
        }
    }


    for(let i=0; i<rowTracker.length; i++){
        if(rowTracker[i]){

            for(let row=i, col =0; col<matrix[0].length; col++){
                matrix[row][col] = 0;
            }
        }
    }

    for(let i=0; i<colTracker.length; i++){

        if(colTracker[i]){

            for(let row=0, col =i; row<matrix.length; row++){
                matrix[row][col] = 0;
            }
        }
    }

    return matrix;

}

console.log(setMatrixZeroes(matrix));

