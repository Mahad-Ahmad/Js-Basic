// BASICS

// Variables: by default type is undefined.

let firstName = "Mahad";
let lastName = "Ahmad";

console.log(firstName, lastName);

// Constant: which cant be changed by any means.

const age = "12";
// age = 13; this will give a error, cant change.
console.log(age);

// Primitive types:

let NAME = "Mahad"; // string literal.
let AGE = 13; // number literal.
let isSelect = true; // boolean literal.
let option = null; // its type is object [refrence type].
// Used explicity to clear the of value of variables, like user have-
// not select anything then its value is null, in future if he selec-
// ted red then change it to red.
let SIZE = undefined;
// Its value is undefined and its type is also undefined.

// [Refrence type] Object:

let person = {
  name: "Mahad",
  age: 22,
};

console.log(person);

// Dot notation, for upgrading values.
person.age = "23";

// Bracket notation.
person["name"] = "Mary";
// Bracket notation has its own uses like in selecting name we dont-
// know which user will selected that can only known by run time, and-
// we have another varible like selection that can determine the tar-
// get property that user is going to access and can only be changed-
// by run time.

// Arrays:

let selectColors = ["red", "blue"];

console.log(selectColors);
// Each elements in array has its own index which tells the position-
// of an element in array.

// For excess a element.
console.log(selectColors[1]);

// For adding an element.
selectColors[2] = "green";
console.log(selectColors);

// We can store diff types of objects in an array.
selectColors[3] = "2";
console.log(selectColors); // 3 strings 1 number.

// Array is an object which has its own properties just like other-
// objects which can check by dot notation, these are assigned aut-
// omatically.
console.log(selectColors.length);

// Functions [performing a task]:

function greet() {
  console.log("hello world");
}
greet(); // calling this fn. as a statement.

// Functions can have inputs which change how this behaves.
function ME(name) {
  console.log("hello " + name);
  // For space just give space to qoute.
}
ME("Mahad");
ME("Ahmad"); // reuse this fn for diff output.

// Function can have multiple parameters.
function me(name, laastName) {
  console.log("hello " + name + " " + laastName);
}
me("Mahad", "Ahmad");

// Types of Function:

// Calculate a value.
function square(number) {
  return number * number;
}
console.log(square(2));
// Just need square of 2 otherwise varibale can be created for this value.

// Initialize variable for square value.
let num = square(2);
console.log(num); // if we just not want a square of 2.

// OPERATORS:

// Arithmetic operators:

let x = 10;
let y = 2;
console.log(x + y);
console.log(x - y);
console.log(x * y); // mutltiple.
console.log(x / y); // division.
console.log(x % y); // reminder of division.

// 2 additional arithmetic operators.

// Increment operator:
console.log(++x); // first add one then display.
console.log(x++); // first display declared value then at next call-
// one is added.
console.log(x);
console.log(x);
// Decrement operators:
console.log(--x);
console.log(x--);

// Assingment operator:

let z = 10;
z++;
z = z + 1; // Both are same but break when need increment of 5.
// plus 5 increment.
z = z + 5;
z += 5; // Addition operator.
z *= 3; // Multiplication operator [x=x*3] same but not useable.
// all the arithmetic operator have combination with this operator.
console.log(z);

// Comparison operators:

let a = 2;
// Rational operators.
console.log(a > 0); // boolean answer.
console.log(a >= 2);
console.log(a < 2);
console.log(a <= 2);

// Equality operators:
// Strict Equality operator.
// This operator ensures both these value have same type and same value.
console.log(a === 2); // equal.
console.log(a !== 2); // not equal.
console.log("a" === 2); // comparing a 'string' with number. False

// Equality operators:

// Lose equality operator.
// Dont care about type matching if types dont match it will convert-
// the type of right same to the left and then only check the value-
// if same then true otherwise false.
let name = "Ahmad";
console.log(1 == 1); // both have same value.
console.log("1" == 1); // number to string, then value which is same.
console.log(true == 1); // number to boolean.
console.log(name == "Ahmad");

// Ternary operators: (conditional operators)

// If a customer has more than 100 points they are gold customer-
// otherwise they are silver customer.
let points = 110;
let type = points > 100 ? "gold" : "silver";
// ? is used to give type varibale a different value depending on-
// the result of boolean.
console.log(type);

// Logical operators: (with booleans)

// Use this operators to make decision based on multiple condition.
// Three types of logical operators AND OR NOT.
// Logical AND (&&):
// Return true if both are true.
console.log(true && true);
// If either of its operands is false we get false.
// Real world use as if bank wants to approve loan if a person have-
// both the high income, and good credit score, then they are elig-
// ible for loan.
let highIncome = true;
let goodCreditScore = true;
let eligibleForLoan = highIncome && goodCreditScore;
console.log(eligibleForLoan);

// Logical OR (||):
// Returns true if one of the operands is true, no matters which one.
let highIncome1 = false;
let goodCreditScore1 = true;
let eligibleForLoan1 = highIncome1 || goodCreditScore1;
console.log("Eligible", eligibleForLoan1); // Still gets true.

// Logical NOT (!):
// If person is not eligible for loan, we wanna consider this applic-
// ation as refused, so declare another variable.
let applicationRefused = !eligibleForLoan1;
console.log("Application refused", applicationRefused);
// Whatever we give it, it will always give us opposite as in this-
// case we get false as eligibleForLoan1 is true.

// Logical operators: (with non-boolean)

// Result of logical expression is not neccessarily a true or false,-
// its depend on the value of of the operands we have.
false || "Mahad", false || 1;
// In this case our second operand is a string so we get a string-
// back as OR works as one of the operands is true in this case-
// first one is false so it looks at second one.

// When our js engine tries to evalute this expression it looks at-
// each operands, if the operands is not a boolean true or false it-
// will try to interpret it to truthy or falsy.
// So in js we have these value which we refer as FALSY, these are-
// not boolean false, its falsy.

// Falsy:
// Undefined, Null, O, Boolean false, '',  NaN.

// Anything that is not falsy --> Truthy.

// Short-circuiting.
false || 1 || 2;
// In this case we get 1 as when js engine evaluate this expression-
// fisrt it get fasle so it will check next one which is truthy so-
// it provides answer and evaluations stop no matter how many operand-
// we have it will leave all after finding truthy.

// Real world example.
// User has to pick color, or we're going to pick a default color.
// let userColor = 'red';
// If user dont select any color so it will pick a default color.
let userColor = "red";
let defaultColor = "blue";
let currentColor = defaultColor || userColor;
console.log(currentColor);

