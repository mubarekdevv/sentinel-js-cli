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
// setInterval(function(){
//     displayPortfolio(assets)
// }, 3000)
//the ff is to run it once immediately withoutwaiting 3 seconds
// displayPortfolio(assets)

console.clear();
// console.log("📡 Connecting to secure Sentinel Server...");

// setTimeout(function(){
//     console.log("✅ Connection Established. Fetching portfolio...");

//     setTimeout(function(){
//         displayPortfolio(assets)

//         setInterval(function(){
//             displayPortfolio(assets)
//         },5000)
//     }, 1500)
// },2000)
console.log("📡 Attempting to connect to server...");
const startDashboard = setTimeout(()=> {
  console.log("✅ Data Loaded!");
}, 3000)

const connectionStable = false

if (!connectionStable) {
  console.log("⚠️ Connection unstable! Aborting launch...");
  clearTimeout(startDashboard)

  console.log("🛑 Dashboard start cancelled.");
}

function validateData(data) {
  if (!data || data.length === 0) {
    throw new Error("Critical Failure: No asset data found in data.js");
  }
  console.log("Data integrity check passed");
}

try {
  validateData(assets);
  console.log("Starting Sentinel...");
} catch (error) {
  console.log(error.message);
  console.log("Please fix data.js file to continue");
}

function displayByMode(data, mode) {
  console.clear();
  console.log(`--- Sentinel Dashboard [Mode: ${mode}] ---`);console.log(`--- Sentinel Dashboard [Mode: ${mode}] ---`);

  data.forEach(asset => {
    const { name, ticker, price } = asset;
  })
}