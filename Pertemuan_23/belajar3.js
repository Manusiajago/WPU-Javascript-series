const myNumbers = [4, 1, -20, -7, 5, 9, -6];

const showNumbers = hapusNegative(myNumbers, ((x) => {
    return x >= 0;
}))

function hapusNegative(myNumbers, myCallback) {
    const myArray = [];

    for (const x of myNumbers) {
        if (myCallback(x)) {
            myArray.push(x)
        }
    }

    return myArray;
}

console.log(showNumbers);