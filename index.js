//How would you add a console to the below expression of the map,

const names = ["Ben", "Alex", "Lynn", "Tyler"];
const func = (name) => {
  //   console.log(name);
  return {
    name,
    company: "uidotdev",
  };
};
const mappedNames = names.map((name) => func(name));

// q2 Guess OP
let a = 0;
const b = [1, 2, 3, 4, 5].map((x) => ((a += x), x * x));
// console.log(a, b);

//q3 Find Bug Feb 13, 2023, 10:48 PM
// arrow function doesn't have their own this
// we can't add prototype function to an arrow function
// we can't use new keyword with an arrow function

// const Animal = (name, type) => {
//   this.name = name;
//   this.type = type;
//   this.age = 0;
// };

// Animal.prototype.birthday = function () {
//   this.age++;
// };

// const leo = new Animal("Leo", "Lion");

// q4 recreate below range function
// Jan 30, 2023, 8:42 PM
// range(0, 5) // [0, 1, 2, 3, 4, 5]
// range(3, 9, 3) // [3, 6, 9]
// range(10, 50, 10) // [10, 20, 30, 40, 50]

// const range = (start, end, incremental = 1) => {
//   let arr = [];
//   for (let value = start; value <= end; value += incremental) {
//     arr.push(value);
//   }
//   return arr;
// };
// to go through
const range = (start, stop, step = 1) => {
  return Array.from(
    { length: (stop - start) / step + 1 },
    (value, i) => start + i * step
  );
};
// console.log(range(10, 50, 10));

// q5 Jan 20, 2023, 2:19 AM
// How would you remove the duplicate elements from this array?

const list = [
  { name: "John" },
  { name: "Sara" },
  { name: "Sara" },
  { name: "Lynn" },
  { name: "Jake" },
];
// console.log(list.filter((item) => !list.includes(item.name)));

// reducer Tue, Jan 17, 12:58 AM
// const nums = [2,4,6]

// const reducer = (prev, current) => {
//   console.count('invoked')
//   return prev + current
// }

// nums.reduce(reducer)

function getEvenNumbers(numbers) {
  let evenNumbers = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evenNumbers.push(numbers[i]);
    }
  }

  return evenNumbers;
}
// console.log(getEvenNumbers([1, 2, 3, 4, 5, 6]));

// Mon, Dec 5, 2022, 9:43 PM
// for (var i = 0; i < 5; i++) {
//   setTimeout(() => console.log(i), 1000);
// }

//
let i = 0;

function x() {
  i++;
  return 10;
}

i += x();

// console.log(i);

// Nov 7, 2022, 8:39 PM
function calcPrice(price, tax, discount) {
  tax = tax || 0.05;
  discount = discount || 0;
  console.log(tax, discount);

  return price - price * discount + price * tax;
}
// console.log(calcPrice(100));

//
// arr=[1,2,4,0]
function addAndSort(array, element) {
  array.push(element); //just returns the length, not the length
  // so array.push().sort() doesnt work hence
  // or concat the element to array like below
  //   return array.concat(element).sort();
  return array.sort();
}
// console.log(addAndSort([1, 2, 4, 0], 9));

// Mon, Oct 24, 2022, 7:25 PM
const petName = "Leo";
const placeholder = "{NAME}";
const reminderTemplate =
  "{NAME} is due for another visit. Please call us so we can set up a new appointment. We look forward to seeing you and {NAME} soon.";
// String.prototype.replace only replaces the first occurrence found in the string.
// const reminder = reminderTemplate.replace(placeholder, petName);
const reminder = reminderTemplate.replaceAll(placeholder, petName);
// console.log(reminder);

// Mon, Oct 17, 2022, 9:30 PM
// calcualte sum
const sum = (prev, curr) => {};
// the below code doesn''t work, why???
function addTriple(inputs) {
  let sum = 0;
  inputs.map((item) => {
    if (item === undefined) {
      sum += item;
    }
  });
  return sum;
}
// console.log(addTriple([1, 2]));

// Oct 3, 2022, 9:03 PM

const user = {
  name: "Tyler",
  age: 32,
  greet() {
    return `Hello, my name is ${this.name}`;
  },
  mother: {
    name: "Jan",
    greet() {
      return `Hello, my name is ${this.name}`;
    },
    // greet: function () { // function can be kept also as key value pair
    //   return `Hello, my name is ${this.name}`;
    // },
    // greet: () => {//arrow functions doesnt have this
    //   return `Hello, my name is ${this.name}`;
    // },
  },
};

// console.log(user.mother.greet());
// console.log(user.greet());

// Mon, Sep 26, 2022, 10:40 PM

const newsletter = "Bytes";
const tagline = "Your weekly dose of JavaScript";
[(newsletter, tagline)].forEach((el) => console.log(el));
