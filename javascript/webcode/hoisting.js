
cool() // Function hoisting

function cool() {
    console.log("This is super cool!")
}

// Not all functions get hoisted, only with keyword 'function' and if give it a name


let mool = function () {
    console.log("Hey")
}

mool()