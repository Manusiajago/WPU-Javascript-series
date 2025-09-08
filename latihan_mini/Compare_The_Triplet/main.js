// compare the triplet

const alice = [5, 6, 7]
const bob = [3, 6, 10]


function compareTriplets(a, b) {
    let aliceScore = 0
    let bobScore = 0

    for (let i = 0; i < 3; i++) {
        if (a[i] > b[i]) {
            aliceScore++
        } else if (a[i] == b[i]) {
            console.log("Tidak mendapat point")
        } else {
            bobScore++
        }
    }

    return [aliceScore, bobScore]
}

console.log(compareTriplets(alice, bob))