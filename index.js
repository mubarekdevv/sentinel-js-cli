// import { assets } from "./data.js";

// console.log("--- Sentinel Portfolio Tracker Initialized ---");

// function displayPortfolio(myArray) {
//   myArray.forEach((asset) => {
//     //Date() constsructor for current time stamp
//     const time = new Date().toLocaleTimeString();
//     // const name = asset.name
//     // const ticker = asset.ticker
//     // const price = asset.price
//     // const purchasePrice = asset.purchasePrice
//     // But b/c asset is an object so I can destructure it but assets is a list
//     const { name, ticker, price, purchasePrice } = asset
//     const profitLoss = price - purchasePrice
//     const status = profitLoss >= 0 ? "📈 PROFIT" : "📉 LOSS";
//     console.log(`[${time}] ${name} (${ticker})\nCurrent Price: $${price.toLocaleString()}\nStatus: ${status} ($${profitLoss.toLocaleString()})\n------------------------------------`)

//   });
// }
// //setInterval it takes two parameters andu yehone callback function nw ena it returns what should be done in a given interval which is our second parameter
// //to run our display funciton in an interval of every 3 seconds
// // setInterval(function(){
// //     displayPortfolio(assets)
// // }, 3000)
// //the ff is to run it once immediately withoutwaiting 3 seconds
// // displayPortfolio(assets)

// console.clear();
// // console.log("📡 Connecting to secure Sentinel Server...");

// // setTimeout(function(){
// //     console.log("✅ Connection Established. Fetching portfolio...");

// //     setTimeout(function(){
// //         displayPortfolio(assets)

// //         setInterval(function(){
// //             displayPortfolio(assets)
// //         },5000)
// //     }, 1500)
// // },2000)
// console.log("📡 Attempting to connect to server...");
// const startDashboard = setTimeout(()=> {
//   console.log("✅ Data Loaded!");
// }, 3000)

// const connectionStable = false

// if (!connectionStable) {
//   console.log("⚠️ Connection unstable! Aborting launch...");
//   clearTimeout(startDashboard)

//   console.log("🛑 Dashboard start cancelled.");
// }

// function validateData(data) {
//   if (!data || data.length === 0) {
//     throw new Error("Critical Failure: No asset data found in data.js");
//   }
//   console.log("Data integrity check passed");
// }

// try {
//   validateData(assets);
//   console.log("Starting Sentinel...");
// } catch (error) {
//   console.log(error.message);
//   console.log("Please fix data.js file to continue");
// }

// let userPreference;
// const finalMode = userPreference ?? "SUMMARY";

// function displayByMode(data, mode) {
//   console.clear();
//   console.log(`--- Sentinel Dashboard [Mode: ${mode}] ---`);

//   data.forEach(asset => {
//     const displayName = asset.name || "Unknown Asset";
//     const { name, ticker, price } = asset;

//     switch (mode) {
//       //i.e mode === "TICKER", strict comparison
//       case "TICKER":
//         console.log(`${ticker}: $${price.toLocaleString()}`);
//         break;

//       case "SUMMARY":
//         console.log(`${name} is currently at $${price.toLocaleString()}`);
//         break;

//       case "DETAILED":
//         const { purchasePrice } = asset;
//         const profit = price - purchasePrice;
//         console.log(`
//                 Asset: ${name} (${ticker})
//                 Price: $${price}
//                 Profit/Loss: $${profit}
//                 --------------------------`);
//         break;

//       default:
//         // console.log("⚠️ Unknown view mode selected.");
//         console.log("⚠️ Mode not supported.");
//     }

//   });
// }

// function summarizePortfolio(data) {
//   let totalValue = 0;
//   let bestAssset = data[0]; // Start by assuming the first one is best

//   data.forEach(asset => {
//     totalValue += asset.price;

//     //Logic to find the highest priced asset
//     if (asset.price > bestAssset.price) {
//       bestAssset = asset;
//     }
//   })

//   //Destructuring the best asset
//   const {name, price} = bestAssset;

//   console.log(`
//     === 📊 QUICK STATS ===
//     Total Portfolio Value: $${totalValue.toLocaleString()}
//     Highest Value Asset: ${name} ($${price.toLocaleString()})
//     =======================
//     `);
// }

// //call it before my main display logic
// summarizePortfolio(assets)
// // displayByMode(assets, finalMode);

// --- 1. IMPORTS ---
import { assets } from "./data.js";

