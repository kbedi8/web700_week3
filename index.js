var a = 10
a = "hello"
//var a = 200
var status = true
let b = 20
{
    let b = 400
}
// let b = 300
const c = 30

function sayHello() {
    console.log("Hello")
}

function greet(name) {
    console.log("Hello, " + name)
}

sayHello()
greet("Alice")
greet("Bob")

const add = function (a, b) {
    return a + b
}
add(5, 10)

// Arrow function
var subtract = (a, b) => {
    return a - b
}



console.log(typeof add)
console.log(typeof a)
console.log(typeof b)
console.log(typeof a)
console.log(typeof status)
console.log(typeof x)
console.log(typeof null)
//kunwar
