var line = 5;
var asterix = '* ';
var inside = '  ';

for (var i = 1; i <= line; i++) {
    if (i === 1 || i === line) {
        printline = Array(line + 1).join(asterix);
    } else {
        printline = asterix + Array(line - 1).join(inside) + asterix;
    }
    console.log(printline);
}