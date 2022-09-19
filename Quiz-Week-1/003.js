function tandaiA(str) {
  str = str.toLowerCase();
  str = [...str];
  str.forEach((string, index) => {
    if (string == "a") {
      str[index] = "x";
    }
  });
  return str.reduce((arr, curr) => arr + curr);
}
console.log(tandaiA("abrakadabra"));
console.log(tandaiA("garuda"));
console.log(tandaiA("kucing"));
