import { assets } from "./data.js";

console.log("--- Sentinel Portfolio Tracker Initialized ---");

function displayPortfolio(myArray) {
  myArray.forEach((asset) => {
    //Date() constsructor for current time stamp
    const time = new Date().toLocaleTimeString();
    // const name = asset.name
    // const ticker = asset.ticker
    // const price = asset.price
    // const purchasePrice = asset.purchasePrice
    // But b/c asset is an object so I can destructure it but assets is a list
    const { name, ticker, price, purchasePrice } = asset
    const profitLoss = price - purchasePrice
    const status = profitLoss >= 0 ? "📈 PROFIT" : "📉 LOSS";
    console.log(`[${time}] ${name} (${ticker})\nCurrent Price: $${price.toLocaleString()}\nStatus: ${status} ($${profitLoss.toLocaleString()})\n------------------------------------`)
    
  });
}
//to run our display funciton in an interval of every 3 seconds
setInterval(function(){
    displayPortfolio(assets)
}, 3000)
//the ff is to run it once immediately withoutwaiting 3 seconds
displayPortfolio(assets)