// BitWise opreators: EXTRA

// Computer binary number system
// BitWise OR (|)
// looks at each of bits in vertical way if either of bit is 1 res-
// ult will be 1, otherwise 0.
// 1 = 00000001
// 2 = 00000010
// 3 R = 00000011 OR
// console.log(1 | 2);

// BitWise AND (&):
// Looks if both of bits are 1 then 1, otherwise 0.
// 1 = 00000001
// 2 = 00000010
// 0 R = 00000000 AND
// console.log(1 & 2);

// Real world Example:
// Imagine we want to implement an access control system, so the user-
// can have READ, WRITE, EXECUTE permission. so we can use 1 byte or-
// 8 bits to determine the kind of information a user can have e-g:
// 00000100 READ    4
// 00000010 WRITE   2
// 00000001 EXECUTE 1
const readPermission = 4;
const writePermission = 2;
const executePermission = 1;

let myPermission = 0; // so i can have more permissions
myPermission = myPermission | readPermission | executePermission;
// OR can add permissions or delete them
// myPermission = myPermission | writePermission;

let message = myPermission & readPermission ? "yes" : "no";
// ANd can check the given permission
// let message = (mypermission & writePermission); no
console.log(message);

// Opreators Precedence:

// So all operators we ve learned earlier, they have its own prece-
// dence which is hard to learn so use parenthesis when working with-
// complex expression just like maths.
let a1 = 2 + 3 * 5;
let b2 = (2 + 3) * 5;
// boths have diff precedence.

// Exercise 1:

let ae = "red";
let be = "blue";

let ce = ae; // value of a is transfer to c.
ae = be; // value of b is transfer to a.
be = ce; // value of c is transfer to b.

// be = [ae, ae = be] [0];

// [ae, be] = [be, ae];

console.log(ae);
console.log(be);

// CONTROL FLOW

// IF else:

// We are going to use exprssions and operators along with conditi-
// onal statements to implement interactivity in our application.

// Imagine we are going to get a current hour and depending on the-
// value we are going to greet the user with different message.
// If hour is b/t 6am and 12pm show Good Morning.
// If hour is b/t 12pm and 6pm show Good afternoon.
// Otherwise Good evening.
let hour = 14;

if (hour >= 6 && hour < 12) {
  console.log("Good Morning");
} else if (hour >= 12 && hour < 18) {
  console.log("Good Afternoon");
} else {
  console.log("Good Evening");
}

// Switch and Case:

// Imagine variable role; which represent the role of a current user-
// we want see if the user is guest or moderator or admin.
let role = "guest";
switch (role) {
  case "guest":
    console.log("Guest User");
    break;

  case "moderator":
    console.log("Moderator User");
    break;

  default:
    console.log("Admin");
}

// Using if else statements:
if (role === "guest") console.log("Guest user");
else if (role === "moderator") console.log("moderator user");
else console.log("Guest user");

// LOOPS:

// Repeating something on the screen just like hello 5 times on screen.
// 5 types of loops.
// For loops, while loops, do while loops, for in loops, for of loops.

// For Loop:
// i is index, loop varible which is the part of the loop variable it-
// self cant be accessble outside the loop.
for (let i = 1; i <= 5; i++) {
  if (i % 2 !== 0) console.log(i);
  // displaying odd no.
  else console.log("Hello World"); // displaying HW where no odd no.
}

// While loop:

// You have to declare variable Externally. Which can be accessble out-
// the loop alse.
// This loop will not be executed if the condition is false.
let i = 0;
while (i <= 5) {
  if (i % 2 !== 0) console.log(i);
  i++;
}

// do While Loop:

// This loop will always be executed at once even if the condition is-
// going to be false, cause the condition in this loop is at the very-
// last and when loop executed it runs the statement first then check-
// the codition if its false then loop stops working.
let i1 = 9;
do {
  if (i1 % 2 !== 0) console.log(i1);
  i++;
} while (i1 <= 5);

// Infinite Loops:

// This will crash the computers browser if you created the infinite-
// loop by skipping increment or providing wrong condition or skipping-
// some thing important.
// for (let i = 1; i <= 5;)
// for (let i = 0; i > 0; i++)

// let i = 0;
// while (i <= 5) {
//     if (i % 2 !==0 ) console.log(i);
//     i{++} missing this
// }

// let i = 0;
// while (true) {
//     if (i % 2 !==0 ) console.log(i);
//     i++:
// }

// let i1 = 9;
// do {
//     if (i1 % 2 !== 0) console.log(i1);
//     i++;
// }  while (true);

// let i1 = 9;
// do {
//     if (i1 % 2 !== 0) console.log(i1);
// }  while (i <= 5);

// For in Loops:

// All the above loops we can repeat something but with these two-
// types For in loops and For of Loop we an use them to iterate over-
// the properties of an object or element in an array.
const info = {
  name: "Ahmad",
  age: 23,
};
for (let key in info) {
  console.log(key, info[key]);
  // Bracket notation for displaying the value of each properties-
  // next to them.
}

const rang = ["red", "green", "blue"];
for (let index in rang) {
  console.log(index, rang[index]);
  // Bracket notation for displaying the value of each properties next-
  // to them.
}

// For of Loop:

// Newer way to iterate over a raise, instead of IN keyword use OF key-
// word, with this for loop we dont have to deal with the index or acce-
// ssing elements by using bracket notation, it will provide items by -
// getting one of item at every iteration.
const rang1 = ["red", "green", "blue"];
for (let color of rang1) {
  console.log(color);
}
// Use For of loop to iterate over the elements or items in an array
// Use For in loop to iterative over the properties of an object.

// Break and Continue:

// These two keywords change the behaviour of loops, all kind of loops.

// Break : sometimes we have to jump out of the loop for some reason -
// at the run time.

// let i = 0;
// while (i <= 10) {
// if (i === 5) break; when i is 5 it will get out of loop.
// console.log(i);
// i++;
// }

// Continue:

// let i = 0;
// while (i <= 10) {
// if (i % 2 === 0) {
// i++
// continue: }
// console.log(i);
// i++;
// }
// We will get just odd no as when i is 2 which is even and it get the-
// if condition true which increment the i and then continue, when js -
// engine sees the continue keyword it will jump to the beginning of the-
// loop and continue its execution in the next iteration and odd no will-
// pass through if condition and console.log shows them.

// EXERCISE 1:

