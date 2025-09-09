// staircase hackerRank

function staircase(n) {
    // melakukan perulangan
    for (let i = 1; i <= n; i++) {
        // membuat spasi dan tanda pagar
        const spasi = " ".repeat(n - i);

        // membuat tanda pagar
        const tandaPagar = '#'.repeat(i);

        //log hasil
        console.log(spasi + tandaPagar);
    }
}

staircase(4)