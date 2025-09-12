// breaking the records hackerRank
let scores = [10, 5, 20, 20, 4, 5, 2, 25, 1]


function breakingTheRecords(scores) {
    // score pertama patokan awal
    let highScore = scores[0];
    let lowScore = scores[0];
    let highCount = 0;
    let lowCount = 0;

    for (let i = 0; i <= scores.length; i++) {
        if (scores[i] > highScore) {
            highScore = scores[i];
            highCount++;
        } else if (scores[i] < lowScore) {
            lowScore = scores[i];
            lowCount++;
        }
    }

    return [highCount, lowCount];
}


// log 
console.log(breakingTheRecords(scores));