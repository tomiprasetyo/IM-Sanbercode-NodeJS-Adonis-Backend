function makeLadder(sisi) {
    for (var i = 1; i <= sisi; i++) {
        var lebar = ''

        for (var j = 1; j <= i; j++) {
            lebar = lebar + "#"
        }

        console.log(lebar)
    }
}

makeLadder(7)