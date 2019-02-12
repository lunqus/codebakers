var a,b,rez

a = 0
b = 1
rez = b
for(var i = 1; i < 11; i++) {

    console.log(rez)
    rez = a + b
    a = b
    b = rez
}