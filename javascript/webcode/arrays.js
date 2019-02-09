// We have cars in a wide array of colors
// Array is a collection made up of multiple items

let myFavoriteNumber = 7
let myFavoriteNumbers = [9, 2, 8, 3, 7, 4]
let myWords = ["red", "orange", "yellow"]
let myPets = [{name: "Meowsalot", species: "cat"}, {name: "Barksalot", species: "dog"}]

myWords.push("green") // Add an item "green" onto the end of an existing array (collection)
console.log(myWords)

myWords.splice(1,1) // Let us remove a particular item from an array (index of removing item, how many items form index)
console.log(myWords)

console.log(myFavoriteNumbers[2])

console.log(myPets[1].name)
console.log(myPets[1].species)



let myName = "Brad"
console.log(myName.toUpperCase() + " #" + myFavoriteNumber) // JavaScript treat string of text as if it was an object

let myNumber = 7.89
console.log(myNumber.toFixed()) // Same like with strings