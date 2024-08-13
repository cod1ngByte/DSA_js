// LC - 121

var maxProfit = function (prices) {
    let currMin = prices[0]; //atleast buy on day 0
    let profit = 0;
    for (let i = 1; i < prices.length; i++) {
        //can i sell, to get profit
        if (prices[i] > currMin) {
            profit = Math.max(profit, prices[i] - currMin);
        }
        //can i buy, in min price
        if (prices[i] < currMin) {
            currMin = prices[i];
        }
    }
    return profit;
};
