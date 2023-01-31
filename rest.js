//`rest operator is used to combine Remaining value and put it into And array (or)object name`
// let [s1, s2, ...s3] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(s1, s2, s3)

//add function using ..rest operator

// function sum(...num) {
//     console.log(...num)
//     let total = 0;
//     for (var val in num) {
//         total = total + parseInt(val);
//     }
//     return total
// }
// console.log(sum(1, 3, 5, 7, 8, 9, 10, 13, 14))


// //Object short-end

// const age = 21;
// const branch = "BW-TD"
// const mark = [23, 67, 89, 90, 45, 56];
// let marks = [...mark]
// const file = {
//     age: age,        /* if the key and value are same than we can just use  */
//     branch,          
//     slice: marks,
// }
// console.log(file.slice)

// let num1 = [23, 56, 78, 89, 89, 98, 70]
// let result = Infinity;

// for (var i in num1) {
//     if (num1[i] < result) {
//         result = num1[i]
//     }
// }
// console.log(result)

// let num2 = [23, 56, 78, 89, 89, 98, 70]
// let result1 = -Infinity;

// for (var i in num2) {
//     if (num2[i] > result) {
//         result = num2[i]
//     }
// }
// console.log(result)

// let num = [23, 56, 78, 89, 89, 98, 70]
// console.log(typeof num)
// console.log(Math.min(...num))
// console.log(Math.max(...num))

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
// const names = scores.filter(function(name) {
//     if (name.marks >= 40) {
//         return name.name
//     }
// })
// console.log(names)