function max(number, number1) {
  if (number < number1) {
    console.log(number1);
  } else console.log(number);
}
max(1, 1);

// let nim = max(12, 15);
// console.log(nim);

// function max1 (a, b) {
//     if(a > b ) return a; always use return key word for getting
//                 value out side of function.
//     return b;
// } sorter way

let nim = max1(17, 15);
console.log(nim);

function max1(a, b) {
  return a > b ? a : b;
} // more shorter way using ternery operator.

// EXERCISE 2:

// let measure = isLandscape(12, 15);
// console.log(measure);

// function isLandscape(width, height){
//     if (width > height) return true;
//     return false;
// } longer method.

console.log(isLandscape(13, 15));

function isLandscape(width, height) {
  return width > height;
  //? true : false; this is poor way of writting the code as there-
  // is no need to explicity return true or false in case.
}

// EXERCISE 3:

const output = fizzBuzz(7);
console.log(output);

function fizzBuzz(input) {
  if (typeof input !== "number") {
    return "NaN";
  }
  if (input % 3 === 0 && input % 5 === 0) {
    return "fizzBuzz";
  }
  if (input % 3 === 0) {
    return "fizz";
  }
  if (input % 5 === 0) {
    return "Buzz";
  }
  return input;
}

// EXERCISE 4:

checkSpeed(13);

function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;
  if (speed < speedLimit + kmPerPoint) {
    console.log("Okay");
    return; // used to remove indentation like else when this part-
    // is true it will leave other part no matter what.
  }
  const points = Math.floor((speed - speedLimit) / kmPerPoint);
  if (points >= 12) console.log("License Suspended");
  else console.log("points", points);
}

// EXERCISE 5:

showNumbers(10);

function showNumbers(limit) {
  for (let i = 0; i < limit; i++) {
    if (i % 2 === 0) console.log(i, "even");
    else console.log(i, "odd");
  }
}
//  const message = (i % 2 ===0) ? 'even' , 'odd';
// console.log(i , message);

// EXERCISE 6:

let myArray1 = [0, 1, 2, null, ""];
console.log(countTruthy(myArray1));

function countTruthy(array) {
  let count = 0;
  for (let value of array) if (value) count++;
  return count;
}
// myArray = [1223, 2, null, '', 2];
//  console.log(count(myArray));

// function count(array) {
//     return array.filter(Boolean);
// } this will give the truthy entries present in the array

// EXERCISE 7:

let movie = {
  title: "a",
  number: 122,
  raing: 7.8,
};

showProperties(movie);

function showProperties(obj) {
  for (let key in obj)
    if (typeof obj[key] === "string") console.log(key, obj[key]);
}

//EXERCISE 8:

console.log(sum(66));

function sum(limit) {
  let sum = 0;

  for (let i = 1; i <= limit; i++) if (i % 3 === 0 || i % 5 === 0) sum += i;

  return sum;
}
// Show that numbers which are multipliers of 3 and 5 instead of their sum.

//EXERCISE 9:

let marks = [90, 90, 90];
console.log(calculateGrade(marks));

function calculateGrade(marks) {
  const average = calculateAverage(marks);
  if (average < 60) return "F";
  if (average < 70) return "D";
  if (average < 80) return "C";
  if (average < 90) return "B";
  return "A";
}

function calculateAverage(array) {
  let sum = 0;
  for (let value of array) sum += value;
  return sum / array.length;
}

//EXERCISE 10:

showStars(5);

function showStars(rows) {
  for (let row = 1; row <= rows; row++) {
    // console.log("*".repeat(row));
    let pattern = "";
    for (let i = 1; i <= row; i++) pattern += "*";
    console.log(pattern);
  }
}

// EXERCISE 11:

showPrimes(7);

function showPrimes(limit) {
  for (let number = 2; number <= limit; number++)
    if (isPrime(number)) console.log(number);
}
function isPrime(number) {
  for (let factor = 2; factor < number; factor++)
    if (number % factor === 0) return false;
  return true;
}

// OBJECTS

// BASICS:

/* Objects are collection of key value pairs. Properties that are-
   highly related, objects have any type like functions another object-
   boolean string etc.
   Grouping those key value as for when we need that object we can have-
   its all function and properties.
   We can access that properties by dot notation */
const circle = {
  raduis: 1,
  loctaion: {
    // another object inside an object.
    x: 1,
    y: 1,
  },
  draw: function () {
    // function inside an object.
    console.log("Hello");
  },
};

circle.draw();
// This style of programming is called OOP object oriented programming-
// where we have collection objects that talk to each other to perform-
// some functionality.
// Function inside an object is called method.

// FACTORY FUNCTIONS:

/* In the object literal syntax we have tiny problem as if we want-
   another circle we have to duplicate its function and if we have-
   10 functions and we want to change something we have to edit mul-
   tiple lines at multiple places. So we use Factory Function to mini-
   mize duplication. */
/* Instead of giving hardcotted values give a fn varible and call its-
   name in object. In object if both value and its key pair have same-
   name call it with just one name (like raduis,) and for fn just write-
   its name and parenthesis and instead of return the circle by its name-
   simply return all the properties of function. */
function createCircle(raduis) {
  return {
    raduis,
    draw() {
      console.log("hello");
    },
  };
}
const circle1 = createCircle(2);
console.log(circle1.raduis, circle1.draw);
// Call one of factory function object's member is using another var-
// iable call the function then save it in another varibale and call-
// the member by using dot notation.

// CONSTRUCTOR FUNCTION:

/* Always use PASCAL notation. Instead of returing an object use this-
   keyword which is refrence to the object that is executing this pie-
   ce of code. */
// this represent an empty object with dot notation we can read access-
// and set a property, .raduis is a property which is added to an empty-
// object.
function Circle(raduis) {
  this.raduis = raduis;
  this.draw = function () {
    console.log("hello");
  };
}

const crcle = new Circle(1);
console.log(crcle);
// new operator will create an empty object then it will set (this) to-
// the first created empty object and then finally it will return that-
// object from created function.

// DYNAMIC NATURE OF AN OBJECTS:

/* Objects in js are are dynamic we can always change them by adding-
 or deleting existing members, members can be property or methods. */
// Here we are using const and still changing it as this const is for-
// circle object we can change that to another object but its membrers-
// can be changed.
const crcle1 = {
  raduis: 1,
};

crcle1.color = "blue";

delete crcle1.raduis;

console.log(crcle1);

// CONSTRUCTOR PROPERTY:

