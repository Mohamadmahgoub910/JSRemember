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