// --- 2. DATA VALIDATION FUNCTION ---
/**
 * Checks if the data exists and is not empty.
 * Uses 'throw' to trigger an emergency stop if data is bad.
 */
function validateData(data) {
  if (!data || data.length === 0) {
    // 'new Error' creates the object, 'throw' sends it to the catch block
    throw new Error("Critical Failure: No asset data found in data.js");
  }
  console.log("✅ Data integrity check passed.");
}

// --- 3. ANALYTICS FUNCTION ---
/**
 * Calculates total portfolio value and finds the top asset.
 * Demonstrates the 'Accumulator' pattern and Object Destructuring.
 */
function summarizePortfolio(data) {
  let totalValue = 0;
  let bestAsset = data[0]; // Start by assuming the first index is the best

  data.forEach((asset) => {
    totalValue += asset.price; // Adding up all prices

    // Compare current asset price to our current 'best'
    if (asset.price > bestAsset.price) {
      bestAsset = asset;
    }
  });

  const { name, price } = bestAsset; // Pull out names for the final log

  console.log(`
    === 📊 QUICK STATS ===
    Total Portfolio Value: $${totalValue.toLocaleString()}
    Highest Value Asset: ${name} ($${price.toLocaleString()})
    =======================
    `);
}

// --- 4. DISPLAY ENGINE (SWITCH CASE) ---
/**
 * Handles different UI views based on the 'mode' parameter.
 * Demonstrates: Default parameters (??), Logic OR (||), and Switch statements.
 */
function displayByMode(data, mode) {
  console.log(`--- Sentinel Dashboard [Mode: ${mode}] ---`);

  data.forEach((asset) => {
    // Fallback: if name is missing, use "Unknown Asset"
    const displayName = asset.name || "Unknown Asset";
    const { ticker, price, purchasePrice } = asset;
    const time = new Date().toLocaleTimeString();

    switch (mode) {
      case "TICKER":
        console.log(`[${time}] ${ticker}: $${price.toLocaleString()}`);
        break;

      case "SUMMARY":
        console.log(
          `${displayName} is currently at $${price.toLocaleString()}`,
        );
        break;

      case "DETAILED":
        const profit = price - purchasePrice;
        const status = profit >= 0 ? "📈 PROFIT" : "📉 LOSS";
        console.log(`
                Asset: ${displayName} (${ticker})
                Price: $${price.toLocaleString()}
                Status: ${status} ($${profit.toLocaleString()})
                --------------------------`);
        break;

      default:
        console.log("⚠️ Mode not supported.");
    }
  });
}

// --- 5. MAIN EXECUTION (THE STARTING LINE) ---

console.clear();
console.log("--- Sentinel Portfolio Tracker Initialized ---");

try {
  // Phase 1: Validate the imported data
  validateData(assets);

  // Phase 2: Setup Preferences
  let userPreference;
  const finalMode = userPreference ?? "DETAILED"; // Use ?? to set a default if undefined

  // Phase 3: Simulate Server Connection (Asynchronous Simulation)
  console.log("📡 Attempting to connect to server...");

  const connectionStable = true; // Set to false to test the 'clearTimeout'

  const startDashboard = setTimeout(() => {
    console.clear();
    console.log("✅ Connection Established!");

    // Show Stats first
    summarizePortfolio(assets);

    // Then start the live interval
    setInterval(() => {
      console.clear();
      summarizePortfolio(assets);
      displayByMode(assets, finalMode);
    }, 5000);
  }, 2000);

  // Emergency Stop Logic
  if (!connectionStable) {
    clearTimeout(startDashboard);
    console.log("🛑 Connection unstable! Dashboard launch aborted.");
  }
} catch (error) {
  // If anything fails in the 'try', this runs
  console.log("❌ ERROR:", error.message);
  console.log("💡 Please fix your data.js file to continue.");
}

function logAnswer(answer, points) {
  console.log(
    `The answer is ${answer} of course! If you got that right, giver yourself ${points} points.`,
  );
}

console.log('What is the capital of Peru?')
/*
Challenge:
    1. After a 3 second delay, call the 'logAnswer' function.
    2. Make sure 'logAnswer' has all the info it needs. 
       The answer is 'Lima' and it's 10 points for getting it right. 
*/
const questionTimer = setTimeout(logAnswer, 3000, "Lima", 10);

document.getElementById("stopii").addEventListener('dblclick', function(){
    clearTimeout(questionTimer)
    
})