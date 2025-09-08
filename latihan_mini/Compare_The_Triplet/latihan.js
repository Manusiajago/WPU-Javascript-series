const egal = [17, 28, 30];
const adel = [99, 16, 8]


function compareTriplets(e, a) {
    let egalScore = 0;
    let adelScore = 0;

    for (let i = 0; i < 3; i++) {
        if (e[i] < a[i]) {
            adelScore++
        } else if (e[i] == a[i]) {
            console.log("Tidak mendapat point")
        } else {
            egalScore++
        }
    }

    return [egalScore, adelScore]
}

console.log(compareTriplets(egal, adel));