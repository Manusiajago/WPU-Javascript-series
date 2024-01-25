// function scopeTest() {
//     if (true) {
//         var a = 5;
//         var b = 10;
//         var c = 15;
//         console.log(a);
//         console.log(b);
//         console.log(c);
//     }


// }

// scopeTest()


// let x = 2;

// function MultiplyByX(y) {
//     var x = 10;
//     var y;
//     return x * y;
// }

// console.log(MultiplyByX(3));
// x = 4;
// console.log(x);

function testScope() {
    var a = "test";
    return a;
}


console.log(testScope());
