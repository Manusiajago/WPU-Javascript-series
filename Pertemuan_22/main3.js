// contoh shallow copy pada array
const buahBuahan = ['apel' , 'pisang' ,'semangka' ,'jeruk' , 'mangga' , 'anggur' ];
const newBuahBuahan = buahBuahan.slice();

//contoh ketika banyak data di dalam array
const myArr = ['Egal Assegaf' , 24 , {
    status : 'single',
    alamat: function() {
        console.log('Jalan Jendral Sudirman No. 123');
    }

} , ['Coding' , 'renang']]

newBuahBuahan[0] = 'pear'
newBuahBuahan[1] = 'kiwi'
newBuahBuahan[2] = 'melon'

console.log({newBuahBuahan})
console.log({buahBuahan})

// ambil nama
console.log(myArr[0])

// ambil umur
console.log(myArr[1])

//ambil object
console.log(myArr[2])

//ambil hobi yg renang
console.log(myArr[3][1]);

//ambil / panggil method alamat
myArr[2].alamat()


