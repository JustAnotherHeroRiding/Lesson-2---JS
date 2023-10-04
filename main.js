const { over, last, first } = require("lodash");

function itemExistsInArray(array, item) {
  // for(let element of array) {
  //    if(element.toLowerCase() === item.toLowerCase()) {
  //     return true;
  //    }
  // }
  // let result = array.find(element => element === item);
  //   let result = array.indexOf(item);
  // return array.some((element)=> {
  //     //
  //     //
  //     //
  //     //
  //     return element
  // });
  //console.log(result);
  //   return result !== -1
  /* if (result !== -1) {
    return true;
  } else {
    return false;
  }
 */
}

// const myArray = ["Angel", "Kiko", "Marko"];

// const exists = itemExistsInArray(myArray, "Kiko");

// console.log(`Item kiko ` + (exists ? "exists" : "does not exists") + " in array");

// const printWord = word => word.toUpperCase();

// const numbers = [1,2,3,9,5,7,6];

// numbers.sort((a,b) => {
//     console.log(a,b);
//     return a -b;
// });

// write a function that checks if all elements in array are sorted in asc order
// function checkElements(array) {
//     for(let i =0;i<array.length - 1;i++) {
//         if(array[i] > array[i+1]) {
//             return false;
//         };
//     }
//     return true;
// }

// write a function to shift elements in array by 1 or n places :)

// [1, 2, 3] => [3,1,2]

// a = 1, b = 2, c = 3
// temp = b
// b = a
// b = c
// c = temp
// a = b
// [1,2,3] => [3,2,1]
// [1,2,3] => [1,1,3]
// 1,2 3 => 3 1,2

/* function shift(array) {
    let nextElement = array[0];
    let firstElement = array[0];
    for(let i=1;i<array.length - 1;i++) {
        nextElement = array[i+1];
        array[i+1] = nextElement;
        console.log(nextElement);
    }
    console.log(array);
} */

// for homework

function shift(array) {
  let lastElement = array[array.length - 1];
  // let firstElement = array[0];
  let temp = array[0];
  let currentElement;

  for (let i = 0; i < array.length - 1; i++) {
    currentElement = temp;
    temp = array[i + 1];
    array[i + 1] = currentElement;
  }
  array[0] = lastElement;
  console.log(array);
}

//shift([1, 2, 3, 4, 5, 6]);

//let array = [1, 2, 3, 4, 5, 6];
// Angel's Version
function shiftAngel(array) {
  let temp = array[0];
  for (let i = 1; i < array.length - 1; i++) {
    let swap = array[i];
    array[i] = temp;
    temp = swap;
  }

  array[0] = array[array.length - 1];
  array[array.length - 1] = temp;
  return array;
}

//console.log(shiftAngel(array));

// Shift Version Two
// Add an n parameter to the function and shift
// the elements n places to the right.
// If this overflows, start counting from 0 again.

// If n = 2
// [1,2,3,4,5,6] => [5,6,1,2,3,4]

// If n = 10

// [1,2,3,4,5,6] => [3,4,5,6,1,2]

// console.log([1,2,3,4,5,6].map((element) => element + 3));
// console.log([1,2,3,4,5,6].filter((element) => element < 3));

// Let's sketch it out
// If we have an array of [1,2,3,4,5,6] and n = 2

// temp = array[0]
// After one loop it will be [1,2,1,4,5,6]
// We need to store array[i + n] where i = 0 and n = 2 in a temp variable as it will be lost

// After the second loop it will be [1,2,1,2,4,5,6]
// array[i] where i = 1 is shifted 2 places
// our previous temp is 3, but this not not used now
// if we save the current temp which is 4, it will make us lose the 3 again
// This will cause us to start working with the shifted elements instead of the original array order

// Do i need an n amount of temp variables?

// After the third loop it should be [1,2,1,2,3,6]
// Here we are taking the temp from the first loop which is 3
// But we also need to save the temp from the second loop is is 4

// After the fourth loop it should be [1,2,1,2,3,4]

// After the fourth loop it should be [5,2,1,2,3,4]

// After the fifth loop it should be [5,6,1,2,3,4]

let array = [1, 2, 3, 4, 5, 6];

function shiftN(array, n) {
  let temp = array[0];
  let temp2 = array[1];
  let length = array.length;
  n = n % length;
  console.log(n)
  let swap;
  // Last Element will always be the element that is n spaces before it
  // With an array of [1,2,3,4,5,6] the last element will always be 4 if n = 2
  // If n is greater than the array length we need to handle the situation
  let lastElement = array[length - 1 - n];
  // The first element will be always the last element if the n is 1,so this is one element after the last element
  // With an array of [1,2,3,4,5,6] the last element will be 5
  let firstElement;
  if ((n == 0)) {
    firstElement = array[length - 1];
  } else {
    firstElement = array[length - n];
  }


  for (let i = 0; i < length - 1; i++) {
    let index = (i + n) % length;

    swap = array[index];
    //  console.log(temp);
  
    array[index] = temp;
    temp = swap;
  }
  // This will always take care of the last and first elements
  array[0] = firstElement;
  array[array.length - 1] = lastElement;
  return array;
}

console.log(shiftN([1, 2, 3, 4, 5, 6], 2));

/* const test = {
  name: "Marko",
  age: 20,
  showAge: () => console.log(test.age),
}; */

// object.printAge = (object) => {
//     console.log(object.age);
//     // console.log(this.age);
// }

//test.showAge();
