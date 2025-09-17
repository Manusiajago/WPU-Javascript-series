// contoh async await javaScript

function tambah(a, b) {
    return new Promise((resolve, reject) => {
        // kasih delay
        console.log(`Memulai...`)
        setTimeout(() => {
            if (typeof a !== 'number' || typeof b !== 'number') {
                reject(`Parameter harus angka!`)
            } else {
                resolve(a + b)
            }
        }, 3000)
    })
}

function perkalian(x, y) {
    return new Promise((resolve, reject) => {
        // kasih delay 2 dtk
        console.log(`Memulai...`)
        setTimeout(() => {
            if (typeof x !== 'number' || typeof y !== 'number') {
                reject(`Input harus angka...`)
            } else {
                resolve(x * y)
            }
        }, 2000)
    })
}

// get user
function getUser() {
    let succes = 200;
    // promise()
    return new Promise((resolve, reject) => {
        //kasih delay 3dtk
        console.log(`Get user...`)
        setTimeout(() => {
            if (succes === 200) {
                resolve(
                    { id: 1, nama: 'Egal Assegaf' }
                )
            } else {
                reject(`Gagal mendapatkan user..`)
            }
        }, 3000)
    })
}

function getPosts(userId) {
    return new Promise((resolve, reject) => {
        //kasih delay 2dtk
        console.log(`Get posts...`)
        setTimeout(() => {
            resolve([
                { id: 101, judul: 'Belajar JS Async Await', userId },
                { id: 102, judul: 'Belajar React.js', userId }
            ])
        }, 1500)
    })
}


// versi async await
async function showData() {
    try {
        console.log(`Get data...`);
        let user = await getUser();
        console.log("User", user)

        //ambil postingan user
        let posts = await getPosts(user.id);
        console.log("Posts", posts)
    } catch (err) {
        console.log(err)
    }
}


async function prosesTambah() {
    try {
        console.log(`Lagi di proses...`)
        let hasil = await tambah(10, 10)
        console.log("Hasil, hasil")
    } catch (err) {
        console.log("Error", err)
    }
}

async function prosesPerkalian() {
    try {
        console.log(`Lagi di proses...`);
        let hasil = await perkalian(5, 5);
        console.log("Hasil: ", hasil)
    } catch (err) {
        console.log(err);
    }
}

showData()
prosesTambah()
prosesPerkalian()