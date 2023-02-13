// let i = 0;
// do {
//   i += 1;
//   console.log(i);
// } while (i < 5);
// Iteration is the repetition of an action occurring until the condition has been met 
// Iteration is the process of repeating the same action until a condition is met 
// for (initialization; condition; afterthought ) { statement }
// The initialization is the starting point, the condition is the length of how long we will repeat the action for, 
// the afterthought is what will occur, and the statement is the action that will be taking place on each element
// An array is a data type specifically meant for storing sequences of values. Visually: it is a list of values between square brackets and separated by commas. The value types in an array can be numbers, strings, or booleans, or even a mix of these values. 
// Math.max is an example of an expression that accesses a property of some value
// What two javascript values do not have properties? null and undefined 
// The elements in an array are stored as array's properties 
// const letters = ["a","b","c"];

// List all Elements
// let text = "";
// for (const x of letters) {
//   text += x + "<br>";
//   console.log(x);
// };

// let n = 0;
// let x = 0;
// while (n < 6) {
//   n++;
//   x += n;
//   console.log("x = " + x + " n = " + n);
// //expected output: 
// // x = 1 n = 1
// // x = 3 n = 2
// // x = 6 n = 3
// // x = 10 n = 4
// // x = 15 n = 5
// // x = 21 n = 6
// }
//The addition assignment (+=) operator:

//adds the value of the right operand to a variable and assigns the result to the variable. 
//The types of the two operands determine the behavior of the addition assignment operator. 
//Addition or concatenation is possible.

// for (let step = 0; step < 5; step++) {
//   // Runs 5 times, with values of step 0 through 4.
//   console.log("Walking east one step");
// }

// 7 Ways to Iterate over an Array Video: https://www.bing.com/videos/search?q=iteration+javascript&&view=detail&mid=656684FDA66A00EFEE70656684FDA66A00EFEE70&&FORM=VRDGAR&ru=%2Fvideos%2Fsearch%3Fq%3Diteration%2Bjavascript%26FORM%3DHDRSC3
// Hi, my name is Jessica Almand and I am a certified MERN Full Stack Web Developer. Today, I will teaching you about the concept of iteration! Let's get started. 
// This lesson will be taught using visual studio code as our code editor, and we will be running code in the integrated terminal using node.js. 
// Follow along and I highly reccommend taking notes. 
              // Node.js is an open-source, cross-platform, Javascript runtime environment that executes JavaScript code outside of a web browser. 

//Basic Iteration 
// When you hear the term "iteration", I want you to think repetition or looping. 
// Iteration is the process of executing a function on mutiple values. 
// In most cases you're probably going to be dealing with an array

// talk about the difference between using just < and <= 
// using just the less than sign will not display 25, if you use the operator of <= (less than or equal to), 25 will display to the console log
// for (let a = 0; a <= 25; a++) {
//   console.log("The square of " + a + " is " + Math.pow(a, 2)); }
// Say we store the varying times it takes for a stoplight to change to check for consistency. 
// var arr = [20, 18.5, 19, 23.3, 19.5];
// In our array we have the different times in seconds it takes a stoplight to turn from red to green 

// Let's say we want to display these values individually to the console? How do we got about this? 
// There are multiple ways we can go about this: a while loop, a for in loop, a for of loop, but today we are going to learn 
// one of the more common approaches and do a for loop. 

// for loop 
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// let i = 0 is us defining a variable which will refer to the index of which value we want to display to the console.
// i < arr.length is the condition for the loop, what we are saying here is that as long as the index is less than the length of the array, repeat the function. 
//i++ is us incrementing the variable as it moves through the loop 
// within the curly brackets is the action that is taking place, which is that we are displaying the the value of the array at (each) index to the console log
// lets say we want to convert our seconds into minutes, how would we go about this? 

// while loop
// in this loop we are saying while i is less than the length of the array, console log each value. 
// let i = 0;
// ^ we are defining a variable which will refer to the index of which value we want to display to the console. 
// Arrays having indexes and values makes them key:value pairs
// while (i < arr.length) {
//   console.log(arr[i]);
//   i++;
// }