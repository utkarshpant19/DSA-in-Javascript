
matrix = [[1,2,3],[4,5,6],[7,8,9]]

const spiralMatrix = (matrix)=>{

    const totalElements = matrix.length * matrix[0].length;

    let visited = 0;
    let spiralMatrixArr = [];

    // Top Left
    let tlr=0, tlc = 0;

    // Top Right
    let trr = 0, trc = matrix[0].length -1;

    // Bottom Right
    let brr = matrix.length -1, brc = matrix[0].length -1;

    // Bottom Left
    let blr =matrix.length -1, blc =0; 

    while(tlc <= trc){

        
            // Left to Right: Col ++
    for(let i=tlr, j =tlc; visited < totalElements && j<=trc; j++){
        spiralMatrixArr.push(matrix[i][j]);
        visited++;
       
    }
    trr++;
    tlr++;

    // Top To Bottom, Row++
    // let trr = 0, trc = matrix[0].length -1;
    for(let i=trr, j = trc; visited < totalElements && i<=brr; i++){
        spiralMatrixArr.push(matrix[i][j]);
        visited++;
    }
    brc--;
    trc--;

    // Right to Left, Col--

    for(let i=brr, j=brc; visited < totalElements && j>=blc; j--){
        spiralMatrixArr.push(matrix[i][j]);
        visited++;
    }
    blr--;
    brr--;

    // Bottom to Top: Row--

    for(let i=blr, j =blc; visited < totalElements && i>= tlr ; i--){
        spiralMatrixArr.push(matrix[i][j]);
        visited++;
    }
    tlc++;
    blc++;
    }

    return spiralMatrixArr;

    }



   
    

console.log(spiralMatrix(matrix));