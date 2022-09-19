function kelompokAngka(arr) {
  let hasil = [[], [], []];

  arr.forEach((number) => {
    if (number % 3 == 0) {
      hasil[2].push(number);
    } else if (number % 2 != 0) {
      hasil[0].push(number);
    } else {
      hasil[1].push(number);
    }
  });
  return hasil;
}

console.log(kelompokAngka([1, 2, 3, 4, 5, 6, 7]));

console.log(kelompokAngka([13, 27, 11, 15]));

console.log(kelompokAngka([]));
