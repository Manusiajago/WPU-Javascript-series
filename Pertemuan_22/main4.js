// penggabungan array menggunakan concat()

const arrayAku = ['apel' , 'pisang' , 'semangka']
const arrayKamu = ['jeruk' , 'mangga' , 'anggur']

const mergeArray = arrayAku.concat(arrayKamu);

//menggunakan map()
mergeArray.map(( values, index) => {
    console.log(`${values} : ${index}`)
})

// menggunakan function
function loopingArray(arr) {
    for (let x in arr) {
    console.log(arr[x])
}
}

loopingArray(mergeArray);