/* Whenever we create an object it has a property called constructor-
   but when we create an object using object literal syntax it will-
   read by the js like this,
   let x =  {}; we created a object using object literal syntax.
   let x = new Object(); js reader created.
   It has fisrt letter in uppercase this is built in constructor in js.
   If we have fn then it is built in constructor function .
   When we use object literal syntax internally our object is created-
   using object constructor function.
    
   JS have other built in constructr,
   new string(); 
   new boolean(); 
   new number(); 
   But we use string boolean and number literals cause they are easy-
   and look cleaner.
   Every object has a constructor property, that refrences to the funct-
   ion that was used to create that object by the browser and created as-
   like f Object() { [native code] }  in console*/

// FUNCTIONS ARE OBJECT:

/* function Circle(raduis) {
    this.raduis = raduis;
    this.draw = function() {
        console.log('hello');
    }
}
const crcle = new Circle(1);
console.log(crcle);  
   Here function Circle is actually an objcet when you do Circle. we-
   can see its members (purple ones are methods and blue ones are pro-
   perties Circle.name(name of the function obj) Circle.length(no of-
   arguments).
   Just like any object has it built in constructor, function also have-
   its built in function which is set when we declare a function using-
   above syntax f Function() {}.

const Circle = new function('raduis', `
    this.raduis = raduis;
    this.draw = function() {
        console.log('hello');
    }
`); ;
const circle = new Circle(1)
   This is how js engine internally create a function when we create a-
   using function syntax. 

   We have differents methods in our functions 
 Circle.call({}, 1);
   This call method is same like new operator firts we have an empty-
   object which refrence to this object then we have an argument but-
   this we have to return a this function.
 Circle.apply({}, [1,2]);
   Same as call method but instead of applying argument explicitly apply-
   all of them in an array, this is usefull when we have defined array-
   and we want to pass it as second argument to the apply method. */

// VALUES VS. REFRENCE TYPES:
/* Functions are also objects, the same is true for arrays, so in a nuts-
   hell in JS we have objects and primitive types.

   PRIMITIVES TYPES are independent of each other their values are stored-
   in the variable and when we copy that varibale its value is copied to-
   other value and when we change them its value is not changed to copied-
   ones. */
let n = 10;

function increase(n) {
  n++;
}

increase(n);
console.log(n);

/* REFRENCE TYPES are different their values are stored somewhere in the-
   memory and the address of that memory is stored in the varibale, and-
   when we copy that variable its address is copied to that variable and-
   any change to variable will change another varibale which is copied */

let m = { value: 10 };

function increase1(m) {
  m.value++;
}

increase1(m);
console.log(m);

// ENUMERATING PROPERTIES OF AN OBJECT:

// EXERCISE 1:
let address = {
  street: "a",
  city: "b",
  zipCode: "c",
};

function showAddress(address) {
  for (let key in address) console.log(key, address[key]);
}

showAddress(address);

// EXERCISE 2:

function createAddress(street, city, zipCode) {
  return {
    street,
    city,
    zipCode,
  };
}

let ad = createAddress("a", "b", "c");
console.log(ad);

function Address(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}

let add = new Address("a", "b", "c");
console.log(add);

// EXERCISE 3:

let address1 = new Address("a", "b", "c");
let address2 = new Address("a", "b", "c");

function Address(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}

function areEqual(address1, address2) {
  return (
    address1.street === address2.street &&
    address1.city === address2.city &&
    address1.zipCode === address2.zipCode
  );
}

function areSame(address1, address2) {
  return address1 === address2;
  // both these objects are pointing to diff object in memory.
  // address1 = address3 now both these are same pointing to same-
  // object in memory
}
console.log(areEqual(address1, address2));
console.log(areSame(address1, address2));

// EXERCISE 4:

let post = {
  title: "a",
  body: "b",
  author: "c",
  views: 11,
  comments: [
    { author: "a", body: "b" },
    { author: "c", body: "d" },
  ], // array has two different objects
  isLive: "true",
};

console.log(post);

// EXERCISE 5:

// We dont want to add views and comments as variable cause both are-
// set to zero cause first time we create a post both should be set to-
// zero, everytime we view that post we increment that value, same is-
// isLive we have to set it to false before posting which is by default.
function Post(title, body, author) {
  this.title = title;
  this.body = body;
  this.author = author;
  this.views = 0;
  this.comments = [];
  this.isLive = false;
}

let postt = new Post("a", "b", "c");
console.log(postt);

// EXERCISE 6:

// Tooltip is like name when someone hover a mouse on button and that-
// short information message.
let price = [
  { label: "$", tooltip: "Inexpensive", minPerPeraon: 0, maxPerPerson: 10 },
  { label: "$$", tooltip: "Moderate", minPerPeraon: 11, maxPerPerson: 20 },
  { label: "$$$", tooltip: "Expensive", minPerPeraon: 21, maxPerPerson: 50 },
];

let resturant = [{ averagePerPerson: 5 }];
// Here we add min and max as this is best for filtering, if we are mak-
// ing application like foodstrore/yelp somewhere we have to store the-
// list of resturant and that resturant should have property like average-
// price per person like 5 and when user only want to see the inexpensive-
// resturants and then we filter the list of resturants and pull out the-
// value and our value range is bt 0 to 10 so useful in those cases .

// ARRAYS

// ADDING ELEMENTS:

/* As arrays are also objects so we can check their methods by using-
   dot notation.
   Push method is used to add elements at the end of the array.
   Unshift method is used to add elements at the start of the array.
   Slice method is used to add and delete elements anywhere in the arr-
   ay with a given position. */
const number = [3, 4];
number.push(5, 6);
console.log(number);

number.unshift(1, 2);
console.log(number);

number.splice(2, 0, "a", "b");
console.log(number);
// First parameter is position/ index of element where we want to start-
// second one is for deleting and its optional, and third is elements we-
// want to add in that location.

// FINDING ELEMENTS (PRIMITIVE):

/* Finding elements is really depends if we are using primitive types or-
   refrence types.
   indexOf method is used find a given element in an array, if the searc-
   hing no or element is present in array it will tell us the index of th-
   at element where it is present in that array, if it is not in that arr-
   ay it will give us -1, here the type of the searching element is also-
   matters both the searching ones and the members of the array must be-
   same otherwise we will get -1.
   Another usefull method is lastIndexOf it will tell us where the searchi-
   ng element is present at the very last location as we would have more-
   then one instance of that no in an array, if not answer is -1.
   For just checking the instance of searched element and want to get a-
   boolean result we have includes method. */
