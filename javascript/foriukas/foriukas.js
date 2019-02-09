for (var i = 1, l = 1; i < 20; ++i, l += (i > 10) ? -1 : 1) {
    
    if (i % 2 == 0) {
        console.log(Array(l+1).join('*').split('').join(' '));
        } else if (i % 3 == 0) {
            console.log(Array(l+1).join('@').split('').join(' '));
        } else if (i % 3 !== 0 && i % 3) {
             console.log(Array(l+1).join('0').split('').join(' '));
        } else {
            console.log("");
        }

}
