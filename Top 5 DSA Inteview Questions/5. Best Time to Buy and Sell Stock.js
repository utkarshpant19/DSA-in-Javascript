const getMaxProfit = (arr) => {
  let maxProfit = 0;

  for (let i = 0; i < arr.length; i++) {
    let buy = arr[i];
    for (let j = i; j < arr.length; j++) {
      let sell = arr[j];

      let profit = sell - buy;
      maxProfit = Math.max(maxProfit, profit);
    }
  }

  return maxProfit;
};

let weekStocks = [7, 1, 5, 8, 4, 6, 5];
console.log(getMaxProfit(weekStocks));
