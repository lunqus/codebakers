function sum(n) {
    let sum3 = 0
    let sum5 = 0

    for(i = 0; i < n; i++) {
        var total3 = 0
        var total5 = 0

        if (i % 3 == 0) {
            sum3 += i
        } else if (i % 5 == 0) {
            sum5 += i
        }
    }
    return sum3 + sum5
}

console.log(sum(1000))