let number1 = [1, 2, 3, 1, 4, 5];
console.log(number1.indexOf(5));
console.log(number1.lastIndexOf(1));
// This will give us the boolean answer as it just check if the no is pres-
// ent in an array or not.
console.log(number1.indexOf(1) !== -1);
// This is same as the uper line but newer and shorter way to check the ex-
// ist one and return a boolean answer.
console.log(number1.includes(1));
// All of the above methods have a second parameter which is optional and-
// that is starting index where to search begin.
console.log(number1.indexOf(1, 2));
// First one is searching element and second one is index where search will-
// begin.

// FINDING AN ELEMENT (REFRENCE TYPE):

/* Both types have diff methods of finding an element, here includes met-
   hod is not gonna help cause in refrence type each object is refer to a-
   diff memory location, so in this case the searching one and the existi-
   ng one are different as both have diff refrence, they are in two diff-
   loctions in memory, in refrence types we have to check them for their-
   quality so their refrences are checked, find method is used for refren-
   ce types, if it find the searching object it will display on a screen-
   otherwise undefined displayed. */
const courses = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
];

const course = courses.find(function (course) {
  // Here this function is called predicate or call back fn as it is-
  // called back as part of finding an object in the array.
  return course.name === "a";
});
console.log(course);

// Just like primitives we also have method for refrence types to find-
// the index of searching object in an array, if not -1 is displayed.
const findingIndex = courses.findIndex(function (course) {
  return course.name === "a";
});
console.log(findingIndex);

// ARROW FUNCTION:

/* Previous we used the callback function for finding an object in an-
   array, in modern js we have cleaner or shorter way to write the same-
   code using arrow function, so whenever we want to pass a function as-
   callback fn we can use arrow fn syntax. */
const course1 = courses.find((course) => course.name === "a");
// This is same as the previous one but much more cleaner, instead of-
// usning function use arrow function which is called fat arrow ==>, th-
// is is placed bt the parameter and body for separation and it works as-
// callback fn, if we have single parameter we can get rid of parenthesis-
// if we dont have any parameter we have to pass an empty parenthesis ()-
// and in the body we can also rid of return key word and write the condi-
// on the same line so dont need anu braces.
// This line of code is read like this course goes to course.name equal a.

// REMOVING ELEMENTS:

/* Just like push, unshift, slice methods we also have methods to remove-
   elements in an array.  
   pop method is used to delete last element in array and return the-
   remaining ones list.
   unshift method is used to delete first element in array and return it.
   splice method is used to delete elements in array with given index-
   with quantity, takes two parameters fisrt one is index where it begin-
   and second one is quantity how many elements we want to remove. */
let number2 = [1, 2, 3, 4, 3];
console.log(number.pop());
console.log(number.shift());
console.log(number.splice(2, 2));
// In this case we start to reducing an element by index of 2 which is-
// 3 and reduce 2 elements including that no where is starts and got redu-
// ce 3,4 from the array.

// EMPTYING AN ARRAY:

let number3 = [1, 2, 4, 6];
number3 = [];
/* This method will work if this array doesn't have refrence with any ot-
   her array or variable cause when we emptying an array using this meth-
   od this will pointing to the new object in the memory and the original-
   one is pointing to other memory location and when we reassign that arr-
   ay which we emptied, the data and element remain same for those who are-
   refrencing and who which will get new refrence cause with this method a-
   new array is created in the memory, if the array doesnt have any refren-
   ce its refrence from memory is automatically removed by garbage collector. */

number3.length = 0;
/* Now with this both the refrence ones and new ones are emptied, it will-
   trucate the array no matter how many refrences they have. */

number3.splice(0, number3.length);
console.log(number3);
// This will also work same as above method and emptied the array.

while (number3.length > 0) number3.pop();
/* This will also remove all the element in the array every time pop method-
   is called and it is a lit bit performance costy as the array has million-
   of elements so pop method will be called million time. */

// COMBINING AND SLICING ARRAYS:

let number4 = [1, 2, 3, 4];
let number5 = [5, 6, 7];

let number6 = number4.concat(number5);
/* This concat method combine both arrays and return a new one which can be-
   change or modify, both other arrays remain unaffected  */

number4.slice(2, 1);
/* This is the oposite of the conact method as it slice the array into two-
   arrays, this methos takes two paramenters first one is index and second-
   one is end and it provides answer before given end. if we didn't write-
   the second parameter it will goes to the end. */
number4.slice();
// It will copy the array with all element inside it.

let number7 = [{ id: 1 }];
number6.concat(number7);
number7.id = 10;
/* As in refrence types value is copied by the refrence in the memory and-
   any change in that array will also changed where they are refrenced in-
   this case we change the id of number7 and it also changed in conct meth-
   od as copied by the refrence. same for the slice method value changing-
   affect the slice's method. */

// THE SPREAD OPERATOR:

/* We use conact method but we cant add anything in them as it is difficu-
   lt or we have to use another method for that for shortcut we have spre-
   ad operator for that */

let number8 = [1, 2, 3];
let number9 = [4, 5, 6];

let number10 = [...number8, "a", ...number9, "2"];
// We concat two arrays and their value in a new array and also add other-
// elements in it and it returns a new array the originals ones are unaff-
// ected.

// ITERATING AN ARRAY:

/* We use For of loop to iterate over an array, there is another way to-
   do that and this method is called fo each method it takes callback fn-
   this takes a parameter (like variable ) and in body we can log this on-
   console. */

number9.forEach(function (number) {
  console.log(number);
});
// This method optionally takes second parameters which is index that shows-
// elements with their index.

number9.forEach((number, index) => console.log(index, number));

/* This function is also useful if we want to execute another function-
   which is created elsewhere in the program along with array like out-
   put have to be array value with function value along with in one line. */

// JOINING ARRAYS:

/* This method is used to join an array and return a string, this method-
   will takes parameters as a separator that is how we want to separate th-
   em and display them in string and this parameter is also a string like-
   comma, slash or anything even with space this technique is mostly used-
   in making/ building URL slug the sentence we saw on the top of the webs-
   ite (where we use -, / bt the elements of array) , and this parameter is-
   optional. */

console.log(number9.join(" "));

/* Just like strings we have a method to show string into an array. */

let myName = "My name is Mahad";

console.log(myName.split());
// This will show the whole string in array with single qoutation.
console.log(myName.split(""));
// This will show each alphabet as a string an array.
console.log(myName.split(" "));
// This will show each word as a string in a array.

