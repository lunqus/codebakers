let easyArr = [2,6,8,9,"char", "int"]

let nArr = []
let sArr = []

for (let i = 0; i < easyArr.length; i++) {

    if (easyArr[i] * 1  === easyArr[i]) {
        nArr.push(easyArr[i])

    } else {
        sArr.push(easyArr[i])
    }
}

console.log(nArr)
console.log(sArr)