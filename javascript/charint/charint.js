let myArr = [2,6,8,9,"char", "int"]

let numArr = []
let charArr = []

for (let key of myArr) {

    if (typeof key  == "number") {
        numArr.push(key)
    } else if (typeof key  == "string") {
        charArr.push(key)
    }
}

console.log(numArr)
console.log(charArr)