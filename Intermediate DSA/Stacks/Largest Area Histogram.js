var largestRectangleArea = function(heights) {

    // We've to find out next smaller to the left and next smaller to the right for every element of heights

    let maxArea = 0;

    let nsel = [], nser = [];
    nsel = getNSEL(heights);
    nser = getNSER(heights);

    for(let i=0; i<heights.length; i++){

        let width = nser[i] - nsel[i] -1;
        let area = heights[i] * width;
        maxArea = Math.max(maxArea, area);
    }

    return maxArea;
    
};

function getNSEL(heights){

    let nsel = [], stack = [];

    nsel[0] = -1;
    stack.push(0);

    for(let i=1; i<heights.length; i++){

        while(stack.length > 0 && heights[i] <= heights[stack[stack.length -1]]){
            stack.pop();
        }

        if(stack.length > 0){
            nsel[i] = stack[stack.length -1];
        }
        else{
            nsel[i] = -1;
        }

        stack.push(i);
    }

    return nsel;

}


function getNSER(heights){
// 2,1,5,6,2,3]
// 1,6,4,4,6,6

let nser = [], stack = [];
nser[heights.length -1] = heights.length;
stack.push(heights.length -1);

for(let i= heights.length -2; i>=0; i--){

    while(heights[i] <= heights[stack[stack.length -1]]){
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