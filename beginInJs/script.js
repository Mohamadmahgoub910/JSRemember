/* data types in Js :- 
undefined, null, boolean, string, symbol{mutable}, number and object
 */
// var myName = "Mohamad Mahgoub";
// let ourName = "freeCodeCamp";
// const pi = 3.14;
// Declaring and assign :-
// declare then assign
// var a;
// console.log(a); // undefined
// a = 4;
// assign operator
// var b = 2;
// console.log(a);
// console.log(b);
// initialized var :- var a = 9;
// case sensitive
// arithmetic operators :- { + - * /  } ,
// var reminder;
// reminder = 6 % 4;
// console.log(reminder);
// compound assignment with args addition
// var a = 3; a=a+25 ==> a+=24
// quote in strings :- escape character
// var myName = 'Mohamad saed ali mahgoub "qoute"  ';
// console.log(myName);
// var myStr = `'<a href="https://google.com" >google</a>'`;
// console.log(myStr);
// // console.log("hello");
// var t = 60;
// console.log(`value t is ${t} \\ \n \r sorry \r sir \t stop \f feed `);
// var myName = "it is my name ";
// console.log(myName.length);
// String is not mutable it is immutable
// var myName = "sello world";
// myName[0] = "H";
// console.log(myName);
// wordBlank:-
// function wordBlank(myNoun, myAdjective, myVerb, myAdverb) {
//   var result = "";
//   result += "The " + myAdjective + myNoun + myVerb + "To the store" + myAdverb;
//   return result;
// }
// console.log(wordBlank("dog", "big", "ran", "quickely"));
//  Array
// names = ["ali", "heba", "esraa"];
// console.log(names[0]);
// var arrayData = [1, 2, 3];
// arrayData[0] = 9; // my array data 'll be :- [9,2,3]
// arrayData.pop();
// arrayData.push(34);
// arrayData.shift();
// arrayData.unshift();
// console.log(arrayData);
// function reusableFn(name) {
//   function sayHello() {
//     console.log("hello from fun2");
//   }
// }
// reusableFn(sayHello());
//  global scope
// var myGlobl = 10;
// function fun1() {
//   oopsGlobal = 9; // print 9
// var oopsGlobal = 9; // print nothing
// }

// function fun2() {
//   var out = "";
//   if (typeof myGlobl != "undefined") {
//     out += "myGlobal: " + myGlobl;
//   }
//   if (typeof oopsGlobal != "undefined") {
//     out += ", oopsGlobal: " + oopsGlobal;
//   }
//   console.log(out);
// }
// fun1();
// fun2();

// functions and local scope

// function myLocalScope() {
//   var myVar = 9;
//   console.log(myVar);
// }
// myLocalScope();
// console.log(myVar);
//  global and local scope in fn
// var outWear = "T-shirt";
// function myOutFit() {
//   var outWear = "Sweater";
//   return outWear;
// }
// console.log(myOutFit());
// function nextInLine(arr, item) {
//   arr.push(item);
//   return item;
// }
// var testArr = [1, 2, 3, 4, 5];
// console.log(`Before ${JSON.stringify(testArr)}`);
// console.log(nextInLine(testArr, 6));
// console.log(`After ${JSON.stringify(testArr)}`);
// function trueOrFalse(itistrue) {
//   if (itistrue) {
//     return "Yes, it is true";
//   }
//   return "No, it's false";
// }

// console.log(trueOrFalse(1));

