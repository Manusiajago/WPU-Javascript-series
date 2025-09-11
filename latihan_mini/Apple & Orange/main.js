// apple & orange hackerRank

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let appleCount = 0;
    let orangeCount = 0;

    //loop
    for (let i = 0; i < apples.length; i++) {
        let posisi = a + apples[i];
        if (posisi >= s && posisi <= t) {
            appleCount++;
        }
    }

    // loop jeruk
    for (let j = 0; j < oranges.length; j++) {
        let posisi = b + oranges[j];
        if (posisi >= s && posisi <= t) {
            orangeCount++;
        }
    }


    // log
    console.log(appleCount);
    console.log(orangeCount);

}







let s = 7, t = 11;
let a = 5, b = 15;
let apples = [-2, 2, 1];
let oranges = [5, -6];

countApplesAndOranges(s, t, a, b, apples, oranges);