// var names = ['ashok', 'usha', "mohammad", "syad", "priya"]
// var newArray = []
// for (var val of names) {
//     let firstLetter = val.charAt(0)
//     firstLetter = firstLetter.toUpperCase()
//     let restLetters = val.substring(1, val.length)
//     restLetters = firstLetter + restLetters
//     newArray.push(restLetters)
// }
// console.log(newArray)

// var one = "Ashok this is my pen"
// var splitted = one.split("")
// console.log(splitted)
// console.log(typeof splitted)
// console.log(splitted.join(''))
// console.log(typeof splitted)
// let words = one.split(" ")
// console.log(words);

// String array into  the string title caps

// var names = ['ashok', 'usha', "mohammad", "syad", "priya"]
// let result = []
// for (var val of names) {
//     let words = val.toUpperCase()
//     words = result.push(words)
//     console.log(words)
// }
// console.log(result)

// Sum of all numbers in an array
// var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let Total = 0;
// for (var i in num) {
//     Total = Total + num[i]
// }
// console.log(Total)

var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let total = [];
for (let i = 2; i < num.length; i++) {
    if (num[i] % i == 0) {
        var result = total.push(num[i])
    }
}
console.log(total)