class BankAccount {
    constructor(name, Account_Num, balance, ifse_code) {
        this.name = name;
        this.Account_Num = Account_Num;
        this.balance = balance;
        this.ifse_code = ifse_code
    }
}
const person = new BankAccount("Ashok", 1234 - 5678 - 9029, "🎯4000", 785647)
console.log(person)


// Anonymous Function - Bring odd numbers

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// let result_odd = array.filter(function(n) {
//     return n % 2 == 1
// })
// console.log(result_odd)

// Anonymous Function - Bring Even numbers

// let result_even = array.filter(function(n) {
//     return n % 2 == 0
// })
// console.log(result_even)

// var find_Odd_num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// var result = find_Odd_num.filter((n) => n % 2 === 0)
// console.log(result)

// convert all string into an title caps in an array

// class BankAccount {
//     constructor(name, Account_Num, balance, ifse_code) {
//         this.name = name;
//         this.Account_Num = Account_Num;
//         this.balance = balance;
//         this.ifse_code = ifse_code
//     }
//     get_balance() {
//             return `The current balance is ${this.balance}`
// }
// withdraw(amount) {
//     if (this.balance >= amount) {
//         this.balance = this.balance - amount
//         return this.get_balance()
//     } else {
//         return `insufficient fund ${this.get_balance()}`
//     }
// }
//     deposit(amount) {
//         this.balance = amount + this.balance
//         return this.get_balance()
//     }
// }
// const person = new BankAccount("Ashok", 1234567890, 100000, 785647)
// const usha = new BankAccount("Ashok", 1234567890, 2000000, 785647)
// const prabhu = new BankAccount("Ashok", 1234567890, 500000, 785647)
// const priya = new BankAccount("Ashok", 1234567890, 1100000, 785647)
// const darshini = new BankAccount("Ashok", 1234567890, 1300000, 785647)
// console.log(usha.get_balance())
// console.log(person.withdraw(2000000))
// console.log(usha.deposit(1234))

// class Uber {
//     constructor() {

//     }
// }
// const to