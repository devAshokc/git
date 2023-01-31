// 1. comparing Two json  have the same properties without order

// By Creating an new variable we can compare two json 

// // a.
// var obj1 = {
//     name: "Person 1",
//     age: 5
// };
// console.log(obj1)
// console.log(JSON.stringify(obj1))

// // b.
// var obj2 = {
//     age: 5,
//     name: "Person 1"

// };
// console.log(obj2)
// console.log(JSON.stringify(obj2))
// var obj3 = obj1 === obj2;
// console.log(obj3)

// function drivingTest(age) {
//     if (age > 18) {
//         console.log("eligible")
//     } else {
//         console.log("not eligible")
//     }
// }
// drivingTest(16)

// function drivingTest(age) {
//     if (age > 18) {
//         var msg = "eligible"

//     } else {
//         msg = "not eligible"
//     }
//     return msg;
// }
// console.log(drivingTest(134))

// function drivingTest(age) {
//     let msg;
//     if (age > 18) {
//         msg = "eligible"

//     } else {
//         msg = "not eligible"
//     }
//     return msg;
// }
// console.log(msg)
// drivingTest(134)

//Numeric Separator - > example

// var t1 = 1_00_00_000;
// console.log(t1)

//template litral - > example

// function someAdding(a, b) {
//     console.log(`va_Da ${a} Here is your ${b},But   
//     parama padi da😌`) /* Multi_line is Applicable   ,   ${} -> interpolation */
// }
// someAdding("Ashoku!", "Code")

// Array destructuring

// const [tt, t1, t2 = 400, t5, t3 = 300] = [100, , , 200, 100];
// console.log(t5, t3, tt, t2, t3)

// XML-HttpRequest
// const xhr = new XMLHttpRequest();

// xhr.open("GET", "https://restcountries.com/v3.1/all") /* opening data that we need from server */
// xhr.send(); /* Sending to browser That data */

// xhr.responseType = "json" /* Data type */

// xhr.onload = function displayResult() {
//     const countries = xhr.response;
//     console.log(countries)
//     console.log(countries.length)
//     for (i = 0; i < countries.length; i++) {
//         console.log(parseInt(i) + 1, "The name is: ", countries[i].name.common)
//         console.log("the region is:", countries[i].region)
//         console.log("The Sub region is: ", countries[i].subregion)
//         console.log("The  populations are: ", countries[i].population)
//     }
// }

// const xhr = new XMLHttpRequest();

// xhr.open("GET", "https://www.everi.com/") /* opening data that we need from server */
// xhr.send(); /* Sending to browser That data */

// xhr.responseType = "webpage" /* Data type */

// xhr.onload = function displayResult() {
//     const countries = xhr.response;
//     console.log(countries)
//     console.log(countries.length)
//     for (i = 0; i < countries.length; i++) {
//         // console.log(parseInt(i) + 1, "The name is: ", countries[i].name.common)
//         // console.log("the region is:", countries[i].region)
//         // console.log("The Sub region is: ", countries[i].subregion)
//         // console.log("The  populations are: ", countries[i].population)
//     }
// }

// object Destructuring

// const { person, money, skin_color, girlfriend, Strength = "powerFull_avenger⚔⛓🐲" } = {
//     person: "HULK🐉",
//     money: 0,
//     skin_color: "green",
//     girlfriend: [false, "Maybe", "natasha👧"]
// }
// console.log(Strength, person, girlfriend[0], typeof Strength)

// Normal function

// function divide(n) {
//     return n / 5;
// }
// console.log(50)

// Arrow function
// const divide = (n) => n / 5
// console.log(divide(50))

//Double arguments
// const divide = (a, j) => a * j
// console.log(divide(7, 31))

// Anonymous Function ->without name

// [2, 4, 6].forEach(function(n) {
//     console.log(n * 2)
// })

// Anonymous + arrow Function

// [550000].forEach((n) => console.log(n / 12))

// IIFE ->  immediately invoked function Expression


// (function(n, k) {
//     console.log(n * 2)
//     console.log(k * 2)
// }(123, 67))

// var nums = [10, 5, 25]
// var squares = nums.map(function(n) {
//     return n * n
// })
// console.log(squares)

// let avengers = ["Hulk", "Iron man", "Black widow", "Captain america", "Spider man", "Thor", ];
// let result = avengers.map((n) => n.length)
// console.log(result)

// Anonymous function using map
// let avengers = ["Hulk", "Iron man", "Black widow", "Captain america", "Spider man", "Thor", ];
// let lettersCount = (n) => n.length
// let result = avengers.map(lettersCount)
// console.log(result)

// joins is to join something like ("," or "~" or more...)
// console.log(avengers.join(", "))
// console.log(typeof avengers.join(", "))

// Finding pass mark in an array method filter using Anonymous function
// const marks = [90, 40, 25, 85, 10, 0, 99];
// const passMark = marks.filter(function(n) {
//     return n >= 40
// })
// console.log(passMark)

// Finding pass mark in an array method filter using Anonymous + arrow function
// const marks = [90, 40, 25, 85, 10, 0, 99];
// const passMark = marks.filter((n) => n >= 40)
// console.log(passMark)

