// ADD CODE HERE
// const intersection = (arr) => {
//   const numOfArrays = arr[0].length
//   const obj = {}

//   arr[0].forEach((arr) => {
//     arr.forEach((ele)=> {

//       if(obj[ele] === undefined){
//         obj[ele] = 1
//       }
//       else{
//         obj[ele] = obj[ele] + 1
//       }
//     })
//   })
//   return Object.keys(obj).filter((ele)=> obj[ele] === numOfArrays).map((ele) => Number(ele))
// }

const intersection = (arr) => {
  return arr.reduce((acc, currentArray) =>
    acc.filter((element) => currentArray.includes(element))
  );
};

// Uncomment these to check your work!
const arr1 = [5, 10, 15, 20];
const arr2 = [15, 88, 1, 5, 7];
const arr3 = [1, 10, 15, 5, 20];
console.log(intersection([arr1, arr2, arr3])); // should log: [5, 15]
