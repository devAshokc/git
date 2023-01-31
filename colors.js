var head = document.createElement('h1')
head.innerHTML = "Ashok"
head.classList.add("main", "text-primary", "main2", "bg-warning")
head.setAttribute('id', "a")
document.body.append(head)

var first = document.querySelector('h1')
console.log(first)
var second = document.querySelector('div')
console.log(second)



// var division = document.createElement('div')
// division.innerHTML = "syed"
// division.setAttribute('class', 'div')
// division.setAttribute('id', 'a')
// division.setAttribute('style', 'background-color: red; color:white')
// document.body.append(division)

// var input = document.createElement('input')
// input.setAttribute('type', 'numbers')
// input.setAttribute('placeholder', 'Enter your number..')
// document.body.append(input)