
    for (let i = 0; i < 100; i++) {
        if (i % 2 == 0 && i % 3 == 0) {
            console.log(i + " Labas, Krabas");
        } else if (i % 2 == 0 ) {
            console.log(i + " Labas");
        } else if (i % 3 == 0 ) {
            console.log(i + " Krabas");
        } else {
            console.log(i + " " + i % 2 + " " + i % 3);
        }
    }

