const { over } = require("lodash");

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

shift([1, 2, 3, 4, 5, 6]);

// console.log([1,2,3,4,5,6].map((element) => element + 3));
// console.log([1,2,3,4,5,6].filter((element) => element < 3));

const test = {
  name: "Marko",
  age: 20,
  showAge: () => console.log(test.age),
};

// object.printAge = (object) => {
//     console.log(object.age);
//     // console.log(this.age);
// }

//test.showAge();
