import { assets } from "./data.js";

console.log("--- Sentinel Portfolio Tracker Initialized ---");

function displayPortfolio(myArray) {
  myArray.forEach((asset) => {
    //Date() constsructor for current time stamp
    time = new Date().toLocaleTimeString();
    // const name = asset.name
    // const ticker = asset.ticker
    // const price = asset.price
    // const purchasePrice = asset.purchasePrice
    // But b/c asset is an object so I can destructure it but assets is a list
    const { name, ticker, price, purchasePrice } = asset
    
    
  });
}

// displayPortfolio(assets)


