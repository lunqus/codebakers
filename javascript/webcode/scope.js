// Scope is the biggest source of confusion regarding variables

//      let uses block scope
//      var uses function scope


let myName = "Brad" // Global scope

function amazingFunction() { // Scope is a one-way street (one level up)

    let myName = "Brad junior" // Outer scope

    if (2 + 2 == 4) {

        let myName = "Brad the third" // Current local scope
        console.log("inside the if statement" , myName)

    }

    console.log("inside our function" , myName)

}

amazingFunction()
console.log("in the global scope" , myName)