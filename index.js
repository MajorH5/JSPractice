// 1. imports
// import { Vector2 } from './PhysicsJS2D/src/vector2.js'; <- this is how you import from a file in browser
const { Vector2 } = require('./PhysicsJS2D/src/vector2.js'); // <- this is how you import from a file in node.js

// 2. variables
// three key words for declaring variables
// var, let, const

var money = 1;

// value of variable stored in let
// can be changed
let numChildren = 100;

numChildren = 200;

// value of variable stored in const
// CANNOT be changed
const name = "John";

// 3. number operations
var num = new Number(2) // <- this is how you create a number object
var num = 2;
console.log(2.0 / 2.0); // 1
console.log(2 / 5); // 0.4

// 4. string operations
var str = new String("hello world"); // <- this is how you create a string object
var str = "hello world"; // <- this is how you create a string
console.log("hello" + "world"); // helloworld

// 5. boolean operations
var bool = new Boolean(true); // <- this is how you create a boolean object
var bool = true; // <- this is how you create a boolean
console.log(true + false);
// strange weird javascript array boolean magic

// 6. array operations
var arr = [1, 2, 3];
console.log(arr[0]); // 1
console.log(arr[1]); // 2
// functions of arrays

arr.push(4); // [1, 2, 3, 4]
arr.pop(); // [1, 2, 3]

arr.unshift(1); // [1, 2, 3]
arr.shift(); // [2, 3]

arr = [1, 2, 3]
arr.splice(1, 2); //

// 7. object operations
const person = {
    key: "value",
    name: "John",
    age: 20,
    isMale: true,
    children: ["John", "Jane", "Jack"],
    address: {
        street: "123 Main St",
        city: "New York"
    }
};
console.log(person.name); // John
console.log(person.address.city); // New York

person.name = "Jane";

// 8. function operations
function add(a, b) {
    return a + b;
}

var add = function (a, b) {
    return a + b;
}

var add = (a, b) => {
    return a + b;
}

var add = (a, b) => a + b;

var add = a => a + 1;

var result = add(1, 2); // <-- result = 3

result++;
result--;

result += 1;
result -= 1;
result *= 2;
result /= 2;
result %= 2;

// 9. if statements
const isSmart = true;
const isMale = true;

if (isSmart && isMale) {
    console.log("I am a smart guy!");
    console.log("Happy.");
} else if (!isMale && isSmart) {
    console.log("I am a smart girl!");
} else {
    console.log("IDK");
}

// 10. for loops
for (let i = 0; i < 10; i++) {
    console.log(i);
}

// 11. do while loops
let i = 0;

do {
    console.log(i);
    i++;
} while (i < 10);

// CANVAS STUFF
// draw a circle
let point = new Vector2(150, 150);

context.fillStyle = 'black';

context.beginPath(); // start drawing a shape
context.arc(point.x, point.y, 5, 0, 2 * Math.PI); // define a circle
context.fill(); // fill the circle with the current fill color
context.closePath(); // end drawing the shape

// draw a line
let lineStart = new Vector2(0, 0);
let lineEnd = new Vector2(300, 300);

context.strokeStyle = 'black';

context.beginPath(); // start drawing a shape
context.moveTo(lineStart.x, lineStart.y); // move to the start of the line
context.lineTo(lineEnd.x, lineEnd.y); // draw a line to the end of the line
context.stroke(); // draw the line
context.closePath(); // end drawing the shape

// draw a rectangle
let rectStart = new Vector2(50, 50);
let rectSize = new Vector2(200, 200);

context.strokeStyle = 'red';

context.beginPath(); // start drawing a shape
context.rect(rectStart.x, rectStart.y, rectSize.x, rectSize.y); // define a rectangle
context.stroke(); // draw the rectangle
context.closePath(); // end drawing the shape