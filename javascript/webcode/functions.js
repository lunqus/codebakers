// Functions is a action words (verbs)
// Practice make perfect

// console.log("Hey");

function greet(theName) {
    alert("Hello, my name is " + theName + ".")
}

greet("Benas")

function tripleMe(x) {
    return 3 * x
}

let myFavoriteNumber = tripleMe(12)
alert(myFavoriteNumber)

// Higer-Order Function is a function that either:
//  (A) Accepts a function as an argument
//  (B) Returns a function as a result


document.addEventListener("click", ourAmazingFunction) // (A)

function ourAmazingFunction() {
    alert("Thank you for clicking.")
}


function createMultiplier(multiplier) { // (B)
    return function(x) {
        return x * multiplier
    }
}

let doubleMe = createMultiplier(2)
let tripleMe = createMultiplier(3)
let quadrupleMe = createMultiplier(4)


console.log(doubleMe(20))
console.log(tripleMe(20))
console.log(quadrupleMe(20))


// Higher-order functions that are part of the language itself

let myColors = ['red', 'orange', 'yellow']

myColors.forEach(saySomethingNice)

function saySomethingNice(color) {
    console.log("The color " + color + " is a great color.")
}

// Another higher-order functions
myColors.map()
myColors.filter()