/* We can use both methods one an after as to making slug or anything we-
   want, URL slug is created by title which have space bt them and we can-
   separate them by - hyphens. */

// SORTING AN ARRAY:

/* We can sort an array by ascending or desecending order. */

let number11 = [3, 4, 1, 1, 2];
number11.sort();
r;
// This will sort them in ascending order this method will take each ele-
// ment of array into string and then sort the element and then return it.

number11.reverse();
// This will return an array in descending order.

/* This method will only work for primitive types for refrence types this-
   will not work as comparing them by name is different and each letter has-
   di-ff numeric representation in computers uppercase and lowercase both-
   has di-fferent representation, for that we have to exclude case sensit-
   ivity when-comparing names. */
let course2 = [
  { id: 1, name: "Node.js" },
  { id: 2, name: "javascript" },
];

console.log(
  course2.sort(function (a, b) {
    const namea = a.name.toLowerCase(); // both should be same.
    const nameb = b.name.toLowerCase();
    if (namea > nameb) return 1;
    if (namea < nameb) return -1;
    return 0;
  })
);
// Sort method takes argument which is function for comparison.

// TESTING THE ELEMENT OF AN ARRAY:

/* We have two diff method to test an array, Every or Some.
   Every method checks the whole array with the given condition and when he-
   finds a no or anything he is searching it return true and when he finds no-
   that is beyond the condition it stops searching no matter how many element-
   s are present after that no.
   Some method is used to check atleast one element is present in the arrar-
   of which he is searching and it will stop after that no matter how many of-
   em same numbers are present after. */

let number12 = [1, 2, 3, 4, 5, 6];
console.log(number12.every((value) => value <= 9));
// This method will take three parameters value which is number cause dealing-
// with numbers, index which is index of the value and the array again number-
// and then array itself and these are the parameters of callback fn. returns-
// true if all the elements in the array are positive.

console.log(number12.some((value) => value >= 0));
// This will check atleast one em element is positive.

// FILTERING AN ARRAY:

/* We have filter mathod to display specific type of element based on our sea-
   rch just like we want to show only positive number from array. */

let number13 = [-3, 4, 5, -6, -7];
console.log(number13.filter((value) => value >= 0));
// Just like every and some method it also take three parameters.

// MAPPING AN ARRAY:

/* Map method is used to map each element of array to something else, just-
   like we want to show all the elements of array withing HTML markup within-
   list. */
let filtered = number13.filter((n) => n >= 0);
let mapMethod = filtered.map((n) => "<li>" + n + "<li>");
console.log(mapMethod);
/* Just like above map method also takes three parameters, with this we can-
   map this array with html markup and we can display this number with bull-
   et points, we can show that array into string using join method and when-
   using join we can also wrap them inside the <ul> tag. */
let HTML = "<ul>" + mapMethod.join() + "<ul>";
// Join method converts array into string.
console.log(HTML);

/* We can also map them to objects */
let mapObject = filtered.map((n) => ({ value: n }));
console.log(mapObject);
// Now we will get each element inside the object.
/* As both the filter method and map method provides a new array they dont-
   modify the original one which means these methos are chainable, call one-
   after another in one chain, so we dont have to always store their result-
   into new variable instead we can join them and then we can store the resul-
   t of both methods in one array, by convention always write these method in-
   single line when chaining. */

let chain = number13
  .filter((n) => n >= 0)
  .map((n) => ({ value: n }))
  .filter((obj) => obj.value > 4) // calling again on new array.
  .map((obj) => obj.value); // calling again for displaying value to a number .

console.log(chain);
/* As the map method is returning a new array so we can call the filter method-
   on that new array and also change the map method to get diff answer. */

// REDUCING AN ARRAY:

/* If we want to add the sum of all elements in array we learn for of loop, we-
   have diff method for that which is called for reduce method with this we can-
   reduce the elements of array into single value which can be string, no, obj-
   ect. This method takes two parameters and a callback fn first one is accumu-
   la tore and currentValue, accumulator is just like new varibale which store-
   the sum and initailly defined as zero, and second one is value of accumulat-
   or where we want to start and this one is optional and then it will start-
   from the fisrt element of array. */

let number14 = [1, 2, 3, -1, -3];
let reduce = number14.reduce(function (accumulator, currentValue) {
  accumulator + currentValue;
});
// Im writting it in cleaner way by using arrow function but can be written-
// by using function and then parameters.
console.log(reduce);

// EXERCISE 1:

let number15 = arrayFromRange(1, 7);

console.log(number15);

function arrayFromRange(min, max) {
  let output = [];
  for (let i = min; i <= max; i++) output.push(i);
  return output;
}

// EXERCISE 2:

const array = [1, 2, 3, 4];

console.log(includes(array, 4));

function includes(array, search) {
  for (let key of array) if (key === search) return "true";
  return "false";
}
// Whenever we use if else their brackets matter alot to answer as in this-
// case if we put these in brackets answer will change.
/* let co = array.length
    for (let i = 0; i <= co; i++)
            if (i === search)
            return 'true'
    return 'false' ; 
} Different code with same output. */

// EXERCISE 3:

let number16 = [1, 2, 3, 4, 1, 5];

console.log(except(number16, [1]));

function except(array, excluded) {
  let output = [];
  for (let element of array)
    if (!excluded.includes(element)) output.push(element);
  return output;
}

// EXERCISE 4:

let number18 = [1, 2, 3, 4, 5];

console.log(move(number18, 1, 4));

function move(array, index, offset) {
  let position = index + offset;
  if (position >= array.length || position < 0) {
    console.error("invalid offset.");
    return;
  }

  let output = [...number18];
  let change = output.splice(index, 1)[0];
  // Here this splice method gives a new array with the deleted number,
  // in this case one item is deleted and we are getting it by index 0.
  output.splice(index + offset, 0, change);
  return output;
}

// EXERCISE 5:

let number17 = [1, 2, 3, 1, 4];

const count = countOccurences(number17, 1);

console.log(count);

function countOccurences(array, searchElement) {
  // let count = 0;
  // for (let element of array)
  //    if (element === searchElement)
  //      count++;
  // return count;
  return array.reduce((accumulator, current) => {
    const occurence = current === searchElement ? 1 : 0;
    return accumulator + occurence;
  }, 0);
}

// EXERCISE 6:
let numbe19 = [1, 2, 3, 4];

let max2 = getMax(numbe19);

console.log(max2);

