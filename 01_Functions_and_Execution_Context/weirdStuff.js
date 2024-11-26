// function addingAllTheWeirdStuff(array1, array2){

//   const isOver20 = array2.filter((ele) => ele > 20).length > 0

//   if(isOver20){

//   	array1.forEach((value, index, array) => {
//   	array[index] = value + 1;
//     });
//   }

//   const allTheOdd = array2.filter((ele)=> ele % 2 !== 0).reduce((acc, curr)=> acc + curr, 0)
//   const allTheEven = array2.filter((ele)=> ele % 2 == 0).reduce((acc, curr)=> acc + curr, 0)

//   for(let i = 0; i< array1.length; i++){
//     if(array1[i] < 10){
//       array1[i] = array1[i] + allTheOdd
//     }
//     else if(array1[i] > 10){
//       array1[i] = array1[i] + allTheEven
//     }
//   }
//   return array1
// }

function addingAllTheWeirdStuff(array1, array2) {
  // Check if any element in array2 is greater than 20
  const isOver20 = array2.some((ele) => ele > 20);

  // If so, increment all elements in array1 by 1
  if (isOver20) {
    array1 = array1.map((value) => value + 1);
  }

  // Calculate the sum of odd and even numbers in array2
  let oddSum = 0,
    evenSum = 0;
  for (let num of array2) {
    if (num % 2 !== 0) {
      oddSum += num;
    } else {
      evenSum += num;
    }
  }

  // Modify elements in array1 based on conditions
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] < 10) {
      array1[i] += oddSum; // Add sum of odd numbers if element is < 10
    } else if (array1[i] > 10) {
      array1[i] += evenSum; // Add sum of even numbers if element is > 10
    }
  }

  return array1;
}

// Uncomment these to check your work!
console.log(addingAllTheWeirdStuff([1, 3, 5, 17, 15], [1, 2, 3, 4, 5])); // expected log [10, 12, 14, 23, 21]
console.log(addingAllTheWeirdStuff([1, 3, 5, 17, 15, 1], [1, 2, 3, 4, 5, 22])); // expected log [11, 13, 15, 46, 44, 11]
