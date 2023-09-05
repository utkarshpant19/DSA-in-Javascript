
/*

[
[a,b,c]             [a, d, g],
[d,e,f]       =>    [b, e, h],  
[g,h,i]             [c, g, i]

]


*/

const transpose = (mat) => {

    let xpose = [];
    for (let row = 0; row < mat.length; row++) {
        for (let col = 0; col < mat[0].length; col++) {
            xpose[row][col] = mat[col][row];

        }
    }

    return xpose;
}

let mat = [['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i']];
console.log(transpose(mat));