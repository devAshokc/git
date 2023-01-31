console.log("This is my first line in javascript")

// Implisit is what js Automatically concat String to number
// Addition
console.log("implisit", "5" + 5);
// Subraction
//There is not any concat or explisit or Addition symbol Compiler just don subraction
console.log("implisit", "5" - 5);

// Some more example of Implisit
console.log("My name is Ashok nd i am good boy, My age is" + " " + 20);

// There are some more ways to convert values manuallly They areknow as explisit
// By -> propertys
var x1 = "55";
var x2 = 5;
var x3 = parseInt.x1 + x2
console.log(x3);
console.log(typeof(x3));

// by -> Concat
var j1 = "55";
var j2 = 5;
var j3 = j1.concat(j2)
console.log(j3);
console.log(typeof(j3));

//By-> Changing Data type
var m1 = "55";
var m2 = 5;
var m3 = Number(m1) + m2
console.log(m3);
console.log(typeof(m3));


// copy by referance
// var k1 = [6, 7, 8];
// var k2 = [6, 7, 8];
// var k3 = k1;
// console.log(k3 === k1);
// console.log(k2 === k1);

// Normal 3equal
var t1 = 7
var t2 = 7
console.log(t1 === t2);

// push -> Copy by Reference
var k1 = [6, 7, 8];
var k2 = [6, 7, 8];
var k3 = k1;
k1.push(2)
k2.push(50)
k3.push(100)
console.log(k1, k2, k3);

// copy by value -> Spread operator
var u1 = [99, 80, 100]
var u2 = [...u1]
u2.push(85)
u1[1] = 95;
console.log(u1, u2);

// copy by value -> Concat

// var u3 = [40, 45, 44]
// var u4 = u3.concat([])
// console.log(u4);
// u3[3] = 43
// console.log(u3);
// console.log(u3 = u4);
// console.log(u3 === u4);

var army_person = {
        name: "Ashok",
        Position: "Blacksquard",
        batch: 122345,
        weapon_handling: true
    }
    //bracket notation or syntax
console.log(army_person["Position"])
    //dot notation or syntax
console.log(army_person.Position)
    //Assign value 
console.log(army_person["name"])

army_person["batch"] = army_person.batch + 100;
var keyName = "batch";
console.log(army_person[keyName]);
console.log(army_person)

//JSON UNDERSTOOD BY ALL LANGUAGE 
console.log(JSON.stringify(army_person));
console.log(typeof Object(JSON.stringify(army_person)));

console.log(typeof JSON.stringify(army_person));