function getMax(array) {
  if (array.length === 0) return undefined;

  let max = array[0];

  // for (let i = 1; i < array.length; i++)
  //   if (array[i] > max)
  //     max = array[i];

  // return max;
  return array.reduce((accumulator, current) => {
    return accumulator > current ? accumulator : current;
  });
}

// EXERCISE 7:

let movie1 = [
  { title: "a", year: 2018, rating: 4.5 },
  { title: "b", year: 2018, rating: 4.7 },
  { title: "c", year: 2018, rating: 3 },
  { title: "d", year: 2017, rating: 4.5 },
];

let titles = movie1
  .filter((m) => m.year === 2018 && m.rating >= 4)
  .sort((a, b) => {
    // (a.rating - b.rating) short method as if a is less-
    // then b answer is positive nothing happens if opposite answer is-
    // ve it- swaps both and if equal answer is zero nothings happens.
    if (a.rating > b.rating) return -1;
    if (a.rating < b.rating) return 1;
    return 0;
  })
  .reverse()
  .map((m) => m.title);

console.log(titles);

// FUNCTIONS:

// FUNCTION DECLARATION VS EXPRESSION:

/* We can declare a function with 2 methods Function Declaration or Funct- 
   ion Expression */

walk();

function walk() {
  console.log("function declaration");
}

let walk1 = function () {
  console.log("function expression");
};

walk1();

// HOISTING:

/* The key diff bt both declaration is that we can call the function decl-
   aration before it defined and it runs.
   We cant call function expression before it, it will give us error.
   This is beacuse when js engine execute the function declaration syntax-
   it moves all the function decalaration to the top and then execute it-
   this is called hoisting. 
   
   Hoisting is the process of moving function declaration t the top of the-
   file, done automatically by the js engine that is executing this code. */

// ARGUMENTS:

/* If we want to add varying no of arguments and if our function have vary-
   ing no of arguments and we want to have their sum then we use arguments-
   method, every function in js have this special object called arguments. */

function sum() {
  let total = 0;
  for (let value of arguments) total += value;
  return total;
}

console.log(sum(1, 2, 3, 4));

// Here we dont need any kind of parameters as we are dealing with object-
// arguments to get arguments and using for of loop as this object has ite-
// rator and we can iterate it by using for of loop.

// The RESR OPERATOR:

/* In modern js if we want have function with varying no of parameters we-
   can use the rest operator (...). */

function sum1(...args) {
  console.log(args);
}

console.log(sum1(1, 2, 3));

// This rest operator provides us an array of arguments what we pass to th-
// at functions parameters no matter how many and we can add them using red-
// uce method.
// Real world example as if we want to add the prices from cart and subtrac-
// t it by their given discount we can use rest operator.

function sum2(discount, ...prices) {
  const total = prices.reduce((a, b) => a + b);
  return total * (1 - discount);
}

console.log(sum2(0.1, 10, 10));

// Here we are usning 0.1 discount for each item and when someone add two-
// items in the cart we add them and then subtract the discount form one-
// and then multiply that with total no of items in this case 2 and get the-
// price after discount.
// If we have three parameters and one rest operator and we give 10 argumen-
// ts to our function then fisrt 3 will assign to first three parameters and-
// remaining all are assign to rest operator.

// DEFAULT PARAMETERS:

/* we always provide values to our given parameters what if we have default-
   values and we want to use them so old method is. */

function interest(loan, rate, year) {
  rate = rate || 2.5;
  year = year || 2;

  return ((loan * rate) / 100) * year;
}

console.log(interest(1000));

// Here we set default values for two parameters and in this if we add an-
// other value it will assign to them rather then default one but always rem-
// ember this should be the last ones otherwise get an error cause if we -
// dont do that it will confuse our js engine and output will be changed.

// Newer method is to provide values at the time of declaraing parameters-
// same it must be the last ones.

function interest(loan, rate = 2.5, year = 2) {
  return ((loan * rate) / 100) * year;
}

// console.log(interest(1000));

// We have solution for defining defauly value to the middle parameters-
// we just have to provide undefined to the arguments at the place of t-
// hat parameters.
/* function interest(loan, rate = 2.5, year) {
    return loan * rate / 100 * year;
};

// console.log(interest(1000, undefined, 2)); */

// GETTERS AND SETTERS:

/* If we have an object with first name and last name and wnat to show bo-
   th in a single we can create a method for that in our object but we ca-
   nt change them outside the object or calling that method with parenth-
   esis is not good so we have getters and setters to that job.

   const person = {
       fisrtName: 'Mahad',
       lastName: 'Ahmad',
       fullName() {
           return ` ${person.fisrtName} ${person.lastName}
       }
   };
   
   Use getters to acces properties of an object .
   
   Use setters to change and mutate them.
   
   so for the above example we have to use getter to set method to call-
   as a property and setter to change them outside.
   We simply prefix the method name with get keyword and problem is sol-
   ved we can call that just like property of object.
   Setter is similar to this type set then name of the property or method-
   and code block this method or property needs a parameter call it anyth-
   ing and this parameter is going to be what we will change outside the-
   object then image that parameter is valid string so split it by space-
   and combine parts one after other. */

/*const person2 = { do just for lower code its totally working
    firstName1: 'Mahad',
    lastName1: 'Ahmad',
    // get fullName() {
    //     return `${person2.fisrtName1} ${person2.lastName1}`
    // },
    set fullName(value) {
        const parts = value.split(' ');
        this.fisrtName1 = parts[0];
        this.lastName1 = parts[1];
    }
};

person2.fullName = 'Malik Bilal';

console.log(person2);
*/

// TRY AND CATCH:

/* Error handling in the previous lesson we set a set method so we can-
   change their value what if we pass boolean, null or undefined instead-
   of string we will get a error as we can only split strings we cant sp-
   lit boolean and we dont want to show that error here we want to show-
   other type of error to user so use error handling at the begining of -
   a function or method which is called defensive programming  */
// So we have to throw an exception where we are getting value === strin-
// g and write the sentence we want to show to user we alway throw except-
// ion where there are chance of getting invalid value or error by the br-
// owser so we throw exception and we have to catch that exception somewh-
// ere in the code in this case we catch that where value is defining or-
// providing to check if this is valid or not.
// We throw an exception by typing new Error() as we know what new operat-
// or does and then this is constructor function as name of Error is telli-
// ng we are calling this function using new operator and in parenthesis we-
// type error message.

