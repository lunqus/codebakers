for (var i = 1, l = 1; i < 8; ++i, l += (i > 4) ? -1 : 1) {
    console.log(Array(l+1).join('*#->').split('').join(' '));
}
