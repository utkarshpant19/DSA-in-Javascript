

const matrix = [[1,2,3],[4,5,6],[7,8,9]];

console.log(matrix);

const rotateImage = (matrix)=>{

    // First Take Transpose, then reverse each row

    // In place transpose

    for(let i =0; i<matrix.length; i++){

        for(let j =0; j<=i; j++){
            if(i != j){
              let temp = matrix[i][j];
              matrix[i][j] = matrix[j][i];
              matrix[j][i] = temp;
            }
        }
    }

    console.log(matrix);

}

let swap = (arr, i, j)=>{
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

rotateImage(matrix);