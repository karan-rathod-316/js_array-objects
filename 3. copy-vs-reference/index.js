// Value of x, y, a, b

var x = 10;
var y = "abc";
var a = x;
var b = y;
//x = 10, y = "abc", a = 10, b = "abc"

// Value of x, y, a, b
var x = 10;
var y = "abc";
var a = x;
var b = y;
a = 5;
b = "def";
//Output  x = 10, y = abc, a = 5, b = "def";  


// Value of arr & arrCopy
var arr = [1];
var arrCopy = arr;
arr.push(2);
//Output - arr = [1, 2], arrCopy = [1, 2];  


// Value of obj
var obj = { name: "ryan" };
obj = { surname: "florance" };
//Output - Object { surname: "florance" }


// What's the output.
var arr = ["Hi"];
var arr2 = arr;
console.log(arr === arr2);

//True

// What's the output.
var arr1 = ["Hi!"];
var arr2 = ["Hi!"];
console.log(arr1 === arr2);
console.log(arr == arr2);
//What's the output
//False and False

console.log([10] === [10]);
// What's the output?
//False

function personDetails(person) {
    person.age = 25;
    person = {
        name: "John",
        age: 50
    };

    return person;
}
var personObj1 = {
    name: "Alex",
    age: 30
};
var personObj2 = personDetails(personObj1);
console.log(personObj1); //  {name: "Alex", age: 25}
console.log(personObj2); // {name: "John", age: 50}
// Guess the output


var oldArray = [];
var object = {};
object.newArray = oldArray;
oldArray.push(10);
console.log(object.newArray === oldArray);
// Guess the output
//True

var a = 5;
var b = a;
a = 10;
console.log(a);
console.log(b);
// What's the output?
//10
//5

var a = {};
var b = a;
a.a = 1;
console.log(a); // Output {a: 1}
console.log(b); // Output {a: 1}


var a = [];
var b = a;
a.push(1);
console.log(a); // [1]
console.log(b); // [1]
console.log(a === b);
//True

// Clone the object person in clone
var person = {
    name: "Mark",
    age: 34,
    subjects: {
        maths: 78,
        physics: 43
    }
};
var clone = {};

// Output of the following
let brothers = ["John", "Bran", "Robb"];
let house = "Stark";
let user = {
    name: "Arya",
    house: house,
    brothers: brothers
};

let user2 = {
    name: "Arya",
    house: house,
    brothers: brothers
};

let user3 = {
    name: "Arya",
    house: "Stark",
    brothers: ["John", "Bran", "Robb"]
};

// Output of the below code and why?
user.house === user2.house; // output: True 
user.house == user2.house; // output: True
user.brothers === user2.brothers; // output: True
user.brothers == user2.brothers; // output: True
user.name == user2.name; // output: True
user.name === user2.name; // output: True
user.brothers == user3.brothers; // output: False
user.brothers === user3.brothers; // output: False
user.house === user2.house; // output: True
user.house === user3.house; // output: True
user.brothers[0] === user2.brothers[0]; // output: True
user.brothers[0] === user3.brothers[0]; // output: True