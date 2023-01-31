# Javascript Hint's

## ES6 features

1.  Numeric separator 1_00_00_000
2.  template literal `` back tick ->${} interpolation
3.  ... Spread operator [...u1]
4.  ... Rest operator
5.  Array Destructuring -> stick with exact position
6.  Object destructuring

## Type of Function

1. Normal Function
2. Arrow Function -> FunName =(n) => Ans
3. Anonymous Function ->Array method
4. IIFE -> Immediately invoked Function Expression -> ( Execute with in the bracket), no clash between two function name because IIFE has no function name

### Types of function

1. Normal function
2. Arrow
3. IIFE
4. Anonymous

### Spread operator `...`

1. Concat/Merge arrays
2. Concat/Merge objects
3. Copy arrays & objects
4. Override keys in objects
5. Spread used in any position in the array
6. To pass array as separate arguments

### Rest operator `...`

1. Destructing - Collecting rest of the values
2. Rest element must be last element
3. Collecting multiple arguments in function

### Object short-hand

1. Key name & value name must be same

### `this` keyword

> this is my book

1. `this` requires context (book)
2. `this` is a reference word
3. until the function is called `this` does not point to anything
4. Manually providing (explicit) context
   1. call - passing arguments by comma separated
   2. apply - passing arguments as an array
   3. bind - always returns a new function

Arrow vs normal function

1. Arrow function - `this` does not point to anything
2. Hence we do not use `this` in arrow function
3. Shorter Syntax - one line function
   1. no return statement needed (one line function)
   2. {} not needed (one line function)

### Task

Difference between call vs apply vs bind with an example for each

### OOP - Object Oriented Programming

Style of programming - Paradigm

1. OOP - JAVA
2. Functional - F#, haskell, Scala
3. Procedural
4. Logic

JAVA class != JS class

JS Class implementation is done using functions

| Name    | Wheels | Doors | Engine |
| ------- | ------ | ----- | ------ |
| Ferrari | 4      | 2     | v8     |
| Venue   | 4      | 4     | v3     |
| Bmw x6  | 4      | 4     | v6     |
| Innova  | 4      | 4     | v4     |

1. class is the blueprint, which can create different objects (model)
2. class name starts with Capital letter
3. new creates an object
4. new calls the constructor
5. new makes `this` point the object (ferrari)

Bank account

1. name
2. accno
3. balance

member function

1. Avoiding wrong updates to member variables
2. Helps formatting result
3. All objects share the member function

My Dream:-One Day at Zoho now it's Day One at Zoho...

I am excited to share that I'm starting a new position as Member Technical Staff at Zoho .

I take this opportunity to thank Baskar Govindan sir ,who has truly been a great Mentor and being friendly at the same time in this process of conversion from Incubation to MTS.

Special thanks to my Manager Nagarajan P sir ,who is super cool and has always backed me up and motivated me.

For people,who are working hard chasing your dreams ,just remember this you are doing great ,keep doing it and you will achieve it in no time.

Ps:- "Ella pugazhum iraivanukke"

#zoho #softwaredeveloper #dreamjob #newbeginnings

## map

1.  It always returns copy of array
2.  It always inputArr.length === outputArr.length
3.  Transform data type

## filter

1.  It always returns copy of array
2.  It always inputArr.length >= outputArr.length
3.  input data type === output data type

## dot chaining (pattern)

1. Dot chaining can continue until the array methods returns new array

## Declarative vs Imperative

1. Declarative - What do? - map, filter
2. Imperative - How do? - for

## reduce

1. Array -> any data type

`[1, 7, 3, 10, 5]`
Initial Value -> 0

| acc | curr | result (acc + curr) |
| --- | ---- | ------------------- |
| 0   | 1    | 1                   |
| 1   | 7    | 8                   |
| 8   | 3    | 11                  |
| 11  | 10   | 21                  |
| 21  | 5    | 26                  |

Final result
`26`

No initial value
accumulator -> first element
current -> second element

| acc | curr | result (acc + curr) |
| --- | ---- | ------------------- |
| 1   | 7    | 8                   |
| 8   | 3    | 11                  |
| 11  | 10   | 21                  |
| 21  | 5    | 26                  |

Final result
`26`
