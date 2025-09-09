// birthday cake candles

function birthdaycakescandles(candles) {
    // mencari tinggi maksimal
    const maxHeight = Math.max(...candles);

    // menghitung jumlah lilin dengan tinggi maksimal
    const count = candles.filter(countHeight).length;
    return count;

    //membuat fungsu mengecek tinggi lilin
    function countHeight(candle) {
        return candle === maxHeight;
    }
}





// array
const arr = [3, 2, 1, 3];
console.log(birthdaycakescandles(arr));