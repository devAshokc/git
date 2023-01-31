// Ex-1
// const drivingEligibility = new Promise((resolved, rejected) => {
//     let a = 18;
//     if (a > 18) {
//         resolved("You are eligible.")
//     } else {
//         rejected("You are not eligible")
//     }
// })
// console.log(drivingEligibility, typeof drivingEligibility)


// Ex-2
// const drivingEligibility1 = new Promise((resolved, rejected) => {
//     let a = 17;
//     if (a > 18) {
//         setTimeout(() => {
//             resolved("You are eligible")
//         }, 5000)
//     } else {
//         setTimeout(() => {
//             rejected("You are not eligible")
//         }, 2000)
//     }
// })
// console.log(drivingEligibility1, typeof drivingEligibility1)

// drivingEligibility1
//     .then((msg) => msg + " Awesome Congrats🎆🎇🎄!!")
//     .then((msg1) => console.log(msg1))
//     // .catch((msg3) => msg3 )
//     .catch((msg2) => console.log(msg2 + " Better luck next time"))
//     .finally(() => console.log("Your are great"))

// Ex-3

// const countDown = document.querySelector(".countDown")

// let msg = ((num) =>
//     new Promise((resolved, rejected) => {
//         if (num > 0) {
//             setTimeout(() => {
//                 console.log(num)
//                 countDown.innerText = num
//                 resolved(num)
//             }, 500)
//         } else {
//             setTimeout(() => {
//                 countDown.innerText = "Happy independence day"
//                 rejected("Happy independence day")
//             }, 1000);
//         }
//     })
// )
// msg(10)
//     .then((n) => msg(--n))
//     .then((n) => msg(--n))
//     .then((n) => msg(--n))
//     .then((n) => msg(--n))
//     .then((n) => msg(--n))
//     .then((n) => msg(--n))
//     .then((n) => msg(--n))
//     .then((n) => msg(--n))
//     .then((n) => msg(--n))
//     .catch((res) => console.log(res))