// setup also equal logic
// function testEqual(num1, num2) {
//   if (num1 >= num2) {
//     return ` ${num1} is large `;
//   } else {
//     return ` ${num2} is large `;
//   }
// }
// console.log(testEqual(13, 6));
// === value and type
// console.log(3 === 3);
// console.log(3 === "3");
// console.log(10 == "10");
// function testSize(num) {
//   if (num < 5) {
//     return "tiny";
//   } else if (num < 10) {
//     return "small";
//   } else if (num < 15) {
//     return "medium";
//   } else if (num <= 20) {
//     return "large";
//   }
// }
// console.log(testSize(20));
// Golf Code
/*
// var names = [
//   "Hole-in-one",
//   "Eagle",
//   "Birdie",
//   "Par",
//   "Bogey",
//   "DoubleBogey",
//   "Go Home",
// ];
// function GolfScore(par, strokes) {
//   if (strokes == 1) {
//     return names[0];
//   } else if (strokes <= par - 2) {
//     return names[1];
//   } else if (strokes == par - 1) {
//     return names[2];
//   } else if (strokes == par) {
//     return names[3];
//   } else if (strokes == par + 1) {
//     return names[4];
//   } else if (strokes == par + 2) {
//     return names[5];
//   } else if (strokes == par + 3) {
//     return names[6];
//   }

//   return "Change Me";
// }
// console.log(GolfScore(5, 8));
// Objects
// var ourDog = {
//   name: "Camper",
//   legs: 4,
//   tails: 1,
//   friends: ["EveryThing!"],
// };
// // console.log(ourDog);

// console.log(myDog.tails); // value
// console.log(myDog["name"]); // key
// var legsNum = 4;
// console.log(myDog[legsNum]);
// var myDog = {
//   name: "fox",
//   legs: 4,
//   tails: 1,
//   friends: ["father", "mother"],
// };
// // add a new prop:-
// myDog["bark"] = "woof!";
// console.log(myDog);
// // updating class
// myDog.name = "foxa";
// // delete a prop
// delete myDog.legs;
// console.log(myDog);

// function getSelectedValFromKey(key) {
//   var result = "";
//   var data = { 1: "ali", 2: "aliaa", 3: "saed" };
//   result = data[key];
//   return result;
// }
// console.log(getSelectedValFromKey(2));
// var myObj = {
//   gift: "pony",
//   pet: "kitten",
//   bed: "sleigh",
// };
// function checkObj(myProp) {
//   if (myObj.hasOwnProperty(myProp)) {
//     return myObj[myProp];
//   } else {
//     return "Not Found";
//   }
// }

// console.log(checkObj("gift"));

// console.log(checkObj("hello"));
*/
/* var myPlants = [
  {
    type: "flowers",
    list: ["rose", "tulip", "dandelion"],
  },
  {
    type: "trees",
    list: ["fir", "pine", "birch"],
  },
];
var secondTree = myPlants[1].list[1];
console.log(secondTree); */
/* var collection = {
  123456: {
    album: "Slippery when wet",
    artist: "Slippery when wet",
    tracks: ["Let It Rock", "You Give love a bad name"],
  },
  789456: {
    album: "1998",
    artist: "Slippery when wet",
    tracks: ["1990", "little and cover"],
  },
  123456: {
    album: "Slippery when wet",
    artist: "Slippery when wet",
    tracks: ["Let It Rock", "You Give love a bad name"],
  },
  789456: {
    album: "1998",
    artist: "Slippery when wet",
    tracks: ["Let It Rock", "You Give love a bad name"],
  },
};
var collection = JSON.parse(JSON.stringify(collection));
function updateRecords(id, prop, value) {
  if (value === "") {
    delete collection[id][prop];
  } else if (prop === "tracks") {
    collection[id][prop] = collection[id][prop] || [];
    collection[id][prop].push(value);
  } else {
    collection[id][prop] = value;
  }
  return collection;
}

console.log(updateRecords(123456, "artist", "ABBA")); */

/* var myArr = [];
var i = 0;
while (i < 5) {
  myArr.push(i);
  i++;
}
console.log(myArr); */
/* var myArr = [];

for (var i = 0; i < 5; i++) {
  myArr.push(i);
}

console.log(myArr); */
/* var arr = [2, 3, 4, 5];
var sum = 0;
for (var i = 0; i < arr.length; i++) {
  sum += arr[i];
}
console.log(sum); */
/* var arr = [
  [1, 3],
  [5, 4],
  [4, 6, 8],
];
function multiplyAll(arr) {
  var product = 1;
  for (var r = 1; r < arr.length; r++) {
    for (var c = 1; c < arr[r].length; c++) {
      product *= arr[r][c];
    }
  }
  return product;
}

console.log(multiplyAll(arr)); */
/* var data = [
  { fname: "ali", lname: "mahgoub", age: 19, likes: [2, 4, 5] },
  { fname: "aliaa", lname: "ali", age: 20 },
];
function lookupProfile(name, prop) {
  for (var i = 0; i < data.length; i++) {
    if (data[i].fname === name) {
      return data[i][prop] || "No Such data";
    }
  }
  return "No Such Content";
}

var dataGet = lookupProfile("ali", "lname");
console.log(dataGet); */
/* function convertToInteger(str) {
  return parseInt(str);
}
var converted = convertToInteger("90");
console.log(converted); */

