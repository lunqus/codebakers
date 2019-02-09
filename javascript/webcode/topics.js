
// Anonymous functions

document.addEventListener("click", function () {
    alert("Thank you for clicking")
})

// Arrow function
// (special type of functions that uses alternate syntax or cleaner and more minimalistic syntax)

document.addEventListener("click", () => alert("Thank you for clicking"))

let myNumbers = [10, 500, 2000]

let doubledNumbers = myNumbers.map(x => x * 2)

console.log(doubledNumbers)

// --------

let john = {
    firstName: "John",
    lastName: "Doe",
    driveCar() {

        let imAFunctionNotAMethod = () => console.log(this) // Diff from context.js
        imAFunctionNotAMethod()

        // The 'this' keyword points towards the object that is executing the current function

        console.log(this.firstName + " " + this.lastName + " is driving a car.")
    }
}

john.driveCar()