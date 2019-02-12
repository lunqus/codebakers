let myArr = [2,6,8,9,"char", "int"]

let numArr = []
let charArr = []

for (let i = 0; i < myArr.length; i++) {

    if (typeof myArr[i]  == "number") {
        numArr.push(myArr[i])

    } else if (typeof myArr[i] == "string") {
        charArr.push(myArr[i])
    }
}

console.log(numArr)
console.log(charArr)