const person2 = {
  firstName1: "Mahad",
  lastName1: "Ahmad",
  // get fullName() {
  //     return `${person2.fisrtName1} ${person2.lastName1}`
  // },
  set fullName(value) {
    if (typeof value !== "string")
      // if we do return here nothing below would have happen.
      throw new Error("value is not a string");
    // throwing exception.

    const parts = value.split(" ");
    if (parts.length !== 2) throw new Error("Please Enter full name");
    // throwing another exception.
    this.fisrtName1 = parts[0];
    this.lastName1 = parts[1];
  },
};

try {
  person2.fullName = null;
} catch (e) {
  console.log(e);
}
// catching that using e argument and showing that error.

console.log(person2);

// GLOBAL AND LOCAL SCOPE:

/* Scope of a variable and constant determines where that are accessible-
   in the code.
   let --> block 
   const --> block 
   var --> within function
   As above shows that loops, function, objects anything within blocks and-
   ve varibale inside it have limited scope. 
   If a variable is defined globally then accessible everywhere.*/

function start() {
  const message = "hi";

  if (true) {
    const another = "bye";
  }

  for (let i = 0; i < 10; i++) {
    console.log(i);
  }

  console.log(another);
  console.log(i);
  // Geting error as another/ i is defined in blocks
}

// LET VS VAR:

/* There are couple of problems with var key word as their scope is not-
   in the blocks but with in the function. 
   Another diff is that when variable is defined using var keyword it at-
   taches that global variable to the windows object in the browser and-
   let will not do that can be check as variable name and then ., the ba-
   d thing is that windows object is something central there is only ins-
   tance of that object and if we are using thrid party libraries and th-
   also have variable with same name so our var varibale will override it. */

function loop() {
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }

  console.log(i);
  // It will show the last value of i which is 5 and then loop stops.
  // Can be excessible within function.
}

// THE this KEYWORD:

/* this refrences the object that is executing the current function.
   1: if a method has this keyword then this will refrences to that obj-
   ect that has method inside it.
   2: if a function is a regular function this will refrences to the glo-
   bal object which is windows object in browsers and global in node. */

// const video = {
//     title: 'a',
//     play() {
//         console.log(this);
//     }
// };

// video.stop = function() {
//     console.log(this);
//};
// Now we added another method in the video object now still this refre-
// nces to video object.
//video.stop();

// Global object:

// function playVideo() {
//     console.log(this);
// }

// playVideo();
// Now this will refrences to global object in browser.
// What happened when we call this same function using constructor fun-
// ction and new operator then thi will refrences to playVideo object ca-
// use of new operator as create new object and point this to that object.

function playVideo(title) {
  this.title = title;
  console.log(this);
}

const vid = new playVideo("a");
console.log(vid);

// Now what if we have first function and inside it we have array of tags-
// and we want to show that tags along with title property so.

const video = {
  title: "a",
  tags: ["1", "2", "3"],
  showTags() {
    this.tags.forEach(function (tag) {
      console.log(this, tag);
    }, this);
  },
  play() {
    console.log(this);
  },
};
// Now we have 3 this in above function first this is pointing to the vi-
// deo object and then we want to show tags along with titles but we are-
// in the callback fn and this function is global and not a method in vi-
// deo object so this in callback fn refrence to window object so we have-
// to do titles along with tag but this inside the callback fn is refren-
// ce to window object which is outside the video object, our forEach met-
// hod has second parameter which is optional and there we refrence the v-
// ideo object there so we pass this there refrence to video objcet cause-
// on that time we are still in video object and then this as a second par-
// ameter and then call it in forEach method.

video.stop = function () {
  console.log(this);

  // CHANGING THIS:

  /* what if we dont have second parameter in forEach method and we want t-
   o print tags along with title so we have to define a const and point-
   this to that variable before calling callback function and then call-
   that variable at the place of this, so. 
   const video = {
    title: 'a',
    tags: ['1', '2', '3'],
    showTags() {
        const that = this;
        this.tags.forEach(function(tag) {
            console.log(that, tag);
        });
    },
    play() {
        console.log(this);
    }
    };
    
    We have 3 methods in the objects which we can call using dot method-
    apply, call and bind with these we can change the value of this.
    Call/ Apply method:
    function playVideo(a, b) {
        console.log(this);
    }

    playVideo.call({ title: 'a'}, 1, 2);
    playVideo.apply({ title: 'a'}, [1, 2]);
    Here both this methods work same, both these methods take fisrt par-
    meter as a thisArg so we can pass an object in as fisrt parameter an-
    d this will reference to that object, both these are very similar one-
    difference is that other then fisrt parameter we have to pass an arr-
    for apply method and in call method we can pass that simply.
    Bind method:

    playVideo.bind({ name: 'Mahad'})();
    Here this bind doesnt call above playVideo function, it returns new-
    function  and set this to point to object that we are passing in bi-
    nd method permanently, no matter how we call that fn this always al-
    ways point to that object we pass to bind method, so this method re-
    turns a new fn so we can save it in other varibale or just call it-
    on the same line using parenthesis next to calling.

    Second solution is using bind method as functions are objects so we-
    have method for that, we going to use bind method and in the argume-
    nt pass that object which we want to refrence to the function. sp
    const video = {
    title: 'a',
    tags: ['1', '2', '3'],
    showTags() {
        this.tags.forEach(function(tag) {
            console.log(this, tag);
        }, bind(this));
        here bind takes video object and point to function it 
    },
    play() {
        console.log(this);
    }
    }; */

  // EXERCISE 1:

  console.log(sum([1, 2, 3]));

  function sum(...items) {
    if (items.length !== 0 && Array.isArray(items[0])) items = [...items[0]];
    // We reset the itmes into new array and use spread operator to sp-
    // read items of 0 which is another array.

    return items.reduce((a, b) => a + b);
  }

  // EXERCISE 2:

  const circle2 = {
    raduis: 1,
    get area() {
      return Math.PI * this.raduis * this.raduis;
    },
  };
  // Here radius can be changed and area not but by any change in radius ou-
  // tput is going to be changed.

  console.log(circle2);

  // EXERCISE 3:

  try {
    let number19 = [1, 2, 3, 1, 4];
    const count1 = countOccurences1(undefined, 1);
    console.log(count1);
  } catch (e) {
    console.log(e.message);
  }

  function countOccurences1(array, searchElement) {
    if (!Array.isArray(array)) throw new Error("Invalid array");

    return array.reduce((accumulator, current) => {
      const occurence = current === searchElement ? 1 : 0;
      return accumulator + occurence;
    }, 0);
  }
};
