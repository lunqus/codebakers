// Mutating means changing or modifying

let pets = [
    {name: "Meowsalot", species: "cat", age: 2},
    {name: "Barksalot", species: "dog", age: 3},
    {name: "Purrsalot", species: "cat", age: 8}
]
// Mutate (change or modify) original array
console.log(pets.push({name: "Puppster", species: "dog", age: 1})) // Push method also returned a value

console.log(pets)

// Map method

let ourTest = pets.map(nameOnly) //Higher-order function

function nameOnly(x) {
    return x.name
}

console.log(ourTest)

// Filter method

let dogs = pets.filter(onlyDogs) //Higher-order function

function onlyDogs(x) {
    return x.species == "dog"
}

function onlyBabes(x) {
    return x.age < 3
}

let babyDogNames = pets.filter(onlyDogs).filter(onlyBabes).map(nameOnly)

console.log(dogs)
console.log(babyDogNames)