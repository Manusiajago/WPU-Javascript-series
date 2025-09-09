// grading_student hackkerRank

// Konsep soal (ringkas & jelas)

// Nilai < 38 → tidak dibulatkan (tetap).

// Nilai ≥ 38 → lihat kelipatan 5 terdekat ke atas.
// Jika selisihnya < 3 (alias 1 atau 2) → bulatkan ke atas, kalau tidak → tetap.

// Contoh:

// 73 → ke 75 (selisih 2) → 75

// 67 → ke 70 (selisih 3) → 67

// 38 → ke 40 (selisih 2) → 40

// 33 → < 38 → 33


function gradingStudents(grades) {
    // Write your code here
    //membuat penampung hasil
    let result = []
    
    //loop
    for (let i = 0; i < grades.length; i++) {
        //buat penampung grade
        const g = grades[i]
        
        // validasi yg tidak dibulatkan
        if (g < 38) {
            result.push(g);
            continue;
        }
        
        // validasi yg dibulatkan kelipatan 5 keatas
        const nextMultiple = Math.ceil(g / 5) * 5;
        const diff = nextMultiple - g;
        
        if (diff < 3) {
            result.push(nextMultiple)
        } else {
            result.push(g)
        }
    }
    
    return result;
}


console.log(gradingStudents([73, 67, 38, 33]))