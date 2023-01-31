// Function in javascript

// function add(a, b) {
//     let result = a + b;
//     return result;
// }
// console.log(add(25, 67))
// console.log(add(4071, 690))
// console.log(add(7145, 897))
// console.log(add(908, 547))
// console.log(add(25123, 6907))

// To find highest num of multiple array using function declaration

// function findMax(num) {
// let num = [12, 56, 89, 34];
//     var max = -Infinity;
//     for (var val of num) {
//         if (val > max) {
//             max = val;
//         }
//     }
//     return max;
// }
// console.log("the highest mark: ", findMax([12, 56, 89, 34]))
// console.log("the highest mark: ", findMax([12, 45, 90, 34]))
// console.log("the highest mark: ", findMax([12, 56, 89, 12]))
// console.log("the highest mark: ", findMax([12, 56, 78, 34]))

// Types of declaration

//  Re_declaration is know as -> var

// var x1 = 10;
// var x1 = 40
// console.log(x1)
// console.log(x1)
// var x1 = 47;
// console.log(x1)

// Reassignment is know as -> var  here we cant redeclar the declaration

// let x2 = 13;
// let x2 = 56;   /*Identifier 'x2' has already been declared*/
// console.log(x2)

// we can change are modify the value in const but can't declara are assign the value for const  

// let x1;
// console.log(x1)
// console.log(x2)
// const person = {
//         name: "Someone",
//         age: 21,
//         Alive: true
//     }
// person.name = "Ashok"
// console.log(person.Alive)
// person.Alive = false;
// person = 12;
// person.age = 20;
// console.log(person)
// console.log(person.Alive)
// console.log(person = []);    /* Uncaught TypeError: Assignment to constant variable. */

// There are two types of Scope -> function scope, block scope

// Block scope
// {
//     var x3 = 12;
//     let t1 = 10;
//     console.log(t1);
//     const t2 = [1, 2, 3, 4, 5, 6, 7, 8];
//     console.log(t2);
//     // let and const dies inside the block 
// }


// function Scope
// function fun(a) {
//     var t3 = a;
//     console.log(t3)
//         // return t3
// }
// console.log(fun(67))
/* Uncaught ReferenceError: t3 is not defined */
// console.log(a1);
// let a1 = 30;

// input output method

// var name = "guvi"
// var result = [];
// for (var i in name) {
// console.log(name[i])
//     result.push(name[i])
// }
// console.log(result.toString())

// var name = "guvi"
// var result = name.join(",")
// console.log(result)


// const celsius = prompt("Enter a celsius value: ");

// // calculate fahrenheit
// const fahrenheit = (celsius * 1.8) + 32

// // display the result
// console.log(`${celsius} degree celsius is equal to ${fahrenheit} degree fahrenheit.`);

// const fahrenheit = (39 * 1.8) + 32
// console.log(fahrenheit.toFixed(2))

// let result = [12, 45, 67, 89].filter(function(n) {
//     let number = n % 2 == 0
//     let number = "Even"
//     return number
// })
// console.log(result)


// var january = 1;
// var february = 2;
// var march = 3;
// var April = 4;
// var may = 5;
// var june = 6;
// var july = 7;
// var August = 8;
// var September = 9;
// var october = 10;
// var november = 11;
// var December = 12;

// function days(a) {
//     if (january === a) {
//         a = 31
//     } else if (february === a) {
//         a = 28
//     } else if (march === a) {
//         a = 31
//     } else if (April === a) {
//         a = 30
//     } else if (may === a) {
//         a = 31
//     } else if (june === a) {
//         a = 30
//     } else if (july === a) {
//         a = 31
//     } else if (August === a) {
//         a = 31
//     } else if (September === a) {
//         a = 30
//     } else if (october === a) {
//         a = 31
//     } else if (november === a) {
//         a = 30
//     } else if (December === a) {
//         a = 31
//     } else {
//         a = "Error"
//     }
//     return a
// }
// console.log(days(34))

// function val(a) {
//     if (a === 0) {
//         return a = "Error"
//     } else {
//         return a * a
//     }
// }
// console.log(val(0))

// var nums = "2.3 4.5 7.8".split(" , ")
// var array = []
// array.push(nums)
// for (var i in array) {
//     console.log(array[i])
// }
// tofind max number
// var nums = [];
// var first = nums.push(parseInt('1'))
// var Second = nums.push(parseInt('2'))
// var third = nums.push(parseInt('3'))

// console.log(Math.max(...nums))

// Factorial oh n number
// function factorial(n) {
//     //base case
//     if (n == 0 || n == 1) {
//         return 1;
//         //recursive case
//     } else {
//         return n * factorial(n - 1);
//     }
// }
// let n = 4;
// answer = factorial(n)
// console.log("The factorial of " + n + " is " + answer);

// return n numbers length
// var n = 5;
// for (var i = 1; i <= n; i++) {
//     console.log(i)
// }

// Using the method of looping, write a program to print the table of 9 till N in the format as follows:
// (N is input by the user)

// 9 18 27...

// Print NULL if 0 is input

// const readline = require("readline");

// const inp = readline.createInterface({
//   input: process.stdin
// });

// const userInput = [];

// inp.on("line", (data) => {
//   userInput.push(data);
// });

// inp.on("close", () => {
//start-here
//Your code goes here … replace the below line with your code logic 

