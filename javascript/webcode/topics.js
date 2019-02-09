
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