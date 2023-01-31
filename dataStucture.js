// var twoSum = function (nums, target) {
//     let valueIndexMap = new Map()
//     let n = nums.length
//     for (let i = 0; i < n; i++) {
//         // valueIndexMap.set(i, nums[i]) // O(1)
//         valueIndexMap.set(nums[i], i) // O(1)
//     }
//     console.log(valueIndexMap)
// };
// twoSum([1, 2, 3, 4, 5, 2, 7], 4)



var twoSum = function (nums, target) {
    // 1. O(N ^ 2) approach
    // let n = nums.length
    // for (let i = 0; i < n; i++) {
    //     for (let j = i + 1; j < n; j++) {
    //         if (nums[i] + nums[j] === target) {
    //             return [i, j]
    //         }
    //     }
    // }
    // return [-1, -1]
    // 2 O(n) approach
    let valueIndexMap = new Map()
    let n = nums.length
    for (let i = 0; i < n; i++) {
        var setMap = valueIndexMap.set(nums[i], i) // O(1)
    }
    console.log(setMap)
    for (let i = 0; i < n; i++) {
        const firstNum = nums[i] // 3
        const secondNum = target - firstNum // 3 5
        // console.log(i)
        // Search secondValue in Map
        if (valueIndexMap.has(secondNum) === true) {
            const index = valueIndexMap.get(secondNum)
            console.log("this is indexvaliue:", index)  // O(1) // 3
            console.log(i)
            if (i != index) {
                return [i, index]
            }
        }
    }
    return [-1, -1]
};
console.log(twoSum([1, 1, 4, 5, 6, 7], 9))



// lexical or static scope
function fun1() {        //GrandFather
    let a = 10;
    console.log(a)
    fun2()
    function fun2() {   //Father
        let b = 20;
        console.log(a, b)
        fun3()
        function fun3() {     //Child
            let c = 30;
            console.log(a, b, c)
        }
    }
}
fun1()

// chiled can access father and grandfather but father can't access chiled
// child can access resoures but Parents but child can't  something like inheritances


// Inner function can access the enclosed outer function resourses

// function greet(name) {
//     let greeting = "hi, " + name
//     res()
//     function res() {
//         console.log(greeting)
//     }
// }
// let display = greet("Ashok")

function greet(name) {
    let geeting = "hi, " + name
    return function () {
        console.log(geeting)
    }
}
let display = greet("Chinnasamy")
display()

function modifyCart() {      //grandfather
    let items = 0;
    return {
        add: function () {
            console.log("item added successfully!")  // dad
            items++
        },
        getCount: function () {     //son
            let a = "added item =" + items
            console.log(a)
        }
    }
}
let item = modifyCart()
item.add()
item.add()
item.add()
item.add()
item.add()
item.add()
item.getCount()