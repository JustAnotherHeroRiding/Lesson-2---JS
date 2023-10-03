## Array Methods


#### Find
	let result = array.find(element => element === item)
This will return the result that matches an item that we are looking for
#### Some
	let result = array.some(element => element === item.type)
This will return all the elements that match the item type
#### indexOf
	let result = array.indexOf(item);
This will return -1 if the item does not exist, and the index if it does

## Inline transformation

	const printWord = word => word.toUpperCase();

## Sorting Arrays 

	const numbers = [1,2,3,9,5,7,6];

	numbers.sort((a,b) => {
	    console.log(a,b);
	    return a - b;
	});

This will sort the numbers from the smallest to the greatest
If no a and b are passed, then it will always be in ascending order, or we can use `return a - b`

If the returned value is > 0, then the order will be [b, a]
If the returned value is < 0 then the order will be [a, b]
If they are equal, then it remains the same

### Sorting Walkthrough

1. Initial Comparison (a=1, b=2):
    
    - Since `a - b` is negative (-1), the order remains [1, 2].
2. Next Comparison (a=2, b=3):
    
    - Again, `a - b` is negative (-1), so the order remains [1, 2, 3].
3. Another Comparison (a=3, b=9):
    
    - This time, `a - b` is negative (-6), so the order becomes [1, 2, 3, 9].
4. Continuing (a=9, b=5):
    
    - Here, `a - b` is positive (4), so the order becomes [1, 2, 3, 5, 9].
5. Another Comparison (a=9, b=7):
    
    - `a - b` is positive (2), so the order remains [1, 2, 3, 5, 7, 9].
6. Final Comparison (a=9, b=6):
    
    - `a - b` is positive (3), so the order becomes [1, 2, 3, 5, 6, 7, 9].



## Objects

```
// Creating an Object
const person = {
  name: "John",       // Key: "name", Value: "John"
  age: 30,            // Key: "age", Value: 30
  isStudent: false    // Key: "isStudent", Value: false
};

// Adding Methods to an Object
person.greet = function() {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

// Accessing Object Properties
console.log(person.name);          // Accessing the 'name' property: "John"
console.log(person.age);           // Accessing the 'age' property: 30
console.log(person.isStudent);     // Accessing the 'isStudent' property: false

// Calling an Object's Method
person.greet();  // Calling the 'greet' method to display a greeting message```
```


- In JavaScript, objects are similar to dictionaries in Python. They consist of key-value pairs, where each key is associated with a value.
- You can define objects using curly braces `{}` and populate them with properties (keys) and their corresponding values.
- Objects can also have methods, which are functions defined within the object.
- You can access object properties by using dot notation (`objectName.propertyName`) or bracket notation (`objectName['propertyName']`).
- In the example, we defined a `person` object with properties like `name`, `age`, and `isStudent`.
- We added a `greet` method to the `person` object, which can be called to display a greeting message using the object's properties.
- Objects are often seen as instances of a class in object-oriented programming, but JavaScript is a prototype-based language, so it doesn't have classes in the traditional sense. Instead, objects can be seen as instances of prototypes or constructor functions.

