const bitcoinData = [
  {
    date: "2015-04-18",
    "txVolume(USD)": 157492272.971,
    txCount: 100200,
    "marketcap(USD)": 3134170000,
    "price(USD)": 222.85,
    "exchangeVolume(USD)": 12939000,
    generatedCoins: 3475,
    fees: 13.93849707,
    activeAddresses: null,
  },
  {
    date: "2015-04-19",
    "txVolume(USD)": 169459021.072,
    txCount: 89817,
    "marketcap(USD)": 3143460000,
    "price(USD)": 223.46,
    "exchangeVolume(USD)": 15021500,
    generatedCoins: 3400,
    fees: 12.76157048,
    activeAddresses: null,
  },
  {
    date: "2015-04-20",
    "txVolume(USD)": 250840943.432,
    txCount: 110799,
    "marketcap(USD)": 3132400000,
    "price(USD)": 222.61,
    "exchangeVolume(USD)": 18364700,
    generatedCoins: 3925,
    fees: 16.16074129,
    activeAddresses: null,
  },
  {
    date: "2015-04-21",
    "txVolume(USD)": 231362417.845,
    txCount: 114532,
    "marketcap(USD)": 3161520000,
    "price(USD)": 224.62,
    "exchangeVolume(USD)": 24978000,
    generatedCoins: 4000,
    fees: 15.87430391,
    activeAddresses: null,
  },
  {
    date: "2015-04-22",
    "txVolume(USD)": 303780692.336,
    txCount: 114457,
    "marketcap(USD)": 3316990000,
    "price(USD)": 235.6,
    "exchangeVolume(USD)": 23847900,
    generatedCoins: 3800,
    fees: 16.25285687,
    activeAddresses: null,
  },
  {
    date: "2015-04-23",
    "txVolume(USD)": 198386846.257,
    txCount: 105589,
    "marketcap(USD)": 3296060000,
    "price(USD)": 234.05,
    "exchangeVolume(USD)": 17036000,
    generatedCoins: 3275,
    fees: 14.74480878,
    activeAddresses: null,
  },
  {
    date: "2015-04-24",
    "txVolume(USD)": 272398735.869,
    txCount: 112613,
    "marketcap(USD)": 3323830000,
    "price(USD)": 235.97,
    "exchangeVolume(USD)": 21448700,
    generatedCoins: 3150,
    fees: 16.74613906,
    activeAddresses: null,
  },
  {
    date: "2015-04-25",
    "txVolume(USD)": 210448635.714,
    txCount: 100599,
    "marketcap(USD)": 3257850000,
    "price(USD)": 231.24,
    "exchangeVolume(USD)": 13957200,
    generatedCoins: 3825,
    fees: 99.73259827,
    activeAddresses: null,
  },
  {
    date: "2015-04-26",
    "txVolume(USD)": 209635549.74,
    txCount: 92380,
    "marketcap(USD)": 3190790000,
    "price(USD)": 226.41,
    "exchangeVolume(USD)": 28943700,
    generatedCoins: 3825,
    fees: 13.22819741,
    activeAddresses: null,
  },
  {
    date: "2015-04-27",
    "txVolume(USD)": 263484670.008,
    txCount: 110005,
    "marketcap(USD)": 3093200000,
    "price(USD)": 219.43,
    "exchangeVolume(USD)": 38574000,
    generatedCoins: 3400,
    fees: 15.15137067,
    activeAddresses: null,
  },
  {
    date: "2015-04-28",
    "txVolume(USD)": 266033727.778,
    txCount: 113638,
    "marketcap(USD)": 3228470000,
    "price(USD)": 228.97,
    "exchangeVolume(USD)": 21469200,
    generatedCoins: 3750,
    fees: 16.03122042,
    activeAddresses: null,
  },
  {
    date: "2015-04-29",
    "txVolume(USD)": 264200418.561,
    txCount: 118296,
    "marketcap(USD)": 3181700000,
    "price(USD)": 225.59,
    "exchangeVolume(USD)": 18936500,
    generatedCoins: 3350,
    fees: 17.36232648,
    activeAddresses: null,
  },
  {
    date: "2015-04-30",
    "txVolume(USD)": 239909582.364,
    txCount: 111099,
    "marketcap(USD)": 3183860000,
    "price(USD)": 225.69,
    "exchangeVolume(USD)": 33818600,
    generatedCoins: 3200,
    fees: 16.08550077,
    activeAddresses: null,
  },
];

const totalCoins = bitcoinData.reduce((total, item) => {
  console.log(total);
  return total + item.generatedCoins;
}, 0);

console.log(totalCoins);

// const totalGeneratedCoins = bitcoinData.reduce(
//   (total, item) => total + item.generatedCoins,
//   0
// );

// console.log(totalGeneratedCoins);

function dayMapper(arr, property1, property2) {
  const resultsArray = bitcoinData.map((dataObject) => {
    const resultsObject = {};

    if (dataObject[property1]) {
      resultsObject[property1] = dataObject[property1];
    }
    if (dataObject[property2]) {
      resultsObject[property2] = dataObject[property2];
    }
    return resultsObject;
  });
  return resultsArray;
}