// let a = parseInt(5);
// console.log(a)
// console.log(typeof a)
// let table9;
// let s = "";
// if (a == 0) {
//     console.log("NULL");
// } else {
//     for (i = 1; i <= a; i++) {
//         s = s + (i * (9)) + " ";
//     }
// }
// console.log(s)
//end-here

// find the multiplay of numbers using n
// let a = 5;
// let result = "";
// if (a == 0) {
//     console.log("NULL")
// } else {
//     for (var i = 1; i <= a; i++) {
//         result = result + (i * 9) + " "
//     }
// }
// console.log(result)
// var result = ""

// function val(a) {
//     if (a == 0) {
//         return null
//     } else {
//         for (var i = 1; i <= a; i++) {
//             result = result + (i * 9) + " "
//         }
//     }
//     return result
// }
// console.log(val(0))



// You are provided with two numbers. Find and print the smaller number.

// let userInput = "23 1"
// var number = userInput.split(" ")
// console.log(Math.min(...number))

// You are given with Principle amount($), Interest Rate(%) and Time (years) in that order. Find Simple Interest.

// Print the output up to two decimal places (Round-off if necessary).

// (S.I. = P*T*R/100)
// var array = []
// var a = "1000 2 5";
// var b = a.split(" ")
// var SI = b[0] * b[1] * b[2] / 100
// console.log(SI)
// for (var i in b) {
//     let c = b[i]
//     array.push(c)
// }
// console.log(array)

// You are provided with the radius of a circle "A". Find the length of its circumference.

// Note: In case the output is coming in decimal, roundoff to 2nd decimal place. In case the input is a negative number, print "Error".

// var A = 2;
// var circumference = 2 * Math.PI * A
// console.log(circumference.toFixed(2))


// Let "A" be a year, write a program to check whether this year is a leap year or not.

// Print "Y" if its a leap year and "N" if its a common year.

// Input Description:
// A Year is the input in the form of a positive integer.

// Output Description:
// Print "Y" if its a leap year and "N" if its a common year.

// Sample Input :
// 2020
// Sample Output :
// Y
// let year = 2019
// if (year % 4 == 0) {
//     console.log("Y")
// } else {
//     console.log("N")
// }

// Write a code to get 2 integers A and N. Print the integer A, N times in separate line.

// Input Description:
// First line contains an integer A. Second line contains an Integer N.

// Output Description:
// Print the integer A, N times in a separate line.

// Sample Input :
// 2 3
// Sample Output :
// 2
// 2
// 2

// let a = "2 3".split(" ")
//     // console.log(a)
// let b = a[0];
// let c = a[1];
// for (var i = 1; i <= c; i++) {
//     console.log(a[0])
// }


// Write a code to get an integer N and print the even values from 1 till N in a separate line.

// Input Description:
// A single line contains an integer N.

// Output Description:
// Print the even values from 1 to N in a separate line.

// Sample Input :
// 6
// Sample Output :
// 2
// 4
// 6

// let numsArray = []
// let a = 1000;
// for (var i = 1; i <= a; i++) {
//     numsArray.push(i)
//         // console.log(numsArray.push(i))
// }
// let result = numsArray.filter(function(n) {
//         return n % 2 === 0
//     })
//     // console.log(result)
// for (val of result) {
//     console.log(val)
// }

// Write a code get an integer number as input and print the sum of the digits.

// Input Description:
// A single line containing an integer.

// Output Description:
// Print the sum of the digits of the integer.

// Sample Input :
// 124
// Sample Output :
// 7


// Write a code to get an integer N and print the digits of the integer.

// Input Description:
// A single line contains an integer N.

// Output Description:
// Print the digits of the integer in a single line separated by space,

// Sample Input :
// 348
// Sample Output :
// 3 4 8

// let a = '348'.split("")
// let b = a
// let result = a[0] + " " + a[1] + " " + a[2]
// console.log(result)

// Write a code get an integer number as input and print the sum of the digits.

// Input Description:
// A single line containing an integer.

// Output Description:
// Print the sum of the digits of the integer.

// Sample Input :
// 124
// Sample Output :
// 7

// let a = '124'.split("")
// let b = a
// let result = a[0] + " " + a[1] + " " + a[2]
// console.log(result)

// Write a code get an integer number as input and print the odd and even digits of the number separately.

// Input Description:
// A single line containing an integer.

// Output Description:
// Print the even and odd integers of the integer in a separate line.

// Sample Input :
// 1234
// Sample Output :
// 2 4
// 1 3
// let a = '1234'.split("")
// let b = a
// let even = b.filter(function(n) {
//     return n % 2 === 0

// })
// let odd = b.filter(function(n) {
//     return n % 2 === 1

// })
// console.log(even.join(' '))
// console.log(odd.join(' '))


// program to check if the string is palindrome or not

// function checkPalindrome(string) {

//     const len = string.length;

//     for (let i = 0; i < len / 2; i++) {

//         if (string[i] !== string[len - 1 - i]) {
//             return 'It is not a palindrome';
//         }
//     }
//     return 'It is a palindrome';
// }



// console.log(checkPalindrome('noon'))

let inputValue = 7;
let isprime = inputValue == 1 ? false : true;  //bcoz 1 is not prime

for (let i = 2; i < inputValue; i++) {
    inputValue % i == 0 ? isprime *= false : isprime *= true;
};

alert(`${inputValue} is ${isprime ? 'prime' : 'not prime'} number`);
