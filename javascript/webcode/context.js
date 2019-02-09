// Context is the biggest source of confusion regarding objects

let john = {
    firstName: "John",
    lastName: "Doe",
    driveCar() {

        function imAFunctionNotAMethod() {
            console.log(this)
        }
        // imAFunctionNotAMethod()

        // The 'this' keyword points towards the object that is executing the current function

        console.log(this.firstName + " " + this.lastName + " is driving a car.")
    }
}

john.driveCar()

function breathe() {
    console.log(this.firstName + " " + this.lastName + " just inhalted and exhalted.")
}

breathe.call(john)