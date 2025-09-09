//time conversion hackerRank
//2. Aturan Dasar Konversi

// Jam 12 AM → jadi 00 (tengah malam).

// Jam 12 PM → tetap 12 (siang).

// Untuk jam lain:

// Jika ada AM → biarkan jam apa adanya (kecuali jam 12, harus jadi 00).

// Jika ada PM → tambahkan 12 ke jam (kecuali jam 12, tetap 12).

// contoh 07:05:45PM

function timeConversion(s) {
    // ambil AM / PM
    let period = s.slice(-2);
    //ambil jam
    let hour = parseInt(s.slice(0, 2));
    //ambil menit dan detik
    let minutesSeconds = s.slice(2, -2);

    if (period === "AM") {
        if (hour === 12) hour = 0
    } else {
        if (hour !== 12) hour += 12
    }


    // format jam agar selalu 2 digit
    let hhStr = hour.toString().padStart(2, '0');

    return hhStr + minutesSeconds;

}




console.log(timeConversion("07:05:45PM")); 