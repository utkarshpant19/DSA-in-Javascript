var maximalRectangle = function(matrix) {
    
    // Step 1: Compute the answer for first row

   let area = largestRectangleArea(matrix[0]);

   // Compute Area of rest of the rows
   for(let i=1; i<matrix.length; i++){

       for(let j=0; j<matrix[0].length; j++){
           
           if(matrix[i][j] != 0){
               matrix[i][j]+=matrix[i-1][j];
           }
           else{
               matrix[i][j] = 0;
           }
       }
       // Entire Row is updated after this loop
       area = Math.max(area, largestRectangleArea(matrix[i]));   
   }

    return area;


};

var largestRectangleArea = function(heights) {

    // Rectangle at index i, is equal to width * height of that index
    let maxArea = 0;

    let nser = getNSER(heights);
    let nsel = getNSEL(heights);

    for(let i=0; i<heights.length; i++){
        // Find Next Smaller element of heights[i] left and right
        let width = nser[i] -nsel[i] -1;
        let area = heights[i] * width;

        maxArea = Math.max(maxArea, area);
    }

    return maxArea;
    
};

const getNSER = (heights)=>{

    let nser = [], stack = [];

    nser[heights.length-1] = heights.length;
    stack.push(heights.length -1);

    for(let i= heights.length -2; i>=0; i--){

        while(stack.length > 0 && heights[i] <=heights[stack[stack.length-1]]){
            stack.pop();
        }

        if(stack.length == 0){
            nser[i] = heights.length;
        }
        else{
            nser[i] = stack[stack.length -1];
        }

        stack.push(i);
    }

    return nser;
}
const getNSEL = (heights)=>{

    let nsel = [], stack = [];
    nsel[0] = -1;
    stack.push(0);

    for(let i=1; i<heights.length; i++){

        while(stack.length > 0 && heights[i] <= heights[stack[stack.length -1]]){
            stack.pop();
        }

        if(stack.length == 0){
            nsel[i] = -1;
        }
        else{
            nsel[i] = stack[stack.length -1];
        }

        stack.push(i);
    }

    return nsel

}


maximalRectangle();