// Finding pass mark in an array method filter using Anonymous function
// const avengers = ["Hulk",
//     "Iron man",
//     "Black widow",
//     "Captain america",
//     "Spider man",
//     "Thor",
// ];
// const moreLetters = avengers.filter(function(n) {
//     return n.length >= 10
// })
// console.log(moreLetters.join("🧨, "))

// const scores = [{
//         marks: 32,
//         name: "Yvette Merritt",
//     },
//     {
//         marks: 57,
//         name: "Lillian Ellis",
//     },
//     {
//         marks: 22,
//         name: "Mccall Carter",
//     },
//     {
//         marks: 21,
//         name: "Pate Collier",
//     },
//     {
//         marks: 91,
//         name: "Debra Beard",
//     },
//     {
//         marks: 75,
//         name: "Nettie Hancock",
//     },
//     {
//         marks: 20,
//         name: "Hatfield Hodge",
//     },
// ];

// To print only names of Array of object
// var names = scores.map(function(n) {
//     return n.name
// })
// console.log(names)

// Return names that got passMark 

// var passMark = scores.filter((n) => n.marks >= 40)
// console.log(passMark)
// var result = passMark.map((n) => n.name)
// console.log(result)


// Return names that got passMark dot chaining

// .dot chaining pattern

// var passMark = scores
//     .filter((n) => n.marks >= 40)
//     .map((n) => n.name)
// console.log(passMark)

// to find avarage 

// const scores = [{
//         marks: 32,
//         name: "Yvette Merritt",
//     },
//     {
//         marks: 57,
//         name: "Lillian Ellis",
//     },
//     {
//         marks: 22,
//         name: "Mccall Carter",
//     },
//     {
//         marks: 21,
//         name: "Pate Collier",
//     },
//     {
//         marks: 91,
//         name: "Debra Beard",
//     },
//     {
//         marks: 75,
//         name: "Nettie Hancock",
//     },
//     {
//         marks: 20,
//         name: "Hatfield Hodge",
//     },
// ];
// 
// var totalMarks = scores.map(function(n) {
//     return n.marks
// })
// console.log(totalMarks);

// var result1 = totalMarks
//     .reduce((acc, curr) => acc + curr)
// var result = result1 / 7
// console.log(result)
// console.log(result.toFixed(2))

// var totalMarks = scores
//     .map((n) => n.marks)
//     .reduce((acc, curr) => acc + curr)
// console.log(totalMarks / 7)

// //1.Get all the countries from the Asia continent /region using the Filter function
// const xhr = new XMLHttpRequest();

// xhr.open("GET", "https://restcountries.com/v3.1/region/Asia") /* opening data that we need from server */
// xhr.send(); /* Sending to browser That data */

// xhr.responseType = "json" /* Data type */

// xhr.onload = function displayResult() {
//     var countries = xhr.response
//     countries.filter((n) => console.log(`The countries are: `, n.name.common))
// }


//2. Get all the countries with a population of less than 2 lakhs using Filter function

// const xhr = new XMLHttpRequest();

// xhr.open("GET", "https://restcountries.com/v3.1/all") /* opening data that we need from server */
// xhr.send(); /* Sending to browser That data */

// xhr.responseType = "json" /* Data type */

// xhr.onload = function displayResult() {
//     var countries = xhr.response
//     countries.filter(function(n) {
//         if (n.population < 200000 == true)
//             console.log(`the Country is: `, n.name.common, `!!`, `Population are: `, n.population)
//     })
// }

// //3. Print the following details name, capital, flag using forEach function

// const xhr = new XMLHttpRequest();

// xhr.open("GET", "https://restcountries.com/v3.1/all") /* opening data that we need from server */
// xhr.send(); /* Sending to browser That data */

// xhr.responseType = "json" /* Data type */

// xhr.onload = function displayResult() {
//     var countries = xhr.response
//     countries.forEach((n) => console.log("The name are: ", n.name.common))
//     countries.forEach((n) => console.log("The name are: ", n.capital))
//     countries.forEach((n) => console.log("The name are: ", n.flag))
// }

// 4.Print the total population of countries using reduce function
// const xhr = new XMLHttpRequest();

// xhr.open("GET", "https://restcountries.com/v3.1/all") /* opening data that we need from server */
// xhr.send(); /* Sending to browser That data */

// xhr.responseType = "json" /* Data type */

// xhr.onload = function displayResult() {
//     var countries = xhr.response
//     var result = [];
//     countries.map(function(n) {
//         var country = n.population
//         result.push(country)
//         var result1 = result.reduce(function(acc, curr) {
//             return acc + curr
//         })
//         console.log(result1)

//     })

// }

// const array = [2, 4, 6, 8, 10]
// const result = array.reduce((acc, curr) => acc + curr, 0)
// console.log(result)



// 5 .Print the country which uses US Dollars as currency.

// const xhr = new XMLHttpRequest();

// xhr.open("GET", "https://restcountries.com/v3.1/all") /* opening data that we need from server */
// xhr.send(); /* Sending to browser That data */

// xhr.responseType = "json" /* Data type */

// xhr.onload = function displayResult() {
//     var countries = xhr.response
//     countries.forEach((n) => console.log("The name are: ", n.currencies))
// }