/* function convertToInteger(str) {
  return parseInt(str, 2);
}
var converted = convertToInteger("10011");
console.log(converted); */

// conditional ternary

/* function checkEqual(a, b) {
  return a === b ? "true" : "false";
}

console.log(checkEqual(2, 3)); */

/* function checkSign(num) {
  return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
}
console.log(checkSign(-2)); */

/* var a = 0;
a = 9;
console.log(a);

let name1 = "ali";
name1 = "aliaa";
console.log(name1); */

// var and let in function and block scope
/* function checkScope() {
  "use strict";
  // block scope
  let i = "fn scope";
  if (true) {
    let i = "Block Scope!";
    console.log(`block scope ${i} `);
  }
  console.log(` fn scope ${i} `);
  return i;
}
checkScope(); */

/* const pi = 3.14;
console.log(pi);
pi = 90;
console.log(pi); */
/* 
const s = [3, 4, 5, 6];
function editInPlace() {
  "use strict";
  s[0] = 9;
  return s;
}

editInPlace();
console.log(s); */

// anonyms fn ==> hasn't a name
/* var a = function () {
    return " anonyms fn ==> hasn't a name ";
};
console.log(a());
 */

// var magic = () => {
//   return new Date();
// };

/* var magic = () => new Date();
console.log(magic()); */

/* var magic = (name) => {
  return `hi there from arrow fn y ${name}`;
};
console.log(magic("ali")); */

/* const realNum = [-9, -8, -6, 2, 0, 3, 4];
const squareList = (arr) => {
  const posNums = arr
    .filter((ele) => Number.isInteger(ele) && ele > 0)
    .map((x) => x * x)
    .filter((ele) => ele >= 9);
  return posNums;
};
const squareListNum = squareList(realNum);
console.log(squareListNum);
 */
/* const increment = (function () {
  return function increment(number, value = 1) {
    return number + value;
  };
})();
console.log(increment(5, 6));
console.log(increment(5)); */
// rest op ==>
/* const sum = (function () {
  return function sum(...args) {
    return args.reduce((a, b) => a + b, 0);
  };
})();
console.log(sum(1, 2, 3));

const sumQ = function (...args) {
  return args.reduce((a, b) => a + b, 0);
};
console.log(sumQ(1, 2, 3)); */
/* const sum = (function () {
  return function sum(...args) { // using rest here 
    // const args = [x, y, z];
    return args.reduce((a, b) => a + b, 0);
  };
})();
console.log(sum(1, 2, 3, 4)); */
// spread operator to evaluate arrays in-place
/* const arr1 = ["JAN", "FEB", "MAR", "APR", "APR", "MAY"];
let arr2;
(function () {
  arr2 = [...arr1];
  arr1[0] = "potato";
})();
console.log(arr2); */
// Use destructing assignment to assign variables from objects
/* var vole = { x: 3.6, y: 7.4, z: 6.54 };
var x = vole.x; // =>3.6
var y = vole.y; // =>7.4
var z = vole.z; // =>6.54
// destruct them:-
const { x: a, y: b, z: c } = vole;
console.log(`${a},${b},${c}`); */

/* const AVG_Temp = {
  today: 77.5,
  tomorrow: 79,
};
function getTemp(avg_temp) {
  "use strict";
  const { tomorrow: tom } = avg_temp;
  return tom;
}
console.log(getTemp(AVG_Temp)); */

// destruct assignment with nested objects:-

/* const AVG_Temp = {
  today: { min: 77.5, max: 80 },
  tomorrow: { min: 79, max: 90 },
};
function getTemp(avg_temp) {
  "use strict";
  const {
    tomorrow: { max: maxOfTomorrow },
  } = avg_temp;
  return maxOfTomorrow;
}
console.log(getTemp(AVG_Temp)); */

// Use destructing assignment to assign var from arrays
// const [a, b, , d] = [1, 2, 3, 4];
// console.log(a, b, d);

