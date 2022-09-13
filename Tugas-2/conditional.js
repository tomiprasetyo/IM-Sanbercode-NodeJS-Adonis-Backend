/*
    Tugas Conditional
    if-else
*/

var nama = 'Jenita';
var peran = 'Guard';

if (typeof nama === 'string' && nama.length === 0) {
    console.log("Nama harus diisi!!!")
} if (peran === 'Penyihir') {
    console.log("Selamat datang di Dunia Werewolf, ", nama)
    console.log("Halo", peran, nama, "kamu dapat melihat siapa yang menjadi werewolf!")
} else if (peran === 'Guard') {
    console.log("Selamat datang di Dunia Werewolf, ", nama)
    console.log("Halo", peran, nama, "kamu akan membantu melindungi temanmu dari serangan werewolf.")
} else if (peran === 'Werewolf') {
    console.log("Selamat datang di dunia Dunia Werewolf, ", nama);
    console.log("Halo Werewolf", nama, "Kamu akan memakan mangsa setiap malam!")
} else {
    console.log("Halo", nama, "Pilih peranmu untuk memulai game!")
}

/*
    Switch Case
*/

var tanggal = 23
var bulan = 4
var tahun = 1996

switch(tanggal) {
    case 1: 
        tanggal = 1
        break;
    case 2:
        tanggal = 2
        break;
    case 3:
        tanggal = 3
        break;
    case 4:
        tanggal = 4
        break;
    case 5:
        tanggal = 5
        break;
    case 6:
        tanggal = 6
        break;
    case 7:
        tanggal = 7
        break;
    case 8:
        tanggal = 8
        break;
    case 9:
        tanggal = 9
        break;
    case 10:
        tanggal = 10
        break;
    case 11:
        tanggal = 11
        break;
    case 12:
        tanggal = 12
        break;
    case 13:
        tanggal = 13
        break;
    case 14:
        tanggal = 14
        break;
    case 15: 
        tanggal = 15
        break;
    case 16:
        tanggal = 16
        break;
    case 17:
        tanggal = 17
        break;
    case 18:
        tanggal = 18
        break;
    case 19:
        tanggal = 19
        break;
    case 20:
        tanggal = 20
        break;
    case 21:
        tanggal = 21
        break;
    case 22:
        tanggal = 22
        break;
    case 9:
        tanggal = 9
        break;
    case 10:
        tanggal = 10
        break;
    case 11:
        tanggal = 11
    case 12:
        tanggal = 12
    case 13:
        tanggal = 13
    case 14:
        tanggal = 14

    case 23:
        tanggal = 23
        break;
    
}

switch(bulan) {
    case 1: 
        bulan = "Januari"
        break;
    case 2: 
        bulan = "February"
        break;
    
    case 3: 
        bulan = "Maret"
        break;
    
    case 4: 
        bulan = "April"
        break;
    
    case 5: 
        bulan = "Mei"
        break;
    
    case 6: 
        bulan = "Juni"
        break;
    
    case 7: 
        bulan = "Juli"
        break;
    
    case 8: 
        bulan = "Agustus"
        break;
    
    case 9: 
        bulan = "September"
        break;
    
    case 10: 
        bulan = "October"
        break;
    
    case 11: 
        bulan = "November"
        break;
    
    default: 
        bulan = "Desember"
        break;
}

if (tahun == 1996) {
    tahun = tahun
}



console.log(tanggal, bulan, tahun)