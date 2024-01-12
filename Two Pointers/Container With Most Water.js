const containerWithMostWaterBF = (arr) => {
  let maxArea = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    let area = 0;
    for (let j = i + 1; j < arr.length; j++) {
      let width = j - i;
      area = Math.min(arr[j], arr[i]) * width;
      maxArea = Math.max(maxArea, area);
    }
  }

  return maxArea;
};

const containerWithMostWaterTP = (arr) => {
  // Intution: We've to find the max area, between left and right idx.
  // We'll fix the right pointer and slide the left pointer all the way to right

  let maxArea = 0;

  let left = 0,
    right = arr.length - 1;

  while (left < right) {
    let width = right - left;
    let area = Math.min(arr[left], arr[right]) * width;
    maxArea = Math.max(maxArea, area);

    arr[left] <= arr[right] ? ++left : --right;
  }

  return maxArea;
};

let arr = [1, 8, 6, 2, 6, 4, 8, 3, 7];

console.log(containerWithMostWaterTP(arr));
