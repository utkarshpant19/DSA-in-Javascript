const nextSmallerToRight = (arr) => {
  let nser = []; // This will keep the index of all elements smaller than a[i]
  stack = [];

  nser[arr.length - 1] = arr.length;
  stack.push(arr.length - 1);

  for (let i = arr.length - 2; i >= 0; i--) {
    while (arr[i] <= arr[stack[stack.length - 1]]) {
      stack.pop();
    }

    if (stack.length > 0) {
        nser[i] = stack[stack.length - 1];
    } else {
        nser[i] = arr.length;
    }

    stack.push(i);
  }

  return nser;
};

let arr = [2, 1, 5, 6, 2, 3];
console.log(nextSmallerToRight(arr));
