function balikKata(str) {
  var newString = "";
  for (var i = str.length - 1; i >= 0; i--) {
    newString = newString + str[i];
  }

  return newString;
}

console.log(balikKata("Sanbercoe"));
console.log(balikKata("racecar"));
console.log(balikKata("kasur rusak"));
console.log(balikKata("haji ijah"));
console.log(balikKata("I am Sanbers"));
