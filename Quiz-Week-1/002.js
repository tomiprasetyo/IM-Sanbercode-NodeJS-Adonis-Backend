function hitungVokal(str) {
  str = str.toLowerCase();
  var vocal = ["a", "i", "u", "e", "o"];
  var jumlah = 0;

  for (var i = 0; i < str.length; i++) {
    if (vocal.includes(str[i])) {
      jumlah++;
    }
  }

  return jumlah;
}

console.log(hitungVokal("Adonis"));
console.log(hitungVokal("Error"));
console.log(hitungVokal("Eureka"));
console.log(hitungVokal("Rsch"));
