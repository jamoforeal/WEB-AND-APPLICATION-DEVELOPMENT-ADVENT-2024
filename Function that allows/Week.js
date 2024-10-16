// a function that calculation that accepts the selling prices, cost prices and number of units sold and returns the profit
function calculateProfit(sellingPrice, costPrice, unitsSold) {
    // Calculate the profit per unit
    let profitPerUnit = sellingPrice - costPrice;
    
    // Total profit is profit per unit times the number of units sold
    let totalProfit = profitPerUnit * unitsSold;
    
    return totalProfit;
}

let sellingPrice = 50;   // Example selling price per unit
let costPrice = 30;      // Example cost price per unit
let unitsSold = 100;     // Number of units sold

let profit = calculateProfit(sellingPrice, costPrice, unitsSold);
console.log(`Total profit: $${profit}`); // Output: Total profit: $2000



