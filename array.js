// Document vs window
// console.log(Document)
// console.log(document.getElementsByTagName("h1")[0].textContent);

// console.log(document.querySelector('h1').textContent);

// console.log(window)
// window.alert("Funny page 🥱😛🎇")
// window.confirm("Are you sure to leave this site 🙄")
// var marks = [45, 67, 70, 89];
// console.log(marks[2]);
// console.log(marks.length)

// for loop
// for (var i = 1; i < marks.length; i++) {
//     var result_For = ["i in for loop", marks[i]]
//     console.log(result_For)
// }
// console.log(JSON.stringify(result_For))

// for...in -> i is index

// for (var i in marks) {
//     var result_ForIN = ["i in for in loop", marks[i]]
//     console.log(result_ForIN)
// }
// console.log(JSON.stringify(result_ForIN))

//  for ... of -> val is to take value

// for (val of marks) {
//     var result_ForOF = ["i in for of loop", val]
//     console.log(result_ForOF)
// }
// console.log(JSON.stringify(result_ForOF))

// if continue strategy
/*
var ans = prompt("Enter value")
for (var i = 0; i < ans; i++) {
    if (i == 9)
        continue;
    alert("Warning: ", i)
}
*/

// if break strategy
/*
var ans = prompt("Enter value")
for (var i = 0; i < ans; i++) {
    if (i == 9)
        break;
    alert("Warning: ", i)
}
*/

// To find highest Value

// var marks = [98, 97, 99, 70, 89, 95];
// var max = 0
// for (var val of marks) {
//     if (val > max) {
//         max = val
//     }
// }
// console.log("The hight mark is ", max)

// pass if its is more than 35+

//var marks = [45, 67, 70, 89, 16, 28, 67, 90, 32, 79, 89, 24, 50, 56, 21, 20, 19, 78, 10, 89, 14, 32, 30, 46, 79, 28, 24, 50, 40, 23, 20, 41, 35]; 
// var max = 35
// var pass = 0
// for (var val of marks) {
//     if (val >= max) {
//         pass = val
//         console.log("You Are PASS ", pass)
//     } else {
//         console.log("You Are Fail ", val)

//     }
// }
// console.log("WOW thats really Awesome buddy Ashok!!!!😎😋😘🤗")

// var resume = {
//     pic: {
//         picture: "Cool😎 of Ashok"
//     },

//     Contact_info: {
//         Name: "Ashok -> Full stack developer",
//         Address: "33 west, Ponnagaram, 6th street, madurai",
//         phone: "912356789",
//         Email: "DavAshokc@gmail.com"
//     },
//     Skills: {
//         Language: ["Tamil", "English"],
//         Business: "Stock market",
//         Know_language: ["html", "css", "Javascript"]
//     },
//     Education: {
//         Completed_10th: 2017,
//         Completed_12th: 2019,
//         clg_Passout: 2022
//     },
//     Certification: {
//         Complition: "Basics of internet",
//         Current: 'Currently pursuing my paid intenship at "Guvi"'
//     }
// }

// console.log(resume)
// console.log(JSON.stringify(resume))
// console.log(typeof resume)


// 1. [73, 9, 10, 90]  // 90
// 2. [80, 50, 100, 75] // 100
// 3. [90, 1000, -4, 5] // 1000

// function Array_num(a, b, c, d) {
//     var result = a + b + c + d;
//     return result
// }