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

        while(stack.length > 0 && heights[i] <= heights[stack[stack.length-1]]){
            stack.pop();
        }

        if(stack.length > 0){
            nser[i] = stack[stack.length -1];         
        }
        else{
            nser[i] = heights.length;
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

let heights = [1,1];
console.log(largestRectangleArea(heights));