/* let a = 8,
  b = 6;
() => {
  "use strict"[(a, b)] = [b, a];
};
console.log(a);
console.log(b); */

// use destruct assignment with the rest operators :-
/* const source = [1, 2, 3, 4];
function removeFirstTwo(list) {
  const [, , ...arr] = list;
  return arr;
}
const arr = removeFirstTwo(source);
console.log("after remove");
console.log(arr);
console.log("before remove");
console.log(source); */
// use destruct to pass an object as a fn's params
// ajax example
/* const stats = {
  max: 5,
  standard_divination: 7.5,
  mode: 32.5,
  min: -0.78,
  avg: 38.9,
};
const half = (function () {
  return function half({ max, min }) {
    return (max, min) / 2.0;
    // return `max is ${max} and min is ${min}`;
  };
})();

console.log(stats);
console.log(half(stats)); */
// create string using temp literals
/* var result = {
  success: ["max-length", "no-amd", "performance error"],
  failure: ["array", "function", "data"],
  skipped: ["heap", "stack", "overflow"],
};

function makeList(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(`<li class="text-warning">${arr[i]}</li>`);
  }
  return result;
}
const resultArr = makeList(result.failure);
console.log(resultArr);
document.write(resultArr); */

// write concise object literal declarations using simple fields
// instead of this :-
/* const createPerson = (name, age, gender) => {
  return {
    name: name,
    age: age,
    gender: gender,
  };
};
console.log(createPerson("ali", 50, "male"));

//  this new
const createPersonNew = (name, age, gender) => ({ name, age, gender });
console.log(createPersonNew("ali", 50, "male")); */

// write concise declarative fn:-
// before
// const bicycle = {
//   gear: 2,
//   setGear: function (newGear) {
//     "use strict";
//     this.gear = newGear;
//   },
// };
// bicycle.setGear(3);
// console.log(bicycle.gear);
// after
/* const bicycle = {
  gear: 2,
  setGear(newGear) {
    "use strict";
    this.gear = newGear;
  },
};
bicycle.setGear(3);
console.log(bicycle.gear); */

// using class syntax to define constructor fn:-
// old way :-
/* var SpaceShuttle = function (target) {
  this.target = target;
};
var zeus = new SpaceShuttle("neptune");
console.log(zeus.target);
 */
/* class SpaceShuttle {
  constructor(target) {
    this.target = target;
  }
}
var zeus = new SpaceShuttle("neptune");
console.log(zeus.target); */

// setter and getters in class to access to object :-
/* class Book {
  constructor(author) {
    this._author = author;
  }
  getWriter() {
    return this._author;
  }
  setWriter(updateAuthor) {
    this._author = updateAuthor;
  }
}
book = new Book();
book.setWriter("ali");
console.log(book.getWriter()); */

/* // challenge
function makeClass() {
  class Thermostat {
    constructor(temp) {
      this._temp = (5 / 9) * (temp - 32);
    }
    // getter
    get temperature() {
      return this._temp;
    }
    // setter
    set temperature(updateTemp) {
      this._temp = updateTemp;
    }
  }
  return Thermostat;
}

const Thermostat = makeClass();
const thermos = new Thermostat(76);
let temp = thermos.temperature;
thermos.temperature = 26;
temp = thermos.temperature;
console.log(temp); */

// difference between import and require, export
// use export to reuse a code block
/* const capitalizeString = (str) => {
  return str.CharAt(0).toUpperCase() + str.slice(1);
};
export {capitalizeString};

export const foo = "bar";
export const bar = "foo"; */
// use import * everything from a file
// Math.max
// var arr = [2, 3, 4, 5];
// JS 5
// console.log(Math.max.apply(null, arr));
// JS 6
// console.log(Math.max(...arr));
// var dt = new Date();
// console.log(dt);
// console.log(dt.getDate());
// console.log(dt.getMonth());
// console.log(dt.getHours());
// console.log(dt.getDay());
// var obj = {
//   fname: "ali",
//   lname: "m7gob",
//   age: 32,
//   display: function () {
//     console.log(`fname-${this.fname}`);
//   },
//   countries: ["egypt", "japan"],
// };

// console.log(obj.display());
// console.log(obj.countries[0]);
// console.log(obj);
//obj["countries"].forEach((elm) => console.log(elm));
