// subbarray division hackerRank

function birthday(s, d, m) {
    let count = 0;

    // loop
    for (let i = 0; i <= s.length - m; i++) {
        // ambil potongan subbarray sepanjang m
        let sub = s.slice(i, i + m);

        //hitung jumlahnya
        let sum = sub.reduce((total, value) => {
            return total + value
        }, 0)

        // jumlah subbarray harus sama dengan d
        if (sum === d) {
            count++
        }

    }

    return count++
}


console.log(birthday([1, 2, 1, 3, 2], 3, 2));