function makeRectangle(panjang, lebar) {
    for (var i = 1; i <= lebar; i++) {
        pagar = ""
        for (var j = 1; j <= panjang; j++) {
            pagar = pagar + "#"
        }
        console.log(pagar)
    }
}

console.log(makeRectangle(8,4))