console.log(dayMapper(bitcoinData, "date", "price(USD)"));

// function reducer(acc, cur, idx) {
//   // console.log(`acc is: ${acc}`);
//   // console.log(`cur is: ${cur}`);
//   const returns = acc + cur["generatedCoins"];
//   // console.log(`returns is ${returns}`);
//   return returns;
// }

// bitcoinDataExample.reduce(reducer, 0);

// console.log(bitcoinDataExample.reduce(reducer));

// bitcoinData
// const array = [15, 16, 17, 18, 19];

// function reducer(accumulator, currentValue, index) {
//   const returns = accumulator + currentValue;
//   console.log(
//     `accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`,
//   );
//   return returns;
// }

// array.reduce(reducer);

// {
//   "date": "2015-04-30",
//   "txVolume(USD)": 239909582.364,
//   "txCount": 111099,
//   "marketcap(USD)": 3183860000,
//   "price(USD)": 225.69,
//   "exchangeVolume(USD)": 33818600,
//   "generatedCoins": 3200,
//   "fees": 16.08550077,
//   "activeAddresses": null
// }

// const counter = bitcoinData.reduce((acc, cur) => {
//   if(cur["price(USD)"] > 100) acc++
//   return acc
// },0)
// console.log(counter)

// const counter = bitcoinData.reduce((acc, cur) => cur["price(USD)"] > 100 ? acc + 1 : acc, 0);

// console.log(counter)

// const newArray = []

// function findDays () {

//   for(let i = 0; i < bitcoinData.length; i++){
//     // console.log(bitcoinData[i]["price(USD)"])
//     if(bitcoinData[i]["price(USD)"] > 100){
//       newArray.push(bitcoinData[i])
//     }
//   }
// }

// findDays()

// console.log(newArray.length)

// const feeAverage = Math.floor(bitcoinData.reduce( (acc, cur) => {
//   return acc + cur["fees"]
// }, 0) / bitcoinData.length);

// console.log(feeAverage);

// let sum = 0;
// for (let idx = 0; idx < bitcoinData.length; idx++) {
//   sum += bitcoinData[idx]["fees"];
//
// console.log(sum);

// function(){
//   return 'hi'
// }

// const bitcoinDataExample = [
//   {
//     "date": "2015-04-28",
//     "txVolume(USD)": 266033727.778,
//     "txCount": 113638,
//     "marketcap(USD)": 3228470000,
//     "price(USD)": 228.97,
//     "exchangeVolume(USD)": 21469200,
//     "generatedCoins": 3750,
//     "fees": 16.03122042,
//     "activeAddresses": null
//   },
//   {
//     "date": "2015-04-29",
//     "txVolume(USD)": 264200418.561,
//     "txCount": 118296,
//     "marketcap(USD)": 3181700000,
//     "price(USD)": 225.59,
//     "exchangeVolume(USD)": 18936500,
//     "generatedCoins": 3350,
//     "fees": 17.36232648,
//     "activeAddresses": null
//   },
//   {
//     "date": "2015-04-30",
//     "txVolume(USD)": 239909582.364,
//     "txCount": 111099,
//     "marketcap(USD)": 3183860000,
//     "price(USD)": 225.69,
//     "exchangeVolume(USD)": 33818600,
//     "generatedCoins": 3200,
//     "fees": 16.08550077,
//     "activeAddresses": null
//   }
// ];

// const data = bitcoinData.map((dataObj) => )

//
// if(dataObject[property1]) {}

function dayMapper(arr, property1, property2) {
  const resultsArray = arr.map((dataObject) => {
    if (
      !Object.keys(dataObject).includes(property1) &&
      !Object.keys(dataObject).includes(property2)
    ) {
      return {};
    }
    const resultsObject = {};

    if (dataObject[property1]) {
      resultsObject[property1] = dataObject[property1];
    }
    if (dataObject[property2]) {
      resultsObject[property2] = dataObject[property2];
    }
    return resultsObject;
  });
  return resultsArray.filter((obj) => Object.keys(obj).length > 0);
}

// function dayMapper(arr, property1, property2) {
//   const result = [];
//   for (const obj of arr) {
//     const mappedObj = {};
//     if (property1 in obj) {
//       mappedObj[property1] = obj[property1];
//     }
//     if (property2 in obj) {
//       mappedObj[property2] = obj[property2];
//     }
//     if (Object.keys(mappedObj).length > 0) {
//       result.push(mappedObj);
//     }
//   }
//   return result.filter((obj) => Object)
// }

// console.log(dayMapper(bitcoinData, 'date', 'price(USD)'))
console.log(dayMapper(bitcoinData, "nothere", "gone"));

// let datePriceData = [];
// datePriceData.push(
//     bitcoinData.map((dataObject) => {
//         return {
//             date: dataObject.date,
//             price: dataObject['price(USD)'],
//         };
//     })
// );
// console.log(datePriceData);
