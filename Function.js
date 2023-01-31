// ex : 1
/* var num = 10;

const addFive = (num) => num + 5
console.log(addFive(5));
console.log(addFive(0))
console.log(addFive(-5)) */

// ex : 2
// var num = 5;

// function getOpposite(num) {
//     let num1 = -1 * num
//     return num1
// }
// console.log(getOpposite(5))  not solved 😫
// console.log(getOpposite(0))
// console.log(getOpposite(-5))
// console.log(getOpposite("5a"))
// console.log(getOpposite(5.5))

// output
// -5
// 0
// 5
// -1
// -1

// ex : 3
// take uh min and convert into sec
// const toSecond = (min) => min * 60;
// console.log(toSecond(60))
// console.log(toSecond(3))
// console.log(toSecond(2))
// console.log(toSecond(1))

// ex : 4
// Convert string_numbers into numbers

// function toNumbers(my_str) {
//     return parseInt(my_str)
// }
// console.log(toNumbers("6"))
// console.log(toNumbers("1000"))
// console.log(toNumbers("12"))
// console.log(toNumbers("14"))

// ex : 5
// create  a function that takes a number as an argument,  increment the number by +1 and returns the result

// function argNumber(my_int) {
//     return my_int + 1
// }
// console.log(argNumber(0));
// console.log(argNumber(9));
// console.log(argNumber(-3));
// console.log(argNumber(-1));

// ex : 6
// return firstElement of a array
// function myArray(a) {
//     return a[0]
// }
// console.log(myArray([1, 2, 3]))
// console.log(myArray([80, 5, 100]))
// console.log(myArray([-500, 0, -500]))

// ex: 7
// covert hours into sec

// const toSecond = (hours) => hours * (60 * 60); /* or 3600 -> sec */
// console.log(toSecond(2))
// console.log(toSecond(10))
// console.log(toSecond(24))
// console.log(toSecond(15))

// const userInput = [];

// function data(ans) {
//     userInput.push(ans)
//     userInput.
// }
// data("guvi")
// console.log(userInput)

//1.(a) Print odd numbers in an Array using Anonymous function

var oddNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter((n) => {
    return n % 2 == 1
})
console.log(oddNumbers)
// output ->  [1, 3, 5, 7, 9]

//3.(a) Print odd numbers in an Array using Arrow function

// var oddNumbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter((n) => n % 2 == 1)
// console.log(oddNumbers1)

//1.(b) Convert all string to title caps in an string array

// var toUppercase = ["Muthu", "keerthana", "Sindhu", "Ashok", "chinna", "Jeba"].map(function(n) {
//     return n.toUpperCase()
// })
// console.log(toUppercase)

// Output ->  [ 'MUTHU', 'KEERTHANA', 'SINDHU', 'ASHOK', 'CHINNA', 'JEBA']

//3.(b) Convert all string to title caps in an string array

// var toUppercase1 = ["Muthu", "keerthana", "Sindhu", "Ashok", "chinna", "Jeba"].map((n) => n.toUpperCase())
// console.log(toUppercase1)

// Output ->  ['MUTHU''KEERTHANA', 'SINDHU', 'ASHOK', 'CHINNA', 'JEBA']


//1. (c) Sum of all numbers in an array

// var toSum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].reduce(function(acc, curr) {
//     return acc + curr
// })
// console.log(toSum)

// output -> 55


//3. (c) Sum of all numbers in an array

// var toSum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].reduce((acc, curr) => acc + curr)
// console.log(toSum)

// return all palindromes in an array
// const palindromeArray = (arr) =>{
//     let isPalindrome = true;
//     for (let i = 0; i < arr.length / 2; i++) {
//         if (arr[i] !== arr[arr.length - i - 1]) {
//             isPalindrome = false;
//             break;
//         }
//     }
//     return isPalindrome
// }
// console.log(palindromeArray([2, 1, 1, 2]));
// console.log(palindromeArray([2, 2, 2, 2]));
// console.log(palindromeArray([1, 23, 23, 2]));
// console.log(palindromeArray([10, 2, 2, 8]));

function palindromeArray(arr) {
    let isPalindrome = true;
    for (let i = 0; i < arr.length / 2; i++) {
        if (arr[i] !== arr[arr.length - i - 1]) {
            isPalindrome = false;
            break;
        }
    }
    return isPalindrome
}
console.log(palindromeArray([2, 1, 1, 2]));
console.log(palindromeArray([2, 2, 2, 2]));
console.log(palindromeArray([1, 23, 23, 2]));


// class Calculate {
//     constructor(price) {
//         this.price = price
//     }
//     getPrice() {
//         return `The User price is: ${this.price * 100}`
//     }
// }

// const person1 = new Calculate(1039)
// const person2 = new Calculate(200)

// console.log(person2.getPrice())
// console.log(person1.getPrice())



// const xhr = new XMLHttpRequest()

// xhr.open("GET", "https://restcountries.com/v3.1/subregion/Asia") /* opening data